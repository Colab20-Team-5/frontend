import Link from "next/link";
import React from "react";

const PageButton = ({ text, url }) => {
  return (
    <Link href={url} className="btn btn--primary btn--white">
      <div className="">
        <button>{text}</button>
      </div>
    </Link>
  );
};

export default PageButton;
