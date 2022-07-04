const colorSwitch = document.getElementById("toggle");

colorSwitch.addEventListener("click", checkMode);

function checkMode() {
  if (colorSwitch.checked) {
    darkModeOn();
  } else {
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark-mode");
}

function darkModeOff() {
  document.body.classList.remove("dark-mode");
}
var lastUpdated = document.lastModified;
var updateStatement = document.writeln(
  "This page was last updated " + lastUpdated
);
