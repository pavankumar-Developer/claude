// node tools/build.mjs v01 [v02 ...]  — writes brag-output/<id>/composition/
import fs from "node:fs";
import path from "node:path";
import { write } from "./lib.mjs";
const here = path.dirname(new URL(import.meta.url).pathname);
const energy = JSON.parse(fs.readFileSync(path.join(here, "../shared-assets/energy.json"), "utf8"));
const which = process.argv.slice(2);
for (const w of which) {
  const v = (await import(`./${w}.mjs`)).default();
  const out = path.join(here, "..", v.id);
  const comp = write(v, out, energy);
  console.log(`${v.id}: ${v.duration}s, ${v.scenes.length} scenes, ${v.tweens.length} tweens, ${v.sfx.length} sfx -> ${comp}`);
}
