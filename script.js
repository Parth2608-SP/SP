const welcome = document.getElementById("welcome");
const message = document.getElementById("message");

document.getElementById("openMessage").addEventListener("click", () => {
  welcome.classList.add("hidden");
  message.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("back").addEventListener("click", () => {
  message.classList.add("hidden");
  welcome.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
