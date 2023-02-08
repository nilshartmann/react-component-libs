import path from "path";
import fs from "fs";

const contributorsFile = path.join(process.cwd(), "data/contributors.txt");
console.log("contributors", contributorsFile);

export type IContributor = {
  name: string;
  url: string;
};

function readContributors(): IContributor[] {
  const data = fs.readFileSync(contributorsFile, { encoding: "utf-8" });

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  const result = lines
    .map((line) => line.trim())
    .filter((line) => line !== "" && !line.startsWith("#"))

    .map((line: string) => {
      const [name, url] = line.split("=");

      return {
        name: name.trim(),
        url: url.trim(),
      };
    });

  return result;
}

const contributors = readContributors();

export function getContributors() {
  return contributors;
}
