var string_movies = "<hr>";

var movie1 = {
    name: "Plan 9 Outer Space",
    genre: "Cult Classic",
    rating: 2,
    showTime: ["3:00pm", "7:00pm", "11:00pm"]
};

var movie2 = {
    name: "Forbidden Planet",
    genre: "Classic Sci-fi",
    rating: 5,
    showTime: ["5:00pm", "9:00pm"]
};

function cinema_lists() {
    var prop;
    for (prop in movie1) {
        string_movies += prop + ": " + movie1[prop] + "<br>";
    }
    string_movies += "<hr>";
    for (prop in movie2) {
        string_movies += prop + ": " + movie2[prop] + "<br>";
    }
    var cinema_content = document.getElementById("cinema_content");
    cinema_content.innerHTML = string_movies;
}

function getNextShowing(movie) {
    var now = new Date().getTime();
    for (var i = 0; i < movie.showTime.length; i++) {
        var showtimes = getTimeFromString(movie.showTime[i]);
        if ((showtimes - now) > 0) {
            return "Next showing of " + movie.name + " is " + movie.showTime[i];
        }
    }
    return movie.name + ": Today Has no Showing time, try it next day";
}

function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);
    return theTime.getTime();
}

function alert_nextShowing1() {
    var nextShowing = getNextShowing(movie1);
    alert(nextShowing);
}

function alert_nextShowing2() {
    var nextShowing = getNextShowing(movie2);
    alert(nextShowing);
}