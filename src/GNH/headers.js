window.onload = function () {
  const toggle = document.querySelector(".toggle");
  toggle.addEventListener("click", function () {
    this.classList.toggle("active");
  });
};
