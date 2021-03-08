function hideMain() {
    document.getElementById('main-section').style.visibility = "hidden";

}

window.onload = hideMain();

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

var hypertip = document.getElementById('hypertip');

function showHypertip() {
    hypertip.style.display = "block";
}

window.addEventListener('mousemove', moveHypertip);

function moveHypertip() {
    hypertip.style.top = event.clientY + 40 + "px";
    hypertip.style.left = event.clientX -275 + "px";
}

function hideHypertip() {
    hypertip.style.display = "none";
}

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


//
/*const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

for (const heading of headings) {
  heading.innerHTML = heading.innerHTML
    .replace(/\bLOGO\b/g, 'L<span class="special-o">O</span>GO');
}
*/
//modify menu bottons
//___________________________________________
//show and hide about-page
//music playing
var hyperdrive_tip = document.getElementById('hypertip-icon');
var musicButtons = document.getElementById('music-icons')
var musicButtonPlay = document.getElementById('music-on-wrapper');
var musicButtonPause = document.getElementById('music-off-wrapper');

function openAbout() {
    document.getElementById('about-icon-wrapper').style.visibility = "hidden";
    document.getElementById('pop-up-about').style.visibility = "visible";
    document.getElementById('close-icon-wrapper').style.visibility = "visible";
    hyperdrive_tip.style.visibility = "hidden";
    musicButtons.style.visibility = "hidden";
    document.getElementById('close-icon').style.display = "block";
};

function closeAbout() {
    document.getElementById('about-icon-wrapper').style.visibility = "visible";
    document.getElementById('pop-up-about').style.visibility = "hidden";
    document.getElementById('close-icon-wrapper').style.visibility = "hidden";
    hyperdrive_tip.style.visibility = "visible";
    musicButtons.style.visibility = "visible";
    document.getElementById('close-icon').style.display = "none";
};

function musicToggleOn(e) {
    console.log('come some music');
    musicButtonPlay.style.display = "none";
    musicButtonPause.style.display = "flex";

    document.getElementById("daySound").play();

/*    if (typeof daySound.loop == 'boolean') {
        daySound.loop = true;
    } else {
        daySound.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }*/
}


function musicToggleOff(e) {
    console.log('Shhh..');
    musicButtonPlay.style.display = "flex";
    musicButtonPause.style.display = "none";
    document.getElementById("daySound").pause();
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

