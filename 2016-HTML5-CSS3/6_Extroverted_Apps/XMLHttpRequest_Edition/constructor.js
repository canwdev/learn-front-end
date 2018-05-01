window.onload = function () {
    var jsonString = JSON.stringify(plan9Movie);
    //alert(plan9Movie+jsonString);
    var jsonMovieObject = JSON.parse(jsonString);
    alert("JSON Movie is " + jsonMovieObject.title);
}


function Movie(title, genre, rating, showtimes) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
}


var banzaiMovie = new Movie("Buckaroo Banzai", "Cult Classic", 5, ["1:00pm", "5:00pm", "7:00pm", "11:00pm"]);
var plan9Movie = new Movie("Plan 9 from Outer Space", "Cult Classic", 2, ["3:00pm", "7:00pm", "11:00pm"]);
var forbiddenPlanetMovie = new Movie("Forbidden Planet", "Classic Sci-fi", 5, ["5:00pm", "9:00pm"]);

