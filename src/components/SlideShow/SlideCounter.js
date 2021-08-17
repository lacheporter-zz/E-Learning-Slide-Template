import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "../../Styles/main.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function SlideCounter() {
  const context = useContext(AppContext);
  return (
    <div className={styles.slideCounter}>
      Slide {context.currentSlide} of {context.total}
      <ProgressBar />
    </div>
  );
}
