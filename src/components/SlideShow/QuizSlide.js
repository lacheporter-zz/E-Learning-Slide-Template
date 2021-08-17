import React, { useState, useContext, Fragment } from "react";
import QuizData from "../../data/QuizData";
import Quiz from "react-quiz-component";
import { AppContext } from "../../context/AppContext";
import QA from "../../assets/Q&ASmall.svg";
import styles from "../../Styles/main.module.css";

export default function QuizSlide(props) {
  //state management
  const [key, setKey] = useState();
  const context = useContext(AppContext);

  // Sets post-quiz state
  const onCompleteAction = () => {
    document.querySelector(".next-arrow").style.display = "block";
    context.onQuizCompletion();
  };
  // Renders custom results page
  const renderCustomResultPage = () => {
    return (
      <>
        <h3>Well done, you may now exit the lesson.</h3>
        <button onClick={retakeQuiz} className="btn btn-primary">
          Retake
        </button>
      </>
    );
  };
  // Resets Quiz key to random number and rerenders it... (revisit)
  function retakeQuiz() {
    return setKey(Math.random());
  }

  return (
    <Fragment>
      <div className={styles.standardGrid}>
        <span className={`slide-title ${styles.title} ${styles.slideTitle}`}>{props.title}</span>
        <div className={styles.content}>
          <Quiz
            quiz={QuizData}
            key={key}
            continueTillCorrect={true}
            showDefaultResult={false}
            onComplete={onCompleteAction}
            customResultPage={renderCustomResultPage}
          />
        </div>
        {QuizData.questions && <img className={styles.picture} src={QA} style={{ width: "100%" }} alt="checkpoint" />}
      </div>
    </Fragment>
  );
}
