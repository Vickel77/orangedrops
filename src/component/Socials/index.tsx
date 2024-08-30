import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className=" flex gap-3 ">
      <Link
        className="hover:opacity-50"
        href="https://twitter.com/OrangedropsNg"
      >
        <FaTwitter size={25} />
      </Link>
      <Link
        className="hover:opacity-50"
        href="https://www.instagram.com/orangedropsng/?hl=en"
      >
        <FaInstagram size={25} />
      </Link>
      <Link
        className="hover:opacity-50"
        href="https://www.linkedin.com/company/orange-drops-limited/"
      >
        <FaLinkedin size={25} />
      </Link>
    </div>
  );
};
export default Socials;
