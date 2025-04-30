// script.js

document.addEventListener("DOMContentLoaded", () => {
    const quizSections = document.querySelectorAll(".quiz-section");
    const resultsSection = document.querySelector(".results-section");
    const correctAnswers = ["France", "Italy", "Finland", "Netherlands", "Portugal"];
  
    quizSections.forEach((section, index) => {
      const options = section.querySelectorAll(".option");
      let selected = null;
  
      options.forEach((option) => {
        option.addEventListener("click", () => {
          if (section.classList.contains("locked")) return;
  
          options.forEach((opt) => opt.classList.remove("selected"));
          option.classList.add("selected");
          selected = option;
        });
      });
  
      const lockButton = section.querySelector(".lock-button");
      lockButton.addEventListener("click", () => {
        if (!selected) {
          return;
        }
        section.classList.add("locked");
        lockButton.disabled = true;
      });
    });
  
    const submitBtn = document.querySelector(".submit-section .submit-button");
    submitBtn.addEventListener("click", () => {
      let score = 0;
      quizSections.forEach((section, index) => {
        const selectedOption = section.querySelector(".option.selected");
        const answer = correctAnswers[index];
  
        if (selectedOption && selectedOption.querySelector("p").textContent === answer) {
            // Correto
          selectedOption.style.backgroundColor = "#2ecc71"; 
          score++;
        } else if (selectedOption) {
            // Incorreto
          selectedOption.style.backgroundColor = "#e74c3c"; // vermelho
        }
      });
  
      resultsSection.innerHTML = `<h2>Results: ${score} / ${correctAnswers.length} correct!</h2>`;
      resultsSection.scrollIntoView({ behavior: "smooth" });
    });
  });