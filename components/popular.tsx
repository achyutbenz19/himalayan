import React from "react";
import { CustomCard } from "./custom-card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PopularItems = () => {
  return (
    <div className="lg:px-4 mt-6 w-full lg:mt-10">
      <span className="text-2xl tracking-tighter sm:text-4xl md:text-4xl xl:text-[3rem] 2xl:text-[3.4rem]">
        Popular dishes
      </span>
      <div className="flex flex-col sm:flex-row items-end h-full space-x-4 md:space-x-6">
        <div className="w-fit mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          <CustomCard className="h-64 lg:h-80" />
          <CustomCard className="h-64 lg:h-80" />
          <div className="hidden md:block">
            <CustomCard className="h-64 lg:h-80" />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="mt-2 sm:mt-0 bg-transparent hover:bg-primary/10 border group items-center h-full flex text-white">
              <span>View menu</span>
              <ChevronRight className="flex-shrink-0" size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuItem className="cursor-pointer md:text-lg">
              Niles menu
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer md:text-lg">
              Chicago menu
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default PopularItems;
