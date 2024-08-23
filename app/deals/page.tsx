import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const deals = [
  {
    title: "50% Off Thali Platter",
    description:
      "Enjoy a delicious Thali platter at 50% off for a limited time.",
    imgSrc: "/logo1.png",
    altText: "Deal 1",
    link: "#",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "Order any curry and get another one free. Don’t miss out!",
    imgSrc: "/logo1.png",
    altText: "Deal 2",
    link: "#",
  },
  {
    title: "20% Off on Takeaway",
    description: "Get 20% off your entire order when you choose takeaway.",
    imgSrc: "/logo1.png",
    altText: "Deal 3",
    link: "#",
  },
  {
    title: "Free Dessert with Main Course",
    description: "Receive a free dessert with any main course ordered.",
    imgSrc: "/logo1.png",
    altText: "Deal 4",
    link: "#",
  },
];

const page = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
                Deals, Promotions, and Coupons
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl mb-6">
                Explore our latest deals, promotions, and exclusive coupons for
                an unforgettable dining experience at our Indian Nepali
                restaurant.
              </p>
              <Button>Order now</Button>
            </div>
            <Image
              src="/logo1.png"
              width={600}
              height={400}
              alt="Deals and Promotions"
              className="rounded-lg"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-8">
            Current Deals and Coupons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {deals.map((deal, index) => (
              <Card key={index}>
                <Image
                  src={deal.imgSrc}
                  width={600}
                  height={400}
                  alt={deal.altText}
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-normal">{deal.title}</h3>
                    <p className="text-muted-foreground">{deal.description}</p>
                    <Link href={deal.link}>
                      <Button className="mt-3 bg-neutral-800  hover:bg-neutral-700">
                        Claim Offer
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
