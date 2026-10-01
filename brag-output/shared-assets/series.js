/* Parkmed series runtime: builds the single paused GSAP timeline from the
   static tween plan the generator embeds in each composition (window.__PLAN). */
(function () {
  var P = window.__PLAN;
  var tl = gsap.timeline({ paused: true });
  var EASES = { o: "power3.out", o2: "power2.out", io: "power2.inOut", io3: "power3.inOut", e: "expo.out", b: "back.out(1.6)", s: "sine.inOut", l: "none", i: "power2.in" };
  function ez(v) { if (v && typeof v.ease === "string" && EASES[v.ease]) v.ease = EASES[v.ease]; return v; }
  P.tweens.forEach(function (w) {
    var kind = w[0], sel = w[1], t = w[2];
    if (kind === "ft") tl.fromTo(sel, w[4], ez(Object.assign({ duration: w[3] }, w[5])), t);
    else if (kind === "to") tl.to(sel, ez(Object.assign({ duration: w[3] }, w[4])), t);
    else if (kind === "set") tl.set(sel, w[3], t);
  });
  // counters: [selector, from, to, t, dur, decimals, suffix]
  (P.counters || []).forEach(function (c) {
    var el = document.querySelector(c[0]); if (!el) return;
    var o = { v: c[1] };
    tl.fromTo(o, { v: c[1] }, { v: c[2], duration: c[4], ease: "power2.out",
      onUpdate: function () { el.textContent = o.v.toFixed(c[5] || 0) + (c[6] || ""); } }, c[3]);
  });
  // subtle audio-reactive glow: precomputed bed energy, sampled every frame
  if (P.energy && P.energy.length) {
    var g = document.querySelector("#bg-g1"), g2 = document.querySelector("#bg-g2");
    var n = Math.min(P.energy.length, Math.floor(P.duration * 30));
    for (var f = 0; f < n; f++) {
      tl.call((function (e) { return function () {
        if (g) g.style.opacity = (0.72 + 0.28 * e).toFixed(3);
        if (g2) g2.style.opacity = (0.62 + 0.38 * e).toFixed(3);
      }; })(P.energy[f]), [], f / 30);
    }
  }
  window.__timelines[P.id] = tl;
})();
