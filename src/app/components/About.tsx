import InterestCard from "./InterestCard";

const interests = [
  {
    imageSrc: "/obama.jpg",
    title: "Project One",
    alt: "Obama",
  },
  {
    imageSrc: "/trump.jpg",
    title: "Project Two",
    alt: "Trump",
  },
  // Add more projects as needed
];

export default function About() {
  return (
    <section className="p-10 max-w-4xl ml-10">
      <div className="mb-6">
        <p className="uppercase text-gray-500 tracking-widest text-sm font-light mb-2">
          Introduction
        </p>
        <h2 className="text-4xl font-bold text-gray-900">Who Am I?</h2>
      </div>
      <p className="text-gray-700 leading-relaxed text-lg">
        I’m a Computer Science student at Toronto Metropolitan University with a
        deep interest in embedded systems, full-stack development, and
        cybersecurity. I've built everything from a shell in C to data
        automation tools at the Public Health Agency of Canada.
      </p>
      <div className="flex gap-8 items-center mt-8">
        {interests.map((interest, index) => (
          <InterestCard
            title={interest.title}
            imageSrc={interest.imageSrc}
            alt={interest.alt}
          />
        ))}
      </div>
    </section>
  );
}
