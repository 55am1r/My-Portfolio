import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ExperienceCard from "./ExperienceCard";
import "./Experiences.css";
function Experiences() {
  const expBlock = useRef();
  const hrRef = useRef();

  const expData = useSelector((state) => state.skillData.experience);

  let [dataIndex, setDataIndex] = useState(0);
  const [dataNode, setDataNode] = useState(expData[dataIndex]);
  const observer = new IntersectionObserver(
    (entry) => {
      if (entry[0].isIntersecting) {
        hrRef.current.classList.add("animate");
      } else {
        hrRef.current.classList.remove("animate");
      }
    },
    { threshold: 0.7 }
  );

  function handleDataPlus() {
    if (dataIndex < expData.length - 1) {
      setDataIndex(dataIndex + 1);
    }
  }

  function handleDataMinus() {
    if (dataIndex > 0) {
      setDataIndex(dataIndex - 1);
    }
  }

  useEffect(() => {
    observer.observe(expBlock.current);
    setDataNode(expData[dataIndex]);
    // eslint-disable-next-line
  }, [dataIndex, dataNode]);

  return (
    <div className="experiences" ref={expBlock} id="experience">
      <h1>
        Experiences <hr ref={hrRef} />
      </h1>
      <div className="flex-box">
        <div className="scroll-btn">
          <i className="fa-solid fa-circle-right" onClick={handleDataPlus}></i>
          <i className="fa-solid fa-circle-left" onClick={handleDataMinus}></i>
        </div>
        <ExperienceCard
          key={dataNode.title}
          title={dataNode.title}
          place={dataNode.place}
          link={dataNode.placeLink}
          desc={dataNode.desc}
          time={dataNode.duration}
        />
        <div className="dots">
          <span className="span">
            {dataIndex + 1}/{expData.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
