import { notFound } from "next/navigation";
import { categoryBySlugFilter, getAppData } from "@/data/get-app-data";
import { H2 } from "@/components/Heading";
import { getCategorySlug, IPageParams } from "@/app/[[...categorySlug]]/params";
import ComponentCard from "@/app/[[...categorySlug]]/ComponentCard";
import CategoryList from "@/app/[[...categorySlug]]/CategoryList";

export function generateStaticParams(): IPageParams[] {
  const slugs = getAppData().map((a) => ({ categorySlug: [a.slug] }));
  console.log("STATIC PARAMS", slugs);
  return slugs;
}
type CategoryPageProps = {
  params: IPageParams;
};
export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = getCategorySlug(params);

  const selectedCategory = getAppData().find(
    categoryBySlugFilter(categoryName)
  );

  if (!selectedCategory) {
    throw notFound();
  }

  if (selectedCategory.slug) {
    return <CategoryList category={selectedCategory} />;
  }

  return (
    <div className={"space-y-4"}>
      {getAppData()
        .filter((category) => category.slug !== "")
        .map((category) => (
          <CategoryList key={category.slug} category={category} />
        ))}
    </div>
  );
}
