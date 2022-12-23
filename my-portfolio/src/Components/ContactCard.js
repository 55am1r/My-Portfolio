import React, { useEffect, useRef } from "react";
import "./ContactCard.css";
function ContactCard(props) {
  const iconRender = useRef();

  useEffect(() => {
    iconRender.current.classList.add(props.icon[0], props.icon[1]);
    // eslint-disable-next-line
  }, [iconRender]);

  return (
    <div className="contact-card">
      <a href={props.link}>
        <i ref={iconRender}></i>
        {props.title}
      </a>
    </div>
  );
}

export default ContactCard;
