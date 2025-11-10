import { motion } from "framer-motion"
import { FaServer, FaNetworkWired, FaShieldAlt, FaPhone, FaCheckCircle, FaCogs } from "react-icons/fa"

export default function ServerInfrastructure() {
  const consultationAreas = [
    {
      icon: <FaNetworkWired size={40} />,
      title: "Networking",
      description: "Complete network infrastructure planning and implementation"
    },
    {
      icon: <FaCogs size={40} />,
      title: "LAN/WAN Design",
      description: "Strategic local and wide area network architecture"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Network Security",
      description: "Comprehensive security measures and protocols"
    },
    {
      icon: <FaServer size={40} />,
      title: "Security Architecture",
      description: "Network security architecture design and implementation"
    },
    {
      icon: <FaPhone size={40} />,
      title: "IP Communications",
      description: "Modern IP-based communication solutions"
    },
    {
      icon: <FaCogs size={40} />,
      title: "Business Process",
      description: "Development and implementation of efficient business processes"
    }
  ]

  const benefits = [
    "Proven expertise in technology deployment",
    "Strategic IT infrastructure planning",
    "Seamless deployment and implementation",
    "Close collaboration with your team",
    "Business-aligned solutions",
    "Fulfillment of demands at every stage"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Server Infrastructure
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl"
          >
            Strategic deployment of IT infrastructure with ease
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
            <div className="flex items-start gap-6">
              <FaServer className="text-blue-600 text-5xl flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Expert Infrastructure Deployment
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  With our proven expertise in technology, we enable you to{" "}
                  <span className="font-semibold text-blue-600">strategize and deploy IT infrastructure with ease</span>.
                  We work closely with your team to ensure that business demands are fulfilled at every stage.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our comprehensive approach ensures your server infrastructure is robust, scalable, and aligned
                  with your business objectives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Why Choose Our Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Areas Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            Consultation Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 text-lg mb-12"
          >
            We offer comprehensive consultation in the following areas:
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all border-t-4 border-blue-500"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-blue-600 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Deploy Your Infrastructure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Let's work together to build a server infrastructure that meets your business demands
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
