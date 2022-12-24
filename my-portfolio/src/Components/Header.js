import React, { useEffect, useRef } from "react";
import "./Header.css";
import pic from "../Media/IMG_20211031_191001_1-removebg-preview-removebg-preview.png";
function Header() {
  const nameTyper = useRef();
  const header = useRef();
  const loaderScroll = useRef();
  const tracker = useRef();
  const menuToggle = useRef();

  const observer1 = new IntersectionObserver(
    (entry) => {
      if (entry[0].isIntersecting) {
        nameTyper.current.classList.remove("animate-p-1");
        nameTyper.current.classList.add("animate-p-2");
        menuToggle.current.classList.remove("right-toggle");
      }
    },
    { threshold: 1 }
  );

  const observer2 = new IntersectionObserver(
    (entry) => {
      if (entry[0].isIntersecting) {
        tracker.current.classList.remove("animate-nav-down");
        tracker.current.classList.add("animate-nav-up");
      } else {
        tracker.current.classList.remove("animate-nav-up");
        tracker.current.classList.add("animate-nav-down");
      }
      const scrollHeight = document.body.offsetHeight - window.innerHeight;
      window.onscroll = (event) => {
        const scrollValue = Math.ceil((window.scrollY / scrollHeight) * 100);
        if (entry[0].isIntersecting) {
          loaderScroll.current.style.display = "none";
        } else {
          loaderScroll.current.style.display = "block";
          loaderScroll.current.style.width = scrollValue + "%";
        }
      };
    },
    { threshold: 0.2 }
  );

  function loaderScrollHandle() {
    const scrollHeight = document.body.offsetHeight - window.innerHeight;
    window.onscroll = (event) => {
      const scrollValue = Math.ceil((window.scrollY / scrollHeight) * 100);
      if (Number(scrollValue) >= 5) {
        loaderScroll.current.style.display = "block";
        loaderScroll.current.style.width = scrollValue + "%";
      } else {
        loaderScroll.current.style.display = "none";
      }
    };
  }

  function handleMenuToggle(load) {
    menuToggle.current.classList.toggle("right-toggle");
    if (load.length > 0) {
      window.location.href = load;
    }
  }

  useEffect(() => {
    loaderScrollHandle();
    observer1.observe(nameTyper.current);
    observer2.observe(header.current);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="tracker" ref={tracker}>
        <div className="left-icon">
          <img id="img-scroll" src={pic} alt="profile.img" />
        </div>
        <div className="right-nav">
          <ul>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skill's</a>
            </li>
            <li>
              <a href="#experience">Experience's</a>
            </li>
            <li>
              <a href="#projects">Project's</a>
            </li>
            <li>
              <a href="#contact">Let's Connect</a>
            </li>
          </ul>
          <i className="fa-solid fa-bars" onClick={handleMenuToggle}></i>
        </div>
      </div>
      <div className="mobile-nav" ref={menuToggle}>
        <ul>
          <li>
            <a
              href="#header"
              onClick={() => {
                handleMenuToggle("#header");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => {
                handleMenuToggle("#about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => {
                handleMenuToggle("#skills");
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => {
                handleMenuToggle("#experience");
              }}
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                handleMenuToggle("#projects");
              }}
            >
              Project's
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                handleMenuToggle("#contact");
              }}
            >
              Let's Connect
            </a>
          </li>
        </ul>
      </div>
      <hr className="loader" ref={loaderScroll} />

      <div className="main-header" ref={header} id="header">
        <div className="left">
          <h1>Hello</h1>
          <h1>
            I'm <p ref={nameTyper}>Sameer,</p>
          </h1>
          <h2>
            Full Stack <br /> <span>Web Developer</span>
          </h2>
        </div>
        <div className="right">
          <img id="img-scroll" src={pic} alt="profile.img" />
        </div>
      </div>
    </>
  );
}

export default Header;
