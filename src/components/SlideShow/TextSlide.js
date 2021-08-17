import React, { useState } from "react";
import styles from "../../Styles/main.module.css";

const TextSlide = (props) => {
  //STATE MANAGEMENT//
  const [clickedTerm, setClickedTerm] = useState(0);
  const [showClicked, setShowClicked] = useState(true);
  //CHANGE STATE//
  const handleClick = (i) => {
    console.log(i);
    setClickedTerm(i);
    setShowClicked(true);
  };
  //PARAGRAPH
  function Paragraph({ text, size }) {
    const formatted = text.replace(/(HR Employee Maintainer)/g, (it) => `<b>${it}</b>`);
    return <span dangerouslySetInnerHTML={{ __html: formatted }} style={{ fontSize: size }}></span>;
  }
  //SPACE
  function Space({ height }) {
    return <div style={{ height }} />;
  }
  //LIST
  function List({ title, items, pretext }) {
    return (
      <>
        {pretext && <p style={{ padding: "0rem 0rem 1rem 0rem", fontSize: "1rem" }}>{pretext}</p>}
        {title && <strong>{title}</strong>}
        <ul style={{ padding: "10px 10px", fontSize: "1.1rem" }}>
          {items.map((item) => (
            <li style={{ fontSize: "1.2rem", padding: "0.25rem" }} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
  //TERMS
  function Terms({ title, terms }) {
    return (
      <>
        {title && <p>{title}</p>}
        <div className={styles.termsRow}>
          <div className={styles.definitionContainer}>
            {showClicked && (
              <div>
                <h3>{terms[clickedTerm].name}</h3>
                <br></br>
                <div>{terms[clickedTerm].definition}</div>
              </div>
            )}
          </div>
          <div className={styles.termColumn}>
            {terms.map((item, index) => (
              <button className={styles.termsBtn} key={index} onClick={() => handleClick(index)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }
  const elements = {
    paragraph: Paragraph,
    space: Space,
    list: List,
    terms: Terms,
  };

  return (
    <>
      <div className={props.layout === "wide" ? styles.wideGrid : styles.standardGrid}>
        <span className={`slide-title ${styles.title} ${styles.slideTitle}`}>{props.title}</span>
        <div className={styles.content}>
          {props.content.map((item, i) => {
            const Comp = elements[item.type];
            return <Comp key={i} {...item} />;
          })}
        </div>
        {props.image && (
          <img
            id="picture"
            className={styles.picture}
            src={props.image}
            alt="slideimage"
            style={{ width: props.width }}
          />
        )}
      </div>
    </>
  );
};

export default TextSlide;
