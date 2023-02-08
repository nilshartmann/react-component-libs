import "./globals.css";
import { Nunito_Sans } from "@next/font/google";
import PageHeader from "@/components/PageHeader";
import { Main, Sidebar, TwoColumnLayout } from "@/components/GridLayout";
import Categories from "@/app/[[...categorySlug]]/Categories";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
  params,
}: {
  params: any;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white antialiased">
        <div className={`${nunitoSans.variable} font-sans`}>
          <div className="container mx-auto">
            <div className={"p-3"}>
              <PageHeader actionButton={[]}>
                React Component Libraries
              </PageHeader>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
