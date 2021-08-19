import React, { useContext, Fragment } from "react";
import SlideData from "../../data/SlideData";
import { AppContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../Styles/main.module.css";

export default function SearchResults({ searchTerm, setSearchTerm, clearInput, toggleSearch, hideResults, results }) {
  const context = useContext(AppContext);

  //SPLIT THE SEARCH TERM AND STYLE THE PIECES//
  const splitResult = (result) => {
    console.log("Search Result: " + result);
    return result.split(new RegExp(`(${searchTerm})`, `gi`)).map((piece, index) => {
      return (
        <span
          key={index}
          style={{
            //if piece is equal to the search term style it
            background: piece.toLowerCase() === searchTerm.toLocaleLowerCase() ? "GOLD" : "TRANSPARENT",
            padding: "0.25rem",
            borderRadius: "0.25rem",
          }}
        >
          {piece}
        </span>
      );
    });
  };

  const filterData = () => {
    return SlideData.filter((item) => {
      if (searchTerm === "") {
      } else {
        //concat the text properties into variable
        let searchText = item.title;
        let searchBlock = item.content;
        //if searchtext contains the search term value
        if (searchText.toLowerCase().includes(searchTerm.toLowerCase())) {
          //return those items, map them below
          return item;
        } else {
          //set test variable
          let test = null;
          //for each object in searchBlock
          searchBlock.forEach((obj) => {
            //if the the object.text exists, and it contains the search term value
            if (obj.text && obj.text.toLowerCase().includes(searchTerm.toLowerCase())) {
              //set test to true
              test = true;
            }
          });
          //if test is true, return that item, map it below
          if (test) {
            return item;
          }
        }
      }
    }).map((item) => (
      <div key={item.index}>
        <h3 style={{ padding: "0.25rem" }}>{splitResult(item.title)}</h3>
        {item.content.map((block, i) => (
          <>
            {block.text && <div key={i}>{splitResult(block.text)}</div>}
            {block.items && (
              <>
                {block.items.map((l, i) => (
                  <div style={{ padding: "0.25rem" }} key={i}>
                    {splitResult(l)}
                  </div>
                ))}
              </>
            )}
          </>
        ))}
        <div
          className={styles.searchLink}
          onClick={() => {
            context.setCurrentSlide(item.index);
            setSearchTerm("");
            hideResults();
            clearInput();
            toggleSearch();
          }}
        >
          Go To This Slide
        </div>
        <hr />
      </div>
    ));
  };

  return (
    <Fragment>
      {results ? (
        <div className={styles.searchResults}>
          <div className={styles.searchHeader}>
            <h2>Search Results</h2>
            <span
              onClick={() => {
                setSearchTerm("");
                hideResults();
                clearInput();
                toggleSearch();
              }}
            >
              <FontAwesomeIcon icon={faTimes} className={styles.exitIcon} />
            </span>
          </div>
          <hr></hr>
          <ul>{filterData()}</ul>
        </div>
      ) : null}
    </Fragment>
  );
}
