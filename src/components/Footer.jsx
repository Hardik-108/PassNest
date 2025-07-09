import React from "react";
import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Made with</span>
            <FaHeart className="text-red-600" />
            <span className="text-gray-600">by</span>
            <a
              href="https://www.linkedin.com/in/hardik-raghuvanshi-33640431b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Hardik-Raghuvanshi
            </a>
          </div>

          <div className="text-gray-600 font-bold">
            Keep your passwords safe and organized with PassNest!
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Hardik-108/PassNest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/hardik-raghuvanshi-33640431b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
