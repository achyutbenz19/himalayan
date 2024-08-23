import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RewardDeals = () => {
  return (
    <div className="lg:px-4 mt-6 lg:mt-10 w-full max-w-3xl">
      <div className="mb-4 max-w-xl md:max-w-3xl">
        <h2 className="text-2xl tracking-tighter sm:text-4xl md:text-4xl xl:text-[3rem] 2xl:text-[3.4rem]">
          Deals & rewards
        </h2>
        <p className="mt-1 md:mt-2 text-lg text-neutral-500">
          Join our program to unlock amazing deals and earn valuable rewards on
          your purchases!
        </p>
      </div>
      <div className="flex space-x-2">
        <Link href="/deals">
          <Button>View deals</Button>
        </Link>
        <Link href="/rewards">
          <Button variant="secondary">Rewards program</Button>
        </Link>
      </div>
    </div>
  );
};

export default RewardDeals;
