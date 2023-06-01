import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js'
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js'
const firebaseConfig = {
  apiKey: "AIzaSyCTS3WMr5tm8MHA2c6cjnKJJ_U2BCwxGRw",
  authDomain: "quiz-app-ca0e1.firebaseapp.com",
  databaseURL: "https://quiz-app-ca0e1-default-rtdb.firebaseio.com",
  projectId: "quiz-app-ca0e1",
  storageBucket: "quiz-app-ca0e1.appspot.com",
  messagingSenderId: "420642536254",
  appId: "1:420642536254:web:721b99d1d2562bc3c98a6f",
  dataBaseUrl : "https://quiz-app-ca0e1-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)
// start
let signInBtn = document.querySelector('.sign-in-btn')


const userSignIn = async() => {
  event.preventDefault()
  const signInEmail = document.querySelector('.login-email').value
  const signInPassword = document.querySelector('.login-pass').value
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("You have signed in successfully!");
    window.location.href = "../pages/tests.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage)
  })
}

signInBtn.addEventListener('click', userSignIn);