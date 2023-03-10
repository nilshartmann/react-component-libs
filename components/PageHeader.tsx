import { ReactNode } from "react";
import Image from "next/image";
import githubLogo from "../public/github-mark.svg";
import ExternalLink from "@/components/ExternalLink";
import { H2 } from "@/components/Heading";
type PageHeaderProps = {
  actionButton: ReactNode;
  children: ReactNode;
};
export default function PageHeader({
  actionButton,
  children,
}: PageHeaderProps) {
  return (
    <header className={"border-b-4 border-b-grey-1 pb-4 text-grey-3"}>
      <div className={"flex items-end justify-between mb-2"}>
        <h1 className={"m-0 p-0 text-3xl font-bold "}>{children}</h1>

        <ExternalLink
          underline={"hover"}
          href={"https://github.com/nilshartmann/react-component-libs"}
        >
          <div className={"flex"}>
            <span className={"mr-3"}>Contribute</span>
            <svg
              viewBox="0 0 16 16"
              className="w-5 h-5 text-grey-3"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </div>
        </ExternalLink>
      </div>
      <div>
        If you&apos;re developing an application based on{" "}
        <ExternalLink href={"https://reactjs.org"}>React</ExternalLink>, it can
        be helpful if you don&apos;t need to develop all the basic UI components
        etc. yourself. Here you can find a list with various components,
        component libraries and complete design systems developed with and for
        React.
      </div>
    </header>
  );
}
