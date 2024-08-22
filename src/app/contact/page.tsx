import Socials from "@/component/Socials";
import Link from "next/link";
import {
  FaAddressBook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

// pages/about.js
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 before:fixed before:top-0 before:left-20 before:h-[500px] before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:opacity-50 before:to-transparent before:blur-2xl  before:content-[''] after:fixed after:bottom-0 after:right-20 after:-z-20 after:h-[500px] after:opacity-50 after:blur-2xl after:w-[500px] after:translate-x-1/3 after:bg-gradient-radial after:from-primary  after:content-['']">
      <div className="max-w-[100%] md:max-w-[70%] bg-opacity-50 backdrop-blur-lg border-2 border-white mx-auto bg-white p-8 rounded-lg shadow mt-20">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-8">
          Contact Us
        </h2>
        <div className="flex flex-wrap gap-10 w-full justify-between ">
          <div className="mt-10">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Contact Information
            </h3>
            <ul className="mt-4 ">
              <li className="flex items-center gap-5 py-3">
                <Link
                  className="hover:opacity-50 flex  items-center gap-5"
                  href="tel:+2347065213416"
                >
                  <FaPhoneFlip size={20} className="text-primary rotate-90" />
                  0706 521 3416
                </Link>
              </li>
              <li className="flex items-center gap-5 py-3">
                <Link
                  className="hover:opacity-50 flex  items-center gap-5"
                  href="mailto:info@orangedrops.ng"
                >
                  <FaMailBulk size={20} className="text-primary" />
                  info@orangedrops.ng
                </Link>
              </li>
              <li className="flex items-center gap-5 py-3 max-w-[400px]">
                <FaAddressBook size={20} className="text-primary" /> Popoola
                street, 7, Mayowa Close, Ago palace way, Lagos
              </li>
              <li className="flex  items-center gap-5 py-3 max-w-[400px]">
                <Link
                  className="hover:opacity-50 flex  items-center gap-5"
                  href="https://twitter.com/OrangedropsNg"
                >
                  <FaTwitter className="text-primary" size={20} />{" "}
                  @orangedropsng
                </Link>
              </li>
              <li className="flex  items-center gap-5 py-3 max-w-[400px]">
                <Link
                  className="hover:opacity-50 flex  items-center gap-5"
                  href="https://www.instagram.com/orangedropsng/?hl=en"
                >
                  <FaInstagram className="text-primary" size={20} />{" "}
                  @orangedropsng
                </Link>
              </li>
              <li className="flex  items-center gap-5 py-3 max-w-[400px]">
                <Link
                  className="hover:opacity-50 flex  items-center gap-5"
                  href="https://www.linkedin.com/company/orange-drops-limited/"
                >
                  <FaLinkedin className="text-primary" size={20} />{" "}
                  Orange-drops-limited
                </Link>
              </li>
            </ul>
          </div>
          <form className="space-y-6 w-full flex-1" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-xl text-sm font-medium text-white bg-primary hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
