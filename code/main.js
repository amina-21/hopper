// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var Config = {
    apiKey: "AIzaSyBvUFxfwxdcNzCwitn4Q99xi0RRmc8Qmcs",
    authDomain: "jumpervoiture.firebaseapp.com",
    databaseURL: "https://jumpervoiture-default-rtdb.firebaseio.com/",
    projectId: "jumpervoiture",
    storageBucket: "jumpervoiture.appspot.com",
    messagingSenderId: "839526889386",
    appId: "1:839526889386:web:5928943038bf3e8aff9dd3",
    measurementId: "G-TRTFWKPBJR"
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