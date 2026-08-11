import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "낭만커피연구소", template: "%s | 낭만커피연구소" },
  description: "커피를 통해 자연과 인간을 이해하는 융합연구공간, 낭만커피연구소입니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
