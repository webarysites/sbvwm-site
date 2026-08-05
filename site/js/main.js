/* SBV mini-site — reveal-on-enter, plus the header's scrolled state.
   Progressive enhancement contract: CSS hides [data-reveal] ONLY under html.js,
   so with JS disabled (or blocked by a proxy) the page renders fully static.
   No GSAP/Lenis by design — see docs/design-direction.md (motion restraint). */

(function () {
  "use strict";

  /* Confirm the script is actually running — cancels the CSS reveal-safety
     fallback that force-shows content if this file never executes. */
  document.documentElement.classList.add("js-ok");

  var hasIO = "IntersectionObserver" in window;

  /* ---- header: separate from the page once scrolled off the top ----
     A sentinel plus an observer rather than a scroll listener, so there is no
     work on every frame. Runs before the reduced-motion branch below on
     purpose: this is a state change that tells you where you are on the page,
     not decoration, so it should hold even when motion is turned down. */
  var hd = document.querySelector(".hd");
  var sentinel = document.querySelector(".hd-sentinel");
  if (hd && sentinel && hasIO) {
    new IntersectionObserver(
      function (entries) {
        hd.classList.toggle("hd--stuck", !entries[0].isIntersecting);
      },
      { threshold: 0 }
    ).observe(sentinel);
  }

  /* ---- reveal on enter ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll("[data-reveal]");

  if (reduce || !hasIO) {
    for (var i = 0; i < els.length; i++) els[i].classList.add("in");
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add("in");
          /* Unobserve so a reveal fires once and never replays on scroll-back.
             Sequenced groups depend on this — see "sequenced reveals" in the
             stylesheet. */
          io.unobserve(entries[j].target);
        }
      }
    },
    /* Fire when the element is genuinely ON screen, not as it clips the bottom
       edge. The old -40px fired with ~65px of a rail item showing — its top at
       93% down the viewport — so a 690ms sequence finished while the content was
       still in peripheral vision and was over before you looked at it. Shrinking
       the root by a quarter of the viewport moves the trigger to roughly 70%
       down, so the motion happens where the eye is. Percentage rather than px so
       it scales with the viewport instead of firing at the edge on tall screens. */
    { threshold: 0.15, rootMargin: "0px 0px -25% 0px" }
  );

  for (var k = 0; k < els.length; k++) io.observe(els[k]);
})();
