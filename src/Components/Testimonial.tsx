// components/TestimonialCarousel"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import { FaQuoteLeft } from "react-icons/fa"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechWave Inc.",
    text: "Their services truly elevated our brand. From design to development, they deliver excellence.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel Lee",
    role: "Founder, CloudOps",
    text: "Reliable, creative, and efficient. They transformed our cloud infrastructure with modern solutions.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aisha Khan",
    role: "Marketing Director, DesignHut",
    text: "They crafted a compelling brand identity and helped scale our audience with data-driven campaigns.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
]

export default function TestimonialCarousel() {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-10 font-[poppins]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-blue-600 uppercase text-4xl sm:text-5xl md:text-6xl font-[second] tracking-wide">
          <span className="text-black">Our</span>  Testimonials
        </p>
        <h2 className="text-3xl sm:text-2xl font-bold text-gray-800">
          Hear From Our Happy Clients
        </h2>
      </motion.div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <FaQuoteLeft className="text-blue-400 text-3xl mb-6 mx-auto" />
              <p className="text-gray-700 text-lg italic mb-8">
                "{item.text}"
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-4 border-blue-500 mb-3"
                />
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
