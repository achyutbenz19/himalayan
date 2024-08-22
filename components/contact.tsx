"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = ({ className }: { className?: string }) => {
  const handleCall = (location: "niles" | "chicago") => {
    if (location === "niles") {
      window.location.href = "tel:+18473244150";
    } else if (location === "chicago") {
      window.location.href = "tel:+13128775999";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          className={cn(
            className
              ? className
              : "mt-2 sm:mt-0 bg-transparent hover:bg-primary/10 border group items-center h-full flex text-white",
          )}
        >
          <span>Contact us</span>
          <ChevronDown className="flex-shrink-0" size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10}>
        <DropdownMenuItem
          className="cursor-pointer md:text-lg"
          onClick={() => handleCall("niles")}
        >
          Niles
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer md:text-lg"
          onClick={() => handleCall("chicago")}
        >
          Chicago
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Contact;
