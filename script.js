const quizData = [
  {
    question: "Where is the Taj Mahal located?",
    options: ["Delhi", "Mumbai", "Agra", "Jaipur"],
    answer: "Agra"
  },
  {
    question: "Who built the Taj Mahal?",
    options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
    answer: "Shah Jahan"
  },
  {
    question: "In which century was the Taj Mahal built?",
    options: ["14th", "15th", "16th", "17th"],
    answer: "17th"
  },
  {
    question: "Why was the Taj Mahal built?",
    options: ["To mark a victory", "As a palace", "As a mosque", "As a tomb"],
    answer: "As a tomb"
  },
  {
    question: "What material is mainly used in the Taj Mahal?",
    options: ["Red sandstone", "Marble", "Granite", "Limestone"],
    answer: "Marble"
  },
  {
    question: "Who is buried in the Taj Mahal?",
    options: ["Shah Jahan", "Mumtaz Mahal", "Both", "None"],
    answer: "Both"
  },
  {
    question: "Which river flows near the Taj Mahal?",
    options: ["Ganga", "Yamuna", "Saraswati", "Narmada"],
    answer: "Yamuna"
  },
  {
    question: "What is the architectural style of the Taj Mahal?",
    options: ["Mughal", "British", "Roman", "Greek"],
    answer: "Mughal"
  },
  {
    question: "What color does the Taj Mahal appear in moonlight?",
    options: ["White", "Yellow", "Pink", "Blue"],
    answer: "White"
  },
  {
    question: "Is the Taj Mahal a UNESCO World Heritage Site?",
    options: ["Yes", "No"],
    answer: "Yes"
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const scoreBox = document.getElementById("score");

function loadQuestion() {
  feedback.textContent = "";
  const current = quizData[currentQuestion];
  questionBox.textContent = current.question;
  optionsBox.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    feedback.textContent = "✔ Correct!";
    feedback.className = "correct";
    score++;
  } else {
    feedback.textContent = `❌ Wrong! Correct Answer: ${correct}`;
    feedback.className = "wrong";
  }

  // Disable all options
  Array.from(optionsBox.children).forEach(btn => btn.disabled = true);
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("question-box").style.display = "none";
  resultBox.style.display = "block";
  scoreBox.textContent = score;
}

loadQuestion();
