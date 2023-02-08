import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  small?: boolean;
  to: string;

  additionalClassnames?: string;

  children: ReactNode;
};

export default function LinkButton({
  additionalClassnames,
  small,
  to,
  children,
}: ButtonProps) {
  return (
    <Link
      className={clsx(
        "rounded border-main text-main hover:cursor-pointer hover:border-primary hover:bg-primary hover:text-white",
        { "mt-2 mb-2 border-2 p-2 text-base": !small },
        { "mt-1 border-2 py-1 px-3 text-sm": small },
        additionalClassnames
      )}
      prefetch={false}
      href={to}
    >
      {children}
    </Link>
  );
}
