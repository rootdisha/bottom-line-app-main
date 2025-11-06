import { motion } from "framer-motion"
import Lottie from "lottie-react"
import Hea from "../Anime/Hea.json"
import New from "../Images/gray-fluid-background-frame.png"

import type { Variants } from "framer-motion"

// Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white font-[poppins] overflow-hidden">
      {/* Background Image with Overlay */}
      <img
        src={New}
        alt="Decor"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-24 gap-12">
        
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left max-w-3xl font-[roselin]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle */}
          <motion.p
            className="text-blue-200 font-[poppins] uppercase tracking-wide mb-3"
            variants={fadeInUp}
          >
            Welcome to Bottomline
          </motion.p>

          {/* Title with animation */}
          <motion.h1
            className="text-5xl md:text-7xl mb-6 leading-tight"
            variants={fadeInUp}
          >
            At the forefront of
            <br />
            <span className="text-blue-300">Digital & Cybersecurity Transformation</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-white/80 font-[poppins] mb-8 text-lg"
            variants={fadeInUp}
          >
            Bottomline Technologies is one of India's leading firms that has helped transform
            the IT Infrastructure for hundreds of clients. We deliver secure, scalable, and
            innovative solutions through our unique approach to{" "}
            <span className="font-bold">
              'Choosing The Right Technology'
            </span>
            {" "}— helping clients create competitive advantage through organizational agility
            and lower total cost of design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 font-[poppins]"
            variants={fadeInUp}
          >
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg font-semibold transition">
              Get Started
            </button>
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg shadow-lg font-semibold transition">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Lottie */}
        <motion.div
          className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Lottie animationData={Hea} loop autoplay />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
