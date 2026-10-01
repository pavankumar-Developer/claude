// V02 — PROTECT · Secure by Design (conceptual security visuals, labelled as such)
import { Video, opening, endCard, lines, kicker, textCol, shot, chips, flow, fadeUp, esc } from "./lib.mjs";

const CONCEPT = (c) => { c.ft(`#${c.id("cx")}`, 0.6, 0.5, { opacity: 0 }, { opacity: 1, ease: "o" }); return `<div class="concept" id="${c.id("cx")}">Conceptual visual · not an application screen</div>`; };
const LOCK = (col = "#7d9bff", s = 34) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${col}" stroke-width="2.2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>`;
const SHIELD = (col = "#7d9bff", s = 60) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${col}" stroke-width="1.8"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/></svg>`;

export default function build() {
  const v = new Video({
    id: "v02-secure-by-design", num: 2, chapter: "PROTECT", title: "Secure by Design",
    endTitle: ["SECURE BY DESIGN"], endTag: "Privacy. Protection. Control.",
    endSub: "Parkmed Operations Excellence — designed for connected, privacy-conscious healthcare operations.",
  });
  opening(v);

  // hook
  v.scene(5, (c) => {
    c.sfx(0.3, "impactSoft_medium_001.ogg", 0.5);
    return `<div class="center">${kicker(c, "k", "Secure by design", 0.15)}${lines(c, "t", ["Healthcare data deserves", "protection at <em>every layer.</em>"], { cls: "h1", t: 0.35, stagger: 0.16 })}</div>`;
  }, { name: "Hook" });

  // architecture stack
  v.scene(10, (c) => {
    const L = [["USERS", "Web · Mobile"], ["SECURE CONNECTION", "Encrypted in transit"], ["WAF · WEB APPLICATION FIREWALL", "Filters traffic"],
      ["APPLICATION LAYER", "Parkmed application"], ["ACCESS CONTROL · IAM · RBAC", "Role-based"], ["APPLICATION DATA", "Operational records"],
      ["ENCRYPTED DATABASE / STORAGE", "Encrypted at rest"], ["ORACLE CLOUD · OCI", "Cloud platform"]];
    let st = `<div class="stack" style="left:900px;top:118px;width:920px;">`;
    L.forEach(([b, s], i) => {
      st += `<div class="layer ${i === 7 ? "hot" : ""}" id="${c.id("L" + i)}" style="padding:15px 28px;"><b style="font-size:27px;">${esc(b)}</b><span>${esc(s)}</span></div>`;
      if (i < 7) st += `<span class="vlink" style="height:22px;"><i id="${c.id("V" + i)}"></i></span>`;
      c.ft(`#${c.id("L" + i)}`, 0.6 + i * 0.55, 0.55, { opacity: 0, x: 60 }, { opacity: 1, x: 0, ease: "e" });
      if (i < 7) c.ft(`#${c.id("V" + i)}`, 0.95 + i * 0.55, 0.4, { scaleY: 0 }, { scaleY: 1, ease: "o", transformOrigin: "50% 0" });
    });
    st += `</div>`;
    // packet descends through the stack
    st += `<div class="pkt" id="${c.id("pk")}" style="left:1351px;top:140px;"></div>`;
    c.ft(`#${c.id("pk")}`, 5.4, 3.2, { opacity: 0, y: 0 }, { opacity: 1, y: 760, ease: "io" });
    c.to(`#${c.id("pk")}`, 8.6, 0.3, { opacity: 0 });
    c.sfx(0.6, "drop_001.ogg", 0.35);
    return textCol(c, { x: 110, w: 680, kick: "Security architecture", head: ["Protection at", "<em>every layer.</em>"],
      body: "From the user's device to Oracle Cloud (OCI), each layer of the path adds its own protection." }) + st + CONCEPT(c);
  }, { name: "Architecture" });

  // WAF
  v.scene(8, (c) => {
    let h = `<div style="position:absolute;left:0;right:0;top:120px;display:flex;flex-direction:column;align-items:center;gap:22px;text-align:center;">
      ${kicker(c, "k", "WAF", 0.15)}${lines(c, "t", ["Web Application Firewall"], { cls: "h2", t: 0.3 })}
      <p class="body" id="${c.id("b")}" style="font-size:32px;">Protecting application entry points from unwanted traffic.</p></div>`;
    fadeUp(c, `#${c.id("b")}`, 0.8, { y: 16 });
    const node = (k, x, y, w, label, sub, cls = "") => { c.ft(`#${c.id(k)}`, 1.1, 0.6, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "e" }); return `<div class="node ${cls}" id="${c.id(k)}" style="position:absolute;left:${x}px;top:${y}px;width:${w}px;"><small>${esc(sub)}</small>${esc(label)}</div>`; };
    h += node("in1", 170, 520, 300, "Normal request", "INTERNET");
    h += node("in2", 170, 760, 300, "Unwanted request", "INTERNET", "bad");
    h += `<div id="${c.id("waf")}" style="position:absolute;left:810px;top:470px;width:300px;height:430px;border-radius:26px;background:#10285c;border:3px solid var(--accent-hi);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;box-shadow:0 0 80px rgba(61,99,240,0.45);">${SHIELD("#9db3ff", 96)}<b style="font-family:'PJS';font-size:40px;">WAF</b><span style="font-family:'MONO';font-size:18px;letter-spacing:0.14em;color:var(--muted);">INSPECTS EVERY REQUEST</span></div>`;
    c.ft(`#${c.id("waf")}`, 1.3, 0.7, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, ease: "b" });
    h += node("app", 1450, 520, 300, "Application", "PARKMED", "ok");
    // lanes
    h += `<span style="position:absolute;left:470px;top:566px;width:980px;height:4px;background:rgba(125,155,255,0.3);"></span>`;
    h += `<span style="position:absolute;left:470px;top:806px;width:340px;height:4px;background:rgba(240,82,90,0.4);"></span>`;
    h += `<div class="pkt" id="${c.id("p1")}" style="left:470px;top:559px;"></div><div class="pkt bad" id="${c.id("p2")}" style="left:470px;top:799px;"></div>`;
    c.ft(`#${c.id("p1")}`, 2.4, 2.2, { x: 0, opacity: 0 }, { x: 962, opacity: 1, ease: "io" });
    c.ft(`#${c.id("p2")}`, 3.0, 1.3, { x: 0, opacity: 0 }, { x: 322, opacity: 1, ease: "i" });
    c.to(`#${c.id("p2")}`, 4.3, 0.3, { scale: 2.2, opacity: 0, ease: "o" });
    h += `<div id="${c.id("ok")}" class="chip g" style="position:absolute;left:1490px;top:440px;font-family:'MONO';letter-spacing:0.14em;">✓ ALLOWED</div>`;
    h += `<div id="${c.id("no")}" style="position:absolute;left:1180px;top:770px;font-family:'PJS';font-weight:800;font-size:56px;color:#fff;background:#c4323a;padding:10px 30px;border-radius:14px;letter-spacing:0.08em;box-shadow:0 0 60px rgba(240,82,90,0.5);">BLOCKED</div>`;
    c.ft(`#${c.id("ok")}`, 4.6, 0.5, { opacity: 0, y: 12 }, { opacity: 1, y: 0, ease: "b" });
    c.ft(`#${c.id("no")}`, 4.35, 0.45, { opacity: 0, scale: 1.4, rotation: -6 }, { opacity: 1, scale: 1, rotation: -3, ease: "b" });
    c.sfx(4.35, "impactSoft_medium_004.ogg", 0.55);
    return h + CONCEPT(c);
  }, { name: "WAF" });

  // network path
  v.scene(5.5, (c) => {
    let h = `<div style="position:absolute;left:110px;top:200px;">${kicker(c, "k", "Network security", 0.15)}<div style="height:24px"></div>${lines(c, "t", ["A layered path", "to the <em>data.</em>"], { cls: "h2", t: 0.3 })}</div>`;
    h += flow(c, "f", ["Internet", "WAF", "Secure Network", "Application Layer", "Data Layer", ["Encrypted Data", "ok"]], { y: 610, t: 0.7, gap: 0.42, fs: 26, linkW: 44, hotLast: false });
    h += `<div class="pkt" id="${c.id("pk")}" style="left:130px;top:652px;"></div>`;
    c.ft(`#${c.id("pk")}`, 3.4, 1.5, { x: 0, opacity: 0 }, { x: 1640, opacity: 1, ease: "io" });
    c.to(`#${c.id("pk")}`, 4.9, 0.2, { opacity: 0 });
    return h + CONCEPT(c);
  }, { name: "Network" });

  // RBAC roles
  v.scene(7, (c) => {
    let h = `<div style="position:absolute;left:0;right:0;top:120px;display:flex;flex-direction:column;align-items:center;gap:20px;">${kicker(c, "k", "IAM · RBAC", 0.15)}${lines(c, "t", ["Role-Based Access Control"], { cls: "h2", t: 0.3 })}<p class="body" id="${c.id("b")}" style="font-size:34px;color:#dbe4f7;">The right information. To the right role.</p></div>`;
    fadeUp(c, `#${c.id("b")}`, 0.9, { y: 16 });
    const R = [["Management", ["MIS", "Audits", "Management dashboards"]], ["Operations", ["Operational workflows", "Incidents", "Facilities"]],
      ["Nurse", ["Relevant healthcare workflows"]], ["Ambulance team", ["Ambulance operations"]]];
    R.forEach(([name, mods], i) => {
      const x = 130 + i * 425;
      h += `<div class="role" id="${c.id("r" + i)}" style="left:${x}px;top:430px;width:390px;"><b>${esc(name)}</b>${mods.map((m) => `<span class="m ${c.id("m" + i)}">${esc(m)}</span>`).join("")}</div>`;
      c.ft(`#${c.id("r" + i)}`, 1.4 + i * 0.35, 0.6, { opacity: 0, y: 50, rotationX: -30, transformPerspective: 1200 }, { opacity: 1, y: 0, rotationX: 0, transformPerspective: 1200, ease: "e" });
      c.ft(`.${c.id("m" + i)}`, 2.0 + i * 0.35, 0.4, { opacity: 0, x: -14 }, { opacity: 1, x: 0, ease: "o", stagger: 0.12 });
    });
    c.sfx(1.4, "card-slide-1.ogg", 0.3);
    return h + CONCEPT(c);
  }, { name: "RBAC roles" });

  // RBAC — actual screen
  v.scene(6.5, (c) => {
    let h = textCol(c, { x: 110, w: 640, kick: "Access, per module", head: ["Full access,", "or <em>partial access.</em>"],
      body: "When a facility manager is created, access is granted module by module — 11 modules, chosen individually." });
    h += shot(c, "s", { file: "s06", x: 840, y: 110, w: 960, h: 860, t: 0.3, badge: { text: "Actual application screen", x: 24, y: 24 },
      cams: [{ t: 0, c: [737, 768], s: 1 }, { t: 2.2, c: [748, 1180], s: 1.45, d: 1.4 }],
      hls: [{ t: 3.6, box: [128, 998, 418, 1046], label: "Access Type", place: "above" }, { t: 4.2, box: [128, 1200, 1370, 1358], k: "g", label: "11 modules selected", place: "above" }] });
    return h;
  }, { name: "RBAC actual screen" });

  // authentication
  v.scene(5, (c) => {
    let h = `<div style="position:absolute;left:110px;top:220px;">${kicker(c, "k", "Authentication", 0.15)}<div style="height:24px"></div>${lines(c, "t", ["Verified before", "<em>access.</em>"], { cls: "h2", t: 0.3 })}</div>`;
    h += flow(c, "f", ["User", "Authentication", "Role Verification", "Authorized Application Access"], { y: 640, t: 0.7, gap: 0.55, fs: 30, linkW: 80 });
    c.sfx(2.4, "click_003.ogg", 0.4);
    return h + CONCEPT(c);
  }, { name: "Authentication" });

  // encryption at rest + in transit
  v.scene(9, (c) => {
    let h = `<div style="position:absolute;left:110px;top:150px;width:780px;">${kicker(c, "k1", "Encryption at rest", 0.15)}<div style="height:18px"></div>${lines(c, "t1", ["Encryption at Rest"], { cls: "h2", t: 0.3 })}<p class="body" id="${c.id("b1")}" style="margin-top:14px;">Protecting stored information.</p></div>`;
    fadeUp(c, `#${c.id("b1")}`, 0.8, { y: 14 });
    h += `<div style="position:absolute;left:1030px;top:150px;width:780px;">${kicker(c, "k2", "Encryption in transit", 4.2)}<div style="height:18px"></div>${lines(c, "t2", ["Encryption in Transit"], { cls: "h2", t: 4.35 })}<p class="body" id="${c.id("b2")}" style="margin-top:14px;">Protecting information while it moves.</p></div>`;
    fadeUp(c, `#${c.id("b2")}`, 4.85, { y: 14 });
    // at rest: records drop into storage and lock
    h += `<div id="${c.id("db")}" style="position:absolute;left:300px;top:600px;width:360px;height:330px;border-radius:30px;background:#10285c;border:3px solid rgba(125,155,255,0.6);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:30px;gap:12px;"><span style="font-family:'MONO';font-size:18px;letter-spacing:0.16em;color:var(--muted);">DATABASE / STORAGE</span></div>`;
    c.ft(`#${c.id("db")}`, 0.9, 0.6, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "e" });
    ["Patient visit", "Ailment record", "MIS report"].forEach((r, i) => {
      const id = c.id("rec" + i), lk = c.id("lk" + i);
      h += `<div id="${id}" class="chip" style="position:absolute;left:330px;top:${640 + i * 66}px;width:300px;text-align:center;font-size:22px;">${esc(r)}</div>`;
      h += `<div id="${lk}" style="position:absolute;left:330px;top:${640 + i * 66}px;width:300px;height:52px;border-radius:999px;background:#17306a;border:2px solid var(--accent-hi);display:flex;align-items:center;justify-content:center;gap:12px;font-family:'MONO';font-size:20px;color:#dbe4f7;">${LOCK("#9db3ff", 24)} ENCRYPTED</div>`;
      c.ft(`#${id}`, 1.4 + i * 0.4, 0.6, { opacity: 0, y: -160 }, { opacity: 1, y: 0, ease: "o2" });
      c.to(`#${id}`, 2.6 + i * 0.3, 0.35, { opacity: 0 });
      c.ft(`#${lk}`, 2.6 + i * 0.3, 0.4, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, ease: "b" });
    });
    c.sfx(2.6, "click_003.ogg", 0.45);
    // in transit: tunnel
    h += `<div id="${c.id("tun")}" style="position:absolute;left:1030px;top:700px;width:780px;height:120px;border-radius:60px;border:3px solid rgba(91,211,230,0.6);background:rgba(91,211,230,0.07);"></div>`;
    c.ft(`#${c.id("tun")}`, 4.6, 0.6, { opacity: 0, scaleX: 0.6 }, { opacity: 1, scaleX: 1, ease: "e" });
    ["User Device", "Secure Connection", "Application", "Database"].forEach((n, i) => {
      const id = c.id("tn" + i);
      h += `<div id="${id}" style="position:absolute;left:${1030 + i * 196}px;top:850px;width:190px;text-align:center;font-family:'PJS';font-weight:700;font-size:22px;color:var(--text);">${esc(n)}</div>`;
      c.ft(`#${id}`, 4.9 + i * 0.25, 0.4, { opacity: 0, y: 12 }, { opacity: 1, y: 0, ease: "o" });
    });
    for (let i = 0; i < 4; i++) {
      const id = c.id("tp" + i);
      h += `<div id="${id}" style="position:absolute;left:1060px;top:742px;width:64px;height:36px;border-radius:10px;background:#17306a;border:2px solid var(--cyan);display:flex;align-items:center;justify-content:center;">${LOCK("#5bd3e6", 20)}</div>`;
      c.ft(`#${id}`, 5.6 + i * 0.5, 2.0, { x: 0, opacity: 0 }, { x: 640, opacity: 1, ease: "io" });
    }
    return h + CONCEPT(c);
  }, { name: "Encryption" });

  // data lifecycle
  v.scene(6, (c) => {
    const N = ["COLLECT", "PROCESS", "STORE", "ACCESS", "USE", "REPORT", "RETAIN / ARCHIVE"];
    const cx = 1260, cy = 580, R = 320;
    let h = `<div style="position:absolute;left:110px;top:0;bottom:0;width:620px;display:flex;flex-direction:column;justify-content:center;gap:26px;">${kicker(c, "k", "Data lifecycle", 0.15)}${lines(c, "t", ["Protection", "throughout the", "<em>data lifecycle.</em>"], { cls: "h2", t: 0.3 })}</div>`;
    h += `<svg style="position:absolute;left:${cx - R}px;top:${cy - R}px;" width="${2 * R}" height="${2 * R}" viewBox="0 0 ${2 * R} ${2 * R}" aria-hidden="true"><circle cx="${R}" cy="${R}" r="${R - 4}" fill="none" stroke="rgba(125,155,255,0.25)" stroke-width="4"/><circle id="${c.id("arc")}" cx="${R}" cy="${R}" r="${R - 4}" fill="none" stroke="#5bd3e6" stroke-width="5" stroke-linecap="round" stroke-dasharray="${Math.round(2 * Math.PI * (R - 4))}" transform="rotate(-90 ${R} ${R})"/></svg>`;
    c.ft(`#${c.id("arc")}`, 0.6, 4.0, { strokeDashoffset: Math.round(2 * Math.PI * (R - 4)) }, { strokeDashoffset: 0, ease: "io" });
    h += `<div id="${c.id("core")}" style="position:absolute;left:${cx - 120}px;top:${cy - 120}px;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,#24489e,#12285c);border:3px solid var(--accent-hi);display:flex;align-items:center;justify-content:center;">${SHIELD("#cfd9ff", 110)}</div>`;
    c.ft(`#${c.id("core")}`, 0.5, 0.6, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, ease: "b" });
    N.forEach((n, i) => {
      const a = -Math.PI / 2 + (i / N.length) * 2 * Math.PI;
      const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
      const id = c.id("n" + i);
      h += `<div id="${id}" style="position:absolute;left:${Math.round(x - 120)}px;top:${Math.round(y - 30)}px;width:240px;display:flex;justify-content:center;"><span class="node" style="font-size:22px;padding:14px 20px;">${esc(n)}</span></div>`;
      c.ft(`#${id}`, 0.7 + i * 0.55, 0.45, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, ease: "b" });
    });
    return h + CONCEPT(c);
  }, { name: "Lifecycle" });

  // privacy + masking
  v.scene(9, (c) => {
    const P = ["Purposeful Data Use", "Controlled Access", "Data Minimization", "Privacy-Conscious Processing", "Secure Storage", "Responsible Retention", "Auditability"];
    let h = `<div style="position:absolute;left:110px;top:120px;width:1700px;">${kicker(c, "k", "DPDP · Privacy", 0.15)}<div style="height:18px"></div>${lines(c, "t", ["Designed with DPDP requirements", "and <em>privacy principles</em> in mind."], { cls: "h2", t: 0.3, style: "font-size:58px;" })}</div>`;
    h += `<div class="panel" id="${c.id("pp")}" style="left:110px;top:400px;width:760px;height:600px;"><div class="ph"><span>Data Privacy &amp; Protection</span><span>${LOCK("#a9b8d3", 24)}</span></div>
      ${P.map((p, i) => `<div class="row ${c.id("pr")}" style="padding:14px 28px;font-size:25px;"><span style="color:var(--green);font-family:'PJS';font-weight:800;">✓</span>${esc(p)}</div>`).join("")}</div>`;
    c.ft(`#${c.id("pp")}`, 0.9, 0.6, { opacity: 0, x: -40 }, { opacity: 1, x: 0, ease: "e" });
    c.ft(`.${c.id("pr")}`, 1.4, 0.4, { opacity: 0, x: -16 }, { opacity: 1, x: 0, ease: "o", stagger: 0.32 });
    const M = [["Name", "Pavan Kumar", "P********"], ["Phone", "98765 01234", "******1234"], ["Medical information", "Fever · Headache", "Protected / masked"]];
    h += `<div class="panel" id="${c.id("mp")}" style="left:960px;top:400px;width:850px;height:430px;"><div class="ph"><span>Data masking · fictional example</span></div>
      ${M.map(([k, a, b], i) => `<div class="row" style="padding:26px 28px;"><span style="width:300px;font-family:'MONO';font-size:20px;letter-spacing:0.1em;color:var(--muted);text-transform:uppercase;">${esc(k)}</span><span style="position:relative;display:block;width:420px;height:40px;"><span id="${c.id("a" + i)}" style="position:absolute;left:0;top:0;font-family:'PJS';font-weight:700;font-size:30px;">${esc(a)}</span><span id="${c.id("b" + i)}" style="position:absolute;left:0;top:0;font-family:'MONO';font-weight:600;font-size:30px;color:var(--cyan);">${esc(b)}</span></span></div>`).join("")}</div>`;
    c.ft(`#${c.id("mp")}`, 1.2, 0.6, { opacity: 0, x: 40 }, { opacity: 1, x: 0, ease: "e" });
    M.forEach((_, i) => {
      c.ft(`#${c.id("a" + i)}`, 1.6, 0.3, { opacity: 0 }, { opacity: 1 });
      c.to(`#${c.id("a" + i)}`, 3.6 + i * 0.45, 0.35, { opacity: 0, filter: "blur(8px)", ease: "i" });
      c.ft(`#${c.id("b" + i)}`, 3.8 + i * 0.45, 0.4, { opacity: 0, y: 10 }, { opacity: 1, y: 0, ease: "o" });
    });
    c.sfx(3.6, "click_003.ogg", 0.4);
    h += `<p class="body" id="${c.id("cap")}" style="position:absolute;left:960px;top:860px;width:850px;color:#dbe4f7;">Sensitive information is protected from unnecessary exposure.</p>`;
    fadeUp(c, `#${c.id("cap")}`, 5.4, { y: 14 });
    return h + CONCEPT(c);
  }, { name: "Privacy & masking" });

  // audit log + monitoring
  v.scene(7.5, (c) => {
    const EV = [["LOGIN", "09:02:14"], ["ACCESS", "09:02:40"], ["UPDATE", "09:05:11"], ["REPORT", "09:12:03"], ["EXPORT", "09:12:47"], ["ADMIN ACTION", "09:20:30"]];
    let h = `<div style="position:absolute;left:110px;top:120px;width:1700px;">${kicker(c, "k", "Audit · Monitoring", 0.15)}<div style="height:18px"></div>${lines(c, "t", ["Security events can be", "<em>monitored and audited.</em>"], { cls: "h2", t: 0.3, style: "font-size:58px;" })}</div>`;
    h += `<div class="panel" id="${c.id("lg")}" style="left:110px;top:400px;width:980px;height:590px;"><div class="ph"><span>Security event log</span><span>Demo data</span></div>
      ${EV.map(([e, t]) => `<div class="row ${c.id("ev")}"><span class="tag">${e}</span><span class="tm">${t}</span><span style="color:var(--muted);font-size:24px;">user · demo role</span><span class="st">RECORDED</span></div>`).join("")}</div>`;
    c.ft(`#${c.id("lg")}`, 0.9, 0.6, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "e" });
    c.ft(`.${c.id("ev")}`, 1.3, 0.35, { opacity: 0, x: -14 }, { opacity: 1, x: 0, ease: "o", stagger: 0.3 });
    const S = ["Detect", "Monitor", "Alert", "Investigate"];
    h += `<div style="position:absolute;left:1210px;top:400px;width:600px;display:flex;flex-direction:column;">`;
    S.forEach((s, i) => {
      h += `<div class="node ${i === 2 ? "hot" : ""}" id="${c.id("s" + i)}" style="font-size:30px;">${esc(s)}</div>`;
      if (i < 3) h += `<span class="vlink" style="height:40px;"><i id="${c.id("sv" + i)}"></i></span>`;
      c.ft(`#${c.id("s" + i)}`, 2.0 + i * 0.6, 0.45, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: "e" });
      if (i < 3) c.ft(`#${c.id("sv" + i)}`, 2.3 + i * 0.6, 0.4, { scaleY: 0 }, { scaleY: 1, transformOrigin: "50% 0", ease: "o" });
    });
    h += `</div>`;
    return h + CONCEPT(c);
  }, { name: "Audit & monitoring" });

  // ending — layers together
  v.scene(6, (c) => {
    const C = ["WAF", "Network Security", "Access Control", "Encryption", "Monitoring", "Audit", "Data Protection", "OCI"];
    let h = `<div style="position:absolute;left:0;right:0;top:250px;display:flex;justify-content:center;flex-wrap:wrap;gap:16px;padding:0 120px;">`;
    C.forEach((n, i) => { h += `<span class="node ${i === C.length - 1 ? "hot" : ""}" id="${c.id("c" + i)}" style="font-size:26px;padding:18px 26px;">${esc(n)}</span>`; c.ft(`#${c.id("c" + i)}`, 0.3 + i * 0.18, 0.4, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "b" }); });
    h += `</div><div style="position:absolute;left:0;right:0;top:520px;text-align:center;">${lines(c, "t", ["Security isn't a layer added at the end.", "<em>It's part of the operating model.</em>"], { cls: "h2", t: 2.0, stagger: 0.5 })}</div>`;
    c.sfx(2.0, "impactSoft_medium_001.ogg", 0.5);
    return h;
  }, { name: "Ending" });

  endCard(v);
  return v;
}
