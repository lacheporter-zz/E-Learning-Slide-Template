import React, { useState, Fragment, useRef } from "react";
import SearchResults from "./SearchResults";
import SearchField from "./SearchField";
import styles from "../../Styles/main.module.css";
export default function SearchBar(props) {
  //STATE MANAGMENT//
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const inputBox = useRef();

  //SETS THE SEARCH TERM TO THE INPUT VALUE//
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  //TOGGLE THE RESULTS ELEMENT TO SHOW//
  const showResultsHandler = () => {
    setShowResults(true);
  };
  //SETS THE RESULTS TO HIDE/
  const hideResultsHandler = () => {
    setShowResults(false);
  };
  //CLEARS THE INPUT VALUE//
  const clearInput = () => {
    inputBox.current.value = "";
  };

  return (
    <Fragment>
      <div className={styles.searchBarContainer}>
        <SearchField
          onChange={searchHandler}
          showResults={showResultsHandler}
          inputBoxRef={inputBox}
          searchWidth={props.searchWidth}
          toggleSearch={props.toggleSearch}
        />
        <SearchResults
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          clearInput={clearInput}
          showResults={showResultsHandler}
          hideResults={hideResultsHandler}
          toggleSearch={props.toggleSearch}
          results={showResults}
        />
      </div>
    </Fragment>
  );
}
