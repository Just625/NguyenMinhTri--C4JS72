window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyC-DhkJCtONk7LIZR0TyeFtNzMRJZARWr0",
    authDomain: "test-79dbd.firebaseapp.com",
    databaseURL: "https://test-79dbd.firebaseio.com",
    projectId: "test-79dbd",
    storageBucket: "test-79dbd.appspot.com",
    messagingSenderId: "166162701828",
    appId: "1:166162701828:web:339e8916b698c2f5039f51",
    measurementId: "G-E6GW5FST6Q",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email,
        };
        view.setActiveScreen("chatScreen");
      } else {
        view.setActiveScreen("loginScreen");
      }
    } else {
      view.setActiveScreen("loginScreen");
    }
  });
};
