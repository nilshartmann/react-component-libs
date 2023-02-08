import { Main, Sidebar, TwoColumnLayout } from "@/components/GridLayout";
import Categories from "@/app/[[...categorySlug]]/Categories";
import { getCategorySlug, IPageParams } from "@/app/[[...categorySlug]]/params";
import { ReactNode } from "react";

type LayoutProps = {
  params: IPageParams;
  children: ReactNode;
};

export default function Layout({ params, children }: LayoutProps) {
  const categorySlug = getCategorySlug(params);

  return (
    <TwoColumnLayout>
      <Main>{children}</Main>
      <Sidebar>
        <Categories active={categorySlug} />
      </Sidebar>
    </TwoColumnLayout>
  );
}