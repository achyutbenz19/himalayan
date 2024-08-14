import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  type?: "primary" | "secondary";
  width?: number;
  height?: number;
};

const Logo = ({ type = "primary", width = 70, height = 70 }: LogoProps) => {
  return (
    <Link href="/">
      {type === "primary" ? (
        <Image
          src="/logo2.png"
          alt="logo"
          width={width}
          height={height}
          draggable={false}
          className="rounded-xl"
        />
      ) : (
        <Image
          src="/logo1.png"
          alt="logo"
          width={width}
          height={height}
          draggable={false}
          className="rounded-xl"
        />
      )}
    </Link>
  );
};

export default Logo;
