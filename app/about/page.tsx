import Gallery from "@/components/gallery";
import React from "react";

const AboutPage = () => {
  return (
    <div className="md:mx-8 md:mt-12 mx-4 mt-8 ">
      <h1 className="text-4xl  font-normal mb-4">About Himalayan Restaurant</h1>
      <div className="max-w-3xl space-y-1 mb-4 text-neutral-300">
        <p>
          Established in 2003, Himalayan Restaurant has been a cornerstone of
          authentic Indian and Nepali cuisine in the Chicagoland area. Founded
          by two friends with a deep passion for their culinary heritage, the
          restaurant brings the flavors of the Himalayas to the heart of
          Chicago.
        </p>
        <p>
          At Himalayan Restaurant, we are committed to offering an unparalleled
          dining experience that captures the essence of home-cooked meals from
          Nepal and North India. Our dishes, crafted by the talented Chef Bishnu
          Subedi, are a tribute to the rich and diverse culinary traditions of
          the Indian subcontinent. From our famous momos to our creamy curries,
          each dish is prepared with the finest ingredients and a lot of love.
        </p>
        <p>
          Located in Niles and the vibrant South Loop, our restaurant is perfect
          for a casual weeknight dinner or a special gathering. Whether
          you&apos;re a local or a visitor, we invite you to experience the
          warmth of our hospitality and the bold flavors of our kitchen.
        </p>
      </div>
      <h1 className="text-3xl  mt-6 mb-2">Gallery</h1>
      <div className="mb-12">
        <Gallery />
      </div>
    </div>
  );
};

export default AboutPage;
