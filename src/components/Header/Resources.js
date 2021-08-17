import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import openResource from "../../assets/open_resource.svg";
import closedResource from "../../assets/closed_resource.svg";
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
          {iconState ? (
            <img className={styles.resourcesIconClosed} src={closedResource} />
          ) : (
            <img className={styles.resourcesIconOpen} src={openResource} />
          )}
          <div className={styles.resourcesTitle}>Resources</div>
          {iconState ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
        </div>
        <div className={`${styles.resourcesList} ${!showResourceList ? styles.resourcesClosed : styles.resourcesOpen}`}>
          <ul className={styles.resourcesListGroup}>
            <li className={styles.resourcesListItem}>
              <a className={styles.resourcesListLink} href="#">
                Job Aids
              </a>
            </li>
            <li className={styles.resourcesListItem}>
              <a className={styles.resourcesListLink} href="#">
                User Procedures
              </a>
            </li>
            <li className={styles.resourcesListItem}>
              <a className={styles.resourcesListLink} href="#">
                L436C Content in PDF Format
              </a>
            </li>
            <li className={styles.resourcesListItem}>
              <a className={styles.resourcesListLink} href={jobAid} target="_blank" rel="noopener noreferrer">
                Overview of GFEBS HR Payroll &amp; Labor Process Job Aid
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
