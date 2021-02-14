import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyBd3Q49gjehP2o9Q7cBUl4YZ8v5_nPyOfU",
    authDomain: "servicodecampo-59a70.firebaseapp.com",
    databaseURL: "https://servicodecampo-59a70-default-rtdb.firebaseio.com",
    projectId: "servicodecampo-59a70",
    storageBucket: "servicodecampo-59a70.appspot.com",
    messagingSenderId: "1013550680971",
    appId: "1:1013550680971:web:13090fae1f58d203fc3d8e"
  }
  // Initialize Firebase
  if(!firebase.app.legth){
  firebase.initializeApp(firebaseConfig)
  }
  
  export default firebase