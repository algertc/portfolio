import { useState, useEffect } from "react";
import ProjectCard from "../common/ProjectCard";
import Animate from '../common/Animate'

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("../../../data/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setProjects(jsonData);
      });
  }, []);

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects &&
            projects.map((project, i) => (
              <Animate key={i} animateDelay={i * 100}>
              <ProjectCard
                link={project.link}
                title={project.title}
                description={project.description}
                image={{ src: project.image.src, alt: project.image.alt }}
              />
              </Animate>
            ))}
        </div>
      </div>
    </section>
  );
}
