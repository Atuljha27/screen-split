const button1 = document.querySelector(".btn-delete");
const show = document.querySelector(".btn-show");
const everyone = document.querySelector(".btn-everyone");
const comment = document.querySelector(".btn-comment");
const undo = document.querySelector(".btn-undo");
const edit = document.querySelector(".btn-edit");

button1.addEventListener("click", function () {
  document.querySelector(".btn-delete").textContent = "Got Clicked";
});

show.addEventListener("click", function () {
  document.querySelector(".btn-show").textContent = "Got Clicked";
});

everyone.addEventListener("click", function () {
  document.querySelector(".btn-everyone").textContent = "Got Clicked";
});

comment.addEventListener("click", function () {
  document.querySelector(".btn-comment").textContent = "Got Clicked";
});

undo.addEventListener("click", function () {
  document.querySelector(".btn-undo").textContent = "Got Clicked";
});

edit.addEventListener("click", function () {
  document.querySelector(".btn-edit").textContent = "Got Clicked";
});
