import { ICategoryData } from "@/data/get-app-data";
import { H2 } from "@/components/Heading";
import ComponentCard from "@/app/[[...categorySlug]]/ComponentCard";

type CategoryListProps = {
  category: ICategoryData;
};

export default function CategoryList({ category }: CategoryListProps) {
  return (
    <div className={"space-y-4"}>
      <H2>{category.title}</H2>
      {category.components.map((c) => {
        /* @ts-expect-error Server Component */
        return <ComponentCard key={c.url} component={c} />;
      })}
    </div>
  );
}
