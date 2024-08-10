import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Kritik Rawal</h1>
        <p className={styles.description}>
          I'm a Software Engineer with 2 years of experience in the US Health
          Care Data and fintech. Reach out if you'd like to learn more!{" "}
        </p>
        <a
          href={getImageUrl("contact/cv.pdf")}
          download={"Kritik Rawal CV"}
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
