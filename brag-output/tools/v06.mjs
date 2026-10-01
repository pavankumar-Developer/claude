// V06 — OPTIMIZE · Management Intelligence + Operational Excellence
import { Video, opening, endCard, lines, kicker, textCol, shot, chips, flow, esc } from "./lib.mjs";

export default function build() {
  const v = new Video({
    id: "v06-management-intelligence", num: 6, chapter: "OPTIMIZE", title: "Management Intelligence + Operational Excellence",
    endTitle: ["PARKMED", "OPERATIONS EXCELLENCE"], endTag: "From Data to Operational Excellence.",
  });
  opening(v);

  v.scene(5.2, (c) => {
    c.sfx(0.3, "impactSoft_medium_001.ogg", 0.5);
    return `<div class="center">${kicker(c, "k", "Management intelligence", 0.15)}${lines(c, "t", ["Turn operational data", "into <em>management visibility.</em>"], { cls: "h1", t: 0.35, stagger: 0.18 })}</div>`;
  }, { name: "Hook" });

  // streams converge into the command center
  v.scene(11, (c) => {
    const S = ["Fit Check", "Ailments", "MIS", "Audits", "Assessments", "Inventory", "Compliance", "Assets", "Incidents", "Ambulances"];
    const hx = 1430, hy = 560;
    let paths = "", h = "";
    S.forEach((s, i) => {
      const y = 140 + i * 84, x = 110;
      const id = c.id("s" + i), pid = c.id("p" + i);
      h += `<div class="sat" id="${id}" style="left:${x}px;top:${y}px;font-size:24px;padding:12px 20px;">${esc(s)}</div>`;
      paths += `<path id="${pid}" d="M ${x + 280} ${y + 28} C ${x + 640} ${y + 28}, ${hx - 520} ${hy}, ${hx - 190} ${hy}" stroke="#5bd3e6" stroke-width="3" fill="none" stroke-dasharray="10 16" opacity="0.8"/>`;
      c.ft(`#${id}`, 0.4 + i * 0.32, 0.45, { opacity: 0, x: -30 }, { opacity: 1, x: 0, ease: "e" });
      c.ft(`#${pid}`, 0.6 + i * 0.32, 0.6, { opacity: 0 }, { opacity: 0.8, ease: "o" });
      c.ft(`#${pid}`, 0.6 + i * 0.32, 9.0 - i * 0.32, { strokeDashoffset: 0 }, { strokeDashoffset: -520, ease: "l" });
    });
    h = `<svg style="position:absolute;left:0;top:0;" width="1920" height="1080" viewBox="0 0 1920 1080" aria-hidden="true">${paths}</svg>` + h;
    h += `<div class="hub" id="${c.id("hub")}" style="left:${hx - 190}px;top:${hy - 190}px;"><div><small>PARKMED</small><b>COMMAND CENTER</b></div></div>`;
    c.ft(`#${c.id("hub")}`, 3.8, 0.8, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, ease: "b" });
    c.to(`#${c.id("hub")}`, 4.6, 4.6, { scale: 1.04, ease: "s", repeat: 1, yoyo: true });
    c.sfx(3.8, "impactSoft_medium_004.ogg", 0.5);
    return h;
  }, { name: "Streams" });

  v.scene(7, (c) => {
    let h = `<div style="position:absolute;left:0;right:0;top:250px;display:flex;flex-direction:column;align-items:center;gap:26px;text-align:center;">${kicker(c, "k", "From data to action", 0.15)}${lines(c, "t", ["Data becomes <em>decisions.</em>"], { cls: "h2", t: 0.3 })}</div>`;
    h += flow(c, "f", ["Data", "Information", "MIS", "Management Visibility", "Action"], { y: 560, t: 0.9, gap: 0.65, fs: 32, linkW: 70 });
    return h;
  }, { name: "Flow" });

  // dashboards
  const dash = (file, cams, hls, kick, head, body, rev) => v.scene(7.3, (c) => {
    const s = shot(c, "d", { file, x: rev ? 100 : 770, y: 150, w: 1050, h: 780, t: 0.3, tilt: rev ? [14, 6] : undefined, cams, hls });
    return s + textCol(c, { x: rev ? 1240 : 110, w: 600, kick, head, body });
  }, { name: kick });
  dash("s04", [{ t: 0, c: [1000, 683], s: 1 }, { t: 2.0, c: [1500, 500], s: 1.7, d: 1.4 }],
    [{ t: 3.5, box: [1550, 310, 1897, 686], k: "g", label: "Gender & Age Distribution", place: "left", lw: 360 }],
    "Information", ["Today's OHC,", "<em>at a glance.</em>"], "Patients, visits, consultations, gender and age, symptom trends — one dashboard per facility.");
  dash("s02", [{ t: 0, c: [1000, 752], s: 1 }, { t: 2.0, c: [1000, 560], s: 1.35, d: 1.6 }],
    [{ t: 3.8, box: [1722, 210, 1892, 254], label: "All facilities (32)", place: "below" }],
    "Ailments", ["Every facility's", "<em>month, in view.</em>"], "One calendar per facility — filed days, critical cases and gaps, side by side.", true);
  dash("s05", [{ t: 0, c: [1000, 778], s: 1 }, { t: 2.0, c: [560, 1100], s: 1.6, d: 1.4 }],
    [{ t: 3.6, box: [36, 842, 498, 1360], k: "a", label: "60% · 12 days not filed", place: "right", lw: 340 }],
    "MIS", ["Reports filed.", "<em>Reports missing.</em>"], "OPD, critical cases and report completion for every facility — exported to Excel in one click.");
  dash("s07", [{ t: 0, c: [1000, 650], s: 1 }, { t: 2.0, c: [1610, 330], s: 1.7, d: 1.4 }],
    [{ t: 3.6, box: [1316, 152, 1906, 706], k: "g", label: "All Clear! No escalations pending.", place: "left", lw: 440 }],
    "Management visibility", ["Approvals and", "<em>escalations.</em>"], "Late login approvals, appearance checks and My Tasks — escalations surface for management.", true);

  // people & capability
  v.scene(11, (c) => {
    const T = [["115", "Total staff"], ["105", "Active"], ["7", "Inactive"], ["25", "Facilities"]];
    let h = `<div style="position:absolute;left:110px;top:140px;width:720px;display:flex;flex-direction:column;gap:26px;">${kicker(c, "k", "People & capability", 0.15)}${lines(c, "t", ["People and", "<em>capability.</em>"], { cls: "h2", t: 0.3 })}<p class="body" id="${c.id("b")}">Staff status, nurse training videos and scored assessments live in the same system.</p></div>`;
    c.ft(`#${c.id("b")}`, 0.9, 0.6, { opacity: 0, y: 16 }, { opacity: 1, y: 0, ease: "o" });
    T.forEach(([n, l], i) => {
      const id = c.id("t" + i), nid = c.id("n" + i);
      h += `<div class="stat" id="${id}" style="left:${110 + (i % 2) * 330}px;top:${560 + Math.floor(i / 2) * 210}px;"><b id="${nid}" style="${i === 2 ? "color:#ff8a90;" : ""}">${n}</b><span>${esc(l)}</span></div>`;
      c.ft(`#${id}`, 1.4 + i * 0.3, 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "e" });
      c.count(`#${nid}`, 0, Number(n), 1.5 + i * 0.3, 1.4);
    });
    c.sfx(1.4, "click_003.ogg", 0.35);
    h += shot(c, "tr", { file: "s15", x: 860, y: 140, w: 960, h: 560, t: 0.5, cams: [{ t: 0, c: [1000, 480], s: 1.05 }, { t: 4.0, c: [1000, 760], s: 1.05, d: 2.4, ease: "io" }], badge: { text: "Training Guide", x: 24, y: 24 } });
    h += shot(c, "ex", { file: "s17", x: 1380, y: 640, w: 440, h: 340, t: 2.0, sfx: false, tilt: [-10, -4], cams: [{ t: 0, c: [1000, 480], s: 1.9 }],
      hls: [{ t: 4.6, box: [1209, 492, 1580, 562], k: "g", label: "89.83%", place: "below", lw: 150 }] });
    return h;
  }, { name: "People" });

  // ecosystem
  v.scene(11.5, (c) => {
    const S = ["OHC", "Compliance", "Ambulance", "Inventory", "BMW", "Assets", "Incidents", "Facility", "BGV / BGC", "Audits", "Daily Logs", "Reports"];
    const cx = 960, cy = 575, rx = 690, ry = 340;
    let lns = "", h = "";
    S.forEach((s, i) => {
      const a = -Math.PI / 2 + (i / S.length) * 2 * Math.PI;
      const x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
      lns += `<line id="${c.id("l" + i)}" x1="${cx}" y1="${cy}" x2="${Math.round(x)}" y2="${Math.round(y)}" stroke="rgba(125,155,255,0.45)" stroke-width="3"/>`;
      h += `<div id="${c.id("s" + i)}" style="position:absolute;left:${Math.round(x - 130)}px;top:${Math.round(y - 30)}px;width:260px;display:flex;justify-content:center;"><span class="sat ${c.id("sv")}" style="position:relative;">${esc(s)}</span></div>`;
      c.ft(`#${c.id("s" + i)}`, 1.0 + i * 0.22, 0.45, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, ease: "b" });
      c.ft(`#${c.id("l" + i)}`, 1.0 + i * 0.22, 0.5, { opacity: 0 }, { opacity: 1, ease: "o" });
    });
    h = `<svg style="position:absolute;left:0;top:0;" width="1920" height="1080" viewBox="0 0 1920 1080" aria-hidden="true">${lns}</svg>` + h;
    h += `<div class="hub" id="${c.id("hub")}" style="left:${cx - 190}px;top:${cy - 190}px;"><div><small>PARKMED</small><b>COMMAND CENTER</b></div></div>`;
    c.ft(`#${c.id("hub")}`, 0.4, 0.8, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, ease: "b" });
    h += `<div style="position:absolute;left:110px;top:110px;">${kicker(c, "k", "One ecosystem", 0.2)}</div>`;
    // security layer wraps the ecosystem
    h += `<div class="ring solid" id="${c.id("ring")}" style="left:${cx - 900}px;top:${cy - 415}px;width:1800px;height:800px;"></div>`;
    c.ft(`#${c.id("ring")}`, 5.6, 1.0, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, ease: "e" });
    const SEC = ["Privacy", "Access Control", "Encryption", "OCI", "Security"];
    h += `<div style="position:absolute;left:0;right:0;top:972px;display:flex;justify-content:center;align-items:center;gap:14px;">${SEC.map((s, i) => `${i ? `<span class="${c.id("sp")}" style="font-family:'PJS';font-weight:800;font-size:28px;color:var(--green);">+</span>` : ""}<span class="chip g ${c.id("sc")}">${esc(s)}</span>`).join("")}</div>`;
    c.ft(`.${c.id("sc")}`, 6.2, 0.4, { opacity: 0, y: 14 }, { opacity: 1, y: 0, ease: "b", stagger: 0.25 });
    c.ft(`.${c.id("sp")}`, 6.4, 0.3, { opacity: 0 }, { opacity: 1, stagger: 0.25 });
    c.sfx(5.6, "impactSoft_medium_004.ogg", 0.5);
    c.sfx(1.0, "card-slide-1.ogg", 0.25);
    return h;
  }, { name: "Ecosystem + security layer" });

  endCard(v);
  return v;
}
