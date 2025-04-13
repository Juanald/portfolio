// app/page.tsx
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Header />

      <div id="about">
        <About />
      </div>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
