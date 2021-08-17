import React, { createContext, useState } from "react";
const AppContext = createContext();

function AppProvider(props) {
  //Global state variables
  const [index, setIndex] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [total, setTotal] = useState();
  const [progress, setProgress] = useState();
  const [quizComplete, setQuizComplete] = useState(false);

  // Gathers all slide titles and maps them to array for Index modal
  function compileIndex() {
    const slideTitles = [...document.querySelectorAll(".slide-title")].slice(1, -1);
    const index = slideTitles.map((title, i) => `${title.innerText}`);
    setIndex(index);
    // console.log(index);
  }

  // Updates slide index on slide change
  function onSlideChange(previous, next) {
    let currentSlide = next;
    setCurrentSlide(currentSlide);
  }

  // Recalculates progress bar percentage on every slide change
  function toggleProgress() {
    setTotal(document.querySelectorAll(".slide-title").length - 3);
    let progressBar = (currentSlide / total) * 100;
    setProgress(progressBar);
  }

  // Sets quiz state to complete
  function onQuizCompletion(obj) {
    setQuizComplete(true);
  }
  //set properties
  const value = {
    index: index,
    currentSlide: currentSlide,
    progress: progress,
    total: total,
    setCurrentSlide: setCurrentSlide,
    onSlideChange: onSlideChange,
    onQuizCompletion: onQuizCompletion,
    quizComplete: quizComplete,
    compileIndex: compileIndex,
    toggleProgress: toggleProgress,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
