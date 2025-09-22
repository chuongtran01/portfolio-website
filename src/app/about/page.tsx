import AboutPage from "@/components/about/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Chuong Tran",
  description: "Learn more about Chuong Tran",
};

export default function AboutPageComponent() {
  return <AboutPage />;
}
