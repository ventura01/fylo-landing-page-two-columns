import React from "react";
import { raleway, openSans } from "../data";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
type Props = {};

const CTAsection = (props: Props) => {
  return (
    <section id="cta-section">
      <div>
        <Image
          src="/images/bg-curve-desktop.svg"
          width={120}
          height={120}
          alt="hero-img"
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="bg-slate-50 pb-24 pt-24">
        <div className="md:container md:mx-auto md:max-w-screen-xl grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col mx-5 md:mx-0 justify-center gap-y-5 row-start-2 row-end-3 md:row-start-1 md:row-end-2">
            <div className="mb-10 md:mb-0">
              <h2
                className={`${raleway.className} text-center md:text-left text-veryDarkBlue text-lg font-black tracking-wide`}
              >
                Stay productive, wherever you are{" "}
              </h2>
              <p className={`${openSans.className} text-desaturatedBlue`}>
                Never let location be an issue when accessing your files. Fylo has
                you covered for all of your file storage needs.
              </p>
              <p className={`${openSans.className} text-desaturatedBlue`}>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments required!
              </p>
            </div>
            <Link href="#contact" className="self-center md:self-start mb-10 md:mb-0">
              <span className="text-veryDarkBlue peer hover:text-cyan-400">
                See how Fylo works
              </span>
              <BsFillArrowRightCircleFill className="inline-block fill-veryDarkBlue ml-3 peer-hover:fill-cyan-400" />
            </Link>
            <div className="bg-white shadow-md w-[80%] md:self-start self-center md:w-1/2">
              <div className="px-8 pt-8 pb-5">
                <Image
                  src="/images/icon-quotes.svg"
                  width={120}
                  height={120}
                  alt="quote-img"
                  className="w-6 h-auto fill-veryDarkBlue mb-2"
                ></Image>
                <p
                  className={`${openSans.className} text-sm leading-5 text-veryDarkBlue mb-4`}
                >
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="flex items-center">
                  <Image
                    src="/images/avatar-testimonial.jpg"
                    width={120}
                    height={120}
                    alt="avatar"
                    className="rounded-full w-7 h-7"
                  ></Image>
                  <div className="flex flex-col ml-3">
                    <span className="text-xs text-veryDarkBlue font-bold">
                      Kyle Burton
                    </span>
                    <span className="text-xs text-veryDarkBlue">
                      Founder & CEO, Huddle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-start-1 row-end-2 md:col-start-2 md:col-end-3 mb-24 md:mb-0">
            <Image
              src="/images/illustration-2.svg"
              width={120}
              height={120}
              alt="hero-img"
              className="object-cover w-auto h-auto object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
