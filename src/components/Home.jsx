import React from 'react'
import HeroImage from '../assets/HeroImage.jpeg';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

        {/* LEFT SIDE: Text Content with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}   // scroll par trigger hoga, bar-bar
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-xl text-gray-500 py-4 max-w-md">
            I am a fourth year student at Malwa Institute of Science and Technology.
            Currently, I'm pursuing my Bachelor degree in Computer Science.
            I'm learning to work on web application using technologies like
            React JS, Tailwind.
            I'm also proficient in programming languages like C, C++, React and JavaScript.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                         bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Hero Image with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-30"></div>
          
          <motion.img
            src={HeroImage}
            alt="my profile"
            className="relative rounded-full mx-auto w-2/3 md:w-full border-2 border-gray-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  )
};

export default Home;
