/* SBV mini-site — reveal-on-enter only.
   Progressive enhancement contract: CSS hides [data-reveal] ONLY under html.js,
   so with JS disabled (or blocked by a proxy) the page renders fully static.
   No GSAP/Lenis by design — see docs/design-direction.md (motion restraint). */

(function () {
  "use strict";

  /* Confirm the script is actually running — cancels the CSS reveal-safety
     fallback that force-shows content if this file never executes. */
  document.documentElement.classList.add("js-ok");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll("[data-reveal]");

  if (reduce || !("IntersectionObserver" in window)) {
    for (var i = 0; i < els.length; i++) els[i].classList.add("in");
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add("in");
          io.unobserve(entries[j].target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  for (var k = 0; k < els.length; k++) io.observe(els[k]);
})();
