import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      {/* placeholders images, will be replaced with actual images and links */}
      <Link href="/">
        <Image src="/home.svg" alt="home nav icon" width={25} height={25} />
      </Link>
      <Link href="/">
        <Image src="/discover.svg" alt="home nav icon" width={25} height={25} />
      </Link>
      <Link href="/">
        <Image
          src="/chart-line.svg"
          alt="home nav icon"
          width={25}
          height={25}
        />
      </Link>

      <Link href="/">
        <Image src="/setting.svg" alt="home nav icon" width={25} height={25} />
      </Link>
    </nav>
  );
};

export default Navbar;
