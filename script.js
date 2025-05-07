const scriptURL =
  "https://script.google.com/macros/s/AKfycbyzIY1jF6OJ3ji-c9KHc7FwIAFG7ejCpww-yZ3YV2lfF0AqNQW8PqF6DCXVvbjm-b-A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const emailText = document.getElementById("emailText");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you For Subscribing.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
