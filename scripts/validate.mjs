import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "public/about/index.html",
  "public/privacy-policy/index.html",
  "public/terms-of-use/index.html",
  "skills/claudeemailskill/SKILL.md",
  "skills/claudeemailskill/agents/openai.yaml",
  "skills/claudeemailskill/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/claudeemailskill/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: claudeemailskill\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add claudeemailskill")) throw new Error("Missing install shortcut");
console.log("claudeemailskill.com ok");
