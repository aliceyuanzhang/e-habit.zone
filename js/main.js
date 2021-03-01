//show and hide about-page
function openAbout() {
    document.getElementById('pop-up-about').style.visibility = "visible";

};

function closeAbout() {
    document.getElementById('pop-up-about').style.visibility = "hidden";
};

//fetch countdown for run and close
const endtime_close = 'March 19 2021 00:00:00 GMT-08:00';
const endtime_run = "'March 21 2021 00:00:00 GMT-08:00'"

function getTimeRemaining(deadline) {
    const total = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

var countdown_close = document.getElementById('countdownClock_close');
var cd_close_days = getTimeRemaining(endtime_close).days;
var cd_close_hours = getTimeRemaining(endtime_close).hours;
var cd_close_mins = getTimeRemaining(endtime_close).minutes;

var countdown_run = document.getElementById('countdownClock_run');
var cd_run_days = getTimeRemaining(endtime_run).days;
var cd_run_hours = getTimeRemaining(endtime_run).hours;
var cd_run_mins = getTimeRemaining(endtime_run).minutes;

var day_unit = " days ";
var hour_unit = " hours ";
var min_unit = " minutes.";

//count down to close
function countdownClock_close() {
    countdown_close.innerHTML = "Next instruction closes in " + cd_close_days + day_unit + cd_close_hours + hour_unit + cd_close_mins + min_unit;
}
countdownClock_close();
setInterval(countdownClock_close, 10000);

//count down to run
function countdownClock_run() {
    countdown_run.innerHTML = "Next instruction runs in " + cd_run_days + day_unit + cd_run_hours + hour_unit + cd_run_mins + min_unit;
}
countdownClock_run();
setInterval(countdownClock_run, 10000);

//___________________________________________
//modify menu bottons
//
var firstButtonForm = document.getElementById('at-form')
var firstButtonInput = document.getElementById('at-input');
var firstButtonIcon = document.getElementById('at-input-send');
var restButtons = document.getElementsByClassName("restButtons");
var backButton = document.getElementById('choice-button-back');

//alt-text-section
function expandAltText(e) {
    firstButtonForm.classList.replace('dp-none', 'dp-flex');
    firstButtonInput.classList.replace('alt-text-input', 'alt-text-input-visible');
    firstButtonIcon.classList.replace('dp-none', 'dp-block');
    for (var i = 0; i < restButtons.length; i += 1) {
        restButtons[i].style.display = 'none';
    }
    backButton.style.display = "block";
    window.setTimeout(function () {
        firstButtonInput.classList.add('expandWidth');
    }, 20)
};

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

function pushAltText() {
    var inputContent = document.getElementById('at-input').value;
    console.log("You observed that " + inputContent + " at " + date)
}

//add instruction section
var etherPadContent = document.getElementById('pop-up-add-instruction');

function showEtherpad() {
    //show add-instruction content
    etherPadContent.classList.replace('dp-none', 'dp-block');
    //hide all the other buttons and show "back"
    for (var i = 0; i < restButtons.length; i += 1) {
        restButtons[i].style.display = 'none';
    }
    backButton.style.display = "block";
}

//add reminder section
var reminderContent = document.getElementById('pop-up-set-reminder');

function setReminder() {
    //show reminder content
    reminderContent.classList.replace('dp-none', 'dp-block');
    //hide all the other buttons and show "back"
    for (var i = 0; i < restButtons.length; i += 1) {
        restButtons[i].style.display = 'none';
    }
    backButton.style.display = "block";
}

function submitReminder() {
    alert("you submitted me!")
}

//back button

function backMain() {
    //hide alt-text functions
    firstButtonInput.classList.remove('expandWidth');
    firstButtonForm.classList.replace('dp-flex', 'dp-none');
    firstButtonInput.classList.replace('alt-text-input-visible', 'alt-text-input');
    firstButtonIcon.classList.replace('dp-block', 'dp-none');
    //hide add-instruction content
    etherPadContent.classList.replace('dp-block', 'dp-none');
    reminderContent.classList.replace('dp-block', 'dp-none')
    for (var i = 0; i < restButtons.length; i += 1) {
        restButtons[i].style.display = 'block';
    }
    backButton.style.display = "none";
}
//
//modify menu bottons
//___________________________________________


//music playing
var musicButtonPlay = document.getElementById('music-on');
var musicButtonPause = document.getElementById('music-off');

function musicToggleOn(e) {
    console.log('come some music');
    musicButtonPlay.style.display = "none";
    musicButtonPause.style.display = "block";
}

function musicToggleOff(e) {
    console.log('Shhh..');
    musicButtonPlay.style.display = "block";
    musicButtonPause.style.display = "none";
}