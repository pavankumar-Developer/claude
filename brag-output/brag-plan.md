# Brag Plan: Parkmed Operations Excellence — six-film series

Source of truth: the user's prompt package (`00`–`09` .md files) plus 17 application
screenshots (Audit & Reports, Centric Dashboards & RBAC, Employee/Patient/Nurse Training).
The Figma deck link could not be read (no Figma token in this environment), so the visual
identity comes from the screenshots themselves.

## What is this app?
Parkmed is a digital operating layer for Occupational Health Centres (OHCs): nurse tasks,
wellness-room patients, ailments/MIS reporting, medicine inventory, ambulance audits,
facility documents and management dashboards — on web and mobile.

## The angle
CONNECT → PROTECT → OPERATE → CONTROL → MOBILIZE → OPTIMIZE. Six business stories, not six
feature lists. Every product claim on screen is either visible in a screenshot or is the
user's own approved copy from the prompt package.

## Duration (deliberate override of /brag's 15–25s law)
The user's brief sets the lengths: V1 75–90s, V2 75–90s, V3/V4/V5 60–75s, V6 75–90s.
Short social cut-downs (20–30s) are a later deliverable.

## Tone
- Preset: `polished` (structure) with `cinematic` scale moments
- Creative direction: premium enterprise healthcare product film — trustworthy, data-driven,
  restrained. Deep navy stage, white UI, Parkmed blue accent, subtle cyan data streams.
  No neon, no cyberpunk, no gaming effects.
- Interpretation: fewer, longer holds; camera push-ins and 3D tilt on real screens; every
  sentence holds ≥0.3s/word.

## Format: landscape 1920×1080, 30fps (4K UHD via `--resolution 4k` from the same composition)

## Visual identity (from the screenshots)
- Stage background: #06122B deep navy (screens are light UI, so they float on navy)
- Surface: #0E2147 · Line: #1F3B70
- Text: #F2F6FC · Muted: #A9B8D3
- Accent (Parkmed UI blue): #3D63F0 (UI uses #1F44D6; brightened for dark stage)
- Parkmed green (logo, "Pass"/"Active"): #5DB872
- Subtle cyan (data flow only): #5BD3E6 · Alert red #F0525A · Amber #F2B33D
- Display: Plus Jakarta Sans 700–800 · Body: Inter · Metadata: JetBrains Mono
- Strongest visual elements: the OHC dashboard (s04), the ailments/MIS calendar grids
  (s02/s05), the ambulance weekly checklist (s03), the mobile task list (s12/s13)

## Privacy (applied before any composition work)
All screenshots were masked into `composition/assets/shots/` by `tools/mask.py`:
- Blurred: every person's name, employee ID, nursing-staff list, wellness-room patient
  name + employee ID, exam-result employee, ambulance registration number, driver and
  "conducted by" names, nurse photos in the Fit Check guide.
- Replaced with fictional demo text: logged-in org ("Ops Admin"), client facility names
  (e.g. "Northgate Campus", "Riverside Ops"), the "PMH204" assignment ID → "PMH000",
  the mobile username → "DEMO.NURSE", the default password shown on the Create Facility
  Manager form → "••••••".
- Video 2 uses the prompt's own fictional masking example (Pavan Kumar → P********).

## Grounding decisions (do not invent functionality)
Requested in the brief but **not evidenced by any screenshot**, so left out (or replaced
by the nearest evidenced module) until screens are supplied:
- OCR (V3), dedicated Asset / Asset-lifecycle screens (V3/V4) — V4 uses the evidenced
  calibration-due and document-validity countdowns instead.
- SLA and SCA (V4, V6 ecosystem) — not shown in any screen.
- Ambulance "Daily Log" and "Issue → Action" (V5) — the evidenced artefact is the
  *Ambulance Weekly Checklist* with Pass results and Download Report.
- Backup / recovery (V2) — "only if part of the infrastructure"; unconfirmed, omitted.
- Specific OCI service names (V2) — only "Oracle Cloud (OCI)" as the platform layer, as
  written in the brief. All V2 visuals are labelled "Conceptual architecture".

