const language_buttons = document.querySelectorAll(".language-button button");
language_buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove "active-btn" class from all buttons
    language_buttons.forEach(btn => {
      btn.classList.remove("active-btn");
    });

    // Add "active-btn" class to the clicked button
    button.classList.add("active-btn");
  });
});


$(document).ready(function () {
  $.MultiLanguage('language.json');

})

