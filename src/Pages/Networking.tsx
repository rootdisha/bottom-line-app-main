import { motion } from "framer-motion"
import { FaNetworkWired, FaCog, FaRocket, FaCheckCircle, FaBuilding, FaGlobe } from "react-icons/fa"

export default function Networking() {
  const capabilities = [
    "Design highly efficient network backbones",
    "Cost-effective network solutions",
    "Future-ready infrastructure planning",
    "Single-site to multi-location deployments",
    "Network optimization and upgrades",
    "Design, deploy, test, and commission networks"
  ]

  const domains = [
    { icon: <FaCog size={40} />, title: "Daily IT Operations", description: "Extensive experience managing day-to-day network operations" },
    { icon: <FaBuilding size={40} />, title: "Infrastructure Design", description: "Creating new infrastructure tailored to your needs" },
    { icon: <FaRocket size={40} />, title: "Network Optimization", description: "Enhancing existing networks for peak performance" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Networking Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl"
          >
            Efficient, cost-effective, and future-ready network backbone design
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
            <div className="flex items-start gap-6 mb-6">
              <FaNetworkWired className="text-indigo-600 text-5xl flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Building Your Network Backbone
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Designing and implementing a highly efficient, cost-effective, and future-ready network backbone
                  can significantly streamline an organization's operations.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our team has extensive experience across various domains, managing daily IT operations. Whether
                  it's creating new infrastructure or optimizing an existing network, we have the capability to{" "}
                  <span className="font-semibold text-indigo-600">design, deploy, test, and commission networks</span>,
                  ranging from single-site to multiple-location environments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Our Expertise Across Domains
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((domain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{domain.title}</h3>
                <p className="text-gray-600">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            What We Deliver
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Visualization */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white text-center"
          >
            <FaGlobe className="text-8xl mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Single Site to Global Networks
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              We have the capability to design, deploy, test, and commission networks ranging from
              single-site to multiple-location environments across the globe
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Build Your Network Infrastructure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Let's discuss how we can design a future-ready network for your organization
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  )
}
