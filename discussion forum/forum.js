const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const submit = document.getElementById("submit");
const question = document.getElementById("question");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

submit.addEventListener("click", () => {
  if (question.value != "") {
    modal_container.classList.remove("show");
  }
});
