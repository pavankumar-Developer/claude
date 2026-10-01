#!/bin/bash
# Pick poster frames, bake them as frame 0, extract hero stills. Run from brag-output/.
set -e
declare -A POSTER=( [v01-connect]=20.6 [v02-secure-by-design]=22.0 [v03-ohc-operations]=35.0 [v04-compliance-assets]=33.0 [v05-ambulance]=24.0 [v06-management-intelligence]=71.0 )
for d in "${!POSTER[@]}"; do
  [ -f "$d/brag.mp4" ] || continue
  ffmpeg -v error -y -ss "${POSTER[$d]}" -i "$d/brag.mp4" -frames:v 1 -q:v 2 "$d/brag.jpg"
  ffmpeg -v error -y -i "$d/brag.mp4" -i "$d/brag.jpg" \
    -filter_complex "[0:v][1:v]overlay=0:0:enable='eq(n,0)'[v]" \
    -map "[v]" -map 0:a? -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p \
    -c:a copy -movflags +faststart "$d/brag.poster.mp4" && mv "$d/brag.poster.mp4" "$d/brag.mp4"
  echo "$d poster @ ${POSTER[$d]}s"
done
# extra stills requested by the brief
mkdir -p stills
s(){ [ -f "$1/brag.mp4" ] && ffmpeg -v error -y -ss "$2" -i "$1/brag.mp4" -frames:v 1 -q:v 2 "stills/$3.jpg"; }
s v02-secure-by-design 15.5 v02-security-architecture-hero
s v02-secure-by-design 22.0 v02-waf-hero
s v02-secure-by-design 53.5 v02-encryption-hero
s v02-secure-by-design 73.8 v02-security-monitoring-hero
s v06-management-intelligence 75.5 v06-parkmed-end-card
ls stills
