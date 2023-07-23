"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="nav">
      <Image
        src="/logout.png"
        width={33}
        height={32}
        alt=""
        onClick={() => {
          signOut();
        }}
        className="logout-img"
      />
      <Link href="/">BeFit</Link>
      {session ? (
        <Image
          src={session?.user?.image}
          width={45}
          height={45}
          alt=""
          className="user-img"
        />
      ) : (
        <div className="loader-img"></div>
      )}
    </nav>
  );
};

export default Navbar;
