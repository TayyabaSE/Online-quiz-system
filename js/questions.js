// Student 2: MCQ data and question display
// Questions.js - plain JavaScript (no React)
// An array of 5 MCQs, each with question text and 4 options.
// "answer" is the index (0-3) of the correct option.

const questions = [
  {
    id: 1,
    text: "Which language is used to add interactivity to web pages?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: 2,
  },
  {
    id: 2,
    text: "Which HTTP method is commonly used to create a new resource?",
    options: ["GET", "POST", "DELETE", "HEAD"],
    answer: 1,
  },
  {
    id: 3,
    text: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "Sequential Query Logic",
      "Standard Queue Language",
    ],
    answer: 0,
  },
  {
    id: 4,
    text: "Which keyword declares a block-scoped variable in JavaScript?",
    options: ["var", "let", "define", "int"],
    answer: 1,
  },
  {
    id: 5,
    text: "Which data structure works on the FIFO principle?",
    options: ["Stack", "Tree", "Queue", "Graph"],
    answer: 2,
  },
];

// Stores the chosen option number (0-3) for each question.
// userAnswers[0] is the answer to question 1, and so on.
// null means the question has not been answered yet.
const userAnswers = new Array(questions.length).fill(null);

// Shows one question and its options as buttons.
// Needs <div id="quiz"></div> in the HTML (created automatically if missing).
function showQuestion(index) {
  let container = document.getElementById("quiz");
  if (!container) {
    container = document.createElement("div");
    container.id = "quiz";
    document.body.appendChild(container);
  }

  const q = questions[index];
  container.innerHTML = "";

  // Question text
  const title = document.createElement("h3");
  title.textContent = "Q" + (index + 1) + ". " + q.text;
  container.appendChild(title);

  // One button per option
  q.options.forEach(function (optionText, optionNumber) {
    const btn = document.createElement("button");
    btn.textContent = optionText;
    btn.style.display = "block";
    btn.style.margin = "8px 0";
    btn.style.padding = "8px 16px";

    // Highlight if this option was chosen earlier
    if (userAnswers[index] === optionNumber) {
      btn.style.background = "#bfdbfe";
    }

    btn.addEventListener("click", function () {
      userAnswers[index] = optionNumber; // save the option number
      console.log("userAnswers:", userAnswers);
      showQuestion(index); // redraw to show the selected option
    });

    container.appendChild(btn);
  });
}

// Works in the browser (via <script src="Questions.js">) and in Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { questions, userAnswers, showQuestion };
}
 