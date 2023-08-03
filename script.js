const countDownTimer = document.getElementById("count-down-timer");
const resultsLink = '<a class="results-link" target="_blank" href="https://myresults.cie.org.uk/">this page</a>';

const heartIcon = document.querySelector(".love-icon-internal");

const showLoveConfirm = document.querySelector(".show-love-confirm");

// Set the date we're counting down to
let countDownDate = new Date(1692162000000).getTime();

// Update the count down every 1 second
let updateCountDown = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    countDownTimer.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance <= 86400000) {
        countDownTimer.classList.add("box-red");
    }

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(updateCountDown);
        countDownTimer.classList.remove("box-red");
        countDownTimer.innerHTML = `Results should be live. Visit ${resultsLink} to view them`;
    }
}, 1000);

let iLovedIt;

if (document.cookie.includes("iLovedIt=true")) {
    iLovedIt = true;
    heartIcon.style.fill = '#ffffff';
} else {
    iLovedIt = false;
    heartIcon.style.fill = '#none';
}

function sendHeart() {
    if (!iLovedIt) {
        heartIcon.style.fill = '#ffffff';
        loveSentMessageIn();
        setTimeout(loveSentMessageOut, 2000);
        document.cookie = "iLovedIt=true";
        iLovedIt = true;

    } else {
        heartIcon.style.fill = "none";
        loveSentMessageOut();
        document.cookie = "iLovedIt=false";
        iLovedIt = false;
    }
}

function loveSentMessageIn() {
    showLoveConfirm.classList.add("confirm-like-slide-in-class");
}
function loveSentMessageOut() {
    showLoveConfirm.classList.remove("confirm-like-slide-in-class");
}

// ----------------------------------

