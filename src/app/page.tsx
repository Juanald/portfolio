// app/page.tsx
"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import { motion } from "framer-motion";

const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Header />

      <motion.section
        id="about"
        variants={fadeInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <About />
      </motion.section>

      <motion.section
        className="flex justify-between items-center"
        id="quote"
        variants={fadeInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Quote />
        {/* <Image></Image> */}
      </motion.section>

      <motion.section
        id="projects"
        className="p-10 max-w-screen mx-10"
        variants={fadeInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        className="p-10 max-w-screen mx-10"
        variants={fadeInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact />
      </motion.section>
    </main>
  );
}
