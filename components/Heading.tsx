import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};
export function H1({ children }: HeadingProps) {
  const className = "text-3xl";

  return <h1 className={className}>{children}</h1>;
}

export function H2({ children }: HeadingProps) {
  const className = "text-2xl";

  return <h2 className={className}>{children}</h2>;
}

export function H3({ children }: HeadingProps) {
  const className = "text-xl";

  return <h3 className={className}>{children}</h3>;
}
