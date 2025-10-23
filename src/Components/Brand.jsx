import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import AA from "../Brand/client-1.jpg";
import AB from "../Brand/client-2.jpg";
import AC from "../Brand/client-3.jpg";
import AD from "../Brand/client-4.jpg";
import AE from "../Brand/client-5.jpg";
import AF from "../Brand/client-6.jpg";
import AG from "../Brand/client-7.jpg";
import AH from "../Brand/client-8.jpg";
import AI from "../Brand/client-9.jpg";
import AJ from "../Brand/client-10.jpg";
import AK from "../Brand/client-11.jpg";
import AL from "../Brand/client-12.jpg";
import AM from "../Brand/client-13.jpg";

const brands = [
  { src: AA, alt: "Michelin" },
  { src: AB, alt: "Isuzu" },
  { src: AC, alt: "Kramski" },
  { src: AD, alt: "Hyundai" },
  { src: AE, alt: "Adidas" },
  { src: AF, alt: "BMW" },
  { src: AG, alt: "BMW" },
  { src: AH, alt: "BMW" },
  { src: AI, alt: "BMW" },
  { src: AJ, alt: "BMW" },
  { src: AK, alt: "BMW" },
  { src: AL, alt: "BMW" },
  { src: AM, alt: "BMW" },
];

export default function BrandLogos() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-100%",
      transition: {
        repeat: Infinity,
        duration: 40, // Slightly slower for more brands
        ease: "linear",
      },
    });
  }, [controls]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () =>
    controls.start({
      x: "-100%",
      transition: {
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      },
    });

  return (
    <div className="overflow-hidden py-8 bg-white">
      <motion.div
        className="flex gap-16"
        animate={controls}
        initial={{ x: "100%" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...brands, ...brands].map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="h-12 sm:h-14 md:h-33 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </motion.div>
    </div>
  );
}
