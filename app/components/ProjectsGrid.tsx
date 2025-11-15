// app/components/ProjectsGrid.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a description of Project 1",
    imageUrl: "/project_1.png", // Replace with your image path
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a description of Project 2",
    imageUrl: "/dentelle_by_rama.png", // Replace with your image path
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a description of Project 3",
    imageUrl: "/elmayar_app.png", // Replace with your image path
  }
  // Add more projects as needed
];

export const ProjectsGrid: React.FC = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto px-4 pb-10 md:py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="object-cover object-center w-full h-64"
              width={500}
              height={300}
              quality={100}
            />
            {/* <div className="absolute inset-0  flex flex-col justify-end p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-white">{project.description}</p>
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
