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
  //
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email,
        };
        view.setActiveScreen("chatScreen");
      }
    } else {
      view.setActiveScreen("loginScreen");
    }
  });
};
// templateQueryDatabase = () =>{
//   const docId = 'oSVDl7gVcHKjOaeEU4S9'
//get one
// firebase.firestore().collection('a').doc(docId).get().then(res => {
//   console.log(getDataFromDoc(res))
// }).catch(err =>{
//   console.log(err)
// })

//get many
// firebase.firestore().collection('a').where('age','==',20).get().then(res =>{
//   console.log(res)
//   // console.log(getDataFromDoc(res.docs[0]))
//   console.log(getDataFromDocs(res.docs))
// })

//Create
// const dataToCreate = {
//   name: 'Create',
//   age: '18',
//   email: 'lskjflkajl@gmail.com',
//   phone: ['12312321']
// }
// firebase.firestore().collection('a').add(dataToCreate).then(res =>{
//   alert('Added')
// })

// update
// const docIdUpdate = 'Z9UvBF1uiW45DIHhPT7k'
// const dataToUpdate = {
//   name: 'Nguyen Van C',
//   phone: firebase.firestore.FieldValue.arrayUnion('12938109830192'),
//   email: 'aklsjdlaksj@gmail.com'
// }
// firebase.firestore().collection('a').doc(docIdUpdate).update(dataToUpdate).then (res =>{
//   alert('Updated')
// })

//delete
// const docIdDelete = '3zcBJp7A77F9Lqh5jW6E'

// firebase.firestore().collection('conversations').doc(docIdDelete).delete().then(res =>{
//   alert('Deleted')
// })
// }
