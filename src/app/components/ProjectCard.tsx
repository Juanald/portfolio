import React from "react";
import Image from "next/image";

type ProjectProps = {
  imgSrc?: string;
  title: string;
  description: string;
  tags: string[];
  gitHubLink: string;
};

export default function ProjectCard({
  imgSrc,
  title,
  description,
  tags,
  gitHubLink,
}: ProjectProps) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 ease-in-out hover:scale-105">
      <a
        href={gitHubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 z-10"
      >
        <Image
          src="/icons8-github.svg"
          alt="GitHub"
          width={24}
          height={24}
          className="hover:opacity-80"
        />
      </a>

      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full object-cover"
        />
      ) : (
        <></>
      )}
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="font-sans">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-black bg-white border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
