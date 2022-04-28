/*Overline for userClick on Input*/

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

/*Adjust Input Label to Change to Phone upon Screen Shrink*/

const labelAdjust = (index, viewportW, newText, original) => {
  const label = document.querySelectorAll("label")[index];
  window.innerWidth <= viewportW
    ? (label.innerHTML = newText)
    : (label.innerHTML = original);
};

const placeholderAdjust = (index, viewportW, newText, original) => {
  if (window.innerWidth <= viewportW) {
    inputs[index].placeholder = newText;
    inputs[index].style = "text-align: center";
    return;
  }
  inputs[index].placeholder = original;
  inputs[index].style = "text-align: left";
};

window.addEventListener("resize", function () {
  placeholderAdjust(2, 875, "E-Mail", "example@gmail.com");
  placeholderAdjust(3, 875, "Number", "(###)-###-###");
  placeholderAdjust(5, 875, "Password", "Confirm Password");
  labelAdjust(3, 795, "PHONE", "PHONE NUMBER");
  labelAdjust(0, 710, "FIRST", "FIRST NAME");
  labelAdjust(1, 710, "LAST", "LAST NAME");
});

/*Media Query Testing*/

const leftImage = document.querySelectorAll("img")[1];
leftImage.addEventListener("mouseover", function () {
  leftImage.setAttribute("title", window.innerWidth);
});
