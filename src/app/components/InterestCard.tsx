"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface InterestCardProps {
  title: string;
  imageSrc: string;
  alt: string;
  backContent: string;
}

export default function InterestCard({
  title,
  imageSrc,
  alt,
  backContent,
}: InterestCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full sm:w-64 h-80"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <motion.div
          className="absolute w-full h-full bg-white rounded-xl shadow-md overflow-hidden border flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            opacity: flipped ? 0.1 : 1,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div className="relative w-full h-40">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>
          <div className="flex-grow p-4 flex items-center justify-center">
            <h3 className="text-xl font-semibold text-gray-800 text-center font-sans">
              {title}
            </h3>
          </div>
        </motion.div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-xl shadow-md flex flex-col items-start justify-start p-5"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Faded background image */}
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt="Faded background"
              fill
              className="object-cover opacity-10"
            />
          </div>
          {/* Content layer on top of faded image */}
          <div className="relative z-10 p-5 flex flex-col items-start justify-start h-full">
            <p className="text-left text-sm leading-relaxed font-light font-sans">
              {backContent}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
