document.addEventListener("DOMContentLoaded", function () {
  initializeQuiz();
});
function initializeQuiz() {
  loadQuestionsPage();
}

let username = localStorage.getItem("username");
let category = localStorage.getItem("category");

if (!username || !category) {
  window.location.href = "index.html";
}

const questions = {
  HTML: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High-Level Text Markup Language",
        "Hyper Transfer Markup Language",
        "High-Level Transfer Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question:
        "What is the HTML tag used for that represents an external script?",
      options: ["<script>", "<style>", "</head>", "<title>"],
      correctAnswer: "<script>",
    },
    {
      question:
        "Which of the following tags can be used to create a hyperlink in HTML",
      options: ["<a>", "<img>", "<div>", "<label>"],
      correctAnswer: "<a>",
    },
    {
      question: "How do you add a comment in HTML?",
      options: [
        "Using <-- -->",
        "Using <!-- -->",
        "Using <-- >",
        "None of the above",
      ],
      correctAnswer: "Using <!-- -->",
    },
    {
      question: "How is document type initialized in HTML5?",
      options: [
        "<!DOCTYPE html>",
        "<doctype html>",
        "&lt;!DOCTYPE html &gt;",
        "None Of The Above",
      ],
      correctAnswer: "<!DOCTYPE html>",
    },
    {
      question: "Which of these is not absent in HTML?",
      options: ["Tags", "Source file", "Tracking systems", "Fat links"],
      correctAnswer: "Source file",
    },
    {
      question: "Which of these does not support the earlier release of HTML?",
      options: ["Opera", "Chrome", "Safari", "Edge"],
      correctAnswer: "Safari",
    },
    {
      question: "Which of these refers to HTML 4.0?",
      options: ["Wilbur", "Frameset", "Strict", "HTML Rattle"],
      correctAnswer: "Frameset",
    },
    {
      question: "Which of these is not assoiciated with HTML?",
      options: ["CSS", "JavaScript", "PHP", "Ruby on Rails"],
      correctAnswer: "Ruby on Rails",
    },
    {
      question: "Which of these cannot be manipulated by HTML",
      options: [
        "Site cookies",
        "Browser security",
        "Brower settings",
        "Cookies",
      ],
      correctAnswer: "Browser settings",
    },
  ],

  CSS: [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheet",
        "Computer Style Sheet",
        "Creative Style Sheet",
        "Colorful Style Sheet",
      ],
      correctAnswer: "Cascading Style Sheet",
    },
    {
      question:
        "Which of the following is the correct styntax to add the external stylesheet in CSS?",
      options: [
        '<style src = QuizBuzz.css>',
        '<style src = "QuizBuzz.css">',
        '<stylesheet>QuizBuzz.css</stylesheet>',
        '<link rel="stylesheet" type="quiz/css" href="QuizBuzz.css">',
      ],
      correctAnswer: `<link rel="stylesheet" type="quiz/css" href="QuizBuzz.css"> `,
    },
    {
      question:
        "Which of the below CSS properties is used to change the background color of CSS?",
      options: [
        "bg color",
        "color-background",
        "background-color",
        "set color",
      ],
      correctAnswer: "background-color",
    },
    {
      question: "What is the syntax for using font family in CSS?",
      options: ["font(family)", "font-family()", "font_family", "fontFamily()"],
      correctAnswer: "font-family()",
    },
    {
      question:
        "Which element is used to represent the transparency of an element in CSS?",
      options: ["Z-index", "Opacity", "Overflow", "Overlay"],
      correctAnswer: "Opacity",
    },
    {
      question: "How do you select all paragraphs in CSS?",
      options: [
        "p {}",
        ".paragraph {}",
        "#para1, #para2, #para3",
        "*[type=paragraph]",
      ],
      correctAnswer: "p {}",
    },
    {
      question:
        "Which below function in CSS is used to perform the calculation?",
      options: ["cal()", "calculator()", "calc()", "Calculate()"],
      correctAnswer: "calc()",
    },
    {
      question:
        "Which of the below CSS property is used to set the origin of the background image in bootstraps",
      options: [
        "background-image",
        "background-origin",
        "background-size",
        "background-fix",
      ],
      correctAnswer: "background-origin",
    },
    {
      question: "What are units used for length measurement in CSS?",
      options: [
        "px (Pixels)",
        "% (Percentage)",
        "em (Font Units)",
        "cm (Centimeters)",
      ],
      correctAnswer: "cm (Centimeters)",
    },
    {
      question:
        "CSS supports which of the following color representation formats?",
      options: [
        "RGB(0,0,0)",
        "Hex Code #000000",
        "RGBA(0,0,0,0.5)",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
  ],

  JavaScript: [
    {
      question: "Which operator is used to assign values?",
      options: ["=", "==", "===", "Undefined"],
      correctAnswer: "=",
    },
    {
      question: 'How do you write "Hello World! in an alert box?"',
      options: [
        `alert("Hello World!");`,
        `console.log("Hello World!");`,
        `prompt("Enter your name: ", "John Doe");`,
        `console.log(alert:{Hello world})`,
      ],
      correctAnswer: `alert("Hello World!");`,
    },
    {
      question: "JavaScript file has an extenstion of:",
      options: [".java", ".js", ".javaScript", ".jxml"],
      correctAnswer: ".js",
    },
    {
      question:
        "Which statement connot be used to declare a variable in JavaScript",
      options: ["var", "let", "const", "int"],
      correctAnswer: "int",
    },
    {
      question: "What does JSON stand for",
      options: [
        "Javascript Object Notation",
        "Java Object Notation",
        "JavaScript Only Notation",
        "JavaScript Online Notation",
      ],
      checkAnswer: "Javascript Object Notation",
    },
    {
      question: 'What is the value of x? var x = typeof "abc"',
      options: ["string", "x = Abc", "abc", "Undefined"],
      correctAnswer: "string",
    },
    {
      question: "To convert string to number, which function do we use?",
      options: ["parseNumber()", "ParseDouble()", "ParseValue()", "parseInt()"],
      correctAnswer: "parseInt()",
    },
    {
      question: "Which of these is not a logical operator",
      options: ["!", "||", "&", "&&"],
      correctAnswer: "&",
    },
    {
      question: "What is the output of console.log(3 > 5) ?",
      options: ["true", "false", "undefined", "null"],
      correctAnswer: "false",
    },
    {
      question: "How to declare a string variable",
      options: {
        a: 'String x = "Hello World"',
        b: 'new "String" = Hello World',
        c: 'let x = "Hello World"',
        d: 'x = "Hello World"',
      },
      correctAnswer: 'let x = "Hello World"',
    },
  ],
};

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

