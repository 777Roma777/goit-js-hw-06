const loginForm = document.querySelector(".login-form");
// console.log(loginForm);
// console.dir(loginForm);
loginForm.addEventListener("submit", e => {
  e.preventDefault();

  const inputEmail = loginForm.elements.email;
  const inputPassword = loginForm.elements.password;

  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {
      email: inputEmail.value,
      password: inputPassword.value,
    };

    console.log(formData);
    loginForm.reset();
  }
});
