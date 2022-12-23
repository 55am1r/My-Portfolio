import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./Contact.css";
import ContactCard from "./ContactCard";

function Contact() {
  const hrRef = useRef();
  const contactBlock = useRef();

  const contactDetails = useSelector((state) => state.skillData.contact);

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

  useEffect(() => {
    observer.observe(contactBlock.current);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contact" ref={contactBlock} id="contact">
      <h1>
        Let's Connect<hr ref={hrRef} />
      </h1>
      <div className="btn-box">
        {contactDetails.map((node) => {
          return (
            <ContactCard
              key={node.title}
              title={node.title}
              link={node.link}
              icon={node.icon}
            />
          );
        })}
      </div>
      <div className="end">
        <hr />
        <p>Made By: Shaik Mohammed Sameer. All right reserved 2022©</p>
      </div>
    </div>
  );
}

export default Contact;
