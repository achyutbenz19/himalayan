import React from "react";
import { LayoutGrid } from "./layout-grid";
import { Button } from "./ui/button";
import { Check, Phone, ScrollText } from "lucide-react";
import { Card } from "./ui/card";

export default function Hero() {
  return (
    <div className="lg:flex-row h-full flex-col-reverse w-full flex lg:pl-4 lg:justify-start justify-center">
      <div className="w-full">
        <LayoutGrid cards={cards} />
      </div>
      <div className="w-full lg:w-fit lg:mt-4 mb-8 mt-2 lg:mb-0 md:pr-4 flex items-center flex-col">
        <Card className="w-full max-w-sm lg:max-w-md py-4 px-8 flex md:ml-6 flex-col items-center text-center">
          <h2 className="text-2xl font-serif mb-3">Hours</h2>
          <span className="font-thin text-lg whitespace-nowrap">
            Monday - Friday
          </span>
          <p className="mt-1 mb-2.5 whitespace-nowrap">
            11:15 AM – 2:15 PM, 4:30 PM – 9:30 PM
          </p>
          <span className="font-thin text-lg whitespace-nowrap">Saturday</span>
          <p className="mt-1 mb-2.5 whitespace-nowrap">
            12:00 PM – 3:00 PM, 4:30 PM – 9:30 PM
          </p>
          <span className="font-thin text-lg whitespace-nowrap">Sunday</span>
          <p className="mt-1 mb-2.5 whitespace-nowrap">
            12:00 PM – 3:00 PM, 4:30 PM – 9:00 PM
          </p>
        </Card>
        <div className="flex md:ml-4 flex-row space-x-2">
          <Button className="text-black space-x-1 text-[16px] mt-4 hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-yellow-300 px-8 py-2 bg-yellow-400 rounded-md transition duration-200 ease-linear">
            <ScrollText size={18} />
            <span>Order now</span>
          </Button>
          <Button
            variant="secondary"
            className="text-black hover:bg-secondary/90 space-x-1 text-[16px] mt-4 hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] px-8 py-2 rounded-md transition duration-200 ease-linear"
          >
            <Phone size={18} />
            <span>Call us</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/hero.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/hero.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/hero.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/hero.jpeg",
  },
];
