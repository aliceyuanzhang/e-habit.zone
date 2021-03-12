function hideMain() {
    document.getElementById('main-section').style.visibility = "hidden";

}

window.onload = function () {
    hideMain();

}
//fetch countdown for run and close
const endtime_run = 'March 21 2021 00:00:00 GMT-08:00';

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

var countdown_run = document.getElementById('countdownClock_run');
var cd_run_days = getTimeRemaining(endtime_run).days;
var cd_run_hours = getTimeRemaining(endtime_run).hours;
var cd_run_mins = getTimeRemaining(endtime_run).minutes;

var day_unit = " days ";
var hour_unit = " hours ";
var min_unit = " minutes.";


//count down to run
function countdownClock_run() {
    countdown_run.innerHTML = "Instructions will run in " + cd_run_days + day_unit + cd_run_hours + hour_unit + cd_run_mins + min_unit;
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

//funds
var funds = document.getElementById('funds');
var donation_icon = document.getElementById('donation-icon')

function showFunds() {
    funds.style.display = "block";
}

function moveFunds() {
    funds.style.top = event.clientY + 40 + "px";
    funds.style.left = event.clientX - 100 + "px";
}

function hideFunds() {
    funds.style.display = "none";
}


donation_icon.addEventListener('mouseenter', showFunds);
donation_icon.addEventListener('mouseleave', hideFunds);
window.addEventListener('mousemove', moveFunds);

//hypertip
var hypertip = document.getElementById('hypertip');
var hypertip_icon = document.getElementById('hypertip-icon')

function showHypertip() {
    hypertip.style.display = "block";
}

function moveHypertip() {
    hypertip.style.top = event.clientY + 40 + "px";
    hypertip.style.left = event.clientX - 275 + "px";
}

function hideHypertip() {
    hypertip.style.display = "none";
}


hypertip_icon.addEventListener('mouseenter', showHypertip);
hypertip_icon.addEventListener('mouseleave', hideHypertip);
window.addEventListener('mousemove', moveHypertip);


//alt-text-section
var altTextContent = document.getElementById('pop-up-add-alt')
var altTextBody = document.querySelector('#pop-up-alt-list');

function expandAltText(e) {
    document.getElementById('main-section').style.visibility = "visible";
    altTextContent.classList.replace('dp-none', 'dp-block');
    //adjust scroll position
    altTextBody.scrollTop = altTextBody.scrollHeight;
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

//add instruction section
var etherPadContent = document.getElementById('pop-up-add-instruction');

function showEtherpad() {
    document.getElementById('main-section').style.visibility = "visible";
    //show add-instruction content
    etherPadContent.classList.replace('dp-none', 'dp-flex');
    //hide all the other buttons and show "back"
    for (var i = 0; i < restButtons.length; i += 1) {
        restButtons[i].style.display = 'none';
    }
    backButton.style.display = "block";
    backButton.classList.add('align-center');
    window.setTimeout(function () {
        backButton.classList.add('choice-back-expandWidth');
    }, 20)
}

//add reminder section
var reminderContent = document.getElementById('pop-up-set-reminder');

function setReminder() {
    document.getElementById('main-section').style.visibility = "visible";
    //show reminder content
    reminderContent.classList.replace('dp-none', 'dp-block');
    //hide all the other buttons and show "back"
    for (var i = 0; i < restButtons.length; i += 1) {
        restButtons[i].style.display = 'none';
    }
    backButton.style.display = "block";
    backButton.classList.add('align-center');
    window.setTimeout(function () {
        backButton.classList.add('choice-back-expandWidth');
    }, 20)
}

//back button
function backMain() {
    document.getElementById('main-section').style.visibility = "hidden";
    altTextContent.classList.replace('dp-block', 'dp-none');
    //hide alt-text functions
    firstButtonInput.classList.remove('expandWidth');
    firstButtonForm.classList.replace('dp-block', 'dp-none');
    firstButtonInput.classList.replace('alt-text-input-visible', 'alt-text-input');
    firstButtonIcon.classList.replace('dp-block', 'dp-none');
    //hide add-instruction content
    etherPadContent.classList.replace('dp-flex', 'dp-none');
    //hide reminder content
    reminderContent.classList.replace('dp-block', 'dp-none')

    document.getElementById('reminder-send').textContent = 'send';
    //bring back all the buttons
    for (var i = 0; i < restButtons.length; i += 1) {
        restButtons[i].style.display = 'block';
    }
    backButton.style.display = "none";
    window.setTimeout(function () {
        backButton.classList.remove('choice-back-expandWidth', 'align-center');
    }, 20)
}
//___________________________________________
//show and hide about-page

var about_openButton = document.getElementById('about-icon-wrapper');
var about_fullPage = document.getElementById('pop-up-about');
var about_closeButton = document.getElementById('close-icon-wrapper');
var hyperdriveButton = document.getElementById('hypertip-icon');
var musicButtons = document.getElementById('music-icons')
var musicButtonPlay = document.getElementById('music-on-wrapper');
var musicButtonPause = document.getElementById('music-off-wrapper');
var donateButton = document.getElementById('donation-icon');

function openAbout() {
    about_openButton.style.visibility = "hidden";
    about_fullPage.style.visibility = "visible";
    about_closeButton.style.visibility = "visible";
    //modify icon visibility
    hyperdriveButton.style.visibility = "hidden";
    musicButtons.style.visibility = "hidden";
    donateButton.style.visibility = "hidden";
    //show close icon for the about page
    document.getElementById('close-icon').style.display = "block";
};

function closeAbout() {
    about_openButton.style.visibility = "visible";
    about_fullPage.style.visibility = "hidden";
    about_closeButton.style.visibility = "hidden";
    //modify icon visibility
    hyperdriveButton.style.visibility = "visible";
    musicButtons.style.visibility = "visible";
    donateButton.style.visibility = "visible";
    //hide close icon for the about page
    document.getElementById('close-icon').style.display = "none";
};


//fetch sunset and sunrise time for LA
var sunset = SunriseSunsetJS.getSunset(40.730610, -73.935242, new Date());
var sunrise = SunriseSunsetJS.getSunrise(40.730610, -73.935242, new Date());
var sunset_time = Date.parse(sunset);
var sunrise_time = Date.parse(sunrise);
var now_time = Date.parse(today);

var audio_day = new Audio('sound/day.mp3');
audio_day.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

var audio_night = new Audio('sound/night.mp3');
audio_night.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

var printSunTime = {
    "sunrise": sunrise,
    "sunset": sunset
}

//control music on/off
function musicToggleOff(e) {
    //console.log('come some music');
    musicButtonPlay.style.display = "none";
    musicButtonPause.style.display = "flex";


    if (sunrise_time >= sunset_time) { // after yesterday's sunset but before today's sunrise
        if (Date.parse(today) < Date.parse(sunrise)) {
            audio_night.play();
            console.log("1: sunset yesterday < now < sunrise today: play night_sound");
            console.log(printSunTime);
        } else { //today's sunrise < now < today's sunset
            audio_day.play();
            console.log("2: sunrise today < now < sunset today: play day_sound");
            console.log(printSunTime);
        }
    } else { // sunrise time < sunset time
        if (Date.parse(today) < Date.parse(sunset)) { // today's sunrise < now < today's sunset 
            audio_day.play();
            console.log("3: today's sunrise < now < today's sunset: play day_sound");
            console.log(printSunTime);
        } else { // today's sunset < now < tomorrow's sunrise
            audio_night.play();
            console.log("4: today's sunset < now < tomorrow's sunrise: play night_sound");
            console.log(printSunTime);
        }
    }
}

function musicToggleOn(e) {
    //console.log('Shhh..');
    musicButtonPlay.style.display = "flex";
    musicButtonPause.style.display = "none";
    audio_day.pause();
    audio_night.pause();
}


// interactive sections under about page
function ShowAndHide_Garden() {
    var x = document.getElementById("about-garden");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function ShowAndHide_Network() {
    var x = document.getElementById("about-network");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}