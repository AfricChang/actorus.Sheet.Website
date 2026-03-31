import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { marked } from "marked";

import { docsCategoryLabels, type DocsCategory, type Locale } from "../data/site";

interface DocFrontmatter {
  title?: string;
  description?: string;
  summary?: string;
  category?: DocsCategory;
  order?: number;
}

export interface PublicDoc {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  summary: string;
  category: DocsCategory;
  categoryLabel: string;
  order: number;
  html: string;
}

const docsRoot = path.resolve(process.cwd(), "Docs");

function getDocCategory(category: string | undefined): DocsCategory {
  if (!category || !(category in docsCategoryLabels)) {
    return "guides";
  }

  return category as DocsCategory;
}

async function readDocFile(locale: Locale, fileName: string): Promise<PublicDoc> {
  const filePath = path.join(docsRoot, locale, fileName);
  const raw = await fs.readFile(filePath, "utf-8");
  const slug = fileName.replace(/\.md$/i, "");
  const { data, content } = matter(raw);
  const frontmatter = data as DocFrontmatter;
  const category = getDocCategory(frontmatter.category);
  const html = await marked.parse(content);

  return {
    locale,
    slug,
    title: frontmatter.title ?? slug,
    description: frontmatter.description ?? "",
    summary: frontmatter.summary ?? frontmatter.description ?? "",
    category,
    categoryLabel: docsCategoryLabels[category][locale],
    order: frontmatter.order ?? 999,
    html,
  };
}

export async function getDocs(locale: Locale): Promise<PublicDoc[]> {
  const directoryPath = path.join(docsRoot, locale);
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name);

  const docs = await Promise.all(files.map((fileName) => readDocFile(locale, fileName)));

  return docs.sort((left, right) => {
    if (left.order !== right.order) {
      return left.order - right.order;
    }

    return left.title.localeCompare(right.title);
  });
}

export async function getDocStaticPaths() {
  const docsByLocale = await Promise.all(
    (["en", "zh"] as const).map(async (locale) => ({
      locale,
      docs: await getDocs(locale),
    })),
  );

  return docsByLocale.flatMap(({ locale, docs }) =>
    docs.map((doc) => ({
      params: {
        locale,
        slug: doc.slug,
      },
      props: {
        doc,
      },
    })),
  );
}
