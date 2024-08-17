import { Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Content() {
  return (
    <div className="bg-[#ee4c28cf] p-4 h-full w-full flex flex-col justify-between">
      <Nav />
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h2 className="text-[10vw] normal-case leading-[0.8] mt-10">Himalayan</h2>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase">About</h3>
        <p>Home</p>
        <Link href="/chat">Chat</Link>
      </div>
    </div>
  );
};
