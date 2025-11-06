import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const teamImages = [
  "TeamImg/WhatsApp Image 2025-06-03 at 11.26.34 AM.jpeg",
  "TeamImg/WhatsApp Image 2025-06-03 at 11.26.56 AM (1).jpeg",
  "TeamImg/WhatsApp Image 2025-06-03 at 11.26.56 AM.jpeg",
  "TeamImg/WhatsApp Image 2025-06-03 at 11.26.58 AM (2).jpeg",
  "TeamImg/WhatsApp Image 2025-06-03 at 11.26.59 AM.jpeg",
  "TeamImg/WhatsApp Image 2025-06-03 at 11.26.58 AM.jpeg",
]

export default function TeamCarousel() {
  const [current, setCurrent] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [slidesToShow, setSlidesToShow] = useState(1)

  // Detect screen size → decide slides to show
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3)
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(1)
      }
    }
    updateSlides()
    window.addEventListener("resize", updateSlides)
    return () => window.removeEventListener("resize", updateSlides)
  }, [])

  const totalSlides = Math.ceil(teamImages.length / slidesToShow)

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides)
    }, 4000)
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <section className="bg-[#0F0F0F] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6">
          Meet <span className="text-yellow-400">Our Team</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12">
          Passionate minds working together to build success.
        </p>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / slidesToShow)}%)`,
            }}
          >
            {teamImages.map((img, idx) => (
              <motion.div
                key={idx}
                className={`w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0`}
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`team-${idx}`}
                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <p className="text-white text-xl font-semibold">
                      Team Member {idx + 1}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === idx ? "bg-yellow-400" : "bg-gray-600"
              }`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={selectedImage}
                  alt="enlarged"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <button
                  className="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-red-400 transition"
                  onClick={() => setSelectedImage(null)}
                >
                  &times
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
