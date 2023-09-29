function changeTheme() {
  let body = document.querySelector("body");
  //let footer = document.querySelector("footer");
  if (body.classList.contains("funky-theme")) {
    body.classList.remove("funky-theme");
    themeButton.innerHTML = "Funky theme";
    //footer.classList.remove("container");
  } else {
    body.classList.add("funky-theme");
    themeButton.innerHTML = "Standard theme";
    //footer.classList.add("container");
  }
}

function flavorQuiz() {
  let name = prompt("What is your name ?");
  let email = prompt("What is your email address ?");
  alert(`Thanks ${name} ! We will email you the quiz shortly ! 🍧`);
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

let flavorButton = document.querySelector(".flavor-button");
flavorButton.addEventListener("click", flavorQuiz);
