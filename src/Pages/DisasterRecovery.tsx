import { motion } from "framer-motion"
import { FaShieldAlt, FaCloudDownloadAlt, FaServer, FaCheckCircle, FaFileAlt, FaChartLine } from "react-icons/fa"

export default function DisasterRecovery() {
  const services = [
    {
      icon: <FaFileAlt size={40} />,
      title: "IT Disaster Recovery Program Assessment",
      points: [
        "Analyze present recovery strategy",
        "Review your program documentation",
        "Interview key stakeholders for industry insights"
      ]
    },
    {
      icon: <FaChartLine size={40} />,
      title: "IT Disaster Recovery Strategy & Roadmap",
      points: [
        "Assessment of your infrastructure, applications, staff and data",
        "Align your Business Continuity program requirements with your IT availability needs"
      ]
    },
    {
      icon: <FaServer size={40} />,
      title: "IT Disaster Recovery Plan Development",
      points: [
        "Develop plans and procedures in case of crisis",
        "Enablement to restore critical IT infrastructure, applications and data"
      ]
    },
    {
      icon: <FaCheckCircle size={40} />,
      title: "IT Disaster Recovery Test Management",
      points: [
        "Plan for Disaster recovery",
        "Aligned disaster recovery plan with BCP"
      ]
    }
  ]

  const priorities = [
    "Resilience for confidential data",
    "Access control and availability",
    "Protection against risks and disasters",
    "Business continuity assurance",
    "Recovery of invaluable information",
    "Protection for virtual environments"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-red-900 via-orange-800 to-red-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Disaster Recovery
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-orange-100 max-w-4xl"
          >
            Comprehensive DR planning and testing for business continuity
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
              <FaShieldAlt className="text-red-600 text-5xl flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Resilience is a Top Priority
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  With a lot of invaluable information and data within the premises and in virtual environments,
                  a disaster recovery plan in case of a risk is necessary. Resilience is a top priority in case
                  of confidential data and access to various data in the organization.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-bold text-red-600">Bottomline</span> offers the following specialized
                  disaster recovery services to ensure your business continuity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Our DR Priorities
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priorities.map((priority, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{priority}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Specialized Disaster Recovery Services
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all border-t-4 border-red-500"
              >
                <div className="text-red-600 mb-4 flex justify-center md:justify-start">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 text-lg flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Banner */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-2xl p-12 text-white text-center"
          >
            <FaCloudDownloadAlt className="text-8xl mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Wait for Disaster to Strike
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              A disaster recovery plan is not optional—it's essential for protecting your organization's
              invaluable data and ensuring business continuity
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-red-600 to-orange-600 text-white">
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
            className="text-xl mb-8 text-orange-100"
          >
            Let's build a comprehensive disaster recovery plan tailored to your organization
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
