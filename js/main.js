function openAbout() {
    document.getElementById('pop-up-about').style.visibility = "visible";

};

function closeAbout() {
    document.getElementById('pop-up-about').style.visibility = "hidden";
};


var firstButtonInput = document.getElementById('at-input');
var restButtons = document.getElementsByClassName("restButtons");
var backButton = document.getElementById('choice-button-back');

function expandAltText(e) {
    firstButtonInput.classList.replace('alt-text-input', 'alt-text-input-visible');
    for (var i = 0; i < restButtons.length; i += 1) {
        restButtons[i].style.display = 'none';
    }
    backButton.style.display = "block";
    window.setTimeout(function () {
        firstButtonInput.classList.toggle('expandWidth');
    }, 20)
};


function backMain() {
    window.setTimeout(function () {
        firstButtonInput.classList.toggle('expandWidth');
    }, 20);
    firstButtonInput.classList.replace('alt-text-input-visible', 'alt-text-input');
    for (var i = 0; i < restButtons.length; i += 1) {
        restButtons[i].style.display = 'block';
    }
    backButton.style.display = "none";

}