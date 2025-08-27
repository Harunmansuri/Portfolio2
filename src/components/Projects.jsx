import React from "react";
import { motion } from "framer-motion";

import portfolioImg from "../assets/portfolio/portfolioImg.jpg";
import fitscorpionImg from "../assets/portfolio/fitscorpionImg.png";
import linkShrink from "../assets/portfolio/linkShrink.png";
import filefly from "../assets/portfolio/filefly.png";
import blankImg from "../assets/portfolio/reactParallax.jpg";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // har card thoda delay ke sath aayega
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolioImg,
      demoLink: "#",
      codeLink: "https://github.com/yourusername/portfolio",
    },
    {
      id: 2,
      src: fitscorpionImg,
      demoLink: "#",
      codeLink: "https://github.com/yourusername/fitscorpion",
    },
    {
      id: 3,
      src: linkShrink,
      demoLink: "#",
      codeLink: "https://github.com/yourusername/linkshrink",
    },
    {
      id: 4,
      src: filefly,
      demoLink: "#",
      codeLink: "https://github.com/yourusername/filefly",
    },
    {
      id: 5,
      src: blankImg,
      demoLink: "#",
      codeLink: "https://github.com/yourusername/project5",
    },
    {
      id: 6,
      src: blankImg,
      demoLink: "#",
      codeLink: "https://github.com/yourusername/project6",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        {/* Title */}
        <motion.div
          className="pb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <motion.div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.img
                src={src}
                alt="project screenshot"
                className="rounded-md w-full h-48 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
