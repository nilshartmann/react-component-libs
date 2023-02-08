import * as path from "path";
import slugify from "slugify";
import fs from "fs";

export type ICategoryDescription = {
  title: string;
  slug: string;
};

export type IComponentData = {
  name: string;
  url: string;
  category: ICategoryDescription;
  tags: string[];
  description: string;
};

const componentsFile = path.join(process.cwd(), "data/components.txt");
console.log("componentsFile", componentsFile);

function slugForCategory(title: string) {
  return slugify(title)
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll('"', "")
    .toLowerCase();
}

function loadComponentData() {
  const componentDescriptions: IComponentData[] = [];
  const newDescription = () =>
    ({ tags: [], description: "" } as Partial<IComponentData>);
  let currentDescription = newDescription();

  const storeCurrentPost = () => {
    if (
      currentDescription.name &&
      currentDescription.description &&
      currentDescription.category &&
      currentDescription.url
    ) {
      componentDescriptions.push(
        currentDescription as unknown as IComponentData
      );
    }
    currentDescription = newDescription();
  };
  // read contents of the file

  const data = fs.readFileSync(componentsFile, { encoding: "utf-8" });

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line: string) => {
    line = line.trim();
    if (line.startsWith("---")) {
      storeCurrentPost();
    } else if (line.trim().startsWith("#")) {
      return;
    } else if (line.toLowerCase().startsWith("name:")) {
      currentDescription.name = line.substring("name:".length).trim();
    } else if (line.toLowerCase().startsWith("url:")) {
      currentDescription.url = line.substring("url:".length).trim();
    } else if (line.toLowerCase().startsWith("category:")) {
      const d = line.substring("category:".length).trim();
      currentDescription.category = {
        title: d,
        slug: slugForCategory(d),
      };
    } else if (line.toLowerCase().startsWith("tags:")) {
      currentDescription.tags = line
        .substring("tags:".length)
        .trim()
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);
    } else if (line.toLowerCase().startsWith("description:")) {
      currentDescription.description = line
        .substring("description:".length)
        .trim();
    } else if (line === "") {
      currentDescription.description = currentDescription.description + "\n";
    } else {
      currentDescription.description = currentDescription.description + line;
    }
  });

  storeCurrentPost();

  return componentDescriptions;
}

export type ICategoryData = {
  title: string;
  slug: string;

  components: IComponentData[];
};

export function categoryBySlugFilter(slug: string) {
  return (cat: ICategoryData) => slug === cat.slug;
}

function setupAppData(): ICategoryData[] {
  const componentDescriptions = loadComponentData();
  const result: ICategoryData[] = [
    {
      title: "All libraries",
      slug: "",
      components: componentDescriptions,
    },
  ];

  const getOrCreateCategory = (c: ICategoryDescription): ICategoryData => {
    let category = result.find(categoryBySlugFilter(c.slug));
    if (!category) {
      category = {
        title: c.title,
        slug: c.slug,
        components: [],
      };
      result.push(category);
    }
    return category;
  };

  componentDescriptions.forEach((cd) => {
    const page: ICategoryData = getOrCreateCategory(cd.category);
    page.components.push(cd);
  });

  result.forEach((r) => {
    r.components.sort((a, b) => a.name.localeCompare(b.name));
  });

  return result;
}

const appData = setupAppData();
export function getAppData() {
  return appData;
}
