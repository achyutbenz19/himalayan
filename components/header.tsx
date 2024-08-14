import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex p-4 h-full items-center justify-center lg:justify-between flex-col lg:flex-row w-full">
      <div>
        <Logo height={150} width={150} />
      </div>
      <div className="flex lg:justify-end tracking-tight justify-center flex-row px-3 pt-2 w-full">
        <Button className="text-xl font-thin" variant="link">
          <Link href="/blog">Blog</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
