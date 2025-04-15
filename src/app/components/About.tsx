import InterestCard from "./InterestCard";

const interests = [
  {
    imageSrc: "/softwareEngineering.png",
    title: "Software Engineering",
    alt: "Obama",
    backContent:
      "I love engineering new software that make people's eyes light up. The history of the software industry inspires me so much. I've created everything from full stack web applications, to desktop apps, to terminal CLIs, to recreating Excel. I love it all.",
  },
  {
    imageSrc: "/machine learning.png",
    title: "Machine Learning",
    alt: "Trump",
    backContent:
      "Machine learning is such an interesting field to me. As a math and CS student, ML is right up my ally. It is essentially applied mathematics in the computer realm. Seeing fundamental mathematical concepts coming to life in code is such a promising field. ",
  },
  {
    imageSrc: "/cpu.png",
    title: "Low Level Programming",
    alt: "Trump",
    backContent:
      "I love low level CS. I've programmed Arduinos, engineered a UNIX C shell from scratch, created an Excel engine in C++, wrote a bootloader in x86 assembly for my very own operating system, and it keeps going. Getting down with the hardware is heaven.",
  },
  {
    imageSrc: "/cybersecurity.png",
    title: "Cybersecurity",
    alt: "Cybersecurity",
    backContent:
      "Cybersecurity has been a siren to me, calling out my name from a young age. The world of SQL injections, buffer overflows for root access, Spectre attacks, worms, and trojans conjures a world of good against evil. I love it, and it's right up my ally with my love for low level hardware. ",
  },
  // {
  //   imageSrc: "/bodybuilding.jpg",
  //   title: "Bodybuilding",
  //   alt: "Arnold 1974",
  //   backContent: "Who's gonna carry the boats",
  // },
  {
    imageSrc: "/lebron.png",
    title: "Lebron",
    alt: "Lepookie Bear",
    backContent:
      "Lebron James, oh where do I begin. Lebron has taught me everything I know about resilience, excellence in adversity, and persistence. I became a loyal fan after seeing his historic comeback against Golden State in the 2016 finals, a feat that has never been accomplished before. May we all rise to the level of Lebron. The king.",
  },
];

export default function About() {
  return (
    <section className="p-10 max-w-screen mx-10 ml-10">
      <div className="mb-6">
        <p className="uppercase text-gray-500 tracking-widest text-sm font-light mb-2">
          Introduction
        </p>
        <h2 className="text-4xl font-bold text-gray-900">Who Am I?</h2>
      </div>
      <p className="text-gray-700 leading-relaxed text-lg">
        I'm a CS and Math student at TMU who thrives at the intersection of
        machine learning, finance, and software engineering. I love hacking away
        at new projects, from low level embedded programming to high level
        banking applications. I love embodying the spirit of the old software
        industry, hacking away.
      </p>
      <br />
      <p className="text-gray-700 leading-relaxed text-lg">
        Outside software, I'm well known for my insatiable appetite and love for
        Lebron James. I am a voracious reader, and love learning new things from
        the realms of philosophy, to religion, mathematics, history, poetry,
        literature and beyond. I also love bodybuilding, being a loyal adherent
        to the sport from my teenage years.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <InterestCard
            title={interest.title}
            imageSrc={interest.imageSrc}
            alt={interest.alt}
            backContent={interest.backContent}
          />
        ))}
      </div>
    </section>
  );
}
