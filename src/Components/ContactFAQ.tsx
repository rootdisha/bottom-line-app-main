import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    {
      question: "What is Hyper Converged Infrastructure and how can it benefit my business?",
      answer: "HCI combines compute, storage, and networking into a single integrated solution, simplifying IT operations and reducing total cost of ownership while improving scalability."
    },
    {
      question: "How long does a typical IT infrastructure migration take?",
      answer: "Migration timelines vary based on the scope and complexity of your infrastructure. Our team works efficiently to minimize disruption while ensuring data security and integrity throughout the process."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer 24/7 monitoring and maintenance services to ensure your IT infrastructure continues to run smoothly. Our team is always available to assist with any issues or optimizations."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve hundreds of clients across various industries, providing tailored IT infrastructure solutions that meet specific business requirements and compliance standards."
    },
    {
      question: "How do you ensure data security during migrations and implementations?",
      answer: "We follow strict security protocols and use industry-leading tools to protect your data. Our comprehensive approach includes encryption, secure transfer methods, and thorough testing at every stage."
    }
  ]

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-24 min-screen font-[poppins]">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-[second]"><span className="text-blue-600">Getin</span> Touch </h2>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-blue-600 text-sm font-semibold uppercase mb-2">
            Contact
          </h2>
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-6">
            We help you automate your workflows, automate repetitive tasks, and elevate your business.
          </p>
          <div className="text-gray-700">
            <p className="mb-8 ">
              📍 Bottomline Technologies private limited
1st avenue, 9/8, 6th street,
Inner Circular Corridor, B-Sector,
Anna Nagar West Extension,
Chennai, Tamil Nadu 600101
            </p>
            <p>📞 +91 85259 55567</p>
            <p>✉️ info@bottomlinetechnologies.in</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h3 className="text-blue-700 font-semibold text-lg mb-4">📧 Rio</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-200 rounded-lg" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-200 rounded-lg" />
            <textarea placeholder="Message" className="w-full p-3 border border-gray-200 rounded-lg" rows="4" />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <h4 className="text-blue-600 text-sm font-semibold uppercase mb-2">FAQ</h4>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          You’ve got questions, we’ve got <span className="text-blue-600">answers</span>
        </h2>

        <div className="max-w-2xl mx-auto space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-200 pb-3 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{faq.question}</p>
                <span>{openIndex === i ? "−" : "+"}</span>
              </div>
              {openIndex === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600 text-sm"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
