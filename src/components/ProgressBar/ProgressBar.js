import React, { useContext, Fragment } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "../../Styles/main.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar() {
  const context = useContext(AppContext);

  return (
    <Fragment>
      <div className={styles.progressRow}>
        <div className={styles.progress}>
          <div
            className={`${styles.progressBar} ${styles.progressBarStriped} ${styles.bgSuccess}`}
            role="progressbar"
            style={{ width: `${context.progress}%` }}
            aria-valuenow={parseInt(`${context.progress}`, 10)}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      {/* 
      <div style={{ width: "75px" }}>
        <CircularProgressbar
          value={parseInt(`${context.progress}`, 10)}
          text={`${parseInt(`${context.progress}`, 10)}%`}
          strokeWidth={50}
          styles={buildStyles({
            textColor: "black",
            pathColor: "#e0ae0c",
            trailColor: "white",
            strokeLinecap: "butt",
          })}
        />
      </div> */}
    </Fragment>
  );
}
