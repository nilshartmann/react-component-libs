import type { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  small?: boolean;
  disabled?: boolean;

  children: ReactNode;
};

export default function Button({ small, disabled, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "rounded border-main text-main hover:cursor-pointer hover:border-primary hover:bg-primary hover:text-white disabled:border-grey-2 disabled:text-grey-2 disabled:hover:cursor-default disabled:hover:bg-white",
        { "mt-2 mb-2 border-2 p-2 text-base": !small },
        { "mt-1 border-2 py-1 px-3 text-sm": small }
      )}
    >
      {children}
    </button>
  );
}
