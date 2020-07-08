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
    case "chatScreen":
      document.getElementById("app").innerHTML = components.chatScreen;
      const sendMessageForm = document.querySelector("#sendMessageForm");
      sendMessageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = {
            content: sendMessageForm.message.value,
            createdAt: new Date().toISOString(),
            owner: model.currentUser.email
        }
        // const messageFromBot = {
        //   owner: 'Bot',
        //   content: sendMessageForm.message.value
        // }
        if (sendMessageForm.message.value.trim() !== '') {
          model.addMessage(message)
          // view.addMessage(messageFromBot)
        }
       
        sendMessageForm.message.value = "";
      });
      model.loadConversations();
      model.listenConversationsChange()
      break;
  }
};

view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message;
};
view.addMessage = (message) => {
  const messageWrapper = document.createElement("div");
  messageWrapper.classList.add("message");
  if (model.currentUser.email === message.owner) {
    messageWrapper.classList.add("mine");
    messageWrapper.innerHTML = `
    <div class="content">${message.content}</div>
    `;
  } else {
    messageWrapper.classList.add("their");
    messageWrapper.innerHTML = `
    <div class="owner">${message.owner}</div>
    <div class="content">${message.content}</div>
    `;
  }
  const listMessage = document.querySelector(".list-message");
  listMessage.appendChild(messageWrapper);
  listMessage.scrollTop = listMessage.scrollHeight;
};
view.showCurrentConversation = () => {
  for (let oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage);
  }
};
view.showConversations = () =>{
  for(oneConversation of model.conversations){
    view.addConversation(oneConversation)
  }
}
view.addConversation = (conversation) =>{
  const conversationWrapper = document.createElement('div')
  conversationWrapper.classList.add('conversation')
  if(conversation.id === model.currentConversation.id){
    conversationWrapper.classList.add('current')
  }
  conversationWrapper.innerHTML = `
  <div class = conversation-title">${conversation.title}</div>
  <div class = conversation-num-users">${conversation.users.length} users</div>
  `
  document.querySelector('.list-conversations').appendChild(conversationWrapper)
  conversationWrapper.addEventListener('click', ()=> {
    model.currentConversation = conversation
    // console.log(conversationWrapper)
    const conversationList = document.querySelectorAll(".conversation")
    for (let i = 0; i < conversationList.length; i++){
      conversationList[i].classList.remove('current')
    }
    conversationWrapper.classList.add('current')
    const conversationTitle = document.querySelector(".conversation-title")
    conversationTitle.innerHTML = `${conversation.title}`
    const listMessage = document.querySelector(".list-message")
    listMessage.innerHTML = ''
    view.showCurrentConversation()
  })  
}


