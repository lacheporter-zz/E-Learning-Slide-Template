import React, { useState, useEffect, Fragment, useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import Slideshow from "../components/SlideShow/SlideShow";
import Header from "../components/Header/Header";
import OptionPanel from "../components/OptionPanel/OptionPanel";
import Modal from "../components/Modal/Modal";
import SlideCounter from "../components/SlideShow/SlideCounter";
import styles from "../Styles/main.module.css";
import SlideData from "../data/SlideData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
        className={styles.prevArrow}
        style={{
          display: `${showPrevArrow}`,
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowStyle} />
      </div>
    ),
    nextArrow: (
      <div
        className={styles.nextArrow}
        style={{
          display: `${showNextArrow}`,
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} className={styles.arrowStyle} />
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
