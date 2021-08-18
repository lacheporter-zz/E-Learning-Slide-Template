import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBook, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import jobAid from "../../assets/Overview of GFEBS HR and Payroll and Labor Process Job Aid.pdf";
import styles from "../../Styles/main.module.css";

export default function Resources() {
  //STATE MANAGEMENT//
  const [iconState, setIconState] = useState(true);
  const [showResourceList, setShowResourceList] = useState(false);

  //TOGGLE RESOURCE LIST AND ICON//
  const showResourcesHandler = () => {
    setIconState(!iconState);
    setShowResourceList(!showResourceList);
  };

  return (
    <Fragment>
      <div className={styles.resourcesContainer}>
        <div className={styles.resourcesSelect} onClick={showResourcesHandler}>
          {iconState ? <FontAwesomeIcon icon={faBook} /> : <FontAwesomeIcon icon={faBookOpen} />}
          <div className={styles.resourcesTitle}>Menu</div>
          {iconState ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
        </div>
        <div className={`${styles.resourcesList} ${!showResourceList ? styles.resourcesClosed : styles.resourcesOpen}`}>
          <ul className={styles.resourcesListGroup}>
            <li className={styles.resourcesListItem}>
              <a className={styles.resourcesListLink} href="#">
                Resource 1 Link
              </a>
            </li>
            <li className={styles.resourcesListItem}>
              <a className={styles.resourcesListLink} href="#">
                Resource 2 Link
              </a>
            </li>
            <li className={styles.resourcesListItem}>
              <a className={styles.resourcesListLink} href="#">
                Resource 3 Link
              </a>
            </li>
            <li className={styles.resourcesListItem}>
              <a className={styles.resourcesListLink} href="#">
                Resource 4 Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
