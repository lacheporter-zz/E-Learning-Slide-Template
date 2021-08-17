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
    console.log(result);
    result.split(new RegExp(`(${searchTerm})`, `gi`)).map((piece, index) => {
      return (
        <span
          key={index}
          style={{
            background: piece.toLowerCase() === searchTerm.toLocaleLowerCase() ? "GOLD" : "TRANSPARENT",

            borderRadius: "0.25rem",
            padding: "0.25rem 0rem",
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
        //if the variable contains the search term value
        if (searchText.toLowerCase().includes(searchTerm.toLowerCase())) {
          //return those items
          return item;
        } else {
          let test = null;
          searchBlock.forEach((obj) => {
            if (obj.text && obj.text.toLowerCase().includes(searchTerm.toLowerCase())) {
              test = true;
            }
          });
          if (test) {
            return item;
          }
        }
      }
    }).map((item) => (
      <div style={{ padding: "0.5rem 0rem" }} key={item.index}>
        <h3>{splitResult(item.title)}</h3>
        {item.content.map((i) => {
          return <>{i.text && <div>{i.text}</div>}</>;
        })}
        <div className={styles.searchLink}>
          <a
            onClick={() => {
              context.setCurrentSlide(item.index);
              setSearchTerm("");
              hideResults();
              clearInput();
              toggleSearch();
            }}
          >
            Go To This Slide {item.index}
          </a>
        </div>
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
