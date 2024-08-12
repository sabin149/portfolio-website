import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedInIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rawalkritik/"  target="_blank" rel="noopener noreferrer">linkedin.com/kritikRawal</a>
        </li>
        <li className={styles.link} >
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" style={{
          backgroundColor:"#fff",
          borderRadius:"50%"
        }} />
          <a href="https://github.com/KritikRawal"  target="_blank" rel="noopener noreferrer">github.com/KritikRawal</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linktree.png")} alt="Github icon"  />
          <a href="https://linktr.ee/kritikrawal"  target="_blank" rel="noopener noreferrer">linktree.com/kritikrawal</a>
        </li>
      </ul>
    </footer>
  );
};
