// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var Config = {
    apiKey: "AIzaSyCfkN6BAGdfz_lR0TngffCPS2ivbM4GKgw",
    authDomain: "hopper-54bd1.firebaseapp.com",
    databaseURL: "https://hopper-54bd1-default-rtdb.firebaseio.com/",
    projectId: "hopper-54bd1",
    storageBucket: "hopper-54bd1.appspot.com",
    messagingSenderId: "1041547804099",
    appId: "1:1041547804099:web:8779786c0f7231cf5a1176",
    measurementId: "G-0DZ08GJ3MR"
    /*apiKey: "AIzaSyBvUFxfwxdcNzCwitn4Q99xi0RRmc8Qmcs",
    authDomain: "jumpervoiture.firebaseapp.com",
    databaseURL: "https://jumpervoiture-default-rtdb.firebaseio.com/",
    projectId: "jumpervoiture",
    storageBucket: "jumpervoiture.appspot.com",
    messagingSenderId: "839526889386",
    appId: "1:839526889386:web:5928943038bf3e8aff9dd3",
    measurementId: "G-TRTFWKPBJR"*/
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

// reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e){ 
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var  phone = getInputVal('phone');
    var message = getInputVal('message');
    var cv = getInputVal('cv');
    
    //save message
    saveMessage(name, email, phone,message, cv)

    

    //console.log(name);

}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save messages to firebase
function saveMessage(name, email, phone, message, cv){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
        cv : cv
    });

}