import Image from "next/image";
import React from "react";
import { raleway, openSans } from "../data";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="mx-5 md:container md:mx-auto md:max-w-screen-xl flex pt-12 justify-between">
      <div>
        <Image
          src="/images/logo.svg"
          width={120}
          height={120}
          alt="logo-img"
          className="w-24 h-auto"
        />
      </div>
      <div className="flex gap-x-6 md:gap-x-12 items-center">
        <Link href="#features" className={`${raleway.className} text-sm font-semibold hover:text-desaturatedBlue text-veryDarkBlue`}>
          Features
        </Link>
        <Link href="#Team" className={`${raleway.className} text-sm font-semibold hover:text-desaturatedBlue text-veryDarkBlue`}>
          Team
        </Link>
        <button className={`${raleway.className} text-sm font-semibold hover:text-desaturatedBlue text-veryDarkBlue`}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
