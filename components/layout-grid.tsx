"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    if (selected?.id === card.id) {
      setLastSelected(selected);
      setSelected(null);
    } else {
      setLastSelected(selected);
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full lg:pt-4 h-[calc(100vh-150px)] grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(
            card.className,
            i >= cards.length - 2 ? "hidden  md:block" : "",
          )}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden shadow-lg shadow-[#351a1a] rounded-xl h-full w-full cursor-pointer",
              selected?.id === card.id
                ? "absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                  ? "z-40"
                  : "",
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      {selected && (
        <motion.div
          onClick={handleOutsideClick}
          className="absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10 pointer-events-auto"
          animate={{ opacity: 0.3 }}
        />
      )}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      draggable={false}
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-xl shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
