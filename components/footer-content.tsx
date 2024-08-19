import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Content() {
  return (
    <div className="bg-[#ee4c28cf] p-4 h-full w-full flex flex-col justify-between">
      <Nav />
      <Section2 />
    </div>
  );
}

const IconSize: number = 18;

type SocialLinkProps = {
  href: string;
  icon: IconType;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <Icon size={IconSize} />
  </Link>
);

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h2 className="text-[10vw] normal-case leading-[0.8] mt-10">Himalayan</h2>
      <div className="flex items-center">
        <span className="mr-2 md:space-x-4">Follow us on:</span>
        <div className="md:space-x-2 space-x-1 flex">
          <SocialLink href="https://www.facebook.com" icon={FaFacebook} />
          <SocialLink href="https://www.instagram.com" icon={FaInstagram} />
          <SocialLink href="https://www.pinterest.com" icon={FaPinterest} />
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0">
      <div className="flex flex-row w-full">
        <div className="w-1/2 flex flex-col space-y-1 justify-center">
          <Link className="hover:text-primary/80 w-fit" href="/home">
            Home
          </Link>
          <Link className="hover:text-primary/80 w-fit" href="/about">
            About
          </Link>
          <Link className="hover:text-primary/80 w-fit" href="/faq">
            FAQ
          </Link>
          <Link className="hover:text-primary/80 w-fit" href="/contact">
            Contact us
          </Link>
          <Link className="hover:text-primary/80 w-fit" href="/blog">
            Blog
          </Link>
        </div>
        <div className="w-1/2 flex flex-col space-y-1 justify-center">
          <Link className="hover:text-primary/80 w-fit" href="/chicago-menu">
            Chicago menu
          </Link>
          <Link className="hover:text-primary/80 w-fit" href="/niles-menu">
            Niles menu
          </Link>
          <Link className="hover:text-primary/80 w-fit" href="/rewards">
            Rewards
          </Link>
          <Link className="hover:text-primary/80 w-fit" href="/deals">
            Deals & coupons
          </Link>
          <Link className="hover:text-primary/80 w-fit" href="/blog">
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};
