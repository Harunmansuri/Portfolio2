import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-6 text-white flex items-center"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto w-full text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-bold border-b-4 inline border-gray-500">
            Contact Me
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg md:text-xl font-semibold text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Want to chat? Send me an email through this button and I'll respond
          whenever I can.
        </motion.p>

        {/* Classic Animated Button */}
        <motion.a
          href="mailto:mrharun961766@gmail.com"
          className="mt-10 inline-block text-nowrap rounded-xl border border-cyan-500 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-bold text-white shadow-md"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 20px rgba(6,182,212,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Send Email ✉️
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
