// V03 — OPERATE · OHC Operations
import { Video, opening, endCard, lines, kicker, textCol, shot, chips, flow, esc } from "./lib.mjs";

export default function build() {
  const v = new Video({
    id: "v03-ohc-operations", num: 3, chapter: "OPERATE", title: "OHC Operations",
    endTitle: ["OHC OPERATIONS"], endTag: "Every Workflow. Connected.",
  });
  opening(v);

  v.scene(4.7, (c) => {
    c.sfx(0.3, "impactSoft_medium_001.ogg", 0.5);
    return `<div class="center">${kicker(c, "k", "OHC operations", 0.15)}${lines(c, "t", ["Every OHC operation.", "<em>Connected.</em>"], { cls: "h1", t: 0.35, stagger: 0.18 })}</div>`;
  }, { name: "Hook" });

  // shift + daily tasks on mobile
  v.scene(9.5, (c) => {
    let h = textCol(c, { x: 110, w: 660, kick: "Today Tasks", head: ["The shift,", "<em>as a checklist.</em>"],
      body: "Every nurse opens to today's tasks — shift-start checks first, then the daily work.",
      chipList: ["Fit Check & Appearance Verification", "First Aid Checklist", "Crash Cart Checklist", ["Biomedical Waste", "g"], ["Daily MIS Report", "g"]], chipT: 2.4 });
    h += shot(c, "m", { file: "s12", phone: true, x: 1150, y: 90, w: 470, h: 900, t: 0.3, tilt: [-12, -5],
      cams: [{ t: 0, c: [345, 0], s: 1 }],
      hls: [
        { t: 2.4, box: [27, 300, 652, 405] }, { t: 2.95, box: [27, 420, 652, 525] }, { t: 3.5, box: [27, 541, 652, 646] },
        { t: 4.05, box: [27, 720, 652, 825], k: "g" }, { t: 4.6, box: [27, 840, 652, 945], k: "g" },
      ] });
    return h;
  }, { name: "Today tasks" });

  // BMW
  v.scene(9, (c) => {
    let h = shot(c, "sc", { file: "s13", phone: true, x: 130, y: 100, w: 440, h: 880, t: 0.3, tilt: [12, 5],
      cams: [{ t: 0, c: [336, 723], s: 1.0 }, { t: 2.2, c: [400, 780], s: 1.5, d: 1.3 }],
      hls: [{ t: 3.4, box: [540, 725, 625, 830], k: "g", label: "BMW", place: "left", lw: 110 }] });
    h += shot(c, "doc", { file: "s10", x: 640, y: 300, w: 560, h: 480, t: 1.0, sfx: false, tilt: [10, 4],
      cams: [{ t: 0, c: [1000, 760], s: 1 }, { t: 3.0, c: [290, 720], s: 2.4, d: 1.4 }],
      hls: [{ t: 4.5, box: [62, 630, 512, 822], k: "g", label: "Valid until 12/31/2026 · Active", place: "below", lw: 380 }] });
    h += textCol(c, { x: 1290, w: 540, kick: "Biomedical Waste", head: ["BMW,", "<em>every day.</em>"],
      body: "Biomedical Waste is a daily task and an app shortcut — and the facility's BMW agreement sits in Facility Documents with its validity." });
    return h;
  }, { name: "BMW" });

  // inventory
  v.scene(12.5, (c) => {
    let h = textCol(c, { x: 110, w: 600, kick: "Medicine Inventory", head: ["Stock you can", "<em>see coming.</em>"],
      body: "Every medicine shows batches, stock in hand and days left at current consumption — down to batch expiry.",
      chipList: [["183 units available", "g"], "3 consumed", "Expiry · 638 days left"], chipT: 6.6 });
    h += shot(c, "inv", { file: "s11", x: 770, y: 150, w: 1050, h: 780, t: 0.3,
      cams: [{ t: 0, c: [1000, 803], s: 1 }, { t: 2.0, c: [993, 790], s: 1.7, d: 1.4 }],
      hls: [{ t: 3.2, box: [812, 604, 1176, 966], label: "Stock: 1830 days left", place: "below", out: 4.6 }], hold: 5.2 });
    h += shot(c, "det", { file: "s09", x: 770, y: 150, w: 1050, h: 780, t: 5.0, sfx: false,
      cams: [{ t: 0, c: [1000, 600], s: 1.15 }, { t: 7.4, c: [1000, 1140], s: 1.45, d: 1.6 }],
      hls: [{ t: 6.4, box: [78, 558, 1894, 622], k: "g", label: "Current Stock Status: AVAILABLE", place: "below" , out: 7.3 },
        { t: 9.2, box: [690, 1150, 940, 1186], k: "a", label: "Batch expiry · 638 days left", place: "above" }] });
    c.to(`#${c.id("inv")}`, 4.9, 0.5, { opacity: 0, scale: 0.94, ease: "i" });
    c.sfx(5.0, "drop_002.ogg", 0.4);
    return h;
  }, { name: "Inventory" });

  // wellness room
  v.scene(9, (c) => {
    let h = shot(c, "w", { file: "s14", x: 110, y: 170, w: 1080, h: 612, t: 0.3, tilt: [14, 6],
      cams: [{ t: 0, c: [1000, 566], s: 1 }, { t: 2.4, c: [900, 430], s: 1.3, d: 1.4 }],
      hls: [{ t: 3.8, box: [95, 446, 1905, 536], label: "Waiting · On hold · Resting beds · Today history", place: "below" }] });
    h += shot(c, "n", { file: "s08", x: 560, y: 600, w: 640, h: 364, t: 1.2, sfx: false, tilt: [10, 4],
      cams: [{ t: 0, c: [1000, 568], s: 1 }, { t: 5.4, c: [1645, 520], s: 2.2, d: 1.3 }],
      hls: [{ t: 6.8, box: [1468, 487, 1824, 547], label: "Receive Patient", place: "above" }] });
    h += textCol(c, { x: 1290, w: 540, kick: "Wellness Room", head: ["Every visit,", "<em>accounted for.</em>"],
      body: "Walk-ins, waiting room, on-hold and resting beds — and one tap to receive the next patient." });
    return h;
  }, { name: "Wellness Room" });

  // alerts & incidents
  v.scene(8, (c) => {
    let h = shot(c, "t", { file: "s12", phone: true, x: 1180, y: 110, w: 440, h: 860, t: 0.3, tilt: [-12, -5],
      cams: [{ t: 0, c: [345, 215], s: 1.6 }, { t: 3.8, c: [345, 1380], s: 1.6, d: 1.3 }],
      hls: [{ t: 1.8, box: [329, 193, 635, 236], k: "r", label: "Incident", place: "below", lw: 160 }, { t: 5.3, box: [300, 1395, 385, 1465], k: "r", label: "SOS", place: "above", lw: 90 }] });
    h += textCol(c, { x: 110, w: 900, kick: "Alerts & Incidents", head: ["When something", "happens, it is <em>one tap away.</em>"],
      body: "Incident reporting on the nurse's home screen, an SOS button in the tab bar, Alerts in shortcuts — and CRITICAL ALERT across the web app.",
      chipList: [["Incident", "r"], ["SOS", "r"], "Alerts", ["CRITICAL ALERT", "r"]], chipT: 3.2 });
    c.sfx(1.8, "click_003.ogg", 0.4);
    return h;
  }, { name: "Alerts & incidents" });

  // fast chain
  v.scene(7, (c) => {
    const S = [["s10", [290, 720], 2.2, "BMW"], ["s11", [1000, 700], 1.5, "Inventory"], ["s14", [1000, 700], 1.3, "Wellness Room"], ["s12", [345, 215], 1.6, "Incident"], ["s04", [1000, 600], 1.1, "Command Center"]];
    let h = flow(c, "f", S.map((s) => s[3]), { y: 830, t: 0.3, gap: 1.05, fs: 28, linkW: 70 });
    S.forEach(([f, cc, s, lab], i) => {
      const phone = f === "s12";
      h += shot(c, "c" + i, { file: f, phone, x: phone ? 760 : 520, y: phone ? 110 : 150, w: phone ? 400 : 880, h: phone ? 640 : 600, t: 0.2 + i * 1.05, sfx: false, tilt: [0, 0], cams: [{ t: 0, c: cc, s }], hold: 1.2 + i * 1.05 });
      if (i < S.length - 1) c.to(`#${c.id("c" + i)}`, 1.25 + i * 1.05, 0.3, { opacity: 0, scale: 0.92, ease: "i" });
      c.sfx(0.2 + i * 1.05, "rollover2.ogg", 0.35);
    });
    return h;
  }, { name: "Chain" });

  v.scene(4.5, (c) => {
    c.sfx(0.25, "impactSoft_medium_004.ogg", 0.5);
    return `<div class="center">${lines(c, "c", ["From daily tasks", "to <em>connected workflows.</em>"], { cls: "h1", t: 0.3, stagger: 0.16 })}</div>`;
  }, { name: "Core message" });

  endCard(v);
  return v;
}
