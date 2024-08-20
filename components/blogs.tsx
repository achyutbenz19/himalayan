import React from "react";
import { CustomCard } from "./custom-card";
import { Button } from "./ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="lg:px-4 mt-8 w-full lg:mt-16">
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
        <Link href="/blog">
          <Button className="mt-2 sm:mt-0 bg-transparent hover:bg-primary/10 border group items-center h-full flex text-white">
            <span>Read more</span>
            <ChevronRight className="flex-shrink-0" size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
