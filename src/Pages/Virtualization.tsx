import { motion } from "framer-motion"
import { FaCube, FaCloud, FaCogs, FaChartLine, FaCheckCircle, FaServer } from "react-icons/fa"

export default function Virtualization() {
  const services = [
    {
      icon: <FaChartLine size={40} />,
      title: "Strategy & Design",
      description: "The right strategy and a perfect design to match the strategy to enable you to move faster with more accurate IT assessments and an improved visibility and clarity in consolidating opportunities."
    },
    {
      icon: <FaCogs size={40} />,
      title: "Operational Management",
      description: "We help you to build a robust system that enables your organization for consistent management, intelligent management and built-in automation."
    },
    {
      icon: <FaServer size={40} />,
      title: "Virtualization Infrastructure",
      description: "We help you to choose the best fit infrastructure from the available technologies in the market that will enable you to optimize your processes."
    }
  ]

  const benefits = [
    "Enhanced data backup and recovery",
    "Streamlined server functions",
    "Unparalleled storage capacity",
    "More efficient server operations",
    "Office of the future capabilities",
    "Lower complexity and costs of storage",
    "Datacenter automation",
    "Production-proven virtualization platform"
  ]

  const achievements = [
    "Lower complexity and costs of storage",
    "Datacenter automation built on the production-proven virtualization platform",
    "Information Security management",
    "Helps understand vulnerable assets",
    "Prioritize vulnerabilities",
    "Suggest remediation strategies",
    "Continuously measure coverage gaps",
    "Process improvement recommendations"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Virtualization Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl"
          >
            Enhance and optimize through virtualization and cloud computing
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
              <FaCube className="text-purple-600 text-5xl flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  The Perfect Way to Achieve the Office of the Future
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We specialize in providing virtualization and cloud computing solutions that enhance and optimize
                  data backup and recovery, and also streamline the server functions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our virtualization service is the perfect way to achieve the office of the future—with{" "}
                  <span className="font-semibold text-purple-600">unparalleled storage capacity and a more efficient server</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            Our Virtualization Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 text-lg mb-12"
          >
            Comprehensive services to transform your IT infrastructure
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all border-t-4 border-purple-500"
              >
                <div className="text-purple-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            What You Can Achieve
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
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

      {/* Dynamic Solutions Banner */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-2xl p-12 text-white"
          >
            <div className="text-center mb-8">
              <FaCloud className="text-7xl mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dynamic Virtualization Solutions
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
                With Bottomline Virtualization Solutions & Services, we enable you to manage your IT capacities
                to enhance your service levels and streamline your technology processes for optimum business benefits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-lg p-4"
                >
                  <FaCheckCircle className="text-green-300 text-lg flex-shrink-0 mt-1" />
                  <span className="text-white/90">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Virtualize Your Infrastructure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-purple-100"
          >
            Let's discuss how virtualization can transform your IT operations and reduce costs
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  )
}