## Screenshot → Module → Video map
| Shot | Module | Used in |
|---|---|---|
| s04 OHC dashboard (patients, visits, resting, consults, symptoms) | Command Center | V1, V6 |
| s02 Ailments Overview (per-facility calendars, critical, days not filed) | Ailments | V1, V4, V6 |
| s05 Facilities Overview — Daily MIS Report Dashboard | MIS | V1, V4, V6 |
| s07 Ops home (late login approvals, appearance check, facility cards) | Mgmt visibility / Facility / BGC pending | V1, V4, V5, V6 |
| s01 Manage Nurses (115 staff / 25 facilities / 105 active / 7 inactive) | Workforce | V1, V6 |
| s06 Create Facility Manager (full / partial access, 11 modules) | RBAC (actual screen) | V2, V4, V5 |
| s08 Nurse home (daily checklist, wellness room, quick actions) | OHC operations | V3, V5 |
| s09 Medicine detail (stock, consumed, batch expiry) | Inventory | V3 |
| s11 Medicine Inventory (12 medicines, request stock) | Inventory | V3 |
| s10 Facility Documents (BMW agreement, BGC documents) | BMW / BGC | V3, V4 |
| s12 Mobile — Today Tasks (Ambulance, Incident, shift-start & daily tasks) | Tasks / Incidents | V1, V3, V5 |
| s13 Mobile — All Shortcuts (Daily MIS, BMW, Scan QR, Alerts, SOS…) | Operations | V3 |
| s14 Wellness Room (waiting, on hold, resting beds, today history) | Patients | V3 |
| s15 Training Guide (nurse training videos) | Training | V6 |
| s16 Fit Check (do / don't, upload picture) | Fit Check | V1 |
| s17 Examination Result (BMW, Critical, AED, Allergy test — 89.83%) | Assessments | V1, V6 |
| s03 Ambulance Weekly Checklist (calibration, documents, equipment, vehicle) | Ambulance audit | V1, V4, V5 |

## Series branding
- Opening (2.8s): Parkmed wordmark draws on, "OPERATIONS EXCELLENCE", chapter tag
  ("01 · CONNECT").
- End card (4.5s): headline + tagline + the six-chapter strip with the current chapter lit.
- Transition language: depth push (scale + blur) between scenes, masked wipes on text.
- Sound identity: one bed for the whole series — `happy-beats-business-moves-vol-12`
  (≈110 BPM, steady, clean) at 0.32, a soft bong on the open, soft impacts on major
  reveals, light clicks on simulated taps, a bell on the end card. Polished restraint.

## Audio direction
- Role: warm, confident bed; sparse professional accents
- Music cue guidance: vol-12 preset (109.96 BPM, beat ≈0.545s). Openings land on the
  0.56s beat; end-card lockups land on a beat. Sequential text reveals use every other
  beat (≈1.09s) so lines stay readable.
- Audio-reactive: subtle — the background glow breathes with the bed (precomputed RMS).
- Restraint rule: no SFX on every card; no high-frequency clicks repeated.

## Share copy (draft)
Parkmed Operations Excellence: one connected digital operating layer for OHC operations —
from fit checks and ailments to ambulance audits and management MIS.

---

## Storyboards

### V01 — CONNECT · Digital OHC + Operations Command Center (≈83s)
1. Open — 2.8s — series sting, "01 · CONNECT".
2. Fragmented — 8.2s — "OHC operations used to live everywhere." Nine fragment cards arrive
   one by one (Spreadsheets, Paper registers, Disconnected reports, Manual records, Health
   assessments, Inventory, Compliance, Ambulance logs, Incidents), scattered and tilted.
3. Converge — 5.5s — cards are pulled into one point → "PARKMED OPERATIONS COMMAND CENTER".
4. Command Center — 10.5s — s04 in 3D, push-in; callouts on Total Patients, Employee Visits,
   Resting Patients, Top 10 Symptoms Distribution.
5. Fit Check — 9s — s16 + s12 phones: "Fit Check & Appearance Verification" at shift start.
6. Ailments — 10s — s02 pans; callouts "1 Critical", "24 days not filed", "All facilities (32)".
7. MIS — 9s — s05 Daily MIS Report Dashboard; completion rings, Download Excel (All).
8. Audits & Assessments — 10s — s03 Pass column + s17 Assessment Summary 89.83%.
9. Management visibility — 10s — s07 approvals / appearance check / facility cards + s01 stats.
10. Core — 4s — "One digital command center for OHC operations."
11. End — 4.5s — PARKMED OPERATIONS EXCELLENCE · Digital OHC. Connected Operations.

### V02 — PROTECT · Secure by Design (≈89s, conceptual visuals, labelled as such)
1. Open — 2.8s
2. Hook — 5.7s — "Healthcare data deserves protection at every layer."
3. Architecture — 10.5s — USERS → SECURE CONNECTION → WAF → APPLICATION LAYER →
   ACCESS CONTROL / IAM / RBAC → APPLICATION DATA → ENCRYPTED DATABASE / STORAGE → ORACLE CLOUD / OCI.
4. WAF — 8.5s — normal request passes; unwanted request → BLOCKED.
5. Network — 6.5s — Internet → WAF → Secure Network → Application Layer → Data Layer → Encrypted Data.
6. RBAC — 11s — four role cards; then the actual Create Facility Manager screen (s06,
   "Actual application screen") showing Full / Partial access and 11 modules.
7. Authentication — 5s — User → Authentication → Role Verification → Authorized Application Access.
8. Encryption — 9s — at rest (records lock into storage) + in transit (packets through a secure tunnel).
9. Lifecycle — 6s — COLLECT → PROCESS → STORE → ACCESS → USE → REPORT → RETAIN / ARCHIVE.
10. Privacy — 9s — DATA PRIVACY & PROTECTION principles; masking demo; DPDP line.
11. Audit + monitoring — 7s — audit event log; Detect → Monitor → Alert → Investigate.
12. Ending — 6s — the layer chain; "Security isn't a layer added at the end. It's part of the operating model."
13. End — 4.5s — SECURE BY DESIGN · Privacy. Protection. Control.

### V03 — OPERATE · OHC Operations (≈70s)
1. Open — 2.8s
2. Hook — 4.7s — "Every OHC operation. Connected."
3. Shift tasks — 9.5s — s12: Fit Check & Appearance Verification, First Aid Checklist,
   Crash Cart Checklist, Biomedical Waste, Daily MIS Report.
4. BMW — 8.5s — s13 BMW shortcut + s10 BIO MEDICAL WASTE agreement "Valid until … Active".
5. Inventory — 12.5s — s11 grid → s09 detail (183 units, 3 consumed, batch expiry, stock status).
6. Wellness Room — 9s — s14 + s08 (Receive Patient, quick actions).
7. Alerts & incidents — 8s — Incident, SOS, Alerts, CRITICAL ALERT.
8. Chain — 7s — BMW → Inventory → Wellness Room → Incident → Command Center (fast cuts).
9. Core — 4s — "From daily tasks to connected workflows."
10. End — 4.5s — OHC OPERATIONS · Every Workflow. Connected.

### V04 — CONTROL · Compliance + Facility + Assets (≈67s)
1. Open — 2.8s
2. Hook — 4.7s — "Compliance shouldn't wait for an audit."
3. Facility — 10.5s — s07 facility cards + filters; s06 module access.
4. BGC — 10s — s10 BGC documents per employee; BGC PENDING counts.
5. Facility compliance — 10s — s05 days not filed / critical / completion.
6. Expiry & calibration — 11s — s03 calibration due dates + document validity countdowns.
7. Flow — 9s — Facility → Compliance → Alert → Action → Audit; "Monitor. Track. Alert. Act."
8. Final — 4.5s — "Compliance becomes continuous visibility."
9. End — 4.5s — COMPLIANCE & ASSETS · Continuous Operational Visibility.

### V05 — MOBILIZE · Ambulance Management (≈64s)
1. Open — 2.8s
2. Hook — 6.2s — "From the OHC to the road." Conceptual ambulance on a route line.
3. Entry points — 8s — mobile Ambulance button, "Ambulance Only" facility filter, Ambulance quick action.
4. Weekly checklist — 10s — s03 header: facility, check date, status SUBMITTED, alcohol test.
5. Checks — 10s — Equipment Check + Vehicle Condition, Pass results one by one.
6. Documentation — 8s — document validity countdowns.
7. Report — 6s — Download Report; "Ambulance Audit History" module.
8. Flow — 5s — Ambulance → Weekly Checklist → Audit → Report → Command Center.
9. Core + End — 8.5s — "Ambulance operations. Digitized. Auditable. Visible." → AMBULANCE MANAGEMENT.

### V06 — OPTIMIZE · Management Intelligence (≈82s)
1. Open — 2.8s
2. Hook — 5.2s — "Turn operational data into management visibility."
3. Streams — 10s — ten data streams converge into the command center.
4. Flow — 7s — Data → Information → MIS → Management Visibility → Action.
5. Dashboards — 27s — s04, s02, s05, s07 with callouts.
6. People — 10s — s01 workforce stats, s17 assessments, s15 training.
7. Ecosystem — 10s — PARKMED COMMAND CENTER hub with connected modules.
8. Security overlay — 5s — Privacy + Access Control + Encryption + OCI + Security.
9. End — 4.5s — PARKMED OPERATIONS EXCELLENCE · From Data to Operational Excellence.
