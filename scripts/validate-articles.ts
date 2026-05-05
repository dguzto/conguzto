import fs from "fs";
import path from "path";

const SUBTITLE_MIN = 70;
const SUBTITLE_MAX = 100;
const CONTENT_DIR = path.join(process.cwd(), "content");

function extractFrontmatter(raw: string): Record<string, string> {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fields: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w+):\s*"(.*)"/);
    if (m) fields[m[1]] = m[2];
  }
  return fields;
}

let hasError = false;

for (const locale of ["en", "es"]) {
  const dir = path.join(CONTENT_DIR, locale);
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"))) {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const fm = extractFrontmatter(raw);
    const slug = file.replace(".mdx", "");
    const subtitle = fm.subtitle || "";
    const len = subtitle.length;

    if (len < SUBTITLE_MIN || len > SUBTITLE_MAX) {
      console.error(
        `[FAIL] ${locale}/${slug}: subtitle is ${len} chars (expected ${SUBTITLE_MIN}-${SUBTITLE_MAX})`
      );
      console.error(`       "${subtitle}"`);
      hasError = true;
    } else {
      console.log(`[OK]   ${locale}/${slug}: subtitle is ${len} chars`);
    }
  }
}

if (hasError) {
  console.error("\nSubtitle validation failed. Fix lengths before pushing.");
  process.exit(1);
}

console.log("\nAll subtitles within range.");
