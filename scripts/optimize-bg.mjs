#!/usr/bin/env node
import { readdir, stat } from "node:fs/promises";
import { dirname, join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(__dirname, "..", "src", "assets");
const TARGET_WIDTH = 1920;

const files = (await readdir(ASSETS)).filter((f) => /^bg-\d+\.png$/.test(f));
if (files.length === 0) {
  console.log("No bg-*.png sources found in src/assets — nothing to do.");
  process.exit(0);
}

for (const f of files) {
  const src = join(ASSETS, f);
  const { name } = parse(f);
  const before = (await stat(src)).size;

  const pipeline = sharp(src).resize({ width: TARGET_WIDTH, withoutEnlargement: true });

  const avifPath = join(ASSETS, `${name}.avif`);
  const webpPath = join(ASSETS, `${name}.webp`);
  await pipeline.clone().avif({ quality: 50, effort: 6 }).toFile(avifPath);
  await pipeline.clone().webp({ quality: 75, effort: 6 }).toFile(webpPath);

  const avifSize = (await stat(avifPath)).size;
  const webpSize = (await stat(webpPath)).size;
  const fmt = (n) => `${(n / 1024).toFixed(0)}kB`;
  console.log(
    `${f}: ${fmt(before)} → avif ${fmt(avifSize)} (${((avifSize / before) * 100).toFixed(0)}%), webp ${fmt(webpSize)} (${((webpSize / before) * 100).toFixed(0)}%)`,
  );
}
