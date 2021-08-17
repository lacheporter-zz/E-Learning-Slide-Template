import React, { Fragment, useState } from "react";
import { HomeOption, IndexOption, SearchOption, ExitOption } from "./Options";
import styles from "../../Styles/main.module.css";

export default function OptionPanel(props) {
  const [iconState, setIconState] = useState(true);
  const [panelWidth, setPanelWidth] = useState(false);
  const [showName, setShowName] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleListHandler = () => {
    props.toggleCourseList();
    setIconState(!iconState);
  };
  const toggleSearchHandler = () => {
    props.toggleSearch();
  };
  const closeWindow = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  const panelWidthHandler = () => {
    setPanelWidth(!panelWidth);
    setShowName(!showName);
  };

  return (
    <Fragment>
      <div
        className={`${styles.optionsPanel} ${panelWidth ? styles.panelOpen : styles.panelClosed}`}
        onMouseEnter={panelWidthHandler}
        onMouseLeave={panelWidthHandler}
      >
        <HomeOption showName={showName} />
        <IndexOption showName={showName} iconState={iconState} onClick={toggleListHandler} />
        <SearchOption showName={showName} onClick={toggleSearchHandler} />
        <ExitOption showName={showName} onClick={closeWindow} />
      </div>
    </Fragment>
  );
}
