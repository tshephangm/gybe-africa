import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="mx-4">
      <div className="py-4">
        <Image src="/.././public/logo.png" alt="logo" width={65} height={77} />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/build">Build With US</Link>
        </li>
        <li>
          <Link href="/technologies">Our Technologies</Link>
        </li>
        <li>
          <Link href="/news">News & Media</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
