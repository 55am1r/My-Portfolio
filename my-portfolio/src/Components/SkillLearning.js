import React from "react";
import "./SkillLearning.css";
function SkillLearning(props) {
  return (
    <div className="Learning">
      <img src={props.image} alt={props.name + ".png"} />
      <p>{props.name}</p>
    </div>
  );
}

export default SkillLearning;
