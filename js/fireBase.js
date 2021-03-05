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
const db = firebase.database().ref();

// ****** WRITE text to firebase
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var nowTime = today.getHours() + ':' + today.getMinutes();
var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function submitText() {
    //Get text from DOM
    let textContainerElement = document.getElementById("at-input");
    let textToSubmit = "[" + timeZone + "] " + date + " " + nowTime + " : " + textContainerElement.value;
    //Get key from firebase
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

// var altEnterKey = document.getElementById('at-input-send')

// altEnterKey.onkeydown = function (e) {
//     if (e.keyCode == 13) {
//         submitText();
//         console.log("you just submitted")
//     }
// };
// ****** READ text from firebase
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