import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-col lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-2 text-center">Ur_Shorty</h2>
          <p className="text-center">
            Simplifying URL shortening for efficient sharing <br /> Ur_Shorty
            its an personal project not an production ready project it may take
            time because we are using free services.
          </p>
        </div>

        <p className="mt-4 lg:mt-0 text-center">
          &copy; 2025 Ur_Shorty. All rights reserved. <br /> Created by Tushar ♡
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a
            href="https://www.linkedin.com/in/tushar-sanisare/"
            className="hover:text-gray-200"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-sanisare/"
            className="hover:text-gray-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-sanisare/"
            className="hover:text-gray-200"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-sanisare/"
            className="hover:text-gray-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
