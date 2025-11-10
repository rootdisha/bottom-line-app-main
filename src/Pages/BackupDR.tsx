import { motion } from "framer-motion"
import { FaCloudUploadAlt, FaServer, FaShieldAlt, FaDatabase, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"

export default function BackupDR() {
  const solutions = [
    "Enterprise Backup Management Plan",
    "Enterprise Backup Management Solutions"
  ]

  const enablements = [
    {
      icon: <FaServer size={40} />,
      title: "Server Backup Software",
      description: "Physical, virtual and cloud server backup software"
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Robust Storage Management",
      description: "Comprehensive storage management solutions"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Secure File Sharing",
      description: "Secure file sharing and system deployment"
    },
    {
      icon: <FaCloudUploadAlt size={40} />,
      title: "Disaster Recovery Plans",
      description: "Efficient disaster recovery planning and execution"
    }
  ]

  const benefits = [
    "Storage cost optimization",
    "Effective information management",
    "Data recovery assurance",
    "Organized and ready-to-use recovered data",
    "Backup data management",
    "Protection from unprecedented situations"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 via-cyan-800 to-blue-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Backup and Disaster Recovery
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-cyan-100 max-w-4xl"
          >
            Enterprise backup management solutions for complete data protection
          </motion.p>
        </div>
      </motion.section>

      {/* Critical Message Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center"
          >
            <FaExclamationTriangle className="text-6xl mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Having no disaster plan for an organization is the biggest disaster ever!
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
            <div className="flex items-start gap-6 mb-8">
              <FaCloudUploadAlt className="text-blue-600 text-5xl flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Safeguard Your Resources
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We understand how important it is for a company to safeguard and backup their resources and
                  sensitive data from unprecedented situations. Hence, there is a dire need to have a strategy
                  that encompasses every aspect of threats and disasters to recover the data as well as keep
                  your IT operations running.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Also, only recovering your data is of no use! The data recovered should be{" "}
                  <span className="font-semibold text-blue-600">organized and be ready to use at any given instance</span>.
                  Thus, Backup data management is as important as Recovery.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                For this, Bottomline offers:
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-blue-600 text-xl flex-shrink-0" />
                    <span className="text-gray-700 font-semibold text-lg">{solution}</span>
                  </li>
                ))}
              </ul>
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
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            We Enable You With
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enablements.map((enablement, idx) => (
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

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Protect Your Data?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-cyan-100"
          >
            Let's implement a comprehensive backup and disaster recovery strategy for your organization
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
