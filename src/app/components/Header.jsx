import Image from "next/image";
import React from "react";

const Header = ({ isHomePage, headerText, paraText }) => {
  return (
    <header className="header">
      <div>
        <h1 className="text-2xl">{headerText}</h1>
        <p className="text-sm">{paraText}</p>
      </div>
      {isHomePage && (
        <div>
          <Image
            src="/user.png"
            alt="user avatar logo"
            width={70}
            height={70}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
