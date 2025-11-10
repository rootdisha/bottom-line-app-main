import { motion } from "framer-motion"
import { FaDatabase, FaServer, FaShieldAlt, FaCogs, FaCheckCircle } from "react-icons/fa"

export default function DataCentre() {
  const services = [
    { icon: <FaCogs size={40} />, title: "Design", description: "Comprehensive data center architecture and planning" },
    { icon: <FaServer size={40} />, title: "Deploy", description: "Expert implementation and infrastructure setup" },
    { icon: <FaShieldAlt size={40} />, title: "Optimize", description: "Performance tuning and efficiency improvements" },
    { icon: <FaDatabase size={40} />, title: "Support", description: "24/7 monitoring and maintenance services" }
  ]

  const coreElements = [
    "Processing critical business applications",
    "Storing organizational data securely",
    "Managing data flow and accessibility",
    "Ensuring business continuity",
    "Scalable infrastructure for growth",
    "High availability and redundancy"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Data Centre Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl"
          >
            Design, deploy, optimize and support mission-critical data centers
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
              <FaDatabase className="text-blue-600 text-5xl flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  The Backbone of Your Business
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Data Centre houses the organization's shared Information Technology equipment that stays backbone
                  to processing, storing, managing data and applications that are vital to the business continuity.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-bold text-blue-600">Team Bottomline</span> is certified and experienced to{" "}
                  <span className="font-semibold">design, deploy, optimize and support</span> data centers that
                  drive your business forward.
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
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Our Data Centre Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
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
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Elements Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            What Data Centers Enable
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreElements.map((element, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{element}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Badge Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-12 text-white text-center"
          >
            <div className="bg-white/10 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
              <FaShieldAlt className="text-6xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certified & Experienced Team
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our team holds industry certifications and brings years of hands-on experience in
              designing and managing enterprise data centers
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Build or Optimize Your Data Center?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Let's discuss how we can help ensure your business continuity with robust data center solutions
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
