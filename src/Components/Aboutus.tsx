import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import BgImg from "../Images/colleagues-working-together-project.jpg"
import TeamImg from "../Images/WhatsApp Image 2025-08-19 at 10.32.18 AM.jpeg"

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [inView, controls])

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 sm:px-12 md:px-20 bg-fixed bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left - Team Image with Badge */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={TeamImg}
            alt="Team working"
            className="rounded-3xl shadow-2xl w-full  object-cover border-4 border-white/20"
          />

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-8 -right-8 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg flex flex-col items-start"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <p className="text-sm uppercase tracking-wide opacity-80">Trusted By</p>
            <h3 className="text-2xl font-bold">100+ Enterprises</h3>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25 } } }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-xl text-white"
        >
          <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl font-extrabold mb-6">
            Building <span className="text-blue-500">Future-Ready</span> Solutions
          </motion.h2>

          <motion.p variants={fadeIn} className="text-gray-200 leading-relaxed mb-8">
            At <span className="font-bold">Bottomline</span>, we help businesses accelerate growth
            with cutting-edge IT transformation services. Our mission is to make technology{" "}
            <b>simpler, scalable, and smarter</b>.
          </motion.p>

          {/* Highlight Cards */}
          <motion.div variants={fadeIn} className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 border border-white/20 p-6 rounded-2xl hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Hyper Converged Infra</h3>
              <p className="text-gray-300 text-sm">
                Simplify IT infrastructure and reduce costs with integrated compute, storage, and networking.
              </p>
            </div>
            <div className="bg-white/5 border border-white/20 p-6 rounded-2xl hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">24/7 Global Support</h3>
              <p className="text-gray-300 text-sm">
                Dedicated support ensuring your business never stops running.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.button>

            <div className="flex items-center gap-3 bg-black/30 px-5 py-3 rounded-xl shadow border border-white/20">
              <span className="bg-blue-500 text-white p-3 rounded-full">📞</span>
              <div>
                <p className="text-gray-300 text-sm">Talk with us</p>
                <p className="font-bold text-white">+123-456-7890</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
