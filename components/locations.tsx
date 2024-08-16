import React from "react";
import LocationCard from "./location-card";

const Locations = () => {
  return (
    <div className="lg:px-4 mt-6 w-full lg:mt-10">
      <span className="text-2xl tracking-tighter sm:text-4xl md:text-4xl xl:text-[3rem] 2xl:text-[3.4rem]">
        Our locations
      </span>
      <div className="flex gap-4 mt-4 flex-col md:flex-row">
        <LocationCard />
        <LocationCard />
      </div>
    </div>
  );
};

export default Locations;
