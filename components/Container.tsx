import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  renderAs?: "div" | "article";
};

export default function Container({
  children,
  renderAs = "div",
}: ContainerProps) {
  const RenderAs = renderAs;
  return <RenderAs className={"bg-grey-1 p-4"}>{children}</RenderAs>;
}
