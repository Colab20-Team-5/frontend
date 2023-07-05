import Link from "next/link";
import React from "react";

const HomeNavButton = ({ text, url }) => {
  return (
    <Link href={url} className="btn btn--nav">
      <div>
        <button className="btn btn--nav">{text}</button>
      </div>
    </Link>
  );
};

export default HomeNavButton;
