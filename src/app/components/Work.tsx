import { h1 } from "framer-motion/client";
import ProjectCard from "./ProjectCard";
import { getFlightDataPartsFromPath } from "next/dist/client/flight-data-helpers";
const projects = [
  {
    imgSrc: "/shell.png",
    title: "GVN Shell",
    description: "Rewrote the UNIX shell in C.",
    tags: ["C", "Operating Systems", "Low Level Programming"],
    gitHubLink: "https://github.com/Juanald/gvn-shell",
  },
  {
    imgSrc: "/realEstate.png",
    title: "RealEstateX",
    description:
      "A real estate listing service, facilitating communication between sellers and buyers through native instant messaging, and real time listing data.",
    tags: ["Typescript", "Express JS", "Node JS", "React", "MongoDB"],
    gitHubLink: "https://github.com/Juanald/realEstate",
  },
  {
    imgSrc: "/machine learning in C.png",
    title: "Machine Learning in C",
    description:
      "A neural network written in C to simulate non linearlly seperable logic gates.",
    tags: [
      "C",
      "Machine Learning",
      "Regression",
      "Neural Networks",
      "Gradient Descent",
    ],
    gitHubLink: "https://github.com/Juanald/Machine-Learning-in-C",
  },
  {
    imgSrc: "/clustering.png",
    title: "Marketing Data Clustering",
    description:
      "The clustering of social media profiles across the world, aimed at identifying social cliques for targeted marketing.",
    tags: ["Python", "Machine Learning", "Sci-Kit Learn", "Clustering"],
    gitHubLink: "https://github.com/Juanald/Clustering-Marketing-Data",
  },
  {
    imgSrc: "/excel.png",
    title: "Excel Engine",
    description:
      "An Excel engine, with a custom parser implementing Dijkstra's shunting yard algorithm for dynamic formula caluclations of Excel-like grammars. Written in C++, like the original Excel.",
    tags: ["C++", "OOP", "Excel", "Microsoft"],
    gitHubLink: "https://github.com/Juanald/excel",
  },
  {
    imgSrc: "/Musicume.png",
    title: "Musicume",
    description:
      "A Java CLI to download your favourite songs, podcasts, and audiobooks.",
    tags: ["Java", "OOP", "CLI"],
    gitHubLink: "https://github.com/Juanald/Musicume",
  },
  {
    imgSrc: "/money.jpg",
    title: "Banking Database",
    description:
      "A fully normalized banking application database for safe, secure storage of banking transactions.",
    tags: ["Java", "SQL", "Swift", "Normalization"],
    gitHubLink: "https://github.com/Juanald/Banking-Database",
  },
  {
    imgSrc: "/Sbotify.png",
    title: "Sbotify",
    description: "A Spotify clone, down to the colour scheme.",
    tags: ["React", "Express JS", "Node JS", "Figma"],
    gitHubLink: "https://github.com/Juanald/Sbotify",
  },
  {
    imgSrc: "/kowalski.png",
    title: "Kowalski Analysis",
    description:
      "An AI powered product analysis tool, built to promote sustainable buying practices. Built at Terrahacks 2024.",
    tags: ["Python", "React", "Flask", "AI", "Terrahacks"],
    gitHubLink: "https://github.com/Juanald",
  },
];

export default function Work() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            tags={project.tags}
            gitHubLink={project.gitHubLink}
          />
        ))}
      </div>
    </>
  );
}
