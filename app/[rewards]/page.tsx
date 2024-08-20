import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RewardIdPage = () => {
  return (
    <div>
      <div className="md:mx-8 md:mt-16 mx-4 mt-8 text-white">
        <h1 className="text-4xl text-white font-bold mb-4">
          Welcome to Himalayan Restaurant
        </h1>
        <p className="text-lg text-neutral-500 mb-4">
          Discover the rich flavors of Nepali and Indian cuisine at Himalayan
          Restaurant. <br /> Join our loyalty program, sign up for email
          updates, or purchase an e-gift card for your loved ones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-8 my-10">
        <Card>
          <CardHeader>
            <CardTitle>Email Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <p>For deals, coupons, etc.</p>
            <Button className="mt-4 bg-neutral-800 hover:bg-neutral-700 text-white">
              Email sign up
            </Button>
            <p className="mt-4">For location pickup</p>
            <Button className="mt-2 bg-neutral-800 hover:bg-neutral-700 text-white">
              Location pickup
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loyalty Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500 font-medium">
              Earn 1 point for every $1 spent
            </p>
            <p className="mt-2">$5 discount for every 100 points</p>
            <p className="mt-2">
              Join Himalayan Restaurant Rewards and start earning delicious
              rewards!
            </p>
            <Button className="mt-4 bg-neutral-800 hover:bg-neutral-700 text-white">
              Loyalty sign up
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>e-Gift Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get the e-Gift cards and gift to your favorite ones.</p>
            <Button className="mt-4 bg-neutral-800 hover:bg-neutral-700 text-white">
              Purchase
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RewardIdPage;
