import { motion } from "framer-motion"
import { FaShieldAlt, FaCloud, FaNetworkWired, FaServer, FaCheckCircle } from "react-icons/fa"

export default function HCI() {
  const highlights = [
    "Protection for existing IT investments",
    "Simplified IT operations",
    "Low TCO and high availability",
    "Faster infrastructure deployments",
    "One click provisioning",
    "Intrinsic security across all environments",
    "Centralized management and simpler policy enforcement",
    "Ability to scale on premise and public cloud with simplified disaster recovery capabilities",
    "Proven capabilities for VDI deployments, collaboration tools, core enterprise applications, big data analytics and messaging applications"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hyper Converged Infrastructure
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl"
          >
            Simplify and reduce the TCO of IT infrastructure with integrated solutions
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Future of Infrastructure
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With our rich experience of managing data centers, <span className="font-bold text-blue-600">Bottomline</span> is
              well positioned to offer enterprises the opportunity to simplify and reduce the TCO of IT infrastructure
              with Hyper Converged Infrastructure Solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              As HCI is an integrated solution, it enables enterprises to combine and centralize management of three
              core elements of a data center: <span className="font-semibold">storage, compute and networking</span>.
              The result: <span className="font-semibold text-blue-600">improved scalability and reduced data center complexity</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Elements Visualization */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Three Core Elements, One Solution
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaServer size={48} />, title: "Compute", color: "blue" },
              { icon: <FaNetworkWired size={48} />, title: "Networking", color: "indigo" },
              { icon: <FaCloud size={48} />, title: "Storage", color: "purple" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-${item.color}-500`}
              >
                <div className={`text-${item.color}-600 mb-4 flex justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Key Highlights
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Infrastructure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Let's discuss how HCI can simplify your IT operations and reduce costs
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  )
}
