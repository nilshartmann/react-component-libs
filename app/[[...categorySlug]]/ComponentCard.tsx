import { ICategoryData, IComponentData } from "@/data/get-app-data";
import Container from "@/components/Container";
import { remark } from "remark";
import html from "remark-html";
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
        <a
          className={
            "decoration-primary hover:underline hover:text-primary hover:decoration-2"
          }
          href={component.url}
          target={"_blank"}
          rel="noreferrer"
        >
          <h3
            className={
              "border-b-[1px] border-b-main text-xl font-bold text-grey-3 hover:text-primary"
            }
          >
            {component.name}
          </h3>
        </a>
        <p dangerouslySetInnerHTML={{ __html: descriptionHtml.toString() }} />
      </div>
    </Container>
  );
}
