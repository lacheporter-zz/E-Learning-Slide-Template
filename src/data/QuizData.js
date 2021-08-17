const QuizData = {
  questions: [
    {
      question:
        "What is an example of employee master data necessary to facilitate the pay, labor process and reporting in GFEBS? ",
      answers: [
        "Security clearance level",
        "Military service record",
        "Number of dependents",
        "Employee personnel information",
      ],
      questionType: "text",
      correctAnswer: "4",
      answerSelectionType: "single",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    },
    {
      question:
        "ACPERS is the system of record for the Line of Accounting (LOA) used for posting to DCPS, ATAAPS and the Manual Time-Tracking upload spreadsheet.",
      questionType: "text",
      answers: ["True", "False"],
      correctAnswer: "2",
      answerSelectionType: "single",
    },
    {
      question: "Identify examples of the basic treasury information that GFEBS sends DCPS.",
      answers: [
        "Department Code & Fiscal Station Number",
        "Fiscal Year & AMSCO",
        "Appropriation & Functional Area",
        "Limitation & Commitment Item",
      ],
      questionType: "text",
      correctAnswer: "1",
      answerSelectionType: "single",
    },
    {
      question: "Users of GFEBS can create, change and view employee data via ______________.",
      answers: [
        "Entering T Code ZOS_IFV",
        "Infotypes",
        "Syncing GFEBS HR reports with DCPDS",
        "Updating the HR module",
      ],
      questionType: "text",
      correctAnswer: "2",
      answerSelectionType: "single",
    },
    {
      question: "Infotypes are employee master data grouped together in HR according to ___________ and _____________.",
      answers: [
        "HR policies & system procedures",
        "ECC data & BI data",
        "subject matter & logical groups",
        "record creation date & age of master data",
      ],
      questionType: "text",
      correctAnswer: "3",
      answerSelectionType: "single",
    },
  ],
};
export default QuizData;
