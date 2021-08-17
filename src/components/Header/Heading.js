import React from "react";
import GFEBS from "../../assets/WhiteGFEBS.svg";
import styles from "../../Styles/main.module.css";

export default function Heading({ title, subtitle }) {
  return (
    <div className={styles.headingContainer}>
      <img src={GFEBS} className={styles.headingLogo} />
      <div className={styles.headingDivider} />
      <div>
        <h3 className={styles.headingTitle}>{title}</h3>
        <h3 className={styles.headingSubtitle}>{subtitle}</h3>
      </div>
    </div>
  );
}
