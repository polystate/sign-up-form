let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");

inputs.forEach((input, index) => {
  input.addEventListener("click", (e) => {
    labels.forEach((label) => {
      label.style = "text-decoration: none";
    });
    labels[index].style = "text-decoration: overline;";
  });
});
