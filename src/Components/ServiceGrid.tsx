// components/ServiceGrid"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import {
  FaShieldAlt,
  FaSyncAlt,
  FaDollarSign,
  FaRocket,
  FaMousePointer,
  FaLock,
  FaTasks,
  FaCloud,
  FaDesktop,
} from "react-icons/fa"

const services = [
  { id: "01", title: "Protection for Existing IT Investments", desc: "Safeguard your current IT infrastructure while enabling future growth.", icon: <FaShieldAlt /> },
  { id: "02", title: "Simplified IT Operations", desc: "Reduce complexity with centralized, easy-to-manage systems.", icon: <FaSyncAlt /> },
  { id: "03", title: "Low TCO & High Availability", desc: "Lower costs while maintaining reliable and resilient infrastructure.", icon: <FaDollarSign /> },
  { id: "04", title: "Faster Infrastructure Deployments", desc: "Accelerate time-to-value with streamlined deployment processes.", icon: <FaRocket /> },
  { id: "05", title: "One-Click Provisioning", desc: "Simplify provisioning and scaling with intuitive controls.", icon: <FaMousePointer /> },
  { id: "06", title: "Intrinsic Security", desc: "Protect workloads across all environments with built-in security.", icon: <FaLock /> },
  { id: "07", title: "Centralized Management", desc: "Enforce policies and manage infrastructure from a single console.", icon: <FaTasks /> },
  { id: "08", title: "Scalable Hybrid Cloud", desc: "Easily extend resources on-premises and into public cloud.", icon: <FaCloud /> },
  { id: "09", title: "Proven Enterprise Workloads", desc: "Support VDI, collaboration tools, analytics & core enterprise apps.", icon: <FaDesktop /> },
]

const Card = ({ id, title, desc, icon }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 50 })
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white text-black rounded-xl p-6 shadow-md relative overflow-hidden transition-all duration-300 hover:scale-105"
    >
      <div className="absolute top-4 right-4 text-gray-400 text-sm font-semibold">
        {id}
      </div>
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  )
}

export default function ServiceGrid() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-500 text-white py-12 px-4 sm:px-10">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="text-center mb-10"
      >
        <p className="text-sm uppercase text-blue-200 font-[second] tracking-wide">
          Hyper Converged Infrastructure
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-[second] leading-tight">
          HCI <span className="text-blue-200">Highlights</span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
