import InterestCard from "./InterestCard";

const interests = [
  {
    imageSrc: "/obama.jpg",
    title: "Software Engineering",
    alt: "Obama",
    backContent: "Soft eng",
  },
  {
    imageSrc: "/trump.jpg",
    title: "Machine Learning",
    alt: "Trump",
    backContent: "ML",
  },
  {
    imageSrc: "/trump.jpg",
    title: "Low Level Programming",
    alt: "Trump",
    backContent: "Arduino",
  },
  {
    imageSrc: "/bodybuilding.jpg",
    title: "Bodybuilding",
    alt: "Arnold 1974",
    backContent: "Who's gonna carry the boats",
  },
  {
    imageSrc: "/lebron.png",
    title: "Lebron",
    alt: "Lepookie Bear",
    backContent: "Lebronbron",
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
        I’m a Computer Science student at Toronto Metropolitan University with a
        deep interest in embedded systems, full-stack development, and
        cybersecurity. I've built everything from a shell in C to data
        automation tools at the Public Health Agency of Canada.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-8 max-w-screen-xl mx-auto">
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
