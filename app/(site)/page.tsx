// import { getProjects } from "@/sanity/sanity-utils";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Home() {
  const projects = await getProjects();

  return (
    <section>
      <h1 className="text-7xl font-extrabold ">
        Hello i&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Pablo
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Aloha everyone! Check out my projects
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          return (
            <article
              key={project._id}
              className="border-2 border-gray-400 rounded-lg p-1 hover:scale-105 transition-all hover:border-blue-500  "
            >
              <Link href={`/projects/${project.slug}`}>
                {project.image && (
                  <Image
                    src={project.image}
                    width={750}
                    height={300}
                    alt={project.name}
                    className="object-cover rounded-lg border border-gray-500"
                  ></Image>
                )}

                <h3 className="mt-2  font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
                  {project.name}
                </h3>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
