import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <Image src="./mobileham.svg" width={25} height={25} alt="" />
      <p>BeFit</p>
      <Image src="./useravatar.svg" width={50} height={50} alt="" />
    </nav>
  );
};

export default Navbar;
