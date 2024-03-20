"use client";


import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../../public/background/smoothie.jpeg";
import project2 from "../../../public/background/tesla.png";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};
const ProjectLink = motion(Link);
const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
    <ProjectLink
    href=""
    target={"_blank"}
    className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
  >
    <div className="flex items-center justify-center space-x-2">
      <h2 className="text-foreground">Smoothie blog</h2>
      <p className="text-muted hidden sm:inline-block">Smoothie website</p>
    </div>
    <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
    
    <Image
    src={project1}
    className="w-21 h-21"
    />
  </ProjectLink>
    <ProjectLink
    href=""
    target={"_blank"}
    className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
  >
    <div className="flex items-center justify-center space-x-2">
      <h2 className="text-foreground">Tesla</h2>
      <p className="text-muted hidden sm:inline-block">tesla cloned website</p>
    </div>
    <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
    
    <Image
    src={project2}
    className="w-21 h-21"
    />
  </ProjectLink>
    </motion.div>
  );
};

export default ProjectList;



// {projects.map((project, index) => {
//   return <ProjectLayout key={index} {...project} />;
// })}
