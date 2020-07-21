const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "collectionUserScreen":
      document.getElementById("app").innerHTML = components.collectionUserScreen;
      model.loadCollectionCard();

      break;
    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen;
      const loginForm = document.getElementById("form-login");
      const loginBtn = document.getElementById("redirect-to-register");
      loginBtn.addEventListener("click", function () {
        view.setActiveScreen("registerScreen");
      });
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(loginInfo);
      });
      break;
      case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("form-register");
      const btn = document.getElementById("redirect-to-login");
      btn.addEventListener("click", function () {
        view.setActiveScreen("loginScreen");
      });
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const registerInfo = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        controller.register(registerInfo);
      });
      break;
  }
};
view.addCollection = (collection) => {
  const collectionWrapper = document.createElement("div");
  collectionWrapper.classList.add("collection-item");
  collectionWrapper.innerHTML = `    
    <p>${collection.collectionName}</p>
    <img src="../image/family_ilustration.png" alt="">`;
  const listCollection = document.querySelector(".list-collections-card");
  listCollection.appendChild = collectionWrapper;
};
