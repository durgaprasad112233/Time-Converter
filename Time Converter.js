let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let buttonEl = document.getElementById("convertBtn");
let timeParagraphEl = document.getElementById("timeInSeconds");
let error = document.getElementById("errorMsg");

buttonEl.addEventListener("click", function() {
    let hoursValue = hoursInputEl.value;
    let minutesValue = minutesInputEl.value;
    let hoursToSeconds = parseInt(hoursValue) * 3600;
    let minToSeconds = parseInt(minutesValue) * 60;
    let totalSeconds = hoursToSeconds + minToSeconds;

    if (hoursValue !== "" && minutesValue !== "") {
        timeParagraphEl.textContent = totalSeconds;
    } else if (hoursValue === "") {
        error.textContent = "Please enter hours.."
    } else if (minutesValue === "") {
        error.textContent = "Please enter minutes.."
    }
});