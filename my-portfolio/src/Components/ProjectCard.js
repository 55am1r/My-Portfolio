import React, { useEffect, useRef } from "react";
import "./ProjectCard.css";
function ProjectCard(props) {
  const imagesBlock = useRef();

  const observer = new IntersectionObserver(
    (entry) => {
      if (entry[0].isIntersecting) {
        slideImages();
      }
    },
    { threshold: 0.5 }
  );

  useEffect(() => {
    if (imagesBlock.current.children.length === props.images.length) return;
    for (let i of props.images) {
      const newImg = document.createElement("img");
      newImg.src = i;
      imagesBlock.current.appendChild(newImg);
    }
    observer.observe(imagesBlock.current);
  });

  function slideImages() {
    let imageslen2 = 1;
    let imageslen3 = 1;
    setInterval(() => {
      if (imagesBlock.current.children.length === 2) {
        imageslen2++;
        imagesBlock.current.scrollBy(imagesBlock.current.scrollWidth / 2, 0);
        if (imageslen2 > 2) {
          imageslen2 = 1;
          imagesBlock.current.scrollTo(0, 0);
        }
      } else if (imagesBlock.current.children.length === 3) {
        imageslen3++;
        imagesBlock.current.scrollBy(imagesBlock.current.scrollWidth / 3, 0);
        if (imageslen3 > 3) {
          imageslen3 = 1;
          imagesBlock.current.scrollTo(0, 0);
        }
      }
    }, 3000);
  }
  function handleMouseOver() {
    
  }
  return (
    <div className="project-card" onMouseOver={handleMouseOver}>
      <div className="images" ref={imagesBlock} id="images"></div>
      <p>
        Project Name: <span>{props.title}</span>
      </p>
      <p>
        Responsive: <span>{props.respon}</span>
      </p>
      <p>
        Code-Link:
        <span>
          {props.codeLink !== "----" ? (
            <a href={props.codeLink}>{props.codeLink}</a>
          ) : (
            "----"
          )}
        </span>
      </p>
      <p>
        Deployed: <span>{props.deployed}</span>
      </p>
      <p>
        Deployed-In:
        <span>
          {props.deployedIn !== "----" ? (
            <a href={props.deployedIn}>{props.deployedIn}</a>
          ) : (
            "----"
          )}
        </span>
      </p>
      <p>
        Deployed-Link:
        <span>
          {props.deployLink !== "----" ? (
            <a href={props.deployLink}>{props.deployLink}</a>
          ) : (
            "----"
          )}
        </span>
      </p>
    </div>
  );
}

export default ProjectCard;
