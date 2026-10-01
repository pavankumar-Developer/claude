# Parkmed Operations Excellence — six-film series

Made with `/brag --full` (Hyperframes) from the Operations prompt package and 17 masked
application screenshots. Plan and storyboards: `brag-plan.md`. Hand-off brief: `composition-brief.md`.

| # | Film | Folder | Length |
|---|---|---|---|
| 01 | CONNECT — Digital OHC + Command Center | `v01-connect/` | 82.6s |
| 02 | PROTECT — Secure by Design | `v02-secure-by-design/` | 85.3s |
| 03 | OPERATE — OHC Operations | `v03-ohc-operations/` | 67.0s |
| 04 | CONTROL — Compliance + Facility + Assets | `v04-compliance-assets/` | 63.0s |
| 05 | MOBILIZE — Ambulance Management | `v05-ambulance/` | 62.0s |
| 06 | OPTIMIZE — Management Intelligence | `v06-management-intelligence/` | 77.2s |

Each folder holds `composition/index.html`, `brag.jpg` (poster), `share-copy.txt`; `brag.mp4`
is rendered locally (not committed).

## Rebuild and render
```bash
cd brag-output
python3 tools/mask.py <raw.png> shared-assets/shots/sNN.png tools/spec.json sNN   # only if screenshots change
node tools/build.mjs v01 v02 v03 v04 v05 v06
cd v01-connect/composition
npx hyperframes check
npx hyperframes render --quality looks --workers 3 --output ../brag.mp4          # 1080p
npx hyperframes render --quality delivery --resolution 4k --output ../brag-4k.mp4 # 4K UHD master
```
Raw screenshots are not stored here; only the privacy-masked copies in `shared-assets/shots/`.
