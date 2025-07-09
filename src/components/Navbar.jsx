import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 py-4 px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
            <FaShieldAlt className="text-white text-lg" />
          </div>
          <span className="text-gray-800 text-2xl font-bold tracking-wide">
            Pass<span className="text-blue-600">Nest</span>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <a
            target="_blank"
            href="https://github.com/Hardik-108/PassNest"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
