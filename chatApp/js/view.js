const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
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
    case 'chatScreen':
      document.getElementById('app').innerHTML = components.chatScreen
      const sendMessageForm = document.querySelector('#sendMessageForm')
      sendMessageForm.addEventListener('submit', (e) => {
        e.preventDefault()
        // const message = {
        //   owner: model.currentUser.email,
        //   content: sendMessageForm.message.value
        // }
        // const messageFromBot = {
        //   owner: 'Bot',
        //   content: sendMessageForm.message.value
        // }
        // if (sendMessageForm.message.value.trim() !== '') {
        //   view.addMessage(message)
        //   view.addMessage(messageFromBot)
        // }
  //       const docIdUpdate = 'BKKQ1fi1r2VInfHJfTRc'
  //       const dataToUpdate = {
  //         content: firebase.firestore.FieldValue.arrayUnion(`${sendMessageForm.message.value}`),
  //         createdAt: firebase.firestore.FieldValue.arrayUnion(`${Date().toString()}`),
  //         owner: firebase.firestore.FieldValue.arrayUnion(`${model.currentUser.email}`)
  // }
  // firebase.firestore().collection('a').doc(docIdUpdate).update(dataToUpdate).then (res =>{
  //   alert('Updated')
  // })
        sendMessageForm.message.value = ''
        
      })
      model.loadConversations()
      break
  }
};

view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message;
};
view.addMessage = (message) => {
  const messageWrapper = document.createElement('div')
  messageWrapper.classList.add('message')
  if(model.currentUser.email === message.owner){
    messageWrapper.classList.add('mine')
    messageWrapper.innerHTML = `
    <div class="content">${message.content}</div>
    `
  } else{
    messageWrapper.classList.add('their')
    messageWrapper.innerHTML= `
    <div class="owner">${message.owner}</div>
    <div class="content">${message.content}</div>
    `
  }
  const listMessage = document.querySelector('.list-message')
  listMessage.appendChild(messageWrapper)
  listMessage.scrollTop = listMessage.scrollHeight;
};

view.showCurrentConversation = () =>{
  for(let oneMessage of model.currentConversation.messages){
    view.addMessage(oneMessage)
  }
}