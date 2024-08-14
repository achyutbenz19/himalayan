import React from "react";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="flex p-4 h-full items-center justify-center lg:justify-between flex-row w-full">
      <div>
        <Logo height={150} width={150} />
      </div>
    </header>
  );
};

export default Header;
