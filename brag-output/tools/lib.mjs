// Parkmed series composition generator — shared library.
// Emits static HTML (so lint/check see every clip) plus a tween plan that
// shared-assets/series.js turns into the single paused GSAP timeline.
import fs from "node:fs";
import path from "node:path";

export const W = 1920, H = 1080;
const RUNTIME = fs.readFileSync(path.resolve(path.dirname(new URL(import.meta.url).pathname), "../shared-assets/series.js"), "utf8");
export const CHAPTERS = ["CONNECT", "PROTECT", "OPERATE", "CONTROL", "MOBILIZE", "OPTIMIZE"];

// Display dimensions (as inspected) of each masked screenshot — highlight boxes
// and camera targets are authored in these coordinates.
export const SHOTS = {
  s01: [2000, 1510], s02: [2000, 1504], s03: [2000, 1654], s04: [2000, 1367],
  s05: [2000, 1557], s06: [1474, 1536], s07: [2000, 1300], s08: [2000, 1137],
  s09: [2000, 1553], s10: [2000, 1520], s11: [2000, 1606], s12: [690, 1472],
  s13: [672, 1446], s14: [2000, 1132], s15: [2000, 1580], s16: [652, 1454],
  s17: [1664, 1666],
};

const SFXLEN = { "bong_001.ogg": 0.12, "card-slide-1.ogg": 0.6, "click2.ogg": 0.05, "click_003.ogg": 0.01, "drop_001.ogg": 0.1, "drop_002.ogg": 0.19, "error_006.ogg": 0.5, "impactBell_heavy_000.ogg": 1.48, "impactBell_heavy_003.ogg": 0.65, "impactSoft_medium_001.ogg": 0.18, "impactSoft_medium_004.ogg": 0.14, "rollover2.ogg": 0.05 };
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export { esc };
const r2 = (n) => Math.round(n * 100) / 100;

export class Video {
  constructor({ id, num, chapter, title, endTitle, endTag, endSub, overlap = 0.5 }) {
    Object.assign(this, { id, num, chapter, title, endTitle, endTag, endSub, overlap });
    this.scenes = []; this.tweens = []; this.counters = []; this.sfx = []; this.t = 0; this.n = 0;
  }
  // add a scene; fn(ctx) returns inner HTML. Scenes overlap by `overlap` for depth crossfades.
  scene(dur, fn, { fadeIn = true, fadeOut = true, name = "" } = {}) {
    const start = this.n === 0 ? 0 : r2(this.t - this.overlap);
    const sid = `s${++this.n}`;
    const ctx = makeCtx(this, sid, start, dur);
    const inner = fn(ctx);
    this.scenes.push(`<section id="${sid}" class="clip scene" data-start="${start}" data-duration="${dur}" data-track-index="${1 + (this.n % 2)}" data-name="${esc(name)}"><div class="sc" id="${sid}-sc">${inner}</div></section>`);
    if (fadeIn) this.tweens.push(["ft", `#${sid}-sc`, start, 0.7, { opacity: 0, scale: 1.035, filter: "blur(10px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", ease: "o" }]);
    if (fadeOut) this.tweens.push(["to", `#${sid}-sc`, r2(start + dur - 0.55), 0.55, { opacity: 0, scale: 0.975, filter: "blur(8px)", ease: "i" }]);
    this.t = r2(start + dur);
    return { sid, start, dur };
  }
  get duration() { return r2(this.t); }

