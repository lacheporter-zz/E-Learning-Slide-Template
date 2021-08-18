import React, { useContext, Fragment } from "react";
import { AppContext } from "../../context/AppContext";
import { Slide } from "react-slideshow-image";
import QuizSlide from "./QuizSlide";
import TextSlide from "./TextSlide";
import CourseContent from "../CourseContent/CourseContent";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../../Styles/main.module.css";

function Slideshow(props) {
  const context = useContext(AppContext);

  // Sets post-quiz state
  const quizComplete = () => {
    context.onQuizCompletion();
  };

  return (
    <Fragment>
      {props.showSearch ? <SearchBar searchWidth={props.searchWidth} toggleSearch={props.toggleSearch} /> : null}
      <Slide className={styles.slideContainer} ref={props.slideRef} {...props.slideProperties}>
        {props.SlideData.map((slide, index) => (
          <TextSlide key={index} {...slide} />
        ))}
        <QuizSlide title="Checkpoint Questions" quizComplete={quizComplete} />
      </Slide>
      <CourseContent showCourseList={props.showCourseList} onclick={props.toggleCourseList} />
    </Fragment>
  );
}
export default Slideshow;
