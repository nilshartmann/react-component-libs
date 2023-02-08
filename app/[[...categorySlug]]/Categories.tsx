import { getAppData } from "@/data/get-app-data";
import LinkButton from "@/components/LinkButton";
import clsx from "clsx";
import { H2, H3 } from "@/components/Heading";
import { SidebarItem } from "@/components/GridLayout";
type CategoriesProps = {
  active?: string;
};
export default function Categories({ active }: CategoriesProps) {
  return (
    <SidebarItem>
      <div className={"text-center mb-3"}>
        <H3>Filter by Category</H3>
      </div>
      {getAppData().map((p) => {
        const className = clsx("text-center block", {
          "font-bold bg-primarylight": active === p.slug,
        });

        return (
          <LinkButton
            key={p.slug}
            additionalClassnames={className}
            to={`/${p.slug}`}
          >
            {p.title}
          </LinkButton>
        );
      })}
    </SidebarItem>
  );
}