  html(energy) {
    const D = this.duration;
    const plan = { id: this.id, duration: D, tweens: this.tweens, counters: this.counters, energy: energy.slice(0, Math.ceil(D * 30)) };
    const hudOff = r2(D - 4.6);
    // persistent background + HUD
    this.tweens.push(["to", "#bg-g1", 0, D, { x: 260, y: 140, ease: "s" }]);
    this.tweens.push(["to", "#bg-g2", 0, D, { x: -220, y: -90, ease: "s" }]);
    this.tweens.push(["to", "#bg-g3", 0, D, { x: -180, y: 60, scale: 1.25, ease: "s" }]);
    this.tweens.push(["to", "#bg-grid", 0, D, { backgroundPosition: `0px ${Math.round(D * 22)}px`, ease: "l" }]);
    this.tweens.push(["ft", "#hud", 2.5, 0.6, { opacity: 0 }, { opacity: 1, ease: "o" }]);
    this.tweens.push(["to", "#hud", hudOff, 0.5, { opacity: 0, ease: "i" }]);
    this.tweens.push(["ft", "#hud-bar", 2.5, r2(hudOff - 2.5), { scaleX: 0 }, { scaleX: 1, ease: "l" }]);
    const audio = [
      `<audio id="bed" src="assets/music/bed.mp3" data-start="0" data-duration="${D}" data-track-index="10" data-volume="0.32"></audio>`,
      ...this.sfx.map((s, i) => `<audio id="fx${i + 1}" src="assets/sfx/${s.f}" data-start="${s.t}" data-duration="${SFXLEN[s.f] ?? 1}" data-track-index="${11 + (i % 6)}" data-volume="${s.v}"></audio>`),
    ].join("\n");
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=1920, height=1080" />
<title>Parkmed — ${esc(this.title)}</title>
<link rel="stylesheet" href="assets/series.css" />
<script src="assets/gsap.min.js"></script>
</head>
<body>
<div id="root" data-composition-id="${this.id}" data-start="0" data-width="1920" data-height="1080" data-duration="${D}" data-fps="30">
<section id="bg" class="clip" data-start="0" data-duration="${D}" data-track-index="0">
  <div class="bgl">
    <div class="glow g1" id="bg-g1"></div><div class="glow g2" id="bg-g2"></div><div class="glow g3" id="bg-g3"></div>
    <div class="dots"></div><div class="grid" id="bg-grid"></div><div class="vig"></div>
  </div>
  <div class="hud" id="hud"><span><i class="tick"></i>Parkmed · Operations Excellence</span><span>${String(this.num).padStart(2, "0")} / 06 · ${CHAPTERS[this.num - 1]}</span></div>
  <div class="hud-b"><i id="hud-bar"></i></div>
</section>
${this.scenes.join("\n")}
${audio}
</div>
<script>window.__PLAN = ${JSON.stringify(plan)};</script>
<script>
${RUNTIME}</script>
</body>
</html>
`;
  }
}

function makeCtx(v, sid, start, dur) {
  const T = (t) => r2(start + t);
  const ctx = {
    sid, start, dur,
    id: (n) => `${sid}-${n}`,
    ft: (sel, t, d, from, to) => v.tweens.push(["ft", sel, T(t), d, from, to]),
    to: (sel, t, d, to) => v.tweens.push(["to", sel, T(t), d, to]),
    set: (sel, t, vars) => v.tweens.push(["set", sel, T(t), vars]),
    sfx: (t, f, vol = 0.6, d = 1.2) => v.sfx.push({ t: T(t), f, v: vol, d }),
    count: (sel, from, to, t, d, dec = 0, suf = "") => v.counters.push([sel, from, to, T(t), d, dec, suf]),
  };
  return ctx;
}

// ---------- text helpers ----------
// lines: array of strings (may contain <em>…</em> for accent). Returns html; animates rise.
export function lines(ctx, key, arr, { cls = "h1", t = 0.3, stagger = 0.12, d = 0.75, style = "" } = {}) {
  const id = ctx.id(key);
  const html = `<div id="${id}" class="${cls}" style="${style}">${arr.map((l) => `<span class="line"><span class="${id}-l">${l.replace(/<em>/g, '<span class="em">').replace(/<\/em>/g, "</span>").replace(/<g>/g, '<span class="emg">').replace(/<\/g>/g, "</span>")}</span></span>`).join("")}</div>`;
  ctx.ft(`.${id}-l`, t, d, { yPercent: 115 }, { yPercent: 0, ease: "e", stagger });
  return html;
}
export function fadeUp(ctx, sel, t, { y = 30, d = 0.6, stagger = 0, ease = "o" } = {}) {
  ctx.ft(sel, t, d, { opacity: 0, y }, { opacity: 1, y: 0, ease, stagger });
}
export function kicker(ctx, key, text, t = 0.15) {
  const id = ctx.id(key);
  ctx.ft(`#${id} .bar`, t, 0.5, { scaleX: 0 }, { scaleX: 1, ease: "o", transformOrigin: "0 50%" });
  ctx.ft(`#${id} .kt`, t + 0.1, 0.5, { opacity: 0, x: -20 }, { opacity: 1, x: 0, ease: "o" });
  return `<div class="kicker" id="${id}"><span class="bar"></span><span class="kt">${esc(text)}</span></div>`;
}
export function chips(ctx, key, items, t, gap = 0.55) {
  const id = ctx.id(key);
  const html = `<div class="chips" id="${id}">${items.map((c) => {
    const [txt, k] = Array.isArray(c) ? c : [c, ""];
    return `<span class="chip ${k} ${id}-c">${esc(txt)}</span>`;
  }).join("")}</div>`;
  ctx.ft(`.${id}-c`, t, 0.5, { opacity: 0, y: 18, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, ease: "b", stagger: gap });
  return html;
}

// text column (kicker + headline + body + chips) at canvas position
export function textCol(ctx, { x = 110, y = null, w = 620, kick, head, headCls = "h2", body, chipList, t = 0.2, chipT, align = "left" }) {
  let h = "";
  if (kick) h += kicker(ctx, "k", kick, t);
  if (head) h += lines(ctx, "h", head, { cls: headCls, t: t + 0.15 });
  if (body) { h += `<p class="body" id="${ctx.id("b")}">${body}</p>`; fadeUp(ctx, `#${ctx.id("b")}`, t + 0.75, { y: 20 }); }
  if (chipList) h += chips(ctx, "ch", chipList, chipT ?? t + 1.3);
  const pos = y == null ? `top:0;bottom:0;justify-content:center;` : `top:${y}px;`;
  return `<div style="position:absolute;left:${x}px;width:${w}px;${pos}display:flex;flex-direction:column;gap:28px;text-align:${align};">${h}</div>`;
}

// ---------- screenshot viewport with camera ----------
// opts: {file, x,y,w,h, phone, tilt:[ry0, ry1], t (entry), cams:[{t,d, c:[cx,cy] (display px), s, ease}], hls:[...]}
// Camera state: scale s means image is s× the fit-width; c is the display-coord point placed at viewport center.
export function shot(ctx, key, o) {
  const id = ctx.id(key);
  const [iw, ih] = SHOTS[o.file];
  const fitW = o.phone ? o.w - 28 : o.w;           // image box width at scale 1
  const vpW = fitW, vpH = o.phone ? o.h - 28 : o.h;
  const k = fitW / iw;                              // display px -> pan px at s=1
  const imgH = ih * k;
  const camXY = (c, s) => {                          // pan x,y for center point c at scale s
    const px = c[0] * k, py = c[1] * k;
    let x = vpW / 2 - s * px, y = vpH / 2 - s * py;
    // clamp so image edges never show background
    x = Math.min(0, Math.max(vpW - s * fitW, x));
    y = Math.min(0, Math.max(vpH - s * imgH, y));
    if (s * imgH < vpH) y = (vpH - s * imgH) / 2;
    return [r2(x), r2(y)];
  };
  const cams = o.cams && o.cams.length ? o.cams : [{ t: 0, c: [iw / 2, 0], s: 1 }];
  const states = cams.map((c) => ({ ...c, xy: camXY(c.c, c.s) }));
  const st0 = states[0];
  const t0 = o.t ?? 0.3;
  const panSel = `#${id}-pan`, vpSel = `#${id}`;
  // entry: rise + 3D swing
  const tilt = o.tilt || [o.phone ? -10 : -16, o.phone ? -4 : -6];
  ctx.ft(vpSel, t0, 1.1, { opacity: 0, y: 90, rotationY: tilt[0] * 1.6, rotationX: 8, transformPerspective: 2000 },
    { opacity: 1, y: 0, rotationY: tilt[0], rotationX: 3, transformPerspective: 2000, ease: "e" });
  ctx.to(vpSel, t0 + 1.1, Math.max(0.5, (o.hold ?? ctx.dur) - t0 - 1.2), { rotationY: tilt[1], rotationX: 0, ease: "s" });
  ctx.ft(panSel, t0, 0.01, { x: st0.xy[0], y: st0.xy[1], scale: st0.s, transformOrigin: "0 0" }, { x: st0.xy[0], y: st0.xy[1], scale: st0.s, transformOrigin: "0 0" });
  states.slice(1).forEach((c) => ctx.to(panSel, c.t, c.d ?? 1.4, { x: c.xy[0], y: c.xy[1], scale: c.s, ease: c.ease || "io3" }));
  if (o.sfx !== false) ctx.sfx(t0 + 0.05, "drop_001.ogg", 0.45);
  // highlights: box in display coords; label placed relative to the camera state active at hl time
  const stateAt = (t) => states.filter((s) => s.t <= t + 0.01).pop() || st0;
  let hls = "";
  (o.hls || []).forEach((hl, i) => {
    const hid = `${id}-h${i}`;
    const [x0, y0, x1, y1] = hl.box;
    hls += `<div class="hl ${hl.k || ""}" id="${hid}" style="left:${r2(x0 * k)}px;top:${r2(y0 * k)}px;width:${r2((x1 - x0) * k)}px;height:${r2((y1 - y0) * k)}px;"></div>`;
    ctx.ft(`#${hid}`, hl.t, 0.5, { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1, ease: "b" });
    if (hl.out) ctx.to(`#${hid}`, hl.out, 0.4, { opacity: 0, ease: "i" });
    if (hl.label) {
      const s = stateAt(hl.t);
      const bx = s.xy[0] + s.s * x0 * k, by = s.xy[1] + s.s * y0 * k, bw = s.s * (x1 - x0) * k, bh = s.s * (y1 - y0) * k;
      const place = hl.place || "below";
      let lx = bx, ly = by + bh + 16;
      if (place === "above") ly = by - 86;
      if (place === "right") { lx = bx + bw + 16; ly = by + bh / 2 - 36; }
      if (place === "left") { lx = bx - 16 - (hl.lw || 300); ly = by + bh / 2 - 36; }
      lx = Math.max(16, Math.min(vpW - (hl.lw || 300) - 16, lx));
      ly = Math.max(16, Math.min(vpH - 90, ly));
      const cid = `${hid}-c`;
      hls += ""; // placeholder (labels go in vp overlay)
      o._labels = (o._labels || "") + `<div class="call ${hl.k || ""}" id="${cid}" style="left:${r2(lx)}px;top:${r2(ly)}px;">${hl.sub ? `<small>${esc(hl.sub)}</small>` : ""}${esc(hl.label)}</div>`;
      ctx.ft(`#${cid}`, hl.t + 0.15, 0.5, { opacity: 0, y: place === "above" ? 14 : -14 }, { opacity: 1, y: 0, ease: "o" });
      if (hl.out) ctx.to(`#${cid}`, hl.out, 0.4, { opacity: 0, ease: "i" });
    }
  });
  const frameCls = o.phone ? "phone" : "frame";
  const inner = `<div id="${id}-pan" style="position:absolute;left:0;top:0;width:${r2(fitW)}px;height:${r2(imgH)}px;"><img src="assets/shots/${o.file}.png" style="display:block;width:100%;height:100%;" alt="" />${hls}</div>${o._labels || ""}`;
  const badge = o.badge ? `<div class="tagline-badge" id="${id}-bd" style="left:${o.badge.x ?? 24}px;top:${o.badge.y ?? -60}px;">${esc(o.badge.text)}</div>` : "";
  if (o.badge) ctx.ft(`#${id}-bd`, t0 + 0.6, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0, ease: "o" });
  if (o.phone) {
    return `<div class="phone" id="${id}" style="left:${o.x}px;top:${o.y}px;width:${o.w}px;height:${o.h}px;"><div class="scr" style="position:relative;">${inner}</div>${badge}</div>`;
  }
  return `<div class="frame" id="${id}" style="left:${o.x}px;top:${o.y}px;width:${o.w}px;height:${o.h}px;">${inner}${badge}</div>`;
}

