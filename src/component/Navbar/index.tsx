import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" opacity-1 md:opacity-100 fixed top-0 left-0 right-0 w-full flex items-center justify-between p-4 bg-[#ffffff33] backdrop-blur-lg z-50 px-10 ">
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

export default Navbar;
