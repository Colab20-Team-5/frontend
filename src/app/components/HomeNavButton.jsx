import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeNavButton = ({ text, url }) => {
  return (
    <Link
      href={url}
      className="bg-[#D9D9D9] font-bold px-4 py-2 rounded-lg mx-auto flex justify-center my-6"
    >
      <div className="w-7/12 flex items-center gap-4">
        <Image
          src="/homenavbutton.svg"
          alt={`link to ${text} page`}
          width={60}
          height={60}
        />
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default HomeNavButton;
