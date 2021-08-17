import React, { Fragment, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../Styles/main.module.css";
export default function CourseContent(props) {
  const context = useContext(AppContext);

  return (
    <Fragment>
      {props.showCourseList && (
        <div className={styles.sideNav}>
          <div className={styles.sideNavHeader}>
            <span>COURSE CONTENT</span>
            <span onClick={props.onclick}>
              <FontAwesomeIcon icon={faTimes} className={styles.exitIcon} />
            </span>
          </div>
          <div className={styles.sideNavList}>
            {context.index &&
              context.index.map((title, i) => (
                <div
                  className={styles.sideNavListItem}
                  key={i}
                  onClick={() => {
                    context.setCurrentSlide(i);
                    props.onclick();
                  }}
                >
                  <div key={i}>{title}</div>
                </div>
              ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}
