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