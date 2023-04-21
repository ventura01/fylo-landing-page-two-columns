import React from "react";
import { raleway, openSans } from "../data";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <header className="md:container md:max-w-screen-xl md:mx-auto pt-24 pb-24 grid grid-cols-1 md:grid-cols-2">
      <div className="flex row-start-2 row-end-3 mx-5 md:row-start-1 md:row-end-2 md:mx-0 flex-col gap-y-7 justify-center md:pr-20">
        <h1
          className={`${raleway.className} text-center md:text-left text-3xl md:text-4xl font-black tracking-wide text-veryDarkBlue`}
        >
          All your files in one secure location, accessible anywhere.
        </h1>
        <p
          className={`${openSans.className} text-center md:text-left text-veryDarkBlue`}
        >
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@mail.com"
            className="peer bg-white mb-5 md:mb-0 w-full md:w-auto border border-slate-300 py-[.5rem] pl-3 pr-12 rounded-sm text-veryDarkBlue"
          />
          <input
            type="button"
            value="Get Started"
            className={`${openSans.className} w-full md:w-auto md:ml-6 text-sm text-white bg-brightBlue rounded-sm py-[.6rem] px-12 hover:bg-blue-400 cursor-pointer`}
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </form>
      </div>
      <div className="md:row-start-1 md:row-end-2 row-start-1 row-end-2 mb-24 md:mb-0">
        <Image
          src="/images/illustration-1.svg"
          width={120}
          height={120}
          alt="hero-img"
          className="object-cover w-auto h-auto object-center"
        />
      </div>
    </header>
  );
};

export default HeroSection;
