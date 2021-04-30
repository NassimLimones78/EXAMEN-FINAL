//SignUp
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit' , (e) => {
  e.preventDefault();

  const email = document.querySelector('#signup-email').value;
  const password = document.querySelector('#signup-password').value;


  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {

      //clear the form
      signupForm.reset();

      //close the modal
      $('#signupModal').modal('hide')

      console.log('sign up')
    })
});

//Signin
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit' , (e) => {
  e.preventDefault();
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;

  console.log('email, password');

  auth
  .signInWithEmailAndPassword(email, password)
  .then(userCredential => {

    //clear the form
    signupForm.reset();

    //close the modal
    $('#signupModal').modal('hide')

    console.log('sign in')
  })
});

//Logout
const logout = document.querySelector('#logout');

logout.addEventListener('click' , (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
  console.log('sign out')  
  })
})  

//Google Login
const googleButton = document.querySelector('#googleLogin');
googleButton.addEventListener('click' , (e) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then(result => {
    console.log('google sign in')
  })

  });

//Facebook Login
const facebookButton = document.querySelector('#facebookLogin');
facebookButton.addEventListener('click' , (e) => {
  e.preventDefault();
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
  .then(result => {
    console.log('Facebook sign in')
  })
});

//Twitter Login
let twitlog = document.querySelector('#twitterLogin');
twitlog.addEventListener('click' , (e) => {
var provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = credential.accessToken;
    var secret = credential.secret;

    // The signed-in user info.
    var user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
});
//Yahoo Login
let yahoolog = document.querySelector('#yahooLogin');
yahoolog.addEventListener('click' , (e) => {
var provider = new firebase.auth.OAuthProvider('yahoo.com');

  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    // IdP data available in result.additionalUserInfo.profile
    // ...

    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;

    // Yahoo OAuth access token and ID token can be retrieved by calling:
    var accessToken = credential.accessToken;
    var idToken = credential.idToken;
  })
  .catch((error) => {
  })
});

const db = firebase.firestore();

// Añadir, Editar y Borrar
const taskForm = document.getElementById("task-form");
const taskScore = document.getElementById("task-score");
const tasksContainer = document.getElementById("tasks-container");
let editStatus = false;
let id = '';
/**
 * Save a New Task in Firestore
 * @param {string} name the title of the Task
 * @param {string} country the description of the Task
 */
const saveTask = (name, score, country) =>
  db.collection("Puntos").doc().set({
    name,
    score,
    country,
  });
let getTasks = () => db.collection("Puntos").orderBy("desc").limit(5).get();
let onGetTasks = (callback) => db.collection("Puntos").onSnapshot(callback);
let getTask = (id) => db.collection("Puntos").doc(id).get();
window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      var task = doc.data();
      tasksContainer.innerHTML += `<div class="card card-body mt-2">
    <h3 class="h5">${task.name}</h3>
    <p>${task.score}</p>
    <p>${task.country}</p>
    
  </div>`;
    });
  });
});
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = taskForm["task-title"];
  const score = taskForm["task-score"];
  const country = taskForm["task-description"];
  try {
    if (!editStatus) {
      await saveTask(name.value, score.value, country.value);
    } else {

      taskForm['btn-task-form'].innerText = 'Añadir';
    }
    taskForm.reset();
    name.focus();
  } catch (error) {
    console.log(error);
  }
});

