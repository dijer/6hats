#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".git") {
        continue;
      }
      walk(full, files);
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

function findLinks(content) {
  const links = [];
  const regex = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    links.push(match[1].trim());
  }
  return links;
}

function isExternal(target) {
  return /^https?:\/\//i.test(target);
}

function isAnchorOnly(target) {
  return target.startsWith("#");
}

function cleanTarget(target) {
  return target.split("#")[0].trim();
}

function main() {
  const rootArg = process.argv[2] || ".";
  const rootPath = path.resolve(process.cwd(), rootArg);

  if (!fs.existsSync(rootPath)) {
    console.error(`Root path does not exist: ${rootPath}`);
    process.exit(1);
  }

  const markdownFiles = walk(rootPath);
  const broken = [];

  for (const file of markdownFiles) {
    const content = fs.readFileSync(file, "utf8");
    const targets = findLinks(content);

    for (const target of targets) {
      if (isExternal(target) || isAnchorOnly(target)) {
        continue;
      }

      const localTarget = cleanTarget(target);
      if (!localTarget) {
        continue;
      }

      const resolved = path.resolve(path.dirname(file), localTarget);
      if (!fs.existsSync(resolved)) {
        broken.push({
          file: path.relative(rootPath, file),
          link: target,
        });
      }
    }
  }

  if (broken.length > 0) {
    console.error("Broken local markdown links found:");
    for (const item of broken) {
      console.error(`- ${item.file}: ${item.link}`);
    }
    process.exit(1);
  }

  console.log("Docs check passed: no broken local markdown links.");
}

main();
