import { ICategoryData, IComponentData } from "@/data/get-app-data";
import Container from "@/components/Container";
import { remark } from "remark";
import html from "remark-html";
import LinkButton from "@/components/LinkButton";
import { H3 } from "@/components/Heading";
type CategoryProps = {
  component: IComponentData;
};

export default async function ComponentCard({ component }: CategoryProps) {
  const descriptionHtml = await remark()
    .use(html)
    .process(component.description);
  return (
    <Container renderAs={"article"}>
      <div className={"space-y-4"}>
        <div
          className={
            "border-b-[1px] border-b-main text-grey-3 flex justify-between items-center"
          }
        >
          <H3>{component.name}</H3>
          <LinkButton
            to={component.url}
            small
            additionalClassnames={" align-middle inline mb-3"}
          >
            Homepage
          </LinkButton>
        </div>

        <p dangerouslySetInnerHTML={{ __html: descriptionHtml.toString() }} />
      </div>
    </Container>
  );
}
