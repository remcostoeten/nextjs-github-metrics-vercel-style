import { projects } from "@/core/config/site-config";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import HoverCard from "./effects/hover-card";

export default function ProjectList() {
  return (
    <div className="flex flex-col grow pb-9 -mt-5 bg-blend-normal max-md:mt-10 max-md:max-w-full space-y-2">
      {projects.map((project, index) => (
        <>
          {/* <MagicCard className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"> */}
          <HoverCard>
            <ProjectCard repoName="remcostoeten/remcostoeten-all-in-one-dashboard" />
          </HoverCard>
          {/* </MagicCard> */}
        </>
      ))}
      <Link
        className="mt-9 text-sm  text-blue-500 max-md:max-w-full"
        target="_blank"
        href="https://github.com/remcostoeten?tab=repositories"
      >
        View All Projects On Github
      </Link>
    </div>
  );
}
