import { getAppData } from "@/data/get-app-data";
import LinkButton from "@/components/LinkButton";
import clsx from "clsx";
type CategoriesProps = {
  active?: string;
};
export default function Categories({ active }: CategoriesProps) {
  return (
    <div>
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
    </div>
  );
}
