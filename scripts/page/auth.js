const signUpBtnOverlay = document.getElementById("signUpOver");
const signInBtnOverlay = document.getElementById("signInOver");
const container = document.getElementById("auth-container");

const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
//Sign Up
let emailInputSignUp = document.getElementById("EmailSignUp");
let passwordInputSignUp = document.getElementById("PasswordSignUp");
let firstNameInputSignUp = document.getElementById("FirstNameSignUp");
let lastNameSignUp = document.getElementById("LastNameSignUp");
let dateOfBirthSignUp = document.getElementById("DateOfBirthSignUp");
let addressSignUp = document.getElementById("AddressSignUp");
//Sign In
let emailInputSignIn = document.getElementById("EmailSignIn");
let passwordInputSignIn = document.getElementById("PasswordSignIn");
// регистрация
function singUp() {
  sessionStorage.removeItem("StateAuth");
  Customers.push(
    new Customer(
      Customers.length + 1,
      emailInputSignUp.value,
      passwordInputSignUp.value,
      firstNameInputSignUp.value,
      lastNameSignUp.value,
      dateOfBirthSignUp.value,
      addressSignUp.value
    )
  );
  for (let i = 0; i < Customers.length; i++) {
    if (
      emailInputSignUp.value == Customers[i].Email &&
      passwordInputSignUp.value == Customers[i].Password
    ) {
      sessionStorage.setItem("CurrentUser", JSON.stringify(Customers[i]));
      document.location.href = "/index.html";
    }
  }
}
// авторизация
function singnIn() {
  sessionStorage.removeItem("StateAuth");
  for (let i = 0; i < Customers.length; i++) {
    if (
      emailInputSignIn.value == Customers[i].Email &&
      passwordInputSignIn.value == Customers[i].Password
    ) {
      sessionStorage.setItem("CurrentUser", JSON.stringify(Customers[i]));

      document.location.href = "/index.html";
    } else {
      modaldialog.style.display = "block";
      document.getElementById("dialog-message").innerHTML = "The user does not exist, check the entered data.";
    }
  }
}

signUpBtn.addEventListener("click", () => {
  singUp();
});
signInBtn.addEventListener("click", () => {
  singnIn();
});
// просмотр регистрации
signUpBtnOverlay.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
// просмотр авторизации
signInBtnOverlay.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

if (sessionStorage.getItem("StateAuth") == "SignUp") {
  container.classList.add("right-panel-active");
} else if (sessionStorage.getItem("StateAuth") == "SignIn") {
  container.classList.remove("right-panel-active");
}
