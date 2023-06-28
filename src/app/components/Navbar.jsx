import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-[#000000bf] px-4 py-3 flex justify-between">
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
