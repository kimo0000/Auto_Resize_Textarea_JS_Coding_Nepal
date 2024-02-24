const textareaEl = document.querySelector("textarea");

textareaEl.addEventListener("keyup", (e) => {
  textareaEl.style.height = "65px";
  let scArea = e.target.scrollHeight;
  textareaEl.style.height = scArea + "px";
});
