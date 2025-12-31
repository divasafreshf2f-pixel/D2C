document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".mobile-drop-btn");
  const dropdown = document.querySelector(".mobile-dropdown");

  btn.addEventListener("click", function () {
    dropdown.classList.toggle("active");
  });
});
