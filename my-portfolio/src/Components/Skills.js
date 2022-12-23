import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import SkillLearning from "./SkillLearning";

function Skills() {
  const skillBlock = useRef();
  const circleBar = useRef();
  const hrRef = useRef();
  const meterBar_1 = useRef();
  const meterBar_2 = useRef();
  const [chartDimension, setChartDimension] = useState({
    height: "520px",
  });

  const [circleLabels, setlabels] = useState([]);
  const [circleValues, setValues] = useState([]);

  const circleBarData = useSelector((state) => state.skillData.dataList);
  const skillLearningData = useSelector(
    (state) => state.skillData.skillLearning
  );

  function GetData() {
    const getlabels = [];
    const getValues = [];
    for (let i of circleBarData) {
      getlabels.push(i.title);
      getValues.push(i.value - i.value);
    }
    setlabels(getlabels);
    setValues(getValues);
  }
  function GetDataValues() {
    const getValues = [];
    for (let i of circleBarData) {
      getValues.push(i.value);
    }
    setValues(getValues);
  }
  function setChartSize() {
    if (window.innerWidth > 1279 && window.innerWidth < 1441) {
      setChartDimension({ height: "420px" });
    } else if (window.innerWidth > 800 && window.innerWidth < 1278) {
      setChartDimension({ height: "420px" });
    } else if (window.innerWidth > 501 && window.innerWidth < 799) {
      setChartDimension({ height: "380px" });
    } else if (window.innerWidth > 300 && window.innerWidth < 500) {
      setChartDimension({ height: "360px" });
    } else if (window.innerWidth > 1441 && window.innerWidth < 2561) {
      setChartDimension({ height: "560px" });
    }
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        hrRef.current.classList.add("animate");
      } else {
        hrRef.current.classList.remove("animate");
      }
    },
    { threshold: 0.7 }
  );

  const observer2 = new IntersectionObserver(
    (entry) => {
      if (entry[0].isIntersecting) {
        GetDataValues();
        meterBar_1.current.classList.add("meter-bar1");
      } else {
        GetData();
        meterBar_1.current.classList.remove("meter-bar1");
      }
    },
    { threshold: 1 }
  );

  const observer3 = new IntersectionObserver(
    (entry) => {
      if (entry[0].isIntersecting) {
        meterBar_2.current.classList.add("meter-bar2");
      } else {
        meterBar_2.current.classList.remove("meter-bar2");
      }
    },
    { threshold: 1 }
  );

  useEffect(() => {
    if (circleLabels.length !== 0) return;
    GetData();
    setChartSize();
    observer.observe(skillBlock.current);
    observer2.observe(meterBar_1.current);
    observer3.observe(meterBar_2.current);
    // eslint-disable-next-line
  }, [window.innerWidth]);

  const colorsForChart = [
    "#002549",
    "#004a95",
    "#0371df",
    "#5fafff",
    "#8cc5ff",
    "#B5DAFF",
  ];

  return (
    <div className="skills" ref={skillBlock} id="skills">
      <h1>
        Skills <hr ref={hrRef} />
      </h1>
      <div className="grid-box">
        <div className="cirlce-bars" ref={circleBar}>
          <Chart
            series={circleValues}
            width="100%"
            height={chartDimension.height}
            type="radialBar"
            options={{
              colors: colorsForChart,
              labels: circleLabels,
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    legend: {
                      show: true,
                      position: "bottom",
                      horizontalAlign: "center",
                      fontSize: "12px",
                    },
                  },
                },
              ],
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "5%",
                    background: "transparent",
                  },
                  track: {
                    show: true,
                    strokeWidth: "90px",
                    margin: -2,
                    background: "#cbcbcb",
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    },
                  },
                },
              },
              legend: {
                show: true,
                floating: false,
                fontSize: "15px",
                fontWeight: "bold",
                position: "bottom",
                formatter: function (seriesName, opts) {
                  return (
                    seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                  );
                },
              },
            }}
          />
        </div>
        <div className="progress-bars">
          <h1>Framework's Fluency:</h1>
          <div className="skill-1">
            <p>React.Js Full Stack Web Development</p>
            <div className="meter-1">
              <div className="meter-bar-1" ref={meterBar_1}></div>
            </div>
          </div>
          <div className="skill-2">
            <p>.Net Full Stack Web Development</p>
            <div className="meter-2">
              <div className="meter-bar-2" ref={meterBar_2}></div>
            </div>
          </div>
          <div className="others">
            <p>Skills Learning</p>
            <ul>
              {skillLearningData.map((node) => {
                return (
                  <li>
                    <SkillLearning
                      key={node.name}
                      name={node.name}
                      image={node.img}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
