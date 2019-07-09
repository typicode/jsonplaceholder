const path = require("path");
const fs = require("fs");
const showdown = require("showdown");
const pupa = require("pupa");

function readFile(filename) {
  return fs.readFileSync(path.join(__dirname, "templates", filename), "utf-8");
}

function render(filename, content) {
  fs.writeFileSync(
    path.join(__dirname, "public", filename),
    pupa(layout, { content })
  );
}

const layout = readFile("layout.html");
const index = readFile("index.html");

const converter = new showdown.Converter({ simplifiedAutoLink: true });
const guideMarkdown = readFile("GUIDE.md");
// const headingRegexp = /^## (.*)$/gm;
// console.log("res", text.match(headingRegexp));
const guide = converter.makeHtml(guideMarkdown);

render("index.html", index);
render("guide.html", guide);
