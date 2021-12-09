const firebaseConfig = {
    apiKey: "AIzaSyCCYDb16UPC6WEnJc08Jegk026CKVtHykU",
    authDomain: "project-d7d80.firebaseapp.com",
    databaseURL: "https://project-d7d80-default-rtdb.firebaseio.com",
    projectId: "project-d7d80",
    storageBucket: "project-d7d80.appspot.com",
    messagingSenderId: "620442025289",
    appId: "1:620442025289:web:64139d5d8da3f90937ae98"
};


const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

firebase.initializeApp(firebaseConfig);

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password1 = loginForm.password.value;
    let email = "admin@volunteersask.ca";
    let password = "admin123456";

    if (username === email && password1 === password) {
        let auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password)
            .then(function(){
                alert("Welcome admin!");
            })
            .catch(function(error){
                let error_code = error.code;
                let error_message = error.message;
                alert(error_message);
            });
    }
})

function signInWithEmailPassword() {
    var email = "admin@volunteersask.ca";
    var password = "admin123456";
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    // [END auth_signin_password]
}




