import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen, faHome, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "../../Styles/main.module.css";

function HomeOption(props) {
  return (
    <div className={styles.optionsItem}>
      <div>
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </div>
      {props.showName && (
        <Link className={styles.optionsLink} to="/home">
          Home
        </Link>
      )}
    </div>
  );
}

function IndexOption(props) {
  return (
    <div className={styles.optionsItem} onClick={props.onClick}>
      <div>{props.iconState ? <FontAwesomeIcon icon={faFolder} /> : <FontAwesomeIcon icon={faFolderOpen} />} </div>
      {props.showName && <p style={{ display: props.showName }}>Index</p>}
    </div>
  );
}

function SearchOption(props) {
  return (
    <div className={styles.optionsItem} onClick={props.onClick}>
      <div>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      {props.showName && <p style={{ display: props.showName }}>Search</p>}
    </div>
  );
}

function ExitOption(props) {
  return (
    <div className={styles.optionsItem} onClick={props.onClick}>
      <div>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      {props.showName && (
        <Link className={styles.optionsLink} to="/home">
          Exit
        </Link>
      )}
    </div>
  );
}

export { HomeOption, IndexOption, SearchOption, ExitOption };
