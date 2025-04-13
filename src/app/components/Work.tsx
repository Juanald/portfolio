import ProjectCard from "./ProjectCard";
const projects = [
  {
    imgSrc: "/obama.jpg",
    title: "Project One",
    description: "This is an awesome project that does something cool.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    imgSrc: "/trump.jpg",
    title: "Project Two",
    description: "This project is about building something even cooler.",
    tags: ["Next.js", "GraphQL", "Apollo"],
  },
  // Add more projects as needed
];

export default function Work() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
