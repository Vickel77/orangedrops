"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCross, FaHamburger } from "react-icons/fa";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaBars, FaX } from "react-icons/fa6";

const WebNav = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 w-[100vw] flex items-center justify-between p-4 bg-[#ffffff33] backdrop-blur-lg z-50 px-10 ">
      <div className="text-xl font-bold">
        <Link href="/">
          <Image src="/od-logo-1.png" alt="logo" width={150} height={50} />
        </Link>
      </div>
      <ul className="flex space-x-8 text-sm">
        <li>
          <Link className="hover:text-gray-400" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-400" href="/team">
            Team
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-400" href="/products">
            Projects and Brands
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-400" href="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
      <div>
        <Link
          className="px-4 shadow-xl py-2 bg-primary rounded-full hover:opacity-75 text-white"
          href="/get-started"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" fixed top-0 left-0 right-0 w-[100vw]  p-4 bg-[#ffffff33] backdrop-blur-lg z-50 px-10 ">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src="/od-logo-1.png" alt="logo" width={150} height={50} />
          </Link>
        </div>
        <div>
          {!isOpen ? (
            <FaBars className="text-primary" onClick={() => setIsOpen(true)} />
          ) : (
            <FaX className="text-primary" onClick={() => setIsOpen(false)} />
          )}
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-55"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-105 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref: any) => (
          <section className="mt-10">
            <ul className="space-y-8 text-sm">
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className=" block hover:text-gray-400"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-gray-400"
                  href="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-gray-400"
                  href="/products"
                >
                  Projects and Brands
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-gray-400"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </section>
        )}
      </Transition>
    </nav>
  );
};

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="text-black text-xl font-bold" href="/">
              MyBrand
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black hover:text-gray-500 focus:outline-none focus:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref: any) => (
          <div className="sm:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
              <Link
                className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <WebNav />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </>
  );
};
export default Navbar;
