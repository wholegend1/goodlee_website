import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SubFooter from "@/components/Footer/subFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "好力移工企業平台",
  description: "幫您找到最適合的",
};

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <SubFooter />
    </section>
  );
}
