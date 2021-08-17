import HRPayroll from "../assets/hr_payroll.svg";
import LOA from "../assets/LOA.svg";
import checkpoint from "../assets/checkpoint.svg";
import objectives from "../assets/objectives.svg";
// import HRPA from "../assets/HRPA.svg";
import HumanResource from "../assets/human_resource.svg";
import DefenseCivilian from "../assets/defense_civilian.svg";
import ArmyCivilian1 from "../assets/ArmyCivilian1.svg";
import ArmyCivilian2 from "../assets/ArmyCivilian2.svg";
import ArmyCivilian3 from "../assets/ArmyCivilian3.svg";

const imageSize = "100%";

// function formatted() {
//   return <span style={{ fontWeight: "bold" }}>Training</span>;
// }
// var test = formatted();

const SlideData = [
  {
    index: 0,
    title: "Welcome to Overview of the GFEBS HR & Payroll/ Labor Process",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Welcome to the Overview of the GFEBS HR & Payroll/ Labor Process module. In this module we will discuss how the Human Resource Module interfaces with the Defense Civilian Personnel System (DCPDS), and the Army Civilian Personnel System (ACPERS).Welcome to the General Fund Enterprise Business System (GFEBS) Human Resource (HR) and Payroll/ Labor Processes lesson. In this introduction, an overview of important concepts, terminology, and roles are explained.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Upon completion of this module you should be able to identify these systems, important components that comprise them, and how they interface with GFEBS.",
      },
    ],
    image: HRPayroll,
    width: imageSize,
  },
  {
    index: 1,
    title: "Objectives",
    layout: "standard",
    content: [
      {
        type: "list",
        title: "At the end of this module, you should be able to:",
        items: [
          "Identify personnel systems that interface with GFEBS",
          "Recognize the components & concepts of systems used for organizational management",
          "Define the processes of how GFEBS receives data from personnel systems",
          "Identify specific data exchanged between GFEBS and interfacing systems",
        ],
      },
    ],
    image: objectives,
    width: imageSize,
  },
  {
    index: 2,
    title: "Module Lead-In (1 of 3",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The Human Resource (HR) Module of GFEBS has several components or sub-modules for organization management and for processing personnel actions and payroll.",
      },

      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "The GFEBS’ limited scope will only use the Human Resource Personnel Administration (HRPA) component.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "HRPA will only house employee master data necessary to facilitate the pay, labor process, and reporting.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "Examples are: ",
        items: [
          "Employee Line of Accounting (LOA)",
          "Employee personnel information used for manpower reporting",
          "Employee identifying information (e.g., UIC, Cost Center)",
        ],
      },
    ],
    image: objectives,
    width: imageSize,
  },
  {
    index: 3,
    title: "Module Lead-In (2 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "GFEBS is the system of record for the Line of Accounting (LOA) used for posting to DCPS, ATAAPS and the Manual Time-Tracking upload spreadsheet. Once an end user has added the LOA to an employee record, GFEBS sends the basic treasury information associated with the GFEBS FUND to DCPS to update the employees accounting classification. ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "",
        items: [
          "Employee records must be updated by end users with LOA before the pay and labor files can process. Missing records will cause these transactions to fail.",
          "Users can maintain the employee LOA through manual entry or spreadsheet upload.",
        ],
      },
    ],
    image: LOA,
    width: imageSize,
  },
  {
    index: 4,
    title: "Module Lead-In (3 of 3)",
    layout: "wide",
    content: [
      {
        type: "paragraph",
        text: "Examples of the basic treasury information that GFEBS sends DCPS are as follows:",
      },
      {
        type: "space",
        height: "2em",
      },
      {
        type: "terms",
        terms: [
          {
            name: "Department Code",
            definition: "Example: 21",
          },
          {
            name: "Appropriation and Limitation",
            definition: "Example: 2020.0012",
          },
          {
            name: "Fiscal Year",
            definition: "Example: FYXX",
          },
          {
            name: "Fiscal Station Number",
            definition: "Example: 80420",
          },
        ],
      },
    ],
  },
  {
    index: 5,
    title: "The Human Resource Module",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The Human Resource Module in GFEBS has several components used for organizational management, processing personnel actions and payroll. The Human Resource (HR) Module of GFEBS stores related employee data in individual tables. Users of GFEBS can create, change and view employee data via 'Infotypes'. Infotypes are employee master data grouped together in HR according to subject matter and logical groups.",
      },
    ],
    image: HumanResource,
    width: imageSize,
  },
  {
    index: 6,
    title: "The Defense Civilian Personnel Data System (DCPDS)",
    layout: "standard",
    content: [
      {
        type: "paragraph",

        text: "The Defense Civilian Personnel Data System (DCPDS) is a civilian human resources information support system for the Department of Defense (DOD). The system is designed to support appropriated fund, nonappropriated fund, and local national human resources operations. DCPDS is the system of record for all DOD civilian employee master data. DCPDS sends employee master records to the Defense Civilian Pay System (DCPS) for payroll processing and to the Army Civilian Personnel System (ACPERS) for employee master data creation and updates. ACPERS is the Army’s civilian management information system that stores Army civilian employee master data and serves as a hub between DCPDS and other partner applications for manpower management and reporting",
      },
    ],
    image: DefenseCivilian,
    width: imageSize,
  },
  {
    index: 7,
    title: "Army Civilian Personnel System (ACPERS) (1 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",

        text: "The inbound ACPERS interface creates and updates personnel records through various personnel actions (Hiring, Leaving, Rehire, Deactivate and Reactivate) providing data to meet Manpower reporting requirements. Manpower reporting enables the Army to understand the composition of its workforce and assist in decisions on workforce staffing and funding decisions. In GFEBS, the execution of the above processes modifies the employment status of an employee, populates required fields and delimits (end date) of the LOA Infotype. Infotypes are the screen presentation view of the stored data on the corresponding tables.",
      },
    ],
    image: ArmyCivilian1,
    width: imageSize,
  },
  {
    index: 8,
    title: "Army Civilian Personnel System (ACPERS) (2 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",

        text: "GFEBS receives a daily file from ACPERS containing employee master data for creating and updating employee records in the GFEBS Human Resources (HR) module. The employee SSN is the key identifier between ACPERS and GFEBS. The LOA is created manually or via the upload spreadsheet and not through the ACPERS interface. GFEBS uses the employee record for several purposes to include:",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "• Capturing the accounting information necessary to process pay and labor transactions. The Line of Accounting (LOA) created for each employee in HR is used for:",
      },
      {
        type: "list",
        title: "",
        items: [
          "Posting payroll from the Defense Civilian Pay System (DCPS) to the HR LOA.",
          "Allocating labor from the HR LOA to other cost objects charged.",
          "Sending Treasury data to DCPS daily which DCPS uses to disburse payroll.",
        ],
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "• Housing employee attributes (e.g., Civilian Type, Temp Position) for manpower reporting.",
        size: "1.2rem",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "• Associating employee attributes with employee level transactions in BI reports. HR employee records are extracted to BI and can be displayed in most labor and pay reports.",
        size: "1.2rem",
      },
    ],
    image: ArmyCivilian2,
    width: imageSize,
  },

  {
    index: 9,
    title: "Army Civilian Personnel System (ACPERS) (3 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "ACPERS is designed to only send data for employees designated as Army (Agency Code = ‘AR’). Those employees must be Appropriated Fund Army (Employee Type = ‘1’).",
        size: "1.2rem",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "This table displays the details of the creation of Employee Groups.",
        size: "1.2rem",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "GFEBS HR reports are available in ECC and BI to allow users to search by multiple parameters. These reports display employee records and associated LOA. The reports also include the ability to search for records where the LOA is null, indicating the new employee was added (manually or interfaced) but is missing the LOA.",
        size: "1.2rem",
      },
    ],
    image: ArmyCivilian3,
    width: "100%",
  },

  {
    index: 10,
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
