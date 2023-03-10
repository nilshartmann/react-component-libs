import { ReactNode } from "react";

type TwoColumnLayoutProps = {
  children: ReactNode;
};
export function TwoColumnLayout({ children }: TwoColumnLayoutProps) {
  return (
    <div className={"grid grid-cols-1 lg:grid-cols-7 gap-x-6 pt-6"}>
      {children}
    </div>
  );
}

type MainProps = {
  children: ReactNode;
};
export function Main({ children }: MainProps) {
  return <main className={"lg:col-span-5"}>{children}</main>;
}

type SidebarProps = {
  children: ReactNode;
};
export function Sidebar({ children }: SidebarProps) {
  return <aside className={"lg:col-span-2 p-2 space-y-4"}>{children}</aside>;
}

type SidebarItemProps = {
  children: ReactNode;
};
export function SidebarItem({ children }: SidebarItemProps) {
  return <div className={"bg-grey-1 p-4"}>{children}</div>;
}
