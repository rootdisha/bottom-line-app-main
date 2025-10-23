import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import HH from "../Images/teamwork-concept-landing-page.png";

const stats = [
  { value: 101, label: "Active Clients", desc: "consequuntur quae dired para mesta" },
  { value: 200, label: "Projects Done", desc: "adipisci atque cum quia aut" },
  { value: 5, label: "Glorious Years", desc: "aut commodi quaerat" },
  { value: 8, label: "Team Advisors", desc: "aut commodi quaerat" },
];

const StatItem = ({ value, label, desc, index, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = value;
    const duration = 1000;
    const step = Math.ceil(end / 60);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, duration / end);

    return () => {
      clearInterval(interval);
      setCount(0); // Reset when out of view
    };
  }, [value, trigger]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={trigger ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="border-b py-4"
    >
      <div className="flex items-baseline space-x-3 text-lg md:text-xl font-[poppins]">
        <span className="text-blue-800 font-bold text-3xl md:text-4xl font-[second]">{count}</span>
        <span>
          <strong className="text-blue-800">{label}</strong> {desc}
        </span>
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.4 });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-10 bg-white"
    >
      {/* Left Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={HH}
          alt="Team illustration"
          className="max-w-2xl w-full"
        />
      </div>

      {/* Right Stats */}
      <div className="w-full md:w-1/2">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} index={i} trigger={isInView} />
        ))}
      </div>
    </div>
  );
}
