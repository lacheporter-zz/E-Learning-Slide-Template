import React, { useState, Fragment } from "react";
import TermData from "../../TermData";
import styles from "../../Styles/main.module.css";

const Terms = (props) => {
  //STATE MANAGEMENT//
  const [clickedTerm, setClickedTerm] = useState(0);
  const [showClicked, setShowClicked] = useState(true);

  //CHANGE STATE//
  const handleClick = (i) => {
    setClickedTerm(i);
    setShowClicked(true);
  };

  //MAP THROUGH THE DATA - RENDER THE BUTTON WITH TERM TITLE//
  const termSet = TermData[props.setIndex].terms.map((t, index) => {
    return (
      <button className={styles.termsBtn} key={index} onClick={() => handleClick(index)}>
        {t.name}
      </button>
    );
  });

  return (
    <Fragment>
      <div className={styles.termsRow}>
        <div className={styles.definitionContainer}>
          {showClicked ? (
            <div>
              <h3>{TermData[props.setIndex].terms[clickedTerm].name}</h3>
              <p>{TermData[props.setIndex].terms[clickedTerm].definition}</p>
            </div>
          ) : null}
        </div>
        <div className={styles.termsColumn}>
          <div className={styles.termsColumn}>{termSet}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Terms;
