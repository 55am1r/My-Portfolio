import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./Project.css";
import ProjectCard from "./ProjectCard";
function Projects() {
  const projectData = useSelector((state) => state.skillData.projects);

  const hrRef = useRef();
  const projectBlock = useRef();
  const cards = useRef();

  const observer = new IntersectionObserver(
    (entry) => {
      if (entry[0].isIntersecting) {
        hrRef.current.classList.add("animate");
      } else {
        hrRef.current.classList.remove("animate");
      }
    },
    { threshold: window.innerWidth < 799 ? 0.2 : 0.5 }
  );
  function handleOnSlideRight() {
    cards.current.scrollBy(-500, 0);
  }
  function handleOnSlideLeft() {
    cards.current.scrollBy(500, 0);
  }
  useEffect(() => {
    observer.observe(projectBlock.current);
  });
  return (
    <div className="project" ref={projectBlock} id="projects">
      <h1>
        Projects <hr ref={hrRef} />
      </h1>
      <div className="slider">
        <i
          className="fa-solid fa-chevron-left"
          onClick={handleOnSlideRight}
        ></i>
        <div className="project-cards" ref={cards}>
          {projectData.map((node) => {
            return (
              <ProjectCard
                key={node.title}
                title={node.title}
                respon={node.responsive}
                codeLink={node.codeLink}
                deployed={node.deployed}
                deployedIn={node.deployedIn}
                deployLink={node.deployLink}
                images={node.images}
              />
            );
          })}
        </div>
        <i
          className="fa-solid fa-chevron-right"
          onClick={handleOnSlideLeft}
        ></i>
      </div>
    </div>
  );
}

export default Projects;
