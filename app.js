const form = document.querySelector("form");
const usernameinput = document.getElementById("username");
const passwordinput = document.getElementById("password");
const submitButton = document.getElementById("submit");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // توقف فرم
  const usernamevalue = usernameinput.value.trim();
  const passwordvalue = passwordinput.value.trim();

  submitButton.disabled = true;

  if (usernamevalue === "") {
    submitButton.disabled = false;
    return false;
  } else if (usernamevalue.length === 11) {
    alert(" طول این فیلد باید 11 رقم باشد");
    return false;
  }

  if (passwordvalue === "") {
    submitButton.disabled = false;
    return false;
  }

  location.href = "about.html";
  submitButton.disabled = true;
  return true;
});
