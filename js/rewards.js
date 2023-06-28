function signInBtn() {
  window.location.href = "signIn.html";
}
document.addEventListener("DOMContentLoaded", function () {
  var signupLink = document.querySelector(".signup-link");
  var loginLink = document.querySelector(".login-link");
  var signupDiv = document.querySelector(".sing-id");
  var loginDiv = document.querySelector(".log-id");
  var password = document.querySelectorAll(".eye-icon");
  console.log(password);

  password.forEach((eye) => {
    eye.addEventListener("click", () => {
      let getPawInput = eye.parentElement.querySelector(".Password");
      console.log(getPawInput);
      let textContentPass = document.querySelector(".text-content-pass");
      let pass1 = document.querySelector(".pas1").value;
      let pass2 = document.querySelector(".pas2").value;
      console.log(pass1);
      console.log(pass2);
      if (password.length != 0) {
        if (pass1 == pass2) {
          //   textContentPass.innerHTML = `Password  match`;
        } else {
          textContentPass.innerHTML = `Password doesn't match`;
        }
      }
      if (getPawInput.type === "password") {
        getPawInput.type = "text";

        eye.classList.replace("bi-eye-slash", "bi-eye");
      } else {
        getPawInput.type = "password";
        eye.classList.replace("bi-eye", "bi-eye-slash");
      }
    });
  });

  signupLink.addEventListener("click", function (e) {
    e.preventDefault();
    signupDiv.style.opacity = "1";
    signupDiv.style.pointerEvents = "auto";

    // loginDiv.remove();
    loginDiv.style.opacity = "0";
    loginDiv.style.pointerEvents = "none";
  });

  loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginDiv.style.opacity = "1";
    loginDiv.style.pointerEvents = "auto";

    signupDiv.style.opacity = "0";
    signupDiv.style.pointerEvents = "none";
  });
});