// ---------- horizontal flow ----------
export function flow(ctx, key, nodes, { y = 600, t = 0.6, gap = 0.55, fs = 30, linkW = 64, hotLast = true, small } = {}) {
  const id = ctx.id(key);
  let h = `<div class="flow" id="${id}" style="left:0;right:0;top:${y}px;">`;
  nodes.forEach((n, i) => {
    const hot = hotLast && i === nodes.length - 1 ? " hot" : "";
    const [label, cls] = Array.isArray(n) ? n : [n, ""];
    h += `<div class="node ${cls}${hot} ${id}-n" id="${id}-n${i}" style="font-size:${fs}px;">${small && small[i] ? `<small>${esc(small[i])}</small>` : ""}${esc(label)}</div>`;
    if (i < nodes.length - 1) h += `<span class="link" style="width:${linkW}px;"><i id="${id}-l${i}"></i></span>`;
  });
  h += "</div>";
  nodes.forEach((n, i) => {
    const tt = t + i * gap;
    ctx.ft(`#${id}-n${i}`, tt, 0.5, { opacity: 0, y: 24, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, ease: "b" });
    if (i < nodes.length - 1) ctx.ft(`#${id}-l${i}`, tt + 0.3, gap, { scaleX: 0 }, { scaleX: 1, ease: "io", transformOrigin: "0 50%" });
  });
  return h;
}

