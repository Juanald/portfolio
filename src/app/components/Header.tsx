"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

const phrases = [
  "Hi, I'm Gavin",
  "I'm a bodybuilder",
  "I'm a software engineer",
  "I'm in love with low level programming",
];

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center text-center h-screen bg-gray-100">
      {/* <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-4"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: "100%",
            opacity: 1,
            transition: { duration: 10, repeat: Infinity, ease: "linear" },
          }}
        >
          {phrases.map((phrase, index) => (
            <motion.p
              key={index}
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {phrase}
            </motion.p>
          ))}
        </motion.div>
      </div> */}
      <h1 className="text-5xl font-bold mb-4">
        <Typewriter text="Hi, I'm Gavin" />
      </h1>
      <p className="text-xl mb-6">
        <Typewriter text="An aspiring software engineer passionate about building impactful technology." />
      </p>
      <p className="text-xl mb-6">
        An aspiring software engineer passionate about building impactful
        technology.
      </p>
      <div className="flex justify-center items-center gap-4">
        <div className="flex gap-4 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/gavin-dhaliwal-680689267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons8-linkedin.svg"
              alt="LinkedIn"
              width={500}
              height={500}
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://github.com/Juanald"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons8-github.svg"
              alt="GitHub"
              width={500}
              height={500}
              className="w-8 h-8"
            />
          </a>
        </div>
        <a
          href="/Software Engineering Resume New.pdf"
          download
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
