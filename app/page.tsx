// pages/index.tsx
"use client";
import React from "react";
import { Hero } from "./components/Hero";
import { MovingBackgroundButton } from "../app/components/MovingBackgroundButton";
import Testimonial from "./components/Testimonial";
import Projects from  "./components/Projects";
import Faq from "./components/FAQ";
import Info from  "./components/Info";
import Services from  "./components/Services";
import ProjectsLayout from "./components/ProjectsLayout";
import { CallToAction } from "./components/CallToAction";
import { Faqs } from "./components/data/faqs"; // Adjust the import path accordingly
import { ProjectsGrid } from "./components/ProjectsGrid";


const HomePage: React.FC = () => {
  return (
    <div className="flex-col space-y-20  justify-center">
      <Hero />
      <ProjectsGrid />
      {/* <ProjectsLayout /> for later*/} 
      {/* <Testimonial />  */}
      <Projects />
      {/* <Services />  for later*/}
      <Info /> 
      <Faq items={Faqs}/>
      {/* <Contact /> for later*/}
      <CallToAction />
    </div>
  );
};

export default HomePage;
