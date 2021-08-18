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
  const [prevArrow, setPrevArrow] = useState(false);
  const [nextArrow, setNextArrow] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchWidth, setSearchWidth] = useState("40px");
  const [showCourseList, setShowCourseList] = useState(false);
  const slideRef = useRef();

  //POPULATE INDEX
  useEffect(() => {
    context.compileIndex();
  }, []);

  useEffect(() => {
    context.toggleProgress();
    // CONDITIONALLY ENDER ARROWS
    // Removes back arrow on first slide
    if (context.currentSlide === 0) {
      setPrevArrow(false);
    } else {
      setPrevArrow(true);
    }
    // Removes next arrow on final slide
    if (context.currentSlide === context.total) {
      setNextArrow(false);
    } else {
      setNextArrow(true);
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
      <div>
        {prevArrow && (
          <div className={styles.prevArrowStyle}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowStyle} />
          </div>
        )}
      </div>
    ),
    nextArrow: (
      <div>
        {nextArrow && (
          <div className={styles.nextArrowStyle}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.arrowStyle} />
          </div>
        )}
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
