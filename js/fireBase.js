// const {
//     isAbsolute
// } = require("node:path");

const firebaseConfig = {
    apiKey: "AIzaSyAwtkgE-ZlBNziw_L3M3Dx7qbwGKEpU6Zg",
    authDomain: "open-garden-culturehub-01.firebaseapp.com",
    databaseURL: "https://open-garden-culturehub-01-default-rtdb.firebaseio.com",
    projectId: "open-garden-culturehub-01",
    storageBucket: "open-garden-culturehub-01.appspot.com",
    messagingSenderId: "487535215995",
    appId: "1:487535215995:web:c3088a48be043d8e3a29de",
    measurementId: "G-45T58ERELY"
};

//Setup firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("/alt-text-input");
const reminderdb = firebase.database().ref("/email-for-reminder");
const rtCursordb = firebase.database().ref("/cursorPos");
let myUserId;
let myCursorRef;

// ****** WRITE alt-text input to firebase
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var nowTime = today.getHours() + ':' + today.getMinutes();
var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
var nowTimeTag = today.toLocaleString('sv', {
    timeZoneName: 'short'
});

function submitText() {
    //Get text from DOM
    let textContainerElement = document.getElementById("at-input");
    let textToSubmit = "[" + nowTimeTag + "] " + textContainerElement.value;
    //Get key from firebase4
    let newKey = db.push().key;
    //Create dictionary with updates
    let updates = {};
    updates[newKey] = textToSubmit;
    //Push to repo
    db.update(updates);
    //scrollbar update
    altTextBody.scrollTop = altTextBody.scrollHeight;
}
document
    .getElementById("at-input-send")
    .addEventListener("click", () => submitText());



// ****** READ alt-text input from firebase
//One time ready 
db.once("value", snapshot => {
    document.getElementById("pop-up-alt-list").innerHTML = "";
    snapshot.forEach(snapshotChild => {
        let id = snapshotChild.key;
        // let value = "[" + timeZone + "] " +
        //     date + " " + nowTime + " : " + snapshotChild.val();
        let value = snapshotChild.val();
        //console.log("Child is" + id + value);
        addChildToDom(value);
    });
});
//Sync every new update 
db.on("child_added", data => {
    let id = data.key;
    let value = data.val();
    //So you just add that new thing
    //console.log("New thing added" + id + value);
    addChildToDom(value);
});

function addChildToDom(value) {
    let childNode = document.createElement("LI");
    childNode.innerHTML = value;
    document.getElementById("pop-up-alt-list").appendChild(childNode);
}

//update email database
function submitEmail() {
    //Get text from DOM

    var check_wr = document.getElementById('check-wr').checked;
    var check_pu = document.getElementById('check-pu').checked;
    let emailContainerElement = document.getElementById("email-setup");
    let emailToSubmit = {
        "date": date + " " + nowTime,
        "weekly reminder": check_wr,
        "project update": check_pu,
        "email": emailContainerElement.value
    }
    //Get key from firebase
    let newEmailKey = reminderdb.push().key;
    // //Create dictionary with updates
    let email_Updates = {};
    email_Updates[newEmailKey] = emailToSubmit;
    // //Push to repo
    reminderdb.update(email_Updates);
    //update
    //alert("you submitted the email as: " + emailContainerElement.value);
    document.getElementById('reminder-send').textContent = 'check_circle_outline';

}
document
    .getElementById("reminder-send")
    .addEventListener("click", () => submitEmail());

//update cursor location 

//fetch current user mouse event
var current_xpos;
var current_ypos;

function fetchCursors(mouseEvent) {

    if (mouseEvent) {
        //FireFox
        current_xpos = mouseEvent.clientX;
        current_ypos = mouseEvent.clientY;
    } else {
        //IE
        current_xpos = window.event.clientX;
        current_ypos = window.event.clientY;
    }
}

//whenever you move you are sending cursor value
document.body.onmousemove = fetchCursors;

//trigger function on page load
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        //alert('i am loaded!');
        sendCursorCoor();
    }
}

function sendCursorCoor() {
    //Get key from firebase4
    let newCursorkey = rtCursordb.push().key;

    //set up an {user id, xpos, ypos}
    let userCursors = {
        "my_xpos": current_xpos,
        "my_ypos": current_ypos
    }
    //Create dictionary with updates
    let cursor_updates = {};
    cursor_updates[newCursorkey] = userCursors;
    //Push to repo
    rtCursordb.update(cursor_updates);
    console.log("user id: " + newCursorkey);

    //save a local reference of myself
    myUserId = newCursorkey;
    myCursorRef = firebase.database().ref("/cursorPos/" + myUserId);
    myCursorRef.onDisconnect().remove(); //remove myself when I'm disconnected

    //2 sec update
    setInterval(updateCursorCoor, 2000);
}

function updateCursorCoor() {

    if (myUserId) {
        let userCursors = {
            "my_xpos": current_xpos,
            "my_ypos": current_ypos
        }
        //Create dictionary with updates
        let cursor_updates = {};
        cursor_updates[myUserId] = userCursors;
        //Push to repo
        rtCursordb.update(cursor_updates);
        //console.log("i update!")
    }
}

//when any new value is received, udpate the content
rtCursordb.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    //create new div for new mouse and append to "screenCoords"
    document.getElementById('screenCoords').innerHTML = '';
    for (let k in data) {
        let d = data[k];
        let x = d.my_xpos;
        let y = d.my_ypos;
        //console.log(x, y);
        var newMouseDiv = document.createElement("div");
        //div style for other cursor position
        newMouseDiv.style.position = "absolute";
        newMouseDiv.style.width = "12px";
        newMouseDiv.style.height = "12px";
        newMouseDiv.style.left = x;
        newMouseDiv.style.top = y;
        newMouseDiv.style.backgroundColor = "#78ff82";
        newMouseDiv.style.opacity = "0.7";
        newMouseDiv.style.zIndex = "15";
        document.getElementById('screenCoords').append(newMouseDiv);
    }
});