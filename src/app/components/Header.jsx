import Image from "next/image";
import React from "react";

const Header = ({ isHomePage, headerText, paraText }) => {
  return (
    <header className="header">
      <div>
        <h1 className="heading-primary">{headerText}</h1>
        <p className="paragraph">{paraText}</p>
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
