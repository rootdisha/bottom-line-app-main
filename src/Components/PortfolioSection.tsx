import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { useInView } from "framer-motion"

const portfolioItems = [
  { title: "App 1", category: "App", image: "/images/app1.jpg" },
  { title: "Product 1", category: "Product", image: "/images/product1.jpg" },
  { title: "Branding 1", category: "Branding", image: "/images/branding1.jpg" },
  { title: "Books 1", category: "Books", image: "/images/books1.jpg" },
  { title: "App 2", category: "App", image: "/images/app2.jpg" },
  { title: "Product 2", category: "Product", image: "/images/product2.jpg" },
  { title: "Branding 2", category: "Branding", image: "/images/branding2.jpg" },
  { title: "Books 2", category: "Books", image: "/images/books2.jpg" },
  { title: "App 3", category: "App", image: "/images/app3.jpg" },
  { title: "Product 3", category: "Product", image: "/images/product3.jpg" },
  { title: "Branding 3", category: "Branding", image: "/images/branding3.jpg" },
  { title: "Books 3", category: "Books", image: "/images/books3.jpg" },
]

const categories = ["All", "App", "Product", "Branding", "Books"]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

const PortfolioCard = ({ item, index, trigger }) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate={trigger ? "visible" : "hidden"}
    variants={cardVariants}
    className="bg-white shadow-md rounded-xl overflow-hidden"
  >
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h4 className="font-semibold text-lg">{item.title}</h4>
      <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
    </div>
  </motion.div>
)

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.2, once: false })

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section ref={sectionRef} className="px-4 md:px-8 py-16 bg-gray-100 overflow-hidden font-[poppins]">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-[second]"><span className="text-blue-600">Our</span> Portfolio </h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Quam sed id excepturi accusantium dolorem ut quis dolores nisi illum nostrum enim velit qui ut et autem via reprehenderit sunt deleniti.
        </p>
        <div className="mt-6 flex justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition text-sm ${
                activeCategory === cat
                  ? "bg-blue-800 text-white"
                  : "bg-white text-blue-800 border-blue-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((item, i) => (
          <PortfolioCard key={i} item={item} index={i} trigger={isInView} />
        ))}
      </div>
    </section>
  )
}
