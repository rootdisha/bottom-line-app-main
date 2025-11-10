import { motion } from "framer-motion"
import { FaMobileAlt, FaUsers, FaLaptop, FaRocket, FaCheckCircle, FaLightbulb } from "react-icons/fa"

export default function Mobility() {
  const enablements = [
    {
      icon: <FaCheckCircle size={40} />,
      title: "Uninterrupted Access",
      description: "Timely access to all information and applications anytime, anywhere"
    },
    {
      icon: <FaRocket size={40} />,
      title: "Optimized Processes",
      description: "Simplified and streamlined workflows for maximum efficiency"
    },
    {
      icon: <FaUsers size={40} />,
      title: "Enhanced Productivity",
      description: "Boost employee productivity with flexible work environments"
    },
    {
      icon: <FaLightbulb size={40} />,
      title: "Unique Experience",
      description: "Intuitive and unique customer experience"
    }
  ]

  const benefits = [
    "Effective knowledge transfer",
    "Seamless collaboration",
    "Optimum productivity",
    "Enhanced workforce mobility",
    "Ideas communicated anytime, anywhere",
    "Network security maintained",
    "No increase in IT overhead",
    "Support for personal devices (BYOD)"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-pink-900 via-purple-800 to-indigo-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Mobility Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-pink-100 max-w-4xl"
          >
            Enable seamless collaboration for optimum productivity
          </motion.p>
        </div>
      </motion.section>

      {/* Tagline Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Enable the seamless collaboration for optimum productivity!
          </motion.h2>
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
              <FaMobileAlt className="text-pink-600 text-5xl flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  The Future is Here
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The future is here, and you need to scale up to it by providing the agility and flexibility
                  your organization's associates demand. Boost the level of comfort for employees that will
                  increase their productivity in a conducive and favorable office environment.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We enable you to embrace technologies, including employee's personal devices and hardware,
                  to enhance workforce mobility and enable ideas to be communicated anytime from anywhere,{" "}
                  <span className="font-semibold text-pink-600">without slowing down your network, sacrificing security or increasing IT overhead</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enablements Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            Bottomline Mobility Solutions Enable You With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 text-lg mb-12"
          >
            Comprehensive mobility solutions for the modern workplace
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enablements.map((enablement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all border-t-4 border-pink-500"
              >
                <div className="text-pink-600 mb-4 flex justify-center">
                  {enablement.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{enablement.title}</h3>
                <p className="text-gray-600 text-sm">{enablement.description}</p>
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
            Additional Benefits
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

      {/* Visual Banner */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white text-center"
          >
            <FaLaptop className="text-8xl mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work From Anywhere, Anytime
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Empower your workforce with mobility solutions that enable collaboration without
              boundaries, while maintaining security and performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-pink-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Enable Workforce Mobility?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-pink-100"
          >
            Let's implement mobility solutions that boost productivity and employee satisfaction
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  )
}
