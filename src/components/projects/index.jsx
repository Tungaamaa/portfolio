"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../../public/background/smoothie.jpeg";
import project2 from "../../../public/background/meditation.jpeg";
import project3 from "../../../public/background/tesla.jpeg";

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
const ProjectList = ({ }) => {
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
          <p className="text-muted hidden sm:inline-block">
            Developed a health-focused platform that curates healthy drinks,
            crafts personalized recipes, and provides essential health
            information
          </p>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />

        <Image src={project1} className="w-21 h-21" />
      </ProjectLink>

      <ProjectLink
        href="https://reactproject-99509.web.app/"
        target={"_blank"}
        className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
      >
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground">Online Meditation website</h2>
          <p className="text-muted hidden sm:inline-block">
          MindfulMinds Meditation Hub, your go-to platform for cultivating inner peace, mindfulness, and well-being
          </p>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />

        <Image src={project2} className="w-21 h-21" />
      </ProjectLink>

      <ProjectLink
        href="https://tesla-260b0.web.app/"
        target={"_blank"}
        className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
      >
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground">Tesla</h2>
          <p className="text-muted hidden sm:inline-block">
            tesla cloned website
          </p>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />

        <Image src={project3} className="w-21 h-21" />
      </ProjectLink>
    </motion.div>
  );
};

export default ProjectList;

// {projects.map((project, index) => {
//   return <ProjectLayout key={index} {...project} />;
// })}
