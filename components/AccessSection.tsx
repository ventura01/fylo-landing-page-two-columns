import React from "react";
import { raleway, openSans } from "../data";

type Props = {};

const AccessSection = (props: Props) => {
  return (
    <section className="bg-desaturatedBlue py-24">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex mb-10 md:mb-0 flex-col px-5 md:px-0 justify-center gap-y-5 row-start-1 row-end-2">
          <h3 className={`${raleway.className} text-2xl text-white text-center md:text-left font-bold`}>
            Get early access today
          </h3>
          <p className={`${openSans.className} text-white text-sm text-center md:text-left md:pr-28`}>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="px-5 md:px-0">
          <form className="">
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
              className={`${openSans.className} w-full md:w-auto md:self-start ml-0 md:ml-6 text-sm text-white bg-brightBlue rounded-sm py-[.6rem] px-12 hover:bg-blue-400 cursor-pointer`}
            />
            <p className="mt-2 invisible peer-invalid:visible text-white text-xs">
              Please provide a valid email address.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
