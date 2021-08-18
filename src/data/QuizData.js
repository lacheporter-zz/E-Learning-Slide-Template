const QuizData = {
  questions: [
    {
      question: "What color is a koala? ",
      answers: ["Blue", "Black", "Grey", "Yellow"],
      questionType: "text",
      correctAnswer: "3",
      answerSelectionType: "single",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    },
    {
      question: "The turtle is faster than the ostrich.",
      questionType: "text",
      answers: ["True", "False"],
      correctAnswer: "1",
      answerSelectionType: "single",
    },
    {
      question: "This react app is awesome.",
      answers: ["Its Amazing!", "It's pretty bad.", "Not Really.", "No."],
      questionType: "text",
      correctAnswer: "1",
      answerSelectionType: "single",
    },
  ],
};
export default QuizData;
