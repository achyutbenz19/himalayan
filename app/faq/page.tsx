import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqData = [
  {
    title: "What kind of cuisine do you serve?",
    content: (
      <p>
        We serve Nepali/Nepalese and North Indian cuisine along with a selection
        of Indo-Chinese cuisine.
        <br />
        <br />
        <strong>Popular Nepali items:</strong>
        <br />
        Momo (Chicken and Vegetables), Chicken Chilli, Chicken Chowela, Jhane ko
        dal, Goat Curry
        <br />
        <br />
        <strong>Popular Indian items:</strong>
        <br />
        Paneer Bhurji, Paneer Tikka Masala, Malai Kofta, Chicken Curry, Lamb
        Curry, Fish Tikka Masala, Butter Chicken
        <br />
        <br />
        <strong>Popular Indo-Chinese items:</strong>
        <br />
        Gobi Manchurian, Vegetable Fried Rice
        <br />
        <br />
        <strong>Popular Grill items:</strong>
        <br />
        Tandoori Chicken, Himalayan Chicken Wings, Fish Tikka
      </p>
    ),
  },
  {
    title: "Do you serve Gluten Free, Jain and Vegan dishes?",
    content: (
      <p>
        Yes, we do. We may not be able to make everything on our menu
        accordingly, but there are many choices. For catering, we can make most
        of the items from our menu gluten-free, Jain, and vegan.
      </p>
    ),
  },
  {
    title: "Do you serve Halal meat?",
    content: (
      <p>
        Yes, we serve Zabiha Halal meat. Check{" "}
        <Link href="https://www.halalrun.com">Halal Run</Link>.
      </p>
    ),
  },
  {
    title: "Do you deliver?",
    content: (
      <p>
        Yes, we deliver within 5 to 6 miles radius of our locations. If you are
        not within our delivery zone, please give us a call, and we will try to
        work something out.
      </p>
    ),
  },
  {
    title: "Do you serve lunch buffet?",
    content: (
      <p>Every Sunday, we have a grand lunch buffet from 12:00pm to 3:00pm.</p>
    ),
  },
  {
    title: "Do you serve lunch specials?",
    content: (
      <p>
        Yes, we have daily lunch specials. Please check our{" "}
        <Link href="/express-lunch-specials">express lunch specials</Link>.
      </p>
    ),
  },
  {
    title: "Do you have a party hall?",
    content: (
      <p>
        At our Niles location, we have a party hall that can accommodate about
        45 – 50 people. Our party room is suitable for birthday parties, company
        holiday parties, and meetings.
      </p>
    ),
  },
  {
    title: "Are safe curbside pickups & contactless delivery available?",
    content: (
      <p>Yes, we offer both curbside pickups and contactless delivery.</p>
    ),
  },
];

const FAQ = () => {
  return (
    <div className="flex flex-col py-12">
      <h1 className="text-3xl font-semibold text-center lg:block hidden">
        Frequently Asked Questions
      </h1>
      <h1 className="text-3xl font-semibold text-center lg:hidden block">
        FAQs
      </h1>
      <span className="mt-6 lg:mb-12 mb-10 text-center">
        Can&apos;t find the answer here? &nbsp;
        <Link href="/contact" className="underline">
          Contact us
        </Link>
      </span>
      <div className="px-4 container max-w-[900px] mx-auto">
        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <AccordionItem
              className="leading-loose font-normal opacity-90 -mt-2 mb-3"
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger className="text-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-base text-primary/70">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
