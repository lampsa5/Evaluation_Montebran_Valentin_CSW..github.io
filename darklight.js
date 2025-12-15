const button = document.getElementById("toggle");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    button.textContent = "☀️ Light";
  } else {
    button.textContent = "🌙 Dark";
  }
});