import { motion } from "framer-motion"
import { FaRocket, FaUsers, FaLightbulb, FaCheckCircle } from "react-icons/fa"
import Aboutus from "../Components/Aboutus"
import TeamCarousel from "../Components/TeamCarousel"
import StatsSection from "../Components/StatsSection"

export default function About() {
  const values = [
    {
      icon: <FaRocket size={40} />,
      title: "Innovative Solutions",
      description: "Transforming businesses through innovative and advanced technology solutions"
    },
    {
      icon: <FaLightbulb size={40} />,
      title: "Right Technology",
      description: "Our unique approach to 'Choosing The Right Technology' creates competitive advantage"
    },
    {
      icon: <FaUsers size={40} />,
      title: "Customer-Friendly",
      description: "Helping businesses accelerate growth with personalized service"
    }
  ]

  const benefits = [
    "Organizational agility",
    "Lower total cost of design",
    "Competitive advantage",
    "Advanced technology solutions",
    "Expert consultation",
    "Proven track record"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[poppins]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-24 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Bottomline Technologies
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
          >
            The customer-friendly company helping businesses accelerate growth
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <span className="font-bold text-blue-600">Bottomline</span> is a leading global IT services provider,
              transforming client's businesses through innovative and advanced technology solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our unique approach to{" "}
              <span className="font-bold text-blue-600">'Choosing The Right Technology'</span>{" "}
              helps clients create competitive advantage through organizational agility and lower total cost of design.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              One of India's leading firms that has helped transform the IT Infrastructure for{" "}
              <span className="font-semibold text-blue-600">hundreds of clients</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all border-t-4 border-blue-500"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
            What We Deliver
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

      {/* Stats Section */}
      <StatsSection />

      {/* About Us Component (with image and details) */}
      <Aboutus />

      {/* Team Section */}
      <section id="team" className="bg-gray-50">
        <TeamCarousel />
      </section>
    </div>
  )
}
