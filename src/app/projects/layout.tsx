import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Chuong Tran",
  description: "Explore Chuong Tran's featured projects",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
