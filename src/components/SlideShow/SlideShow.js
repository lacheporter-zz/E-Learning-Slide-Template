import React, { Fragment } from "react";
import { Slide } from "react-slideshow-image";
import QuizSlide from "./QuizSlide";
import TextSlide from "./TextSlide";
import CourseContent from "../CourseContent/CourseContent";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../../Styles/main.module.css";

function Slideshow(props) {
  return (
    <Fragment>
      {props.showSearch ? <SearchBar searchWidth={props.searchWidth} toggleSearch={props.toggleSearch} /> : null}
      <Slide className={styles.slideContainer} ref={props.slideRef} {...props.slideProperties}>
        {props.SlideData.map((slide, index) => (
          <TextSlide key={index} {...slide} />
        ))}
        <QuizSlide title="Checkpoint Questions" />
      </Slide>
      <CourseContent showCourseList={props.showCourseList} onclick={props.toggleCourseList} />
    </Fragment>
  );
}
export default Slideshow;
