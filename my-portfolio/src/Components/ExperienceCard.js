import React, { useEffect, useRef } from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const expCard = useRef();
  const tryBlock = useRef();
  useEffect(() => {
    tryBlock.current.innerHTML = props.desc;
    //   eslint-disable-next-line
  }, []);
  return (
    <div className="experience-card" ref={expCard}>
      <p className="title">{props.title}</p>
      <a href={props.link}>{props.place}</a>
      <p className="time">{props.time}</p>
      <div className="block">
        <p ref={tryBlock} className="desc"></p>
      </div>
    </div>
  );
}

export default ExperienceCard;
