function updateCountdown() {
    const countdownDate = new Date("May 25, 2024 13:45:00").getTime();
    const now = new Date().getTime();
    const difference = countdownDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " Días ";
    document.getElementById("hours").innerHTML = hours + " Horas ";
    document.getElementById("minutes").innerHTML = minutes + " Minutos ";
    document.getElementById("seconds").innerHTML = seconds + " Segundos ";

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);