import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaCloud, FaHandshake, FaLaptop } from "react-icons/fa";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const ServicesGrid = () => {
  const services = [
    { icon: <FaCogs size={40} />, title: "Cyber Security" },
    { icon: <FaCloud size={40} />, title: "Cloud Management" },
    { icon: <FaHandshake size={40} />, title: "Enterprise Networking" },
    { icon: <FaLaptop size={40} />, title: "Hybrid IT" },
    { icon: <FaLaptop size={40} />, title: "Managed IT Services" },
    { icon: <FaLaptop size={40} />, title: "Software Solutions" },
  ];

  return (
    <motion.div
      className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24 py-20"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariant}
          whileHover={{ y: -10, scale: 1.05 }}
          className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center 
                     bg-gradient-to-br from-white via-blue-50 to-indigo-100
                     border border-white/50 backdrop-blur-lg
                     hover:from-blue-50 hover:via-indigo-50 hover:to-purple-100
                     transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/60"
        >
          <div className="mb-4 text-blue-600 drop-shadow-md">{service.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServicesGrid;
