// V04 — CONTROL · Compliance + Facility + Asset Management
import { Video, opening, endCard, lines, kicker, textCol, shot, chips, flow, esc } from "./lib.mjs";

export default function build() {
  const v = new Video({
    id: "v04-compliance-assets", num: 4, chapter: "CONTROL", title: "Compliance + Facility + Asset Management",
    endTitle: ["COMPLIANCE & ASSETS"], endTag: "Continuous Operational Visibility.",
  });
  opening(v);

  v.scene(4.7, (c) => {
    c.sfx(0.3, "impactSoft_medium_001.ogg", 0.5);
    return `<div class="center">${kicker(c, "k", "Compliance", 0.15)}${lines(c, "t", ["Compliance shouldn't", "<em>wait for an audit.</em>"], { cls: "h1", t: 0.35, stagger: 0.18 })}</div>`;
  }, { name: "Hook" });

  // facility management
  v.scene(10.5, (c) => {
    let h = textCol(c, { x: 110, w: 600, kick: "Facility Management", head: ["Every facility,", "<em>its own profile.</em>"],
      body: "Facility cards carry nurses, issues, low stock and BGC pending — filtered by ambulance coverage.",
      chipList: ["32 facilities", "Full Facility", "No Ambulance", "Ambulance Only"], chipT: 3.4 });
    h += shot(c, "o", { file: "s07", x: 770, y: 196, w: 1050, h: 683, t: 0.3,
      cams: [{ t: 0, c: [1000, 650], s: 1 }, { t: 2.0, c: [1000, 820], s: 1.55, d: 1.4 }, { t: 6.0, c: [880, 1080], s: 2.0, d: 1.4 }],
      hls: [{ t: 3.4, box: [574, 758, 1090, 810], label: "All · Full Facility · No Ambulance · Ambulance Only", place: "below", out: 5.8 },
        { t: 7.5, box: [872, 1018, 962, 1100], k: "a", label: "14 BGC pending", place: "right", lw: 230 }] });
    return h;
  }, { name: "Facility" });

  // BGC documents
  v.scene(10, (c) => {
    let h = shot(c, "d", { file: "s10", x: 110, y: 150, w: 1060, h: 780, t: 0.3, tilt: [14, 6],
      cams: [{ t: 0, c: [1000, 760], s: 1 }, { t: 2.2, c: [1000, 1250], s: 1.4, d: 1.4 }],
      hls: [{ t: 3.7, box: [48, 1005, 1950, 1098], label: "Employee · 6 Document(s)", sub: "BGC Documents", place: "above", out: 6.0 },
        { t: 6.2, box: [77, 1123, 1920, 1500], k: "g" }] });
    h += textCol(c, { x: 1250, w: 580, kick: "BGV · BGC", head: ["Background checks,", "<em>on file.</em>"],
      body: "BGC documents are kept per employee — and every facility card shows how many are still pending.",
      chipList: ["Medical Certificate", "Urine Report", "KNC", "Rental Agreement", "Aadhar", "Experience Certificate"], chipT: 6.2 });
    return h;
  }, { name: "BGC" });

  // facility-level compliance
  v.scene(10, (c) => {
    let h = textCol(c, { x: 110, w: 600, kick: "Facility-level compliance", head: ["Missing days,", "<em>counted.</em>"],
      body: "Each facility's daily reporting is tracked on a calendar: filed days in green, critical cases flagged, gaps counted.",
      chipList: [["12 days not filed", "a"], ["4 Critical", "r"], ["87% filed", "g"]], chipT: 3.6 });
    h += shot(c, "f", { file: "s05", x: 770, y: 150, w: 1050, h: 780, t: 0.3,
      cams: [{ t: 0, c: [1000, 778], s: 1 }, { t: 2.0, c: [1000, 1100], s: 1.5, d: 1.4 }],
      hls: [{ t: 3.6, box: [52, 1316, 214, 1352], k: "a", label: "12 days not filed", place: "above", lw: 260 },
        { t: 4.4, box: [1500, 1316, 1620, 1352], k: "r", label: "4 Critical", place: "above", lw: 180 },
        { t: 5.2, box: [1876, 858, 1926, 910], k: "g", label: "87%", place: "left", lw: 100 }] });
    return h;
  }, { name: "Facility compliance" });

  // expiry & calibration (asset lifecycle evidence)
  v.scene(11, (c) => {
    let h = shot(c, "a", { file: "s03", x: 110, y: 130, w: 1060, h: 820, t: 0.3, tilt: [14, 6],
      cams: [{ t: 0, c: [1000, 860], s: 1.25 }, { t: 2.0, c: [1000, 870], s: 1.55, d: 1.2 }, { t: 5.6, c: [1000, 1170], s: 1.55, d: 1.4 }],
      hls: [{ t: 3.0, box: [165, 762, 1922, 975], label: "Calibration due dates", place: "above", out: 5.4 },
        { t: 7.1, box: [1140, 1045, 1305, 1310], k: "g", label: "Days left, per document", place: "left", lw: 320 }] });
    h += textCol(c, { x: 1250, w: 590, kick: "Asset lifecycle", head: ["Expiry and", "calibration,", "<em>counted down.</em>"],
      body: "Equipment calibration and vehicle documents carry their due dates — and the days left before each expires.",
      chipList: ["BP Apparatus · 105 days", "Fitness Certificate · 127 days", "Insurance · 267 days"], chipT: 7.1 });
    return h;
  }, { name: "Expiry & calibration" });

  // flow
  v.scene(9, (c) => {
    let h = `<div style="position:absolute;left:0;right:0;top:170px;display:flex;justify-content:center;">${kicker(c, "k", "Continuous compliance", 0.15)}</div>`;
    h += flow(c, "f", ["Facility", "Compliance", ["Alert", "bad"], "Action", "Audit"], { y: 330, t: 0.5, gap: 0.6, fs: 34, linkW: 90 });
    const W = ["Monitor.", "Track.", "Alert.", "Act."];
    h += `<div style="position:absolute;left:0;right:0;top:600px;display:flex;justify-content:center;gap:44px;">${W.map((w, i) => `<span class="h1 ${c.id("w")}" style="font-size:120px;${i === 3 ? "color:var(--accent-hi);" : ""}">${w}</span>`).join("")}</div>`;
    c.ft(`.${c.id("w")}`, 3.8, 0.6, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "e", stagger: 0.9 });
    c.sfx(3.8, "click_003.ogg", 0.35); c.sfx(6.5, "impactSoft_medium_004.ogg", 0.5);
    return h;
  }, { name: "Flow" });

  v.scene(4.5, (c) => `<div class="center">${lines(c, "c", ["Compliance becomes", "<em>continuous visibility.</em>"], { cls: "h1", t: 0.3, stagger: 0.16 })}</div>`, { name: "Final" });

  endCard(v);
  return v;
}
