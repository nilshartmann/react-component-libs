import "./globals.css";
import { Nunito_Sans } from "@next/font/google";
import PageHeader from "@/components/PageHeader";
import { ReactNode } from "react";
import ExternalLink from "@/components/ExternalLink";
import PageFooter from "@/components/PageFooter";

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
  children: ReactNode;
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
                React Libraries (components and other)
              </PageHeader>
              {children}
              <PageFooter />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
