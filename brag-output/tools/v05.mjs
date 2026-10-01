// V05 — MOBILIZE · Ambulance Management
import { Video, opening, endCard, lines, kicker, textCol, shot, chips, flow, esc } from "./lib.mjs";

const AMB = `<svg viewBox="0 0 240 120" width="360" height="180" fill="none" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
  <path d="M10 92V30h120v62" stroke="#dbe4f7" stroke-width="6"/><path d="M130 48h52l38 30v14h-90" stroke="#dbe4f7" stroke-width="6"/>
  <path d="M146 54h30l22 20h-52z" stroke="#7d9bff" stroke-width="5"/><path d="M58 44v34M41 61h34" stroke="#f0525a" stroke-width="8"/>
  <rect x="44" y="18" width="30" height="12" rx="3" stroke="#5bd3e6" stroke-width="5"/>
  <circle cx="50" cy="96" r="14" stroke="#dbe4f7" stroke-width="6"/><circle cx="176" cy="96" r="14" stroke="#dbe4f7" stroke-width="6"/></svg>`;

export default function build() {
  const v = new Video({
    id: "v05-ambulance", num: 5, chapter: "MOBILIZE", title: "Ambulance Management",
    endTitle: ["AMBULANCE MANAGEMENT"], endTag: "Digitized. Auditable. Visible.",
  });
  opening(v);

  // hook — conceptual ambulance on the route
  v.scene(6.2, (c) => {
    let h = `<div style="position:absolute;left:0;right:0;top:190px;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center;">${kicker(c, "k", "Ambulance management", 0.15)}${lines(c, "t", ["From the OHC", "<em>to the road.</em>"], { cls: "h1", t: 0.35, stagger: 0.18 })}</div>`;
    h += `<div class="road" style="top:870px;"><i id="${c.id("rd")}"></i></div>`;
    c.ft(`#${c.id("rd")}`, 0.4, 2.6, { scaleX: 0 }, { scaleX: 1, ease: "io", transformOrigin: "0 50%" });
    for (let i = 0; i < 8; i++) { h += `<span id="${c.id("d" + i)}" style="position:absolute;top:900px;left:${120 + i * 240}px;width:120px;height:5px;border-radius:3px;background:rgba(169,184,211,0.35);display:block;"></span>`; }
    c.ft(`[id^="${c.id("d")}"]`, 0.6, 0.4, { opacity: 0 }, { opacity: 1, stagger: 0.12 });
    h += `<div id="${c.id("amb")}" style="position:absolute;left:0;top:690px;width:360px;height:180px;">${AMB}</div>`;
    c.ft(`#${c.id("amb")}`, 1.0, 3.2, { x: -400 }, { x: 780, ease: "o2" });
    c.to(`#${c.id("amb")}`, 1.0, 0.25, { y: -3, ease: "s", repeat: 11, yoyo: true });
    h += `<div class="node" id="${c.id("ohc")}" style="position:absolute;left:140px;top:960px;font-size:22px;padding:12px 20px;">OHC</div><div class="node hot" id="${c.id("cc")}" style="position:absolute;right:140px;top:960px;font-size:22px;padding:12px 20px;">Command Center</div>`;
    c.ft(`#${c.id("ohc")}`, 0.6, 0.4, { opacity: 0, y: 10 }, { opacity: 1, y: 0, ease: "o" });
    c.ft(`#${c.id("cc")}`, 2.6, 0.4, { opacity: 0, y: 10 }, { opacity: 1, y: 0, ease: "o" });
    c.sfx(0.4, "impactSoft_medium_001.ogg", 0.45);
    c.ft(`#${c.id("cx")}`, 1.0, 0.5, { opacity: 0 }, { opacity: 1 });
    return h + `<div class="concept" id="${c.id("cx")}" style="bottom:auto;top:110px;">Conceptual visual</div>`;
  }, { name: "Hook" });

  // entry points
  v.scene(8.5, (c) => {
    let h = shot(c, "m", { file: "s12", phone: true, x: 110, y: 120, w: 420, h: 840, t: 0.3, tilt: [12, 5],
      cams: [{ t: 0, c: [345, 400], s: 1.25 }], hls: [{ t: 1.8, box: [11, 193, 317, 236], label: "Ambulance", place: "below", lw: 190 }] });
    h += shot(c, "q", { file: "s08", x: 600, y: 120, w: 620, h: 352, t: 0.8, sfx: false, tilt: [8, 3],
      cams: [{ t: 0, c: [1645, 800], s: 2.2 }], hls: [{ t: 2.6, box: [1468, 778, 1640, 848], label: "Quick action", place: "above", lw: 210 }] });
    h += shot(c, "f", { file: "s07", x: 600, y: 540, w: 620, h: 403, t: 1.3, sfx: false, tilt: [8, 3],
      cams: [{ t: 0, c: [930, 800], s: 2.0 }], hls: [{ t: 3.4, box: [920, 760, 1088, 808], label: "Ambulance Only", place: "below", lw: 230 }] });
    h += textCol(c, { x: 1300, w: 540, kick: "Built in", head: ["Ambulance,", "<em>a tap away.</em>"],
      body: "An Ambulance button on the nurse's home screen, an Ambulance quick action, and facilities filtered by ambulance coverage." });
    return h;
  }, { name: "Entry points" });

  // weekly checklist
  v.scene(10, (c) => {
    let h = textCol(c, { x: 110, w: 600, kick: "Ambulance Audit", head: ["The weekly checklist,", "<em>digitized.</em>"],
      body: "Each ambulance gets a dated, referenced weekly checklist — conducted, submitted and timestamped.",
      chipList: [["SUBMITTED", "g"], "Ref #2874", "Alcohol test · 0.00 BAC"], chipT: 4.4 });
    h += shot(c, "a", { file: "s03", x: 770, y: 150, w: 1050, h: 780, t: 0.3,
      cams: [{ t: 0, c: [1000, 600], s: 1.15 }, { t: 2.2, c: [1040, 500], s: 1.55, d: 1.4 }],
      hls: [{ t: 3.4, box: [165, 272, 900, 398], label: "Ambulance Weekly Checklist", place: "below", out: 5.6 },
        { t: 5.8, box: [1484, 566, 1907, 640], k: "g", label: "Status · SUBMITTED", place: "above" },
        { t: 6.6, box: [180, 654, 601, 730], label: "Alcohol test · 0.00BAC", place: "below" }] });
    return h;
  }, { name: "Weekly checklist" });

  // checks
  v.scene(10, (c) => {
    let h = shot(c, "a", { file: "s03", x: 110, y: 150, w: 1060, h: 780, t: 0.3, tilt: [14, 6],
      cams: [{ t: 0, c: [600, 1500], s: 1.55 }, { t: 4.6, c: [1480, 1500], s: 1.55, d: 1.4 }],
      hls: [{ t: 1.8, box: [945, 1388, 1025, 1430], k: "g" }, { t: 2.3, box: [945, 1442, 1025, 1484], k: "g" }, { t: 2.8, box: [945, 1495, 1025, 1537], k: "g" },
        { t: 3.3, box: [945, 1549, 1025, 1591], k: "g" }, { t: 3.8, box: [945, 1602, 1025, 1644], k: "g", label: "Equipment Check · Pass", place: "above", out: 4.6 },
        { t: 6.3, box: [1833, 1388, 1912, 1430], k: "g" }, { t: 6.8, box: [1833, 1442, 1912, 1484], k: "g" }, { t: 7.3, box: [1833, 1495, 1912, 1537], k: "g" },
        { t: 7.8, box: [1833, 1580, 1912, 1622], k: "g", label: "Vehicle Condition · Pass", place: "above" }] });
    h += textCol(c, { x: 1250, w: 590, kick: "Equipment & vehicle", head: ["Every check,", "<em>with a result.</em>"],
      body: "Stretcher, first aid box, oxygen cylinder, ambu bag — siren and lights, number plate, driver licence, vehicle insurance.",
      chipList: [["Pass", "g"]], chipT: 1.8 });
    c.sfx(1.8, "click_003.ogg", 0.3); c.sfx(6.3, "click_003.ogg", 0.3);
    return h;
  }, { name: "Checks" });

  // documentation
  v.scene(8, (c) => {
    let h = textCol(c, { x: 110, w: 600, kick: "Documentation", head: ["Documents,", "<em>with days left.</em>"],
      body: "Driver licence, insurance, fitness certificate, PUC and fire extinguisher — each with its expiry date and a countdown.",
      chipList: [["Insurance · 267 days", "g"], ["Fitness · 127 days", "g"], ["PUC · 262 days", "g"]], chipT: 3.4 });
    h += shot(c, "d", { file: "s03", x: 770, y: 150, w: 1050, h: 780, t: 0.3,
      cams: [{ t: 0, c: [1000, 1100], s: 1.2 }, { t: 1.8, c: [1000, 1150], s: 1.6, d: 1.3 }],
      hls: [{ t: 3.2, box: [165, 992, 1922, 1318], label: "Document Validity", place: "above", out: 5.4 }, { t: 5.6, box: [1140, 1045, 1305, 1310], k: "g", label: "Days left", place: "left", lw: 160 }] });
    return h;
  }, { name: "Documentation" });

  // report
  v.scene(6.5, (c) => {
    let h = shot(c, "r", { file: "s03", x: 110, y: 230, w: 900, h: 560, t: 0.3, tilt: [12, 5],
      cams: [{ t: 0, c: [1500, 340], s: 1.9 }], hls: [{ t: 1.6, box: [1686, 310, 1900, 362], label: "Download Report", place: "below" }] });
    h += shot(c, "h", { file: "s06", x: 1060, y: 330, w: 760, h: 360, t: 0.9, sfx: false, tilt: [-10, -4],
      cams: [{ t: 0, c: [998, 1226], s: 2.2 }], hls: [{ t: 2.6, box: [878, 1204, 1118, 1250], label: "04 · Ambulance Audit History", place: "below", lw: 380 }] });
    h += `<div style="position:absolute;left:110px;top:110px;">${lines(c, "t", ["Reports, <em>one click.</em>"], { cls: "h2", t: 0.3 })}</div>`;
    c.sfx(1.6, "click_003.ogg", 0.45);
    return h;
  }, { name: "Report" });

  v.scene(5.5, (c) => {
    let h = `<div style="position:absolute;left:0;right:0;top:300px;display:flex;justify-content:center;">${kicker(c, "k", "From the road, back to the center", 0.15)}</div>`;
    h += flow(c, "f", ["Ambulance", "Weekly Checklist", "Audit", "Report", "Command Center"], { y: 470, t: 0.5, gap: 0.55, fs: 32, linkW: 70 });
    return h;
  }, { name: "Flow" });

  v.scene(4.5, (c) => {
    c.sfx(0.25, "impactSoft_medium_004.ogg", 0.5);
    return `<div class="center">${lines(c, "c", ["Ambulance operations.", "<em>Digitized. Auditable. Visible.</em>"], { cls: "h1", t: 0.3, stagger: 0.16 })}</div>`;
  }, { name: "Core message" });

  endCard(v);
  return v;
}
