
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
        "Using <!-- -->",
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
      questions: "Which of these refers to HTML 4.0?",
      options: ["Wilbur", "Frameset", "Strict", "HTML Rattle"],
      correctAnswer: "Frameset",
    },
    {
      questions: "Which of these is not assoiciated with HTML?",
      options: ["CSS", "JavaScript", "PHP", "Ruby on Rails"],
      correctAnswer: "Ruby on Rails",
    },
    {
      questions: "Which of these cannot be manipulated by HTML",
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
      questions:
        "Which of the following is the correct styntax to add the external stylesheet in CSS?",
      options: [
        "<style src = QuizBuzz.css>",
        '<style src = "QuizBuzz.css">',
        "<stylesheet>QuizBuzz.css</stylesheet>",
        '<link rel="stylesheet" type="quiz/css" href="QuizBuzz.css">',
      ],
      correctAnswer: `<link rel="stylesheet" type="quiz/css" href="QuizBuzz.css"> `,
    },
    {
      questions:
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
      questions: "What is the syntax for using font family in CSS?",
      options: ["font(family)", "font-family()", "font_family", "fontFamily()"],
      correctAnswer: "font-family()",
    },
    {
      questions:
        "Which element is used to represent the transparency of an element in CSS?",
      options: ["Z-index", "Opacity", "Overflow", "Overlay"],
      correctAnswer: "Opacity",
    },
    {
      questions: "How do you select all paragraphs in CSS?",
      options: [
        "p {}",
        ".paragraph {}",
        "#para1, #para2, #para3",
        "*[type=paragraph]",
      ],
      correctAnswer: "p {}",
    },
    {
      questions:
        "Which below function in CSS is used to perform the calculation?",
      options: ["cal()", "calculator()", "calc()", "Calculate()"],
      correctAnswer: "calc()",
    },
    {
      questions:
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
      questions: "What are units used for length measurement in CSS?",
      options: [
        "px (Pixels)",
        "% (Percentage)",
        "em (Font Units)",
        "cm (Centimeters)",
      ],
      correctAnswer: "cm (Centimeters)",
    },
    {
      questions:
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
      questions: 'How do you write "Hello World! in an alert box?"',
      options: [
        `alert("Hello World!");`,
        `console.log("Hello World!");`,
        `prompt("Enter your name: ", "John Doe");`,
        `console.log(alert:{Hello world})`,
      ],
      correctAnswer: `alert("Hello World!");`,
    },
    {
      questions: "JavaScript file has an extenstion of:",
      options: [".java", ".js", ".javaScript", ".jxml"],
      correctAnswer: ".js",
    },
    {
      questions:
        "Which statement connot be used to declare a variable in JavaScript",
      options: ["var", "let", "const", "int"],
      correctAnswer: "int",
    },
    {
      questions: "What does JSON stand for",
      options: [
        "Javascript Object Notation",
        "Java Object Notation",
        "JavaScript Only Notation",
        "JavaScript Online Notation",
      ],
      checkAnswer: "Javascript Object Notation",
    },
    {
      questions: 'What is the value of x? var x = typeof "abc"',
      options: ["string", "x = Abc", "abc", "Undefined"],
      correctAnswer: "string",
    },
    {
      questions: "To convert string to number, which function do we use?",
      options: ["parseNumber()", "ParseDouble()", "ParseValue()", "parseInt()"],
      correctAnswer: "parseInt()",
    },
    {
      questions: "Which of these is not a logical operator",
      options: ["!", "||", "&", "&&"],
      correctAnswer: "&",
    },
    {
      questions: "What is the output of console.log(3 > 5) ?",
      options: ["true", "false", "undefined", "null"],
      correctAnswer: "false",
    },
    {
      questions: "How to declare a string variable",
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
let category;
document.addEventListener("DOMContentLoaded", function () {
  initializeQuiz();
});


function startQuiz(selectedCategory) {
  console.log('Start quiz clicked for category:', selectedCategory);
  username = document.getElementById("username").value;
  
  if (username.trim() === "") {
    alert("Please enter your name to start the quiz.");
    return;
  }
  
   category = selectedCategory;
  localStorage.setItem("username", username);
  localStorage.setItem("category", category);
  loadQuestionsPage();
}
function initializeQuiz() {
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
    score++;
  }

  disableOptions();
  clearInterval(timerInterval);

  document.getElementById("nextBtn").disabled = false;
}

function disableOptions() {
  const optionButtons = document.getElementsByClassName("options");
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].disabled = true;
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
  } else {
    alert(`Quiz completed!\nYour score: ${score}/10`);
    resetQuiz();
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
}

function resetTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.innerText = "15";
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  let seconds = 15;
  timerInterval = setInterval(function () {
    seconds--;
    timerElement.innerText = seconds;

    if (seconds <= 0) {
      clearInterval(timerInterval);
      disableOptions();
      document.getElementById("nextBtn").disabled = false;
    }
  }, 1000);
}
