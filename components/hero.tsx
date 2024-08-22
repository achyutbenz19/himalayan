import React from "react";
import { HeroCarosel } from "./hero-carosel";
import { Button } from "./ui/button";
import Contact from "./contact";

const Hero = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-4 lg:max-w-full">
      <div className="w-full flex-col space-y-4 lg:space-y-6">
        <section className="w-full lg:mt-8 sm:w-7/12 md:w-full">
          <div className="max-w-xl md:max-w-3xl md:grid-cols-2">
            <div>
              <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Authentic Indian & Nepali Flavors at Himalayan Restaurant
              </h1>
              <p className="max-w-[700px] mt-2 text-muted-foreground md:text-xl">
                Experience the rich, authentic tastes of India and Nepal in a
                warm, family-friendly atmosphere. Serving Chicagoland since
                2003.
              </p>
            </div>
          </div>
        </section>
        <div className="w-full flex space-x-2">
          <Button>Order now</Button>
          <Contact />
        </div>
      </div>
      <div className="mt-4 lg:w-8/12 w-full">
        <HeroCarosel />
      </div>
    </div>
  );
};

export default Hero;
