function setTheme(theme) {
    document.body.className = theme;
}

// FORM HANDLING
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var data = [name, email];
    var result = "";

    for (var i = 0; i < data.length; i++) {
        result += data[i] + "<br>";
    }

    document.getElementById("output").innerHTML = result;
});

// TIMER - CLOCK
function showTime() {
    var time = new Date();
    document.getElementById("clock").innerHTML =
        time.toLocaleTimeString();
}

setInterval(showTime, 1000);
showTime();

// AUTO THEME SWITCH
var themes = ["light", "dark", "colorful"];
var i = 0;

setInterval(function () {
    i = (i + 1) % themes.length;
    document.body.className = themes[i];
}, 10000);
