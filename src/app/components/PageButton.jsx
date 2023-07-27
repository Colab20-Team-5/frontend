import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageButton = ({ text, url, arrow, newTab, color }) => {
  return (
    <Link
      href={url}
      className="btn"
      style={{
        width: arrow ? "fit-content" : "75%",
        backgroundColor: color || "black",
      }}
      target={`${newTab ? "_blank" : ""}`}
    >
      <button
        className="btn btn--nav"
        style={{
          justifyContent: arrow ? "space-between" : "center",
          width: arrow ? "fit-content" : "75%",
          backgroundColor: color || "black",
        }}
      >
        {text}
        {arrow && <Image src={arrow} width={20} height={20} alt="" />}
      </button>
    </Link>
  );
};

export default PageButton;
