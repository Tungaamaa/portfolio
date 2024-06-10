import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const Experience = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Experience
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            - Led the creation of technical design documentation for over 4
            projects, facilitating transparent communication among a dynamic
            team of more than 20 developers.
            <p>
              - Managed the development of an enterprise-level internal expense
              tracker, employing agile methodologies for seamless collaboration
              within a 7-member team
            </p>
            <p>
              - Created comprehensive documentation detailing system designs,
              user guides, and technical specifications.
            </p>
            <p>
              - Led the migration of 10 legacy software services to modern micro
              services using Docker, Kubernetes, and CI/CD pipelines. Achieved
              0.001% marginal error rate and reduced downtime by 90%, ensuring
              seamless transition and boosting system performance by 30%.
            </p>
            <p>
              - Developed efficient software solutions to meet client
              requirements and increased system quality by 45%.
            </p>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            B.SC <sub className="font-semibold text-base">Bachelors Degree</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Education
          </h2>
          <p className=" sm:text-2xl w-full">
          <p>
          - Bootcamp: software engineer - Pinecone Academy 
          </p>
          <p>
          - Bachelor:Computer science - National University of Mongolia
          </p>
           
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default Experience;

