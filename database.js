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
const database = firebase.database();
let staffCount = 0;
let clientCount = 0;

let staffAddCounter = 1;
let clientAddCounter = 1;

database.ref("addCounter").on("value" , function(snapshot) {
    snapshot.forEach(function (element) {
        if (element.key === "clients")
            clientAddCounter = element.val();
        else
            staffAddCounter = element.val();
    });
});

database.ref("count").on("value" , function(snapshot) {
    snapshot.forEach(function (element) {
        if (element.key === "clients")
            clientCount = element.val();
        else
            staffCount = element.val();
    });
});

function saveClients() {
    let entryName = document.getElementById('name').value;
    let entryEmail = document.getElementById('email').value;
    let entryPhone = document.getElementById('phone').value;
    let entryAddress = document.getElementById('address').value;
    let entryServiceFood = document.getElementById('food').checked;
    let entryServiceShelter = document.getElementById('shelter').checked;
    let entryServiceSupplies = document.getElementById('supplies').checked;

    firebase.database().ref("clients/c" + clientAddCounter).set({
        Name: entryName,
        Email: entryEmail,
        Phone: entryPhone,
        Address: entryAddress,
        ServiceFood: entryServiceFood,
        ServiceShelter: entryServiceShelter,
        ServiceSupplies: entryServiceSupplies
    })
    clientCount += 1;
    clientAddCounter += 1;


    database.ref("count").set({
        clients: clientCount,
        staff: staffCount
    })

    database.ref("addCounter").set({
        clients: clientAddCounter,
        staff: staffAddCounter
    })

    alert('Saved new client.');
}

function saveStaff(){
    // Adds new entry to the database, can also be used to update entries
    let entryName = document.getElementById('Stfname').value;
    let entryAddress = document.getElementById('Stfadd').value;
    let entryEmail = document.getElementById('stfemail').value;
    let entryPhone = document.getElementById('StfPhone').value;
    let entryAge = document.getElementById('Stfage').value;
    let entryDepartment = document.getElementById('Stfdep').value;

    firebase.database().ref("staff/s" + staffAddCounter).set({
        Name: entryName,
        Address: entryAddress,
        Email: entryEmail,
        Phone: entryPhone,
        Age: entryAge,
        Department: entryDepartment
    });

    staffCount += 1;
    staffAddCounter += 1;

    database.ref("count").set({
        clients: clientCount,
        staff: staffCount
    })

    database.ref("addCounter").set({
        clients: clientAddCounter,
        staff: staffAddCounter
    })

    alert('Saved new staff member.');
}




