const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const register = document.querySelector(".register");

const getusers = () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
};

const getId = () => {
  let id = "users" + Math.random().toString(16).slice(2);
  return id;
};

const chekPasswordLength = (input, min, max) => {
  const length = input.value.length;
  if (length < min || length > max) {
    shoError(input, `Password must be between ${min} and ${max} characters`);
  } else {
    showSucces(input);
  }
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
      shoError(element, "Please enter a valid element name");
    } else {
      showSucces(element);
    }
  });
};

const addLocalStorage = (user) => {
  // lets check if users is emt
  checkEmt([name, email, password]);
  let data = getusers();
  let userExists = data.find((user) => user.email === email.value);

  if (userExists) {
    shoError(email, "email is already exists");
  } else if (!userExists) {
    if (
      name.value.trim() !== "" &&
      email.value.trim() !== "" &&
      password.value.trim()
    ) {
    }
    let user = {
      id: getId(),
      name: name.value,
      email: email.value,
      password: password.value,
    };
    let users = getusers();

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    name.value = "";
    email.value = "";
    password.value = "";
    window.location.href = "/login.html";
  }
};

register.addEventListener("click", (e) => {
  e.preventDefault();
  checkEmt([name, email, password]);
  chekPasswordLength(password, 6, 10);
  addLocalStorage([name, email, password]);
});
