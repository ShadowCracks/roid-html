const eye = document.querySelectorAll(".eye");

if (eye.length > 0) {
  eye.forEach((item) => {
    item.addEventListener("click", () => {
      const parentDiv = item.parentElement;
      const passwordInput = parentDiv.querySelector("input");
      togglePasswordVisibility(passwordInput, item.querySelector("img"));
    });
  });

  function togglePasswordVisibility(pw, icon) {
    if (pw.type === "password") {
      pw.type = "text";
      icon.src = "images/icon-eye-off.svg";
      icon.alt = "Eye Closed Icon";
    } else {
      pw.type = "password";
      icon.src = "images/icon-eye-on.svg";
      icon.alt = "Eye Icon";
    }
  }
}