// ---------- series opening (2.8s) ----------
export function opening(v) {
  return v.scene(2.8, (c) => {
    const ch = String(v.num).padStart(2, "0");
    c.ft(`#${c.id("arc")}`, 0.1, 0.9, { strokeDashoffset: 420 }, { strokeDashoffset: 0, ease: "io" });
    c.ft(`.${c.id("wl")}`, 0.15, 0.8, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, ease: "e", stagger: 0.05 });
    c.ft(`#${c.id("hd")}`, 0.55, 0.6, { opacity: 0, letterSpacing: "0.6em" }, { opacity: 1, letterSpacing: "0.32em", ease: "o" });
    c.ft(`#${c.id("rule")}`, 0.6, 0.7, { scaleX: 0 }, { scaleX: 1, ease: "io" });
    c.ft(`#${c.id("ox")}`, 0.85, 0.6, { opacity: 0, y: 18 }, { opacity: 1, y: 0, ease: "o" });
    c.ft(`#${c.id("chap")}`, 1.15, 0.55, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, ease: "b" });
    c.sfx(0.5, "bong_001.ogg", 0.55); // lands on the 0.56s beat
    const letters = (s, cls) => s.split("").map((ch) => `<span class="line" style="display:inline-block;"><span class="${c.id("wl")} ${cls}" style="display:inline-block;">${ch}</span></span>`).join("");
    return `<div class="center" style="gap:22px;">
      <div style="position:relative;">
        <svg width="300" height="80" viewBox="0 0 300 80" style="position:absolute;left:150px;top:-18px;overflow:visible;" aria-hidden="true">
          <path id="${c.id("arc")}" d="M10 66 C 70 6, 190 -6, 290 40" fill="none" stroke="#6cc283" stroke-width="7" stroke-linecap="round" stroke-dasharray="420" />
        </svg>
        <div class="wm" style="font-size:168px;line-height:1;">${letters("Park", "p")}${letters("med", "m")}</div>
      </div>
      <div class="wm-sub" id="${c.id("hd")}" style="font-size:22px;color:#c9d4ea;">Healthcare Delivered</div>
      <span class="rule" id="${c.id("rule")}" style="width:420px;"></span>
      <div id="${c.id("ox")}" style="font-family:'PJS';font-weight:800;font-size:44px;letter-spacing:0.12em;">OPERATIONS EXCELLENCE</div>
      <div id="${c.id("chap")}" class="chip" style="font-family:'MONO';font-size:22px;letter-spacing:0.2em;background:var(--accent);border-color:var(--accent-hi);">${ch} · ${CHAPTERS[v.num - 1]}</div>
    </div>`;
  }, { fadeIn: false, name: "Series open" });
}

