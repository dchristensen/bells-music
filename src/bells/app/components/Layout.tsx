import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="container mx-auto">{children}</div>;
}
