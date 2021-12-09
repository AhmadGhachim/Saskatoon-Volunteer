// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyCCYDb16UPC6WEnJc08Jegk026CKVtHykU",
    authDomain: "project-d7d80.firebaseapp.com",
    databaseURL: "https://project-d7d80-default-rtdb.firebaseio.com",
    projectId: "project-d7d80",
    storageBucket: "project-d7d80.appspot.com",
    messagingSenderId: "620442025289",
    appId: "1:620442025289:web:64139d5d8da3f90937ae98"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function saveClients() {
    let entryName =document.getElementById('name').value;
    let entryEmail = document.getElementById('email').value;
    let entryPhone = document.getElementById('Phone').value;
    let entryAddress = document.getElementById('address').value;
    let entryServiceFood = document.getElementById('food').value;
    let entryServiceShelter = document.getElementById('shelter').value;
    let entryServiceSupplies = document.getElementById('supplies').value;

    //let clientCount = document.getElementById("client").rows.length; // returns the number of current entries
    clientCount =1;


    firebase.database().ref("clients/c" + (clientCount + 1)).set({
        Name: entryName,
        Email: entryEmail,
        Phone: entryPhone,
        Address: entryAddress,
        ServiceFood: entryServiceFood,
        ServiceShelter: entryServiceShelter,
        ServiceSupplies: entryServiceSupplies
    })

    alert('Saved')
}


function saveStaff(){

    // Adds new entry to the database, can also be used to update entries
    let entryName = document.getElementById('Stfname').value;
    let entryAddress = document.getElementById('Stfadd').value;
    let entryEmail = document.getElementById('stfemail').value;
    let entryPhone = document.getElementById('StfPhone').value;
    let entryAge = document.getElementById('Stfage').value;
    let entryDepartment = document.getElementById('Stfdep').value;

    //let staffCount = document.getElementById("staff").rows.length; // returns the number of current entries
    let staffCount = 2;

    firebase.database().ref("staff/s" + (staffCount + 1)).set({
        Name: entryName,
        Address: entryAddress,
        Email: entryEmail,
        Phone: entryPhone,
        Age: entryAge,
        Department: entryDepartment
    });

    alert('Saved');
}




// function get() {
//     var username = document.getElementById('username').value
//
//     var user_ref = database.ref('users/' + username)
//     user_ref.on('value', function(snapshot) {
//         var data = snapshot.val()
//
//         alert(data.email)
//
//     })
//
// }
//
// function update() {
//     var username = document.getElementById('username').value
//     var email = document.getElementById('email').value
//     var password = document.getElementById('password').value
//
//     var updates = {
//         email : email,
//         password : password
//     }
//
//     database.ref('users/' + username).update(updates)
//
//     alert('updated')
// }
//
function removeStaff() {

    database.ref('Staff/s').remove()

    alert('deleted')
}

