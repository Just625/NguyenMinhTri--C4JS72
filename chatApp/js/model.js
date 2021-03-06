const model = {};
model.currentUser = undefined;
model.collectionName = "conversations";
model.currentConversation = undefined;
model.conversations = undefined;
model.register = (firstName, lastName, email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);

      firebase.auth().currentUser.sendEmailVerification();
      firebase.auth().currentUser.updateProfile({
        displayName: firstName + " " + lastName,
      });
      alert(
        "Register success, please check your email now or you can wait a bit :v"
      );
      view.setActiveScreen("loginScreen");
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
};

model.login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      if (user.user.emailVerified) {
        model.currentUser = {
          displayName: user.user.displayName,
          email: user.user.email,
        };
        view.setActiveScreen("chatScreen");
      } else {
        alert("Please verify your email");
      }
    })
    .catch((err) => {
      alert(err.message);
    });
};

model.loadConversations = () => {
  firebase
    .firestore()
    .collection(model.collectionName)
    .where("users", "array-contains", model.currentUser.email)
    .get()
    .then((res) => {
      const data = utils.getDataFromDocs(res.docs);
      model.conversations = data;
      if (data.length > 0) {
        model.currentConversation = data[0];
        view.showCurrentConversation();
      }
      view.showConversations();
    });
};

model.addMessage = (message) => {
  const dataToUpdate = {
    messages: firebase.firestore.FieldValue.arrayUnion(message),
  };
  if (sendMessageForm.message.value.trim() !== "") {
    firebase
      .firestore()
      .collection(model.collectionName)
      .doc(model.currentConversation.id)
      .update(dataToUpdate);
    // .then((res) => {
    //    alert("Updated");
    // });
  }
};

model.listenConversationsChange = () => {
  let isFirstRun = false;
  firebase
    .firestore()
    .collection(model.collectionName)
    .where("users", "array-contains", model.currentUser.email)
    .onSnapshot((res) => {
      if (!isFirstRun) {
        isFirstRun = true;
        return;
      }
      const docChanges = res.docChanges();
      console.log(docChanges);
      for (oneChange of docChanges) {
        const type = oneChange.type;
        const oneChangeData = utils.getDataFromDoc(oneChange.doc);
        if (type === "modified") {
          console.log(oneChangeData);
          if (oneChangeData.id === model.currentConversation.id) {
            //Nếu như them tin nhắn mới
            if (
              oneChangeData.users.length ===
              model.currentConversation.users.length
            ) {
              view.addMessage(
                oneChangeData.messages[oneChangeData.messages.length - 1]
              );
            } else {
              // Thêm users mới
              view.addUser(oneChangeData.users[oneChangeData.users.length - 1]);
            }
            model.currentConversation = oneChangeData;
          }
          for (let i = 0; i < model.conversations.length; i++) {
            const element = model.conversations[i];
            if (element.id === oneChangeData.id) {
              model.conversations[i] = oneChangeData;
              if (
                oneChangeData.messages[oneChangeData.messages.length - 1]
                  .owner !== model.currentUser.email
              ) {
                view.showNotify(oneChangeData.id);
              }
            }
          }
          // console.log(model.conversations);
        } else if (type === "added") {
          // console.log(oneChangeData);
          model.conversations.push(oneChangeData);
          view.addConversation(oneChangeData);
          view.showNotify(oneChangeData.id);
        }
      }
    });
};
model.changeCurrentConversation = (conversationId) => {
  //Cach 1: dung ham for
  // for (conversation of model.conversations){
  //   if (conversation.id == conversationId) {
  //     model.currentConversation = conversation
  //   }
  // }
  //Cach 2 : dung filter
  model.currentConversation = model.conversations.filter(
    (item) => item.id == conversationId
  )[0];
  // console.log(model.conversations.
  //   filter((item) => item.id == conversationId)[0])
  view.showCurrentConversation();
};

model.createConversation = (newConversation) => {
  firebase.firestore().collection(model.collectionName).add(newConversation);
  view.backToChatScreen();
};

model.addUser = (email) => {
  const dataToUpdate = {
    users: firebase.firestore.FieldValue.arrayUnion(email),
  };
  firebase
    .firestore()
    .collection(model.collectionName)
    .doc(model.currentConversation.id)
    .update(dataToUpdate);
};
