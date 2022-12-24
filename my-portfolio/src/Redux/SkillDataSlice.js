import { createSlice } from "@reduxjs/toolkit";
import pic_2 from "../Media/node.png";
import w_1_img from "../Media/weather_api/1.jpg";
import w_2_img from "../Media/weather_api/2.jpg";
import n_1_img from "../Media/notes_app/1.jpg";
import n_2_img from "../Media/notes_app/2.jpg";
import n_3_img from "../Media/notes_app/3.jpg";
import ns_1_img from "../Media/news_selector/1.jpg";
import ns_2_img from "../Media/news_selector/2.jpg";
import ns_3_img from "../Media/news_selector/3.jpg";
const initialState = {
  dataList: [
    { title: "Java", value: 85 },
    { title: "JavaScript", value: 90 },
    { title: "C#", value: 80 },
    { title: "SQL", value: 80 },
    { title: "HTML", value: 95 },
    { title: "CSS", value: 95 },
    { title: "Git", value: 90 },
  ],
  skillLearning: [
    {
      name: "Node.js",
      img: pic_2,
    },
    {
      name: "Express.js",
      img: "https://www.sohamkamani.com/nodejs/expressjs-architecture/express-routing-logo.png",
    },
    {
      name: "MongoDB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
      // "https://assets.stickpng.com/images/58481021cef1014c0b5e494b.png",
    },
  ],
  experience: [
    {
      title: "As React Full Stack Web Developer",
      place: "at CodingShuttle.com",
      placeLink: "http://codingshuttle.com",
      duration: "November 2022 - Present",
      desc: `Learning Full Stack web development using React.js at codingshuttle.com with a 
      clear understanding of the usage of React Components, Redux working flow, fetching an API
      with asynchronous calls, manipulating HTML & CSS contents and properties by using DOM and
      Events concepts in JS, and having a good understanding on other ES6 concepts.
      <a href='https://www.linkedin.com/in/sameer-shaik-mohammed-32b3ab20a/'>Check out my Linkedin Profile(Click on me)</a>
      for the work I have done so far.`,
    },
    {
      title: "As Programmer",
      place: "at Cognizant",
      placeLink: "https://www.cognizant.com/in/en",
      duration: "June 2022 - Present",
      desc: `Working as an outsourced support analyst worker in Abbvie.Inc
with knowledge of Managed Markets under the life sciences
domain.`,
    },
    {
      title: "As .Net Full Stack Web Developer",
      place: "at Cognizant",
      placeLink: "https://www.cognizant.com/in/en",
      duration: "October 2021 - April 2022",
      desc: `Got full-fledged training in .Net Full Stack Web Development for
five months by developing a thin amount of projects with a good
understanding of MVC concepts and data migrations.`,
    },
  ],
  contact: [
    {
      title: "Call Me",
      link: "tel:+918498050786",
      icon: ["fa-solid", "fa-phone"],
    },
    {
      title: "Mail Me",
      link: "mailto:shaiksameer515595@gmail.com",
      icon: ["fa-solid", "fa-paper-plane"],
    },
    {
      title: "GitHub",
      link: "https://github.com/55am1r?tab=repositories",
      icon: ["fa-brands", "fa-square-github"],
    },
    {
      title: "Do Connect on LinkedIn",
      link: "https://www.linkedin.com/in/sameer-shaik-mohammed-32b3ab20a/",
      icon: ["fa-brands", "fa-linkedin"],
    },
  ],
  projects: [
    {
      title: "Weather-API",
      responsive: "Yes",
      codeLink: "https://github.com/55am1r/Weather-API-demo",
      deployed: "Yes",
      deployedIn: "https://app.netlify.com/",
      deployLink: "https://web-api-demo.netlify.app/",
      images: [w_1_img, w_2_img],
    },
    {
      title: "Notes-App",
      responsive: "Yes",
      codeLink: "https://github.com/55am1r/Notes-app-project",
      deployed: "Yes",
      deployedIn: "https://app.netlify.com/",
      deployLink: "https://notes-app-with-react-ss.netlify.app/",
      images: [n_1_img, n_2_img, n_3_img],
    },
    {
      title: "Infinite-News",
      responsive: "Yes",
      codeLink: "https://github.com/55am1r/News-Selector-Project",
      deployed: "No",
      deployedIn: "----",
      deployLink: "----",
      images: [ns_1_img, ns_2_img, ns_3_img],
    },
  ],
};

const skillData = createSlice({
  name: "skillData",
  initialState,
  reducers: {
    sendData: (state, action) => {
      state.dataList = action.payload;
    },
    sendLearningData: (state, action) => {
      state.skillLearning = action.payload;
    },
  },
});
export default skillData.reducer;
export const { sendData, sendLearningData } = skillData.actions;
