import React from "react";
import logo from "../../logo.svg";
import styles from "../../Styles/main.module.css";

export default function Heading({ title, subtitle }) {
  return (
    <div className={styles.headingContainer}>
      <img src={logo} className={styles.headingLogo} alt="logo" />
      <div>
        <h3 className={styles.headingTitle}>{title}</h3>
        <h3 className={styles.headingSubtitle}>{subtitle}</h3>
      </div>
    </div>
  );
}
