const model = {};
model.currentUser = undefined;
model.collectionName = "conversations";
model.currentConversations = undefined;
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
    .get()
    .then((res) => {
      const data = utils.getDataFromDocs(res.docs);
      console.log(data[0]);
      if (data.length > 0) {
        model.currentConversation = data[0];
        view.showCurrentConversation();
      }
      console.log(data);
    });
};

model.updateMessageToDB = (message) => {
  const docIdUpdate = "BKKQ1fi1r2VInfHJfTRc";
        const dataToUpdate = {
          messages: firebase.firestore.FieldValue.arrayUnion(message),
        };
        if (sendMessageForm.message.value.trim() !== "") {
          firebase
            .firestore()
            .collection(model.collectionName)
            .doc(docIdUpdate)
            .update(dataToUpdate)
            .then((res) => {
              alert("Updated");
            });
        }
}
