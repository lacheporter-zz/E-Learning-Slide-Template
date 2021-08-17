import React, { useState, useEffect, Fragment, useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import Slideshow from "../components/SlideShow/SlideShow";
import Header from "../components/Header/Header";
import OptionPanel from "../components/OptionPanel/OptionPanel";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Modal from "../components/Modal/Modal";
import SlideCounter from "../components/SlideShow/SlideCounter";
import styles from "../Styles/main.module.css";
import SlideData from "../data/SlideData";

export default function AppContainer() {
  //STATE MANAGEMENT//
  const context = useContext(AppContext);
  const [showPrevArrow, setShowPrevArrow] = useState("block");
  const [showNextArrow, setShowNextArrow] = useState("block");
  const [showSearch, setShowSearch] = useState(false);
  const [searchWidth, setSearchWidth] = useState("40px");
  const [showCourseList, setShowCourseList] = useState(false);
  const slideRef = useRef();

  //POPULATE INDEX
  useEffect(() => {
    context.compileIndex();
  }, []);
  // CONDITIONALLY ENDER ARROWS
  useEffect(() => {
    context.toggleProgress();
    // Removes back arrow on first slide
    if (context.currentSlide === 0) {
      setShowPrevArrow("none");
    } else {
      setShowPrevArrow("block");
    }
    // Removes next arrow on final slide
    if (context.currentSlide === context.total) {
      setShowNextArrow("none");
    } else {
      setShowNextArrow("block");
    }
    // Changes slide to specific index from dropdown menu
    slideRef.current.goTo(parseInt(context.currentSlide, 10));
  }, [context.currentSlide, context.toggleProgress]);

  //TOGGLE SEARCH BAR
  const toggleSearch = () => {
    if (showSearch === false) {
      setShowSearch(!showSearch);
      setTimeout(() => {
        setSearchWidth("100%");
      }, 200);
    } else if (showSearch === true) {
      setSearchWidth("0%");
      setTimeout(() => {
        setShowSearch(!showSearch);
      }, 500);
    }
  };
  //TOGGLE COURSE CONTENT
  const toggleCourseList = () => {
    setShowCourseList(!showCourseList);
  };
  //SLIDESHOW PACKAGE SETTINGS
  const properties = {
    indicators: false,
    arrows: true,
    transitionDuration: 100,
    canSwipe: false,
    autoplay: false,
    defaultIndex: 0,
    easing: "ease-out",
    prevArrow: (
      <div
        className="prev-arrow"
        style={{
          display: `${showPrevArrow}`,
        }}
      >
        <i className="fas fa-arrow-left"></i>
      </div>
    ),
    nextArrow: (
      <div
        className="next-arrow"
        style={{
          display: `${showNextArrow}`,
        }}
      >
        <i className="fas fa-arrow-right"></i>
      </div>
    ),
    onChange: (previous, next) => {
      context.onSlideChange(previous, next);
    },
  };
  //SLIDESHOW PROPS
  const slideshowProps = {
    slideRef: slideRef,
    slideProperties: properties,
    showSearch: showSearch,
    searchWidth: searchWidth,
    showCourseList: showCourseList,
    SlideData: SlideData,
  };

  return (
    <Fragment>
      <div className={styles.app}>
        <Modal />
        <Header />
        <div className={styles.main}>
          <OptionPanel toggleCourseList={toggleCourseList} toggleSearch={toggleSearch} />
          <Slideshow {...slideshowProps} toggleCourseList={toggleCourseList} toggleSearch={toggleSearch} />
        </div>
        <SlideCounter />
      </div>
    </Fragment>
  );
}
