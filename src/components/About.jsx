import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* 1st paragraph */}
        <motion.p
          className="text-xl mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Hello! I'm <span className="text-cyan-400 font-semibold">Harun Mansuri</span>, 
          a passionate developer currently pursuing my Bachelor's degree in Computer Science and Engineering.
        </motion.p>

        <br />

        {/* 2nd paragraph */}
        <motion.p
          className="text-xl hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          I have a solid foundation in web development technologies including 
          <span className="text-gray-300"> HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Node.js, Express.js, SQL, MongoDB,</span> 
          and GitHub for version control. Along with development, I also have a good understanding of core computer science fundamentals such as 
          <span className="text-gray-300"> Data Structures & Algorithms, Object-Oriented Programming (OOP), Operating Systems, DBMS,</span> 
          and Computer Networks.
        </motion.p>

        <br />

        {/* 3rd paragraph */}
        <motion.p
          className="text-xl hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          As a continuous learner, I am always exploring modern tools and frameworks to sharpen my skills. 
          My goal is to build scalable and impactful applications while growing as a full-stack developer. 
          Thank you for visiting my portfolio, and feel free to connect with me!
        </motion.p>
      </div>
    </div>
  );
};

export default About;
