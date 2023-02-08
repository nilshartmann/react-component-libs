import { notFound } from "next/navigation";
import { categoryBySlugFilter, getAppData } from "@/data/get-app-data";
import { H2 } from "@/components/Heading";
import { getCategorySlug, IPageParams } from "@/app/[[...categorySlug]]/params";
import ComponentCard from "@/app/[[...categorySlug]]/ComponentCard";

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

  return (
    <div className={"space-y-4"}>
      <H2>{selectedCategory.title}</H2>
      {selectedCategory.components.map((c) => {
        /* @ts-expect-error Server Component */
        return <ComponentCard key={c.url} component={c} />;
      })}
    </div>
  );
}
