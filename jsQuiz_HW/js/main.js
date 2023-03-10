const questions = [
  {
    question: "1) What is the name of the bootcamp?",
    type: "text",
    answer: "coding temple",
  },
  {
    question: "2) What is 4+2?",
    type: "radio",
    choices: [
      {
        label: "2",
        value: "2",
      },
      {
        label: "8",
        value: "8",
      },
      {
        label: "6",
        value: "6",
      },
      {
        label: "1",
        value: "1",
      },
    ],
    answer: "6",
  },
  {
    question: "3) What is 10+10?",
    type: "radio",
    choices: [
      {
        label: "2",
        value: "2",
      },
      {
        label: "20",
        value: "20",
      },
      {
        label: "100",
        value: "100",
      },
      {
        label: "30",
        value: "30",
      },
    ],
    answer: "20",
  },
  {
    question: "4) What is 1000/10?",
    type: "radio",
    choices: [
      {
        label: "10",
        value: "10",
      },
      {
        label: "200",
        value: "200",
      },
      {
        label: "100",
        value: "100",
      },
      {
        label: "0",
        value: "0",
      },
    ],
    answer: "100",
  },
];

function generateQuestion(question) {
  let html = `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${question.question}</h5>
    `;

  if (question.type === "text") {
    html += `
        <input type="text" name="${question.answer}" id="textbook"/>
        `;
  } else if (question.type === "radio") {
    question.choices.forEach(
      (choice) =>
        (html += `
        <input type="radio" name="${question.answer}" value="${choice.value}"/> ${choice.label} <br>
        `)
    );
  }
  html += `</div></div><br>`;
  return html;
}

function generateQuiz() {
  const questionsContainer = document.getElementById("questions-container");

  questions.forEach((question) => {
    const questionHTML = generateQuestion(question);
    questionsContainer.innerHTML += questionHTML;
  });
}

generateQuiz();

function check() {
  const totalQuestions = questions.length;
  let correct = 0;

  questions.forEach((question) => {
    const answerE = document.querySelector(
      `input[name="${question.answer}"]:checked, input[name="${question.answer}"][type="text"]`
    );
    const answer = answerE ? answerE.value.toLowerCase() : null;

    if (answer && answer.toLowerCase() === question.answer.toLowerCase()) {
      correct++;
      answerE.parentNode.style.backgroundColor = "green";
    } else {
      answerE.parentNode.style.backgroundColor = "red";
    }
  });

  const messages = [
    "Great job!",
    "That's just okay",
    "You really need to do better",
  ];

  const pictures = [
    "./static/img/goodjob.jpg",
    "./static/img/meh.jpg",
    "./static/img/dobetter.gif",
  ];

  let range;

  if (correct < 1) {
    range = 2;
  } else if (correct > 0 && correct < 3) {
    range = 1;
  } else if (correct > 2) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById(
    "number_correct"
  ).innerHTML = `You answered ${correct} out of ${totalQuestions} questions correctly.`;
  document.getElementById("picture").src = pictures[range];
}
