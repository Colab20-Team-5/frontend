import Link from "next/link";
import React from "react";

const HomeNavButton = ({ text, url }) => {
  return (
    <Link href={url} className="btn btn--nav">
      <p className="paragraph">{text}</p>
    </Link>
  );
};

export default HomeNavButton;
