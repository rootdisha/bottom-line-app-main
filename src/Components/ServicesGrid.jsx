import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaHdd,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaMobileAlt,
  FaExchangeAlt,
  FaCloudDownloadAlt,
  FaLayerGroup,
  FaCube
} from "react-icons/fa";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
  }),
};

const ServicesGrid = () => {
  const solutions = [
    {
      icon: <FaLayerGroup size={40} />,
      title: "Hyper Converged Infrastructure",
      description: "Simplify and reduce TCO with integrated HCI solutions",
      link: "/solutions/hci"
    },
    {
      icon: <FaNetworkWired size={40} />,
      title: "Networking",
      description: "Efficient, cost-effective network backbone design",
      link: "/solutions/networking"
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Data Centre",
      description: "Design, deploy, optimize and support data centers",
      link: "/solutions/data-centre"
    },
  ];

  const services = [
    {
      icon: <FaHdd size={40} />,
      title: "Data Storage",
      description: "Optimize storage for data-driven organizations",
      link: "/services/storage"
    },
    {
      icon: <FaServer size={40} />,
      title: "Server Infrastructure",
      description: "Strategic deployment of IT infrastructure",
      link: "/services/server"
    },
    {
      icon: <FaCloudDownloadAlt size={40} />,
      title: "Disaster Recovery",
      description: "Comprehensive DR planning and testing",
      link: "/services/disaster-recovery"
    },
    {
      icon: <FaCube size={40} />,
      title: "Virtualization",
      description: "Enhance and optimize through virtualization",
      link: "/services/virtualization"
    },
    {
      icon: <FaCloudUploadAlt size={40} />,
      title: "Backup & DR",
      description: "Enterprise backup management solutions",
      link: "/services/backup"
    },
    {
      icon: <FaExchangeAlt size={40} />,
      title: "Migration",
      description: "Efficient and secure data migration services",
      link: "/services/migration"
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Mobility",
      description: "Enable seamless collaboration and productivity",
      link: "/services/mobility"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Security",
      description: "Comprehensive network and information security",
      link: "/services/security"
    },
  ];

  return (
    <div className="bg-gray-50 py-20 font-[poppins]">
      {/* Solutions Section */}
      <div className="px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Integrated infrastructure solutions to transform your IT backbone
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <Link to={solution.link} key={index}>
              <motion.div
                custom={index}
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.05 }}
                className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center
                           bg-gradient-to-br from-white via-blue-50 to-indigo-100
                           border border-white/50 backdrop-blur-lg
                           hover:from-blue-50 hover:via-indigo-50 hover:to-purple-100
                           transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/60
                           cursor-pointer h-full"
              >
                <div className="mb-4 text-blue-600 drop-shadow-md">{solution.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-600">{solution.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT services tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <motion.div
                custom={index}
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.05 }}
                className="rounded-2xl shadow-lg p-6 flex flex-col items-center text-center
                           bg-gradient-to-br from-white via-blue-50 to-indigo-100
                           border border-white/50 backdrop-blur-lg
                           hover:from-blue-50 hover:via-indigo-50 hover:to-purple-100
                           transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/60
                           cursor-pointer h-full"
              >
                <div className="mb-3 text-blue-600 drop-shadow-md">{service.icon}</div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-xs text-gray-600">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesGrid;
