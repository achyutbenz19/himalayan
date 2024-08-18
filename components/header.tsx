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
    <header className="flex h-full items-center justify-center md:justify-between flex-col md:flex-row w-full md:px-4">
      <div className="pt-1">
        <Logo height={150} width={150} />
      </div>
      <div className="flex md:justify-end tracking-tight justify-center flex-row px-3 pt-2 w-full">
        <Button
          className="md:text-2xl bg-transparent text-xl font-thin"
          variant="outline"
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="justify-between w-full flex h-full items-center">
              Menu
              <ChevronDown className="flex-shrink-0 h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={20}>
              <DropdownMenuItem className="cursor-pointer md:text-lg">
                Niles menu
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer md:text-lg">
                Chicago menu
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Button>
        <Button className="md:text-2xl text-xl font-thin" variant="link">
          <DropdownMenu>
            <DropdownMenuTrigger className="space-x-2 flex h-full items-center">
              <span>Order online</span>
              <ChevronDown className="flex-shrink-0 h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
              <DropdownMenuItem className="cursor-pointer md:text-lg">
                Niles location
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer md:text-lg">
                Chicago downtown
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Button>
        <Button className="md:text-2xl text-xl font-thin" variant="link">
          <Link href="/deals">Deals</Link>
        </Button>
        <Button
          className="md:text-2xl text-xl font-thin sm:flex hidden"
          variant="link"
        >
          <Link href="/rewards">Rewards</Link>
        </Button>
        <Button
          className="md:text-2xl text-xl font-thin md:flex hidden"
          variant="link"
        >
          <Link href="/blog">Blog</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
