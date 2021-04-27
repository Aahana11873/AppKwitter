
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgL6Th5tZoWAiUd0bti9wilzJSeADTmv0",
    authDomain: "kwitter-b9c56.firebaseapp.com",
    databaseURL: "https://kwitter-b9c56-default-rtdb.firebaseio.com",
    projectId: "kwitter-b9c56",
    storageBucket: "kwitter-b9c56.appspot.com",
    messagingSenderId: "770725006515",
    appId: "1:770725006515:web:eb035be8913212d7d634c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
      purpose:"adding user name"
      });
      localStorage.setItem("user_name",user_name);
  }