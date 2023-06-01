import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase,} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js'
import { getAuth, createUserWithEmailAndPassword,} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js'
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

let submitBtn = document.querySelector('.register')
  const register = async() => {
    const signUpEmail = document.querySelector('.email').value
    const signUpPassword = document.querySelector('.password').value
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Your account has been created!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + errorMessage)
    })
}

submitBtn.addEventListener('click', register)