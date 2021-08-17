import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../../Styles/main.module.css";

export default function SearchField({ onChange, inputBoxRef, searchWidth, showResults, toggleSearch }) {
  return (
    <Fragment>
      <div className={styles.searchBar}>
        <form className={styles.searchForm} onChange={onChange} style={{ width: searchWidth }}>
          <input
            onClick={showResults}
            className={styles.searchInput}
            style={{ width: searchWidth }}
            id="search"
            type="text"
            placeholder=" What are you looking for?"
            ref={inputBoxRef}
          />
          <div className={styles.searchIconContainer} onClick={toggleSearch}>
            <FontAwesomeIcon icon={faSearch} type="submit" className={styles.searchIcon} />
          </div>
        </form>
      </div>
    </Fragment>
  );
}
