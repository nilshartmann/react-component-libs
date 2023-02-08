import { ReactNode } from "react";
import clsx from "clsx";

export type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  underline?: "always" | "hover";
};

export default function ExternalLink({
  href,
  children,
  underline = "always",
}: ExternalLinkProps) {
  const className = clsx("text-grey-3 hover:underline", {
    underline: underline === "always",
  });
  return (
    <a className={className} href={href} target={"_blank"} rel="noreferrer">
      {children}
    </a>
  );
}
