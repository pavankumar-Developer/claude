// V01 — CONNECT · Digital OHC + Operations Command Center
import { Video, opening, endCard, lines, kicker, textCol, shot, chips, esc } from "./lib.mjs";

const ICON = {
  sheet: '<svg viewBox="0 0 24 24" fill="none" stroke="#2f7d45" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
  paper: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a6a1e" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h8M9 17h6"/></svg>',
  report: '<svg viewBox="0 0 24 24" fill="none" stroke="#3156d3" stroke-width="2"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a6a1e" stroke-width="2"><path d="M4 20l4-1 11-11-3-3L5 16z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="#c4323a" stroke-width="2"><path d="M3 12h4l2-5 4 10 2-5h6"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="#2f7d45" stroke-width="2"><path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="#3156d3" stroke-width="2"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
  amb: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a6a1e" stroke-width="2"><path d="M2 16V8h11v8M13 11h4l3 3v2h-7"/><circle cx="6" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M7.5 10v4M5.5 12h4"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="#c4323a" stroke-width="2"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/></svg>',
};

export default function build() {
  const v = new Video({
    id: "v01-connect", num: 1, chapter: "CONNECT", title: "Digital OHC + Operations Command Center",
    endTitle: ["PARKMED", "OPERATIONS EXCELLENCE"], endTag: "Digital OHC. Connected Operations.",
  });
  opening(v);

  // 2 — fragmented → converge → command center
  v.scene(13.7, (c) => {
    const frags = [
      ["Spreadsheets", "sheet", "sheet", 140, 330, -8], ["Paper registers", "paper", "paper", 520, 540, 6],
      ["Disconnected reports", "report", "", 900, 300, -4], ["Manual records", "pen", "paper", 1290, 480, 7],
      ["Health assessments", "heart", "", 1500, 250, -6], ["Inventory", "box", "sheet", 150, 770, 5],
      ["Compliance", "shield", "", 720, 770, -7], ["Ambulance logs", "amb", "paper", 1130, 740, 4],
      ["Incidents", "alert", "", 1500, 660, -5],
    ];
    let h = `<div style="position:absolute;left:110px;top:120px;width:1700px;" id="${c.id("hook")}">${lines(c, "hl", ["OHC operations used to live <em>everywhere.</em>"], { cls: "h2", t: 0.3 })}</div>`;
    frags.forEach(([t, ic, cls, x, y, rot], i) => {
      const fid = c.id(`f${i}`);
      h += `<div class="frag ${cls}" id="${fid}" style="left:${x}px;top:${y}px;"><div class="ico">${ICON[ic]}</div><b>${esc(t)}</b><span class="ln m"></span><span class="ln s"></span></div>`;
      const tt = 1.1 + i * 0.5;
      c.ft(`#${fid}`, tt, 0.7, { opacity: 0, y: 60, rotation: rot * 2.2, scale: 0.85 }, { opacity: 1, y: 0, rotation: rot, scale: 1, ease: "b" });
      c.to(`#${fid}`, tt + 0.7, 7.6 - tt - 0.7, { y: i % 2 ? -14 : 12, rotation: rot * 1.25, ease: "s" });
      c.to(`#${fid}`, 8.1 + i * 0.04, 1.0, { x: 795 - x, y: 435 - y, rotation: 0, scale: 0.25, opacity: 0, ease: "io3" });
    });
    c.sfx(1.05, "card-slide-1.ogg", 0.3);
    c.to(`#${c.id("hook")}`, 7.7, 0.5, { opacity: 0, y: -20, ease: "i" });
    // convergence pulse + title
    c.ft(`#${c.id("pulse")}`, 9.0, 1.4, { opacity: 0.9, scale: 0.1 }, { opacity: 0, scale: 2.4, ease: "o" });
    c.ft(`#${c.id("core")}`, 8.9, 0.6, { opacity: 0, scale: 0.2 }, { opacity: 1, scale: 1, ease: "b" });
    c.to(`#${c.id("core")}`, 9.4, 0.45, { opacity: 0, scale: 0.6, ease: "i" });
    c.sfx(9.0, "impactSoft_medium_001.ogg", 0.65);
    h += `<div style="position:absolute;left:810px;top:390px;width:300px;height:300px;border-radius:50%;border:4px solid var(--accent-hi);" id="${c.id("pulse")}"></div>`;
    h += `<div style="position:absolute;left:900px;top:480px;width:120px;height:120px;border-radius:50%;background:var(--accent);box-shadow:0 0 120px rgba(61,99,240,0.8);" id="${c.id("core")}"></div>`;
    c.ft(`#${c.id("ttl")}`, 9.75, 0.2, { opacity: 0 }, { opacity: 1 });
    h += `<div class="center" id="${c.id("ttl")}" style="gap:24px;">${kicker(c, "k2", "Introducing", 9.8)}${lines(c, "t", ["PARKMED OPERATIONS", "<em>COMMAND CENTER</em>"], { cls: "h1", t: 9.95, stagger: 0.14 })}</div>`;
    return h;
  }, { name: "Fragmented → Command Center" });

  // 3 — command center dashboard
  v.scene(11, (c) => {
    let h = textCol(c, { x: 110, w: 590, kick: "Command Center", head: ["Every OHC metric.", "<em>One screen.</em>"],
      body: "Patients, employee visits, resting rooms, doctor consultations and symptom trends — for each facility." });
    h += shot(c, "d", { file: "s04", x: 760, y: 178, w: 1060, h: 724, t: 0.35,
      cams: [{ t: 0, c: [1000, 683], s: 1 }, { t: 3.0, c: [600, 500], s: 1.62, d: 1.6 }, { t: 6.7, c: [1350, 975], s: 1.5, d: 1.6 }],
      hls: [
        { t: 4.7, box: [50, 310, 1146, 686], label: "Patients · Visits · Resting rooms", sub: "Today", out: 6.4 },
        { t: 8.4, box: [800, 715, 1897, 1225], label: "Top 10 Symptoms Distribution", place: "above", k: "g" },
      ] });
    return h;
  }, { name: "Command Center" });

  // 4 — fit check
  v.scene(9.5, (c) => {
    let h = shot(c, "p1", { file: "s16", phone: true, x: 170, y: 120, w: 400, h: 840, t: 0.3, tilt: [12, 5],
      cams: [{ t: 0, c: [326, 0], s: 1 }, { t: 4.2, c: [326, 1454], s: 1, d: 2.4, ease: "io" }] });
    h += shot(c, "p2", { file: "s12", phone: true, x: 610, y: 160, w: 400, h: 800, t: 0.6, tilt: [10, 4], sfx: false,
      cams: [{ t: 0, c: [345, 0], s: 1.08 }],
      hls: [{ t: 2.6, box: [27, 300, 652, 405], k: "g" }, { t: 3.4, box: [27, 420, 652, 525] }, { t: 4.0, box: [27, 541, 652, 646] }] });
    h += textCol(c, { x: 1120, w: 700, kick: "Fit Check", head: ["Every shift starts", "<em>verified.</em>"],
      body: "Fit Check &amp; Appearance Verification at shift start — with a photo guide that shows nurses exactly what to capture.",
      chipList: [["Fit Check & Appearance Verification", "g"], "First Aid Checklist", "Crash Cart Checklist"], chipT: 2.6 });
    return h;
  }, { name: "Fit Check" });

  // 5 — ailments
  v.scene(10.5, (c) => {
    let h = textCol(c, { x: 110, w: 590, kick: "Ailments", head: ["Daily ailments.", "<em>Every facility.</em>"],
      body: "Per-facility calendars show what has been filed, what is critical and which days are still missing.",
      chipList: [["1 Critical", "r"], ["24 days not filed", "a"], "All facilities (32)"], chipT: 4.6 });
    h += shot(c, "a", { file: "s02", x: 760, y: 150, w: 1060, h: 780, t: 0.35,
      cams: [{ t: 0, c: [1000, 752], s: 1 }, { t: 2.6, c: [282, 560], s: 1.85, d: 1.6 }, { t: 6.6, c: [1250, 520], s: 1.2, d: 1.5 }],
      hls: [
        { t: 4.4, box: [58, 288, 506, 792], k: "g", out: 6.4 },
        { t: 4.9, box: [70, 742, 352, 786], k: "r", label: "1 Critical · 24 days not filed", place: "above", out: 6.4 },
        { t: 8.2, box: [1722, 210, 1892, 254], label: "All facilities (32)", place: "below" },
      ] });
    return h;
  }, { name: "Ailments" });

  // 6 — MIS
  v.scene(9.5, (c) => {
    let h = shot(c, "m", { file: "s05", x: 100, y: 150, w: 1060, h: 780, t: 0.35, tilt: [16, 6],
      cams: [{ t: 0, c: [1000, 778], s: 1 }, { t: 2.4, c: [1500, 1100], s: 1.7, d: 1.5 }, { t: 5.9, c: [1700, 300], s: 1.6, d: 1.4 }],
      hls: [
        { t: 4.0, box: [1484, 842, 1945, 1360], k: "g", label: "26 reports · 87% filed", sub: "Summit Tower", place: "left", lw: 330, out: 5.7 },
        { t: 7.4, box: [1703, 130, 1946, 180], label: "Download Excel (All)", place: "below" },
      ] });
    h += textCol(c, { x: 1230, w: 600, kick: "MIS", head: ["Daily MIS.", "<em>One dashboard.</em>"],
      body: "The Facilities Overview tracks OPD, critical cases and reports filed — and exports all of it to Excel." });
    return h;
  }, { name: "MIS" });

  // 7 — audits & assessments
  v.scene(10.5, (c) => {
    let h = textCol(c, { x: 110, w: 540, kick: "Audits & Assessments", head: ["Audits and", "assessments.", "<em>On record.</em>"],
      body: "Ambulance weekly checklists with Pass results. Staff assessments with scored results.",
      chipList: [["Pass", "g"], ["89.83%", "g"], "Download Report"], chipT: 4.2 });
    h += shot(c, "au", { file: "s03", x: 700, y: 120, w: 620, h: 840, t: 0.3,
      cams: [{ t: 0, c: [1000, 330], s: 1.7 }, { t: 2.6, c: [600, 1460], s: 1.7, d: 2.2 }],
      hls: [{ t: 4.6, box: [950, 1385, 1022, 1645], k: "g", label: "Equipment check · Pass", place: "left", lw: 320 }] });
    h += shot(c, "ex", { file: "s17", x: 1350, y: 300, w: 480, h: 480, t: 1.1, sfx: false, tilt: [-10, -4],
      cams: [{ t: 0, c: [832, 833], s: 1 }, { t: 5.6, c: [1000, 480], s: 2.0, d: 1.4 }],
      hls: [{ t: 7.2, box: [1209, 492, 1580, 562], k: "g", label: "Percentage · 89.83%", place: "below" }] });
    return h;
  }, { name: "Audits & Assessments" });

  // 8 — management visibility
  v.scene(10.5, (c) => {
    let h = textCol(c, { x: 110, w: 590, kick: "Management visibility", head: ["Every facility.", "<em>In view.</em>"],
      body: "Late logins, appearance checks, nursing staff, issues, low stock and BGC pending — across 32 facilities.",
      chipList: ["3 late login approvals", "45 appearance checks", "32 facilities"], chipT: 4.3 });
    h += shot(c, "o", { file: "s07", x: 760, y: 196, w: 1060, h: 689, t: 0.35,
      cams: [{ t: 0, c: [1000, 650], s: 1 }, { t: 2.4, c: [690, 330], s: 1.65, d: 1.5 }, { t: 6.2, c: [1000, 1040], s: 1.38, d: 1.5 }],
      hls: [
        { t: 3.9, box: [92, 152, 684, 706], label: "Late Login Approvals · 3", place: "right", lw: 330, out: 6.0 },
        { t: 7.8, box: [560, 990, 1440, 1110], k: "g", label: "Nurses · Issues · Low stock · BGC pending", place: "above" },
      ] });
    return h;
  }, { name: "Management visibility" });

  // 9 — core message
  v.scene(4.6, (c) => {
    c.sfx(0.25, "impactSoft_medium_004.ogg", 0.55);
    return `<div class="center">${lines(c, "c", ["One digital command center", "for <em>OHC operations.</em>"], { cls: "h1", t: 0.3, stagger: 0.16 })}</div>`;
  }, { name: "Core message" });

  endCard(v);
  return v;
}
