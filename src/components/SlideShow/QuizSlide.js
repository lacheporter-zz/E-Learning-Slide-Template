import React, { useState, Fragment } from "react";
import QuizData from "../../data/QuizData";
import Quiz from "react-quiz-component";
import QA from "../../assets/Q&ASmall.svg";
import styles from "../../Styles/main.module.css";

export default function QuizSlide(props) {
  //state management
  const [key, setKey] = useState();
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
  function onCompleteAction() {
    props.quizComplete();
  }
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
