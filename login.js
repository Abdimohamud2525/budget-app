const email = document.querySelector("#email");
const password = document.querySelector("#password");
const register = document.querySelector(".register");

const getusers = () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
};

const shoError = (input, message) => {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  small.style.visibility = "visible";
  small.innerHTML = message;
  input.style.border = "2px solid red";
};

const showSucces = (input) => {
  let parent = input.parentElement;
  input.style.border = "2px solid green";
};

const checkEmt = (elements) => {
  elements.forEach((element) => {
    if (element.value.trim() === "") {
      shoError(element, "This field is required!");
    } else {
      showSucces(element, "");
    }
  });
};

const checkLogin = (input) => {
  let email = input[0];
  let password = input[1];

  checkEmt([email, password]);

  let data = getusers();

  let user = data.find((u) => u.email === email.value);

  console.log(user);

  if (!user) {
    shoError(email, "Invalid email or password!");
    shoError(password, "");
  } else {
    if (email.value !== user.email || password.value !== user.password) {
      shoError(email, "Invalid email or password!");
      shoError(password, "");
    } else {
      // save user name in localStorage
      localStorage.setItem("user_name", user.name);
      // Redirect to the next page
      window.location.href = "/bugetIndex.html";
    }
  }
};

register.addEventListener("click", (e) => {
  e.preventDefault();
  checkEmt([email, password]);
  //   chekPasswordLength(password, 6, 10);
  checkLogin([email, password]);
});
