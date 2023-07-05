import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageButton = ({ text, url, arrow }) => {
  return (
    <Link href={url} className="btn btn--nav">
      <div className="">
        <button
          className="btn btn--nav"
          style={{ justifyContent: arrow ? "space-between" : "center" }}
        >
          {text}
          {arrow && <Image src={arrow} width={20} height={20} alt="" />}
        </button>
      </div>
    </Link>
  );
};

export default PageButton;
