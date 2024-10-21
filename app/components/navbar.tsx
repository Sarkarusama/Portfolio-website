import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black sticky top-0 z-50">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-5xl font-semibold  text-[#eca400]">Portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"#"}
              className="mr-5 hover:text-[#eca400] text-gray-100"
            >
              Home
            </Link>
            <Link
              href={"#about"}
              className="mr-5 hover:text-[#eca400] text-gray-100 "
            >
              About
            </Link>
            <Link
              href={"#skill"}
              className="mr-5 hover:text-[#eca400] text-gray-100"
            >
              Skills
            </Link>
            <Link
              href={"#project"}
              className="mr-5 hover:text-[#eca400] text-gray-100"
            >
              Projects
            </Link>
            <Link
              href={"#contact"}
              className="mr-5 hover:text-[#eca400] text-gray-100"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;