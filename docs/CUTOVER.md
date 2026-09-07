# sbvwm.com cutover — state and the one real blocker

**Status: the new site is LIVE and correct over HTTP. HTTPS is still not up.**

Progress since first writing this: `CNAME www` was repointed to `webarysites.github.io.` and
that unstuck GitHub - the Pages certificate state moved from `none` to `new`. But it has now
sat at `new` ("The certificate request process will begin shortly") for well over an hour
without issuing, which is far past normal. The remaining suspect is unchanged: the stale
Cloudflare ACME records still attached to the domain by Managed WordPress. `A @` also still
has only one of the four GitHub addresses.
Anyone reaching `http://www.sbvwm.com/` gets the new purple site, served by GitHub Pages.
Anyone reaching it over **https** gets a TLS failure, because GitHub has not been able to
issue a certificate. Bookmarks, existing links and any browser with HSTS cached from the old
site will hit https and fail.

## Why the certificate will not issue

Not propagation, and not a GitHub problem. `_acme-challenge` is delegated to Cloudflare:

```
_acme-challenge.sbvwm.com  CNAME  sbvwm.com.5b6e1b0351bd6062.dcv.cloudflare.com
```

That record — plus `TXT _cf-custom-hostname.www` and `TXT _acme-challenge.www` — was created
by **GoDaddy Managed WordPress**, which fronts the old site with Cloudflare for SaaS and uses
that delegation to issue *its* certificate. Let's Encrypt validation for this domain therefore
resolves to Cloudflare, which will not answer GitHub's challenge, so GitHub's request fails
silently and `https_certificate.state` stays `none` indefinitely.

GoDaddy marks all three records "applied by a product or service connected to your domain" and
**refuses to edit or delete them** while Managed WordPress is still connected to sbvwm.com.

**So the blocker is not DNS. It is that the domain is still attached to the Managed WordPress
product.** Detach it and the locked records are released; then, and only then, can GitHub issue.

## Current DNS (sbvwm.com)

| Record | Value | State |
|---|---|---|
| `A @` | 185.199.108.153 | changed — GitHub Pages |
| `CNAME www` | `webarysites.github.io.` | **done** — propagated, moved cert to `new` |
| `A @` ×3 | .109 / .110 / .111 | **not added** — blocked on 2FA |
| MX | now `smtp.google.com` | **changed by someone else, not by this work** — was Microsoft 365 on 2026-08-25, is Google as of 2026-08-31. Flagging because it means mail moved independently; nothing here touched MX. |

Every save in the GoDaddy DNS editor triggers its own SMS code to the owner's phone. That is
what stalled this mid-sequence — plan for someone to be on the phone for the whole run.

## To finish (in this order)

1. Disconnect sbvwm.com from Managed WordPress — **this is the remaining step** (`host.godaddy.com` → Managed WordPress →
   the www.sbvwm.com site → remove the domain, or cancel the Starter plan). Confirm the three
   locked records disappear from DNS.
3. Add `A @` 185.199.109.153, 185.199.110.153, 185.199.111.153
4. `gh api -X PUT repos/webarysites/sbvwm-site/pages -f cname='www.sbvwm.com'`
5. Wait for `.https_certificate.state` to reach `issued`, then set `https_enforced=true`.

## To roll back instead

Set `A @` back to `72.167.242.33`. TTL is 600s so the old WordPress site returns within about
ten minutes, fully intact — nothing about it was deleted. Then
`gh variable delete PROD_HOST` and redeploy to restore the noindexed preview.

## Deploy mode

`PROD_HOST` repo variable drives it: unset = preview (noindex, no CNAME), set = production at
that host. Currently set to `www.sbvwm.com`.
