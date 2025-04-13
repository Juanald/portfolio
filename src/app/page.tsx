// app/page.tsx
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Header />

      <section id="about">
        <About />
      </section>

      <div className="flex justify-between items-center">
        <Quote />
        {/* <Image></Image> */}
      </div>

      <section id="work" className="p-10 max-w-4xl ml-10">
        <Work />
      </section>

      <section id="contact" className="p-10 max-w-4xl ml-10">
        <Contact />
      </section>
    </main>
  );
}
