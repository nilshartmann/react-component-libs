import { getContributors } from "@/data/get-contributors";
import { H3 } from "@/components/Heading";
import ExternalLink from "@/components/ExternalLink";
import { SidebarItem } from "@/components/GridLayout";

export default function Contributors() {
  const contributors = getContributors();

  return (
    <SidebarItem>
      <div className={"text-center mb-3"}>
        <H3>Contributors</H3>
      </div>
      <div className={"text-center"}>
        <p className={"mb-2"}>Thanks to all contributors! ❤️</p>
        <p>
          If you have something to add, please let me know by submitting an{" "}
          <ExternalLink
            href={"https://github.com/nilshartmann/react-component-libs/issues"}
          >
            issue
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink
            href={"https://github.com/nilshartmann/react-component-libs/pulls"}
          >
            Pull request
          </ExternalLink>{" "}
          in the{" "}
          <ExternalLink
            href={"https://github.com/nilshartmann/react-component-libs"}
          >
            GitHub Repo
          </ExternalLink>
          .
        </p>
        <div className={"mt-4"}>
          {contributors.map((c, i) => {
            return (
              <span key={c.url} className={"p-2"}>
                <ExternalLink href={c.url} underline={"hover"}>
                  {c.name}
                </ExternalLink>
                {i < contributors.length - 1 ? ", " : ""}
              </span>
            );
          })}
        </div>
      </div>
    </SidebarItem>
  );
}
