import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const numSkills = skills.length;
  const numCopies = 3;

  let duplicatedSkills = [];
  for (let i = 0; i < numCopies; i++) {
    duplicatedSkills = [...duplicatedSkills, ...skills];
  }

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>HARD-SKILLS</h2><br/><br/>
      <div className={styles.content}>
        <div className={styles.skills}>
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
