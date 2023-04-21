import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import {
  BsFillTelephoneOutboundFill,
  BsFillEnvelopeAtFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-veryDarkBlue py-24">
      <div className="container px-10 max-w-screen-xl mx-auto ">
        <div className="md:mb-5 mb-8">
          <Logo fill="#fff" />
        </div>
        <div className="md:container md:max-w-screen-xl md:mx-auto grid grid-cols-1 md:grid-cols-4">
          <div className="flex flex-col gap-y-3 mb-12 md:mb-0">
            <div className="flex">
              <BsFillTelephoneOutboundFill color="#fff" />
              <span className="text-white text-sm ml-3">
                Phone: +1-543-123-4567
              </span>
            </div>
            <div className="flex">
              <BsFillEnvelopeAtFill color="#fff" />
              <span className="text-white text-sm ml-3">example@fylo.com</span>
            </div>
          </div>
          <div className="flex md:justify-center mb-12 md:mb-0">
            <ul className="space-y-4">
              <li className="text-white text-sm hover:text-brightBlue cursor-pointer">
                About Us
              </li>
              <li className="text-white text-sm hover:text-brightBlue cursor-pointer">
                Jobs
              </li>
              <li className="text-white text-sm hover:text-brightBlue cursor-pointer">
                Press
              </li>
              <li className="text-white text-sm hover:text-brightBlue cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div className="flex md:justify-center mb-12 md:mb-0">
            <ul className="space-y-4">
              <li className="text-white text-sm hover:text-brightBlue cursor-pointer">
                Contact Us
              </li>
              <li className="text-white text-sm hover:text-brightBlue cursor-pointer">
                Terms
              </li>
              <li className="text-white text-sm hover:text-brightBlue cursor-pointer">
                Privacy
              </li>
            </ul>
          </div>
          <div className="flex gap-x-5 justify-center md:justify-end">
            <BsFacebook size={'1.25rem'} color="#fff" className=" hover:fill-brightBlue cursor-pointer"/>
            <BsTwitter size={'1.25rem'} color="#fff" className=" hover:fill-brightBlue cursor-pointer"/>
            <BsInstagram size={'1.25rem'} color="#fff" className=" hover:fill-brightBlue cursor-pointer"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
