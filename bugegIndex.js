const userName = localStorage.getItem("user_name");
const welcomeMassage = document.querySelector("#welcome");
if (userName) {
  welcomeMassage.innerHTML = `${userName}`;
} else {
  welcomeMassage.innerHTML = `Welcome`;
}
