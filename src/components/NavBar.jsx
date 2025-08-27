import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white 
                    fixed bg-black/40 backdrop-blur-md shadow-md z-50">
      {/* Logo */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-signature ml-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Harun
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            whileHover={{ scale: 1.1 }}
            className="relative px-2 cursor-pointer capitalize font-medium text-gray-300 hover:text-white duration-200"
          >
            <Link
              to={link}
              smooth
              duration={500}
              spy={true}
              activeClass="active-link"
              offset={-70}
            >
              {link}
            </Link>

            {/* Underline hover effect */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 
                             transition-all duration-300 group-hover:w-full"></span>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <motion.ul
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
                     bg-gradient-to-b from-black to-gray-900 text-gray-300 space-y-8"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-4xl capitalize cursor-pointer hover:text-cyan-400"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                spy={true}
                offset={-70}
              >
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default NavBar;
