import React from "react";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="flex p-4 h-full items-center justify-center lg:justify-between flex-col lg:flex-row w-full">
      <div>
        <Logo height={150} width={150} />
      </div>
      <div className="flex flex-row p-3">hi</div>
    </header>
  );
};

export default Header;
