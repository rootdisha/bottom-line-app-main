import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"

export default function YearsOfOrganization() {
  return (
    <section className="bg-gradient-to-r from-[#1E1C1C] to-[#2B2B2B] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl mb-4 font-[second]"
        >
          Celebrating 6 <span className="text-[#ffdf20]">Remarkable</span> Years!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-3xl mx-auto font-[poppins]"
        >
          With dedication, passion, and innovation, we’ve proudly completed 6 years of shaping excellence. Our journey has only just begun — thank you for being a part of it.
        </motion.p>
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(6)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-2xl animate-pulse" />
          ))}
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-10 inline-block"
        >
          <a
            href="#about"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300"
          >
            Learn More About Our Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}
