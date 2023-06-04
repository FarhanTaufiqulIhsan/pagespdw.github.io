function updateTime() {
    var today = new Date();
    var hour = today.getHours();
    var greeting;
    var nama = "Farhan";

    if (hour >= 0 && hour < 12) {
        greeting = "Selamat pagi";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Selamat siang";
    } else if (hour >= 17 && hour < 20) {
        greeting = "Selamat sore";
    } else {
        greeting = "Selamat malam";
    }

    var dateString = today.toLocaleDateString("en-US", { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
    var timeString = today.toLocaleTimeString();
    var greetingText = greeting + ", " + nama;

    document.querySelector(".greeting").textContent = greetingText;
    document.getElementById("date-time").innerHTML = dateString + "<br>" + timeString;
}

updateTime();
setInterval(updateTime, 1000);