import React from "react";
import styles from "../../Styles/main.module.css";

export default function Modal() {
  // Get the modal
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img1");
  // Get the images
  const images = document.querySelectorAll("#picture");
  // Hide the modal
  function closeModal() {
    modal.style.display = "none";
  }
  //Loop through the images and add listener to each, set src of image to modal src.
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", (e) => {
      modal.style.display = "block";
      modalImg.src = e.target.src;
    });
  }
  return (
    <div id="myModal" className={styles.modalStyle} onClick={closeModal}>
      <span onClick={closeModal} className={styles.myClose}>
        &times;
      </span>
      <img id="img1" className={styles.myModalContent} />
      <div id="myCaption">Enlarged Image</div>
    </div>
  );
}
