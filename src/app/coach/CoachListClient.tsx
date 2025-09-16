"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Member } from "@/lib/typs";
import type { Variants } from "framer-motion";
interface Props {
  coaches: Member[];
}

const container:Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const card:Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6,  ease: [0, 0, 0.2, 1]} },
};

export default function CoachListClient({ coaches }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-black font-bold text-center mb-12">COACHES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center"
            >
              {coach.img && (
                <img
                  src={coach.img.url}
                  alt={coach.name}
                  className="w-full h-64 object-cover rounded-md"
                />
              )}

              <div className="p-6 flex flex-col items-center text-center space-y-3 h-72">
                <div className="overflow-y-auto">
                  <h3 className="text-lg sm:text-xl text-black font-semibold">{coach.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">{coach.role}</p>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed whitespace-pre-line mt-4">
                    {coach.career}
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mt-4">
                    “{coach.message}”
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
