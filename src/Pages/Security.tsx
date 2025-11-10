import { motion } from "framer-motion"
import { FaShieldAlt, FaLock, FaEye, FaCheck, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"

export default function Security() {
  const roadmapOfferings = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "Tools and Services",
      description: "Make your business secure and most profitable"
    },
    {
      icon: <FaLock size={40} />,
      title: "Superior Data Security",
      description: "Enhanced data security and privacy protection"
    },
    {
      icon: <FaCheck size={40} />,
      title: "Implementation Controls",
      description: "Information risk management and controls"
    },
    {
      icon: <FaCheckCircle size={40} />,
      title: "Governance & Compliance",
      description: "Adherence to governance, risk and compliances"
    }
  ]

  const additionalBenefits = [
    "Cost optimization",
    "Minimal disruption",
    "Customized solutions",
    "Visibility across traditional platforms",
    "Next-generation platform coverage",
    "End-to-end security coverage",
    "Protection against attacks",
    "Cloud-based privacy assurance"
  ]

  const securityCapabilities = [
    "Understand vulnerable assets in your organization",
    "Prioritize the vulnerabilities",
    "Suggest remediation strategies",
    "Continuously measure for gaps in coverage",
    "Process improvement recommendations",
    "Ensure assets are up-to-date with recent patches",
    "Get up-to-date inventory status",
    "Meet compliance standards requirements"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-red-900 via-gray-900 to-black text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Security Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-red-100 max-w-4xl"
          >
            Comprehensive network and information security
          </motion.p>
        </div>
      </motion.section>

      {/* Warning Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-2xl p-8 text-white text-center"
          >
            <FaExclamationTriangle className="text-6xl mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Keep check on the vulnerabilities and keep away from threats!
            </h2>
          </motion.div>
        </div>
      </section>

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
              <FaShieldAlt className="text-red-600 text-5xl flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Trusted IT Security Provider
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  With network security experiencing its most critical moments, having confidence in information
                  security services is vital. Businesses are a perfect hub for hackers and viruses, hence, the IT
                  infrastructure put into place must be secure to protect data. And, with cloud-based privacy, data
                  integrity and business security have to be maintained more than ever.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <span className="font-bold text-red-600">Bottomline</span> is a trusted IT security provider,
                  offering comprehensive network security services that keeps information safe from unauthorized access.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We take an aggressive approach to know every aspect of your IT systems and make sure that we have{" "}
                  <span className="font-semibold text-red-600">end-to-end covered your security points</span> and
                  safeguard your network against any possible attack. With this process in place, ensuring your data
                  is protected at every turn.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Offerings Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Our Security Roadmap Offers
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapOfferings.map((offering, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all border-t-4 border-red-500"
              >
                <div className="text-red-600 mb-4 flex justify-center">
                  {offering.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{offering.title}</h3>
                <p className="text-gray-600 text-sm">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Security Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            Information Security Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 text-lg mb-12"
          >
            Comprehensive security assessment and management
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {securityCapabilities.map((capability, idx) => (
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

      {/* Additional Benefits Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Additional Benefits
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Banner */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl shadow-2xl p-12 text-white text-center"
          >
            <FaEye className="text-8xl mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              End-to-End Security Coverage
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              We ensure comprehensive protection across all your security points, safeguarding your
              network against every possible threat
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-red-600 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Secure Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-red-100"
          >
            Let's build a comprehensive security strategy to protect your organization from threats
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  )
}
