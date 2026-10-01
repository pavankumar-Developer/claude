# Hyperframes Composition Brief: Parkmed Operations Excellence (6-film series)

## Objective
Six premium enterprise product films for Parkmed Operations Excellence, one per chapter of
CONNECT → PROTECT → OPERATE → CONTROL → MOBILIZE → OPTIMIZE.

## Output
| Film | Composition | Render | Duration |
|---|---|---|---|
| 01 CONNECT — Digital OHC + Command Center | `v01-connect/composition/` | `v01-connect/brag.mp4` | 82.6s |
| 02 PROTECT — Secure by Design | `v02-secure-by-design/composition/` | `v02-secure-by-design/brag.mp4` | 85.3s |
| 03 OPERATE — OHC Operations | `v03-ohc-operations/composition/` | `v03-ohc-operations/brag.mp4` | 67.0s |
| 04 CONTROL — Compliance + Facility + Assets | `v04-compliance-assets/composition/` | `v04-compliance-assets/brag.mp4` | 63.0s |
| 05 MOBILIZE — Ambulance Management | `v05-ambulance/composition/` | `v05-ambulance/brag.mp4` | 62.0s |
| 06 OPTIMIZE — Management Intelligence | `v06-management-intelligence/composition/` | `v06-management-intelligence/brag.mp4` | 77.2s |

Format: landscape 1920×1080, 30fps. 4K UHD masters come from the same compositions via
`npx hyperframes render --resolution 4k` (Chrome renders at 2× device scale).

## How the compositions are built
- `tools/mask.py` + `tools/spec.json` — privacy masking of the 17 screenshots → `shared-assets/shots/`.
- `tools/lib.mjs` — the series design system as code: shared opening sting, end card,
  3D screenshot viewport with seek-safe camera moves and highlight callouts, flow
  diagrams, text columns. Emits static HTML (every scene is a timed `<section class="clip">`)
  plus a tween plan.
- `shared-assets/series.js` — inlined runtime that builds the single paused GSAP timeline
  (`window.__timelines[<id>]`) from the plan, plus counters and the audio-reactive glow.
- `shared-assets/series.css` — tokens, type scale, frames, chips, nodes, panels.
- `tools/v01.mjs` … `tools/v06.mjs` — one storyboard per film.
- Rebuild: `node tools/build.mjs v01 v02 v03 v04 v05 v06`, then in each
  `<film>/composition/`: `npx hyperframes check` → `npx hyperframes render`.

## Source material
- Prompt package `00_MASTER_README.md` … `09_CLAUDE_EXECUTION_INSTRUCTIONS.md` (user supplied)
- 17 application screenshots (masked; see `brag-plan.md` → Privacy)
- Copy that appears verbatim from the brief: every end card, "One digital command center for
  OHC operations.", "Healthcare data deserves protection at every layer.", "Web Application
  Firewall / Protecting application entry points from unwanted traffic.", "Role-Based Access
  Control / The right information. To the right role.", "Encryption at Rest / Protecting stored
  information.", "Encryption in Transit / Protecting information while it moves.", "Protection
  throughout the data lifecycle.", "Designed with DPDP requirements and privacy principles in
  mind.", "Sensitive information is protected from unnecessary exposure.", "Security events can
  be monitored and audited.", "Security isn't a layer added at the end. It's part of the
  operating model.", "Every OHC operation. Connected.", "From daily tasks to connected
  workflows.", "Compliance shouldn't wait for an audit.", "Monitor. Track. Alert. Act.",
  "Compliance becomes continuous visibility.", "From the OHC to the road.", "Ambulance
  operations. Digitized. Auditable. Visible.", "Turn operational data into management visibility."
- Every product number on screen (9 patients, 115 staff, 89.83%, 183 units, 638 days left,
  105/127/267 days left, 32 facilities, 11 modules …) is read off a screenshot.

## Creative direction
- Tone preset: `polished` with `cinematic` scale moments; enterprise healthcare, trustworthy.
- Avoid: generic SaaS language, neon/cyberpunk, unsupported security claims ("100% secure",
  "certified", "100% DPDP compliant"), invented modules (see Grounding decisions in the plan).

## Visual identity
Background #06122B · Surface #0E2147 · Text #F2F6FC · Muted #A9B8D3 · Accent #3D63F0 /
#7D9BFF · Parkmed green #5DB872 · Cyan (data flow only) #5BD3E6 · Plus Jakarta Sans /
Inter / JetBrains Mono (local woff2, `shared-assets/fonts/`).

## Audio
- Bed: `happy-beats-business-moves-vol-12` (bundled with /brag, ≈110 BPM) at 0.32 for the
  whole series — one sound identity.
- SFX (Kenney CC0, low high-frequency-risk picks): `bong_001` on every opening (lands on the
  0.56s beat), `impactSoft_medium_*` on major reveals, `drop_001` on screen entrances,
  `click_003` on simulated taps, `impactBell_heavy_000` on every end card.
- Audio-reactive: the two background glows breathe with the bed's low-band energy
  (precomputed per frame into `energy.json`, sampled with `tl.call` per frame).

## Validation
`npx hyperframes check` passes with 0 errors on all six (lint, runtime, layout, contrast —
39/39, 61/61, 33/33, 35/36, 27/27, 65/65 text checks).
