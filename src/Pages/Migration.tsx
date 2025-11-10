import { motion } from "framer-motion"
import { FaExchangeAlt, FaServer, FaCloud, FaCheckCircle, FaBuilding, FaArrowsAlt } from "react-icons/fa"

export default function Migration() {
  const achievements = [
    {
      icon: <FaCheckCircle size={40} />,
      title: "Successful Transition",
      description: "Encompassing various applications, physical servers, server locations"
    },
    {
      icon: <FaCloud size={40} />,
      title: "Comprehensive Migration",
      description: "Data center migration, Cloud migration, SMB Cloud migration, Workplace migration etc."
    },
    {
      icon: <FaServer size={40} />,
      title: "Efficient Co-coordination",
      description: "Migration of all IT equipment including networks, servers, labs, desktops, printers and MFDs"
    }
  ]

  const migrationTypes = [
    "Data center migration",
    "Cloud migration",
    "SMB Cloud migration",
    "Workplace migration",
    "Server upgrades",
    "Database maintenance",
    "Offsite data relocation"
  ]

  const benefits = [
    "Efficient and speedy migration",
    "Secure data handling",
    "Expert data migration services",
    "Minimal business disruption",
    "Reliable transition process",
    "Comprehensive planning and execution"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-green-900 via-teal-800 to-cyan-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Migration Services
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-teal-100 max-w-4xl"
          >
            Efficient and secure data migration services
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
            Make Space for Your Business Growth!
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
              <FaExchangeAlt className="text-green-600 text-5xl flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Strategic Data Migration
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Migrating your company's crucial data becomes important as your business grows and operations
                  evolve. Any successful business knows the significance of efficiently storing, protecting, and
                  maintaining access to data.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Whether you are upgrading your server, relocating your data offsite, or going through database
                  maintenance, <span className="font-semibold text-green-600">successful data migration is done speedily and effectively</span>.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  With <span className="font-bold text-green-600">Bottomline</span>, be assured that your data
                  migration is efficient and successful. We offer reliable and expert data migration services for
                  enterprise businesses. When your organization grows and your data storage needs change, we will
                  help you efficiently and securely migrate your important data.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            We Help You Achieve
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all border-t-4 border-green-500"
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Types Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Migration Services We Offer
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {migrationTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{type}</p>
              </motion.div>
            ))}
          </div>
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
            Why Choose Our Migration Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
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
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-2xl p-12 text-white text-center"
          >
            <FaArrowsAlt className="text-8xl mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Migration, Zero Disruption
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Our expert team ensures your data migration is completed efficiently, securely,
              and with minimal impact on your daily operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-green-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Migrate Your Data?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-teal-100"
          >
            Let's plan and execute a seamless migration strategy for your growing business
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  )
}
