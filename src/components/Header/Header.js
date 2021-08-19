import React from "react";
import { Fragment } from "react";
import Resources from "./Resources";
import Heading from "./Heading";
import styles from "../../Styles/main.module.css";
export default function Header() {
  return (
    <Fragment>
      <div className={styles.header}>
        <Heading title="Lesson Title" subtitle="Subtitle" />

        <Resources />
      </div>
    </Fragment>
  );
}
