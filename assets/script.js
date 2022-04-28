console.log("dark mode exercise");

const colorSwitch = document.getElementById("toggle");

colorSwitch.addEventListener("click", checkMode);

function checkMode() {
    console.log("checking...");
    if (colorSwitch.checked) {
        console.log("dark on");
        darkModeOn();
    } else {
        console.log("dark off");
        darkModeOff();
    }
}

function darkModeOn() {
    document.body.classList.add("dark-mode");
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
}

var lastUpdate = moment().format('lll');
var update = document.querySelector(".updated");
update.textContent = lastUpdate;
document.getElementById("align").style.textAlign = "right";