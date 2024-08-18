import React from "react";
import { CustomCard } from "./custom-card";
import { Button } from "./ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const Blogs = () => {
  return (
    <div className="lg:px-4 mt-6 w-full lg:mt-10">
      <span className="text-2xl tracking-tighter sm:text-4xl md:text-4xl xl:text-[3rem] 2xl:text-[3.4rem]">
        Our blogs
      </span>
      <div className="flex flex-col sm:flex-row items-end h-full space-x-4 md:space-x-6">
        <div className="w-fit mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          <CustomCard author className="h-96" />
          <CustomCard author className="h-96" />
          <div className="hidden md:block">
            <CustomCard author className="h-96" />
          </div>
        </div>
        <Button className="mt-2 sm:mt-0 bg-transparent hover:bg-primary/10 border group items-center h-full flex text-white">
          <span>Read more</span>
          <ChevronRight className="flex-shrink-0" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
