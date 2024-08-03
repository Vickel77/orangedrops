import { FaAddressBook, FaMailBulk } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

// pages/about.js
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 before:fixed before:top-0 before:left-0 before:h-[500px] before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:opacity-50 before:to-transparent before:blur-2xl  before:content-[''] after:fixed after:bottom-0 after:right-0 after:-z-20 after:h-[500px] after:opacity-50 after:blur-2xl after:w-[500px] after:translate-x-1/3 after:bg-gradient-radial after:from-primary  after:content-['']">
      <div className="max-w-[90%] md:max-w-[70%] bg-opacity-50 backdrop-blur-lg border-2 border-white mx-auto bg-white p-8 rounded-lg shadow mt-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Contact Us
        </h2>
        <div className="flex flex-wrap gap-10 w-full justify-between ">
          <div className="mt-10">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Contact Information
            </h3>
            <ul className="mt-4 text-gray-600">
              <li className="flex gap-5 py-3">
                <FaPhoneFlip className="text-primary" /> (123) 456-7890
              </li>
              <li className="flex gap-5 py-3">
                <FaMailBulk className="text-primary" /> contact@yourcompany.com
              </li>
              <li className="flex gap-5 py-3">
                <FaAddressBook className="text-primary" /> 123 Your Street, Your
                City, YC 12345
              </li>
            </ul>
          </div>
          <form className="space-y-6 w-full md:w-1/2" action="#" method="POST">
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
                -primary
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
