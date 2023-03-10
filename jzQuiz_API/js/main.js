const getToken = async () => {
  const endpoint = "https://quizapi.io/api/v1/questions";
  const params = new URLSearchParams({
    apiKey: apiKey,
    limit: 10,
  });
  try {
    const response = await fetch(`${endpoint}?${params.toString()}`);
    if (response.ok) {
      const data = await response.json();
      const quizContainer = document.querySelector(".quiz-container");
      data.forEach((question, index) => {
        const questionE = document.createElement("div");
        questionE.classList.add("question");
        questionE.innerHTML = `
        <h3>${index + 1}. ${question.question}</h3>
        <ul>
            <li>${question.answers.answer_a}</li>
            <li>${question.answers.answer_b}</li>
            <li>${question.answers.answer_c}</li>
            <li>${question.answers.answer_d}</li>
        </ul>
        <div class="feedback"></div>
        `;
        quizContainer.appendChild(questionE);
      });
      console.log(data);
    } else {
      console.error("Error retrieving questions:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

getToken();
 