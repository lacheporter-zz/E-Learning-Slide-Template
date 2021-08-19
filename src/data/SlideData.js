import placholderImage from "../assets/placeholder_image.svg";
import checkpoint from "../assets/checkpoint.svg";
// import objectives from "../assets/objectives.svg";

// function formatted() {
//   return <span style={{ fontWeight: "bold" }}>Training</span>;
// }
// var test = formatted();

const imageSize = "100%";

const SlideData = [
  {
    index: 0,
    title: "Slide Title 1",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    image: placholderImage,
    width: imageSize,
  },
  {
    index: 1,
    title: "Slide Title 2",
    layout: "standard",
    content: [
      {
        type: "list",
        title: "List Header",
        items: ["List item 1", "List item 2", "List item 3", "List item 4"],
      },
    ],
    image: placholderImage,
    width: imageSize,
  },
  {
    index: 2,
    title: "Slide Title 3",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat.",
      },

      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Lorem ips dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "List Heading:",
        items: ["List item 1", "List item 2", "List item 3", "List item 4"],
      },
    ],
    image: placholderImage,
    width: imageSize,
  },
  {
    index: 3,
    title: "Slide Title 4",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  ex ea commodo consequat.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "",
        items: [
          "Lorem ipsum dolo amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
      },
    ],
    image: placholderImage,
    width: imageSize,
  },
  {
    index: 4,
    title: "Slide Title 5",
    layout: "wide",
    content: [
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua: ",
      },
      {
        type: "space",
        height: "2em",
      },
      {
        type: "terms",
        terms: [
          {
            name: "Term 1",
            definition: "Definition 1",
          },
          {
            name: "Term 2",
            definition: "Definition 2",
          },
          {
            name: "Term 3",
            definition: "Definition 3",
          },
          {
            name: "Term 4",
            definition: "Definition 4",
          },
        ],
      },
    ],
  },
  {
    index: 5,
    title: "Slide Title 6",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    image: placholderImage,
    width: imageSize,
  },
  {
    index: 6,
    title: "Slide Title 7",
    layout: "standard",
    content: [
      {
        type: "paragraph",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    image: placholderImage,
    width: imageSize,
  },

  {
    index: 7,
    title: "Lesson Checkpoint",
    content: [
      {
        type: "paragraph",
        text: "Proceed to the check on learning questions and assess your knowledge of previously covered information. ",
      },
    ],
    image: checkpoint,
    width: "75%",
  },
];
export default SlideData;
