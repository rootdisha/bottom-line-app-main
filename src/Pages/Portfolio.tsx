import { motion } from "framer-motion"
import PortfolioSection from "../Components/PortfolioSection"
import Brand from "../Components/Brand"
import Testimonial from "../Components/Testimonial"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
          >
            Showcasing our successful projects and client partnerships
          </motion.p>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Client Brands */}
      <section className="bg-gray-50">
        <Brand />
      </section>

      {/* Testimonials */}
      <Testimonial />
    </div>
  )
}
