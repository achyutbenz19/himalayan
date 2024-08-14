import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="flex p-4 h-full items-center justify-center lg:justify-between flex-col lg:flex-row w-full">
      <div>
        <Logo height={150} width={150} />
      </div>
      <div className="flex lg:justify-end tracking-tight justify-center flex-row px-3 pt-2 w-full">
        <Button className="lg:text-2xl text-xl font-thin" variant="link">
          <DropdownMenu>
            <DropdownMenuTrigger className="space-x-2 flex h-full items-center">
              <span>Menu</span>
              <ChevronDown className="flex-shrink-0 h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer lg:text-lg">
                Niles location
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer lg:text-lg">
                Chicago downtown
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Button>
        <Button className="lg:text-2xl text-xl font-thin" variant="link">
          <DropdownMenu>
            <DropdownMenuTrigger className="space-x-2 flex h-full items-center">
              <span>Order online</span>
              <ChevronDown className="flex-shrink-0 h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer lg:text-lg">
                Niles location
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer lg:text-lg">
                Chicago downtown
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Button>
        <Button className="lg:text-2xl text-xl font-thin" variant="link">
          <Link href="/deals">Deals</Link>
        </Button>
        <Button className="lg:text-2xl text-xl font-thin" variant="link">
          <Link href="/rewards">Rewards</Link>
        </Button>
        <Button className="lg:text-2xl text-xl font-thin" variant="link">
          <Link href="/blog">Blog</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
