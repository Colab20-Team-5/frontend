import Link from "next/link";
import React from "react";

const PageButton = ({ text, url }) => {
  return (
    <Link href={url} className="btn btn--primary">
      <div className="">
        <button className="btn btn--primary">{text}</button>
      </div>
    </Link>
  );
};

export default PageButton;
