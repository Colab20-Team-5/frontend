import Link from "next/link";
import React from "react";

const PageButton = ({ text, url }) => {
  return (
    <Link href={url}>
      <div className="w-3/4 bg-[#D9D9D9] text-sm mx-auto px-3 py-4 text-center rounded-xl my-6">
        <button>{text}</button>
      </div>
    </Link>
  );
};

export default PageButton;