// ---------- series end card (4.5s) ----------
export function endCard(v, { dur = 4.5 } = {}) {
  return v.scene(dur, (c) => {
    c.ft(`.${c.id("l")}`, 0.2, 0.9, { yPercent: 115 }, { yPercent: 0, ease: "e", stagger: 0.12 });
    c.ft(`#${c.id("rule")}`, 0.55, 0.8, { scaleX: 0 }, { scaleX: 1, ease: "io" });
    c.ft(`#${c.id("tag")}`, 0.75, 0.7, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "o" });
    c.ft(`.${c.id("cc")}`, 1.2, 0.45, { opacity: 0, y: 12 }, { opacity: 1, y: 0, ease: "o", stagger: 0.07 });
    if (v.endSub) c.ft(`#${c.id("sub")}`, 1.5, 0.6, { opacity: 0 }, { opacity: 1, ease: "o" });
    c.ft(`#${c.id("wm")}`, 1.6, 0.6, { opacity: 0 }, { opacity: 1, ease: "o" });
    c.sfx(0.3, "impactBell_heavy_000.ogg", 0.5, 2.5);
    const strip = CHAPTERS.map((ch, i) => `${i ? `<span class="ar ${c.id("cc")}">→</span>` : ""}<span class="c ${i === v.num - 1 ? "on" : ""} ${c.id("cc")}">${ch}</span>`).join("");
    const titleLines = v.endTitle.map((l) => `<span class="line"><span class="${c.id("l")}">${esc(l)}</span></span>`).join("");
    return `<div class="center" style="gap:30px;">
      <div class="h1" style="font-size:104px;">${titleLines}</div>
      <span class="rule" id="${c.id("rule")}"></span>
      <div id="${c.id("tag")}" style="font-family:'PJS';font-weight:600;font-size:44px;color:#dbe4f7;">${esc(v.endTag)}</div>
      ${v.endSub ? `<div id="${c.id("sub")}" class="body" style="font-size:28px;">${esc(v.endSub)}</div>` : ""}
      <div class="chapters" style="margin-top:18px;">${strip}</div>
      <div id="${c.id("wm")}" class="wm" style="font-size:44px;position:absolute;bottom:64px;"><span class="p">Park</span><span class="m">med</span></div>
    </div>`;
  }, { fadeOut: false, name: "End card" });
}

export function write(v, outDir, energy) {
  const comp = path.join(outDir, "composition");
  fs.mkdirSync(comp, { recursive: true });
  fs.cpSync(path.resolve(path.dirname(new URL(import.meta.url).pathname), "../shared-assets"), path.join(comp, "assets"), { recursive: true });
  fs.rmSync(path.join(comp, "assets/energy.json"), { force: true });
  fs.writeFileSync(path.join(comp, "index.html"), v.html(energy));
  fs.writeFileSync(path.join(comp, "hyperframes.json"), JSON.stringify({ name: v.id }, null, 2));
  return comp;
}
