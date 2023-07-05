import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeNavButton = ({ text, url }) => {
  return (
    <Link
      href={url}
      className="btn btn--primary btn--white"
    >
      <div className="img-container">
        <Image
          src="/homenavbutton.svg"
          alt={`link to ${text} page`}
          width={60}
          height={60}
        />
        <p className="paragraph">{text}</p>
      </div>
    </Link>
  );
};

export default HomeNavButton;
