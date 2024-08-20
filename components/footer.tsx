"use client";
import React from "react";
import Content from "./footer-content";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.includes("/blog") || pathname.includes("/faq")) return null;

  return (
    <div
      className="relative h-[350px] md:h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+350px)] md:h-[calc(100vh+500px)] -top-[100vh]">
        <div className="h-[350px] sticky top-[calc(100vh-350px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}
