import { notFound } from "next/navigation";

export type IPageParams = {
  categorySlug: string[];
};

export function getCategorySlug(params: IPageParams) {
  const { categorySlug = [""] } = params;

  if (categorySlug.length > 1) {
    throw notFound();
  }

  return categorySlug[0];
}