function startQuiz(selectedCategory) {
  console.log("Start quiz clicked for category:", selectedCategory);
  username = document.getElementById("username").value;

  if (username.trim() === "") {
    alert("Please enter your name to start the quiz.");
    return;
  }

  category = selectedCategory;
  localStorage.setItem("username", username);
  localStorage.setItem("category", category);
  window.location.href = "questions.html"; 
  loadQuestionsPage();
}


function loadQuestionsPage() {
  const categoryTitleElement = document.getElementById("category-title");

  if (categoryTitleElement) {
    categoryTitleElement.innerText = category;
    displayQuestion();
  } else {
    console.error("Element with ID 'category-title' not found.");
  }
}

function displayQuestion() {
  const currentQuestion = getCurrentQuestion();
  const printQuestionElement = document.getElementById("printQuestion");
  const optionsContainer = document.getElementById("optionsContainer");

  printQuestionElement.innerText = currentQuestion.question;

  optionsContainer.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = option;
    optionButton.classList.add("options"); // Add a class for styling or event handling
    optionButton.onclick = () => checkAnswer(optionButton);
    optionsContainer.appendChild(optionButton);
  });

  resetTimer();
  startTimer();
}



function checkAnswer(button) {
  const selectedAnswer = button.innerText.trim().toLowerCase();
  const currentQuestion = getCurrentQuestion();
  const correctAnswer = currentQuestion.correctAnswer.toLowerCase();

  if (selectedAnswer === correctAnswer) {
    score++; // Increment by the index of the current question
    console.log("Score updated:", score);
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }
  const correctButton = Array.from(
    document.getElementsByClassName("options")
  ).find((btn) => btn.innerText.trim().toLowerCase() === correctAnswer);
  if (correctButton) {
    correctButton.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }

  disableOptionsExceptSelected(button);
  clearInterval(timerInterval);

  document.getElementById("nextBtn").disabled = false;
  updateScore();
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = `${score} / 10`;
}

function disableOptionsExceptSelected(selectedButton) {
  const optionButtons = document.getElementsByClassName("options");
  for (let i = 0; i < optionButtons.length; i++) {
    if (optionButtons[i] !== selectedButton) {
      optionButtons[i].disabled = true;
    }
  }
}

function getCurrentQuestion() {
  const currentCategoryQuestions = questions[category];
  return currentCategoryQuestions[currentQuestionIndex];
}
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 10) {
    enableOptions();
    displayQuestion();
    resetTimer(); // Reset the timer for the new question
  } else {
    alert(`Quiz completed!\nYour score: ${score}/10`);
    resetQuiz();
  }
}
function enableOptions() {
  const optionButtons = document.getElementsByClassName("options");
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].disabled = false;
  }
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("nextBtn").disabled = true;
  document.getElementById("username").value = "";
  document.getElementById("category-title").innerText = "";
  document.getElementById("printQuestion").innerText = "";
  document.getElementById("optionsContainer").innerHTML = "";  
  clearInterval(timerInterval);
  updateScore();
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  let seconds = 15;
  timerElement.innerText = seconds;

  timerInterval = setInterval(function () {
    seconds--;
    timerElement.innerText = seconds;

    if (seconds <= 0) {
      clearInterval(timerInterval);
      enableOptions();
      document.getElementById("nextBtn").disabled = false;
      // Add the logic to move to the next question without counting as a right answer
      currentQuestionIndex++;
      if (currentQuestionIndex < 10) {
        displayQuestion();
        resetTimer(); // Reset the timer for the new question
      } else {
        alert(`Quiz completed!\nYour score: ${score}/10`);
        resetQuiz();
      }
    }
  }, 1000);
}

function resetTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.innerText = "15";
}

// DISPLAY THE RESULT OF THE QUIZ...... link file with result.html



