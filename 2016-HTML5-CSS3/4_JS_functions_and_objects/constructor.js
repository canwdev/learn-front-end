window.onload = function () {
    var fido_button = document.getElementById("fido_button");
    var tiny_button = document.getElementById("tiny_button");
    var clifford_button = document.getElementById("clifford_button");

    fido_button.onclick = function () {
        show_dogInfo(fido);
    }
    tiny_button.onclick = function () {
        show_dogInfo(tiny);
    }
    clifford_button.onclick = function () {
        show_dogInfo(clifford);
    }

    var next_show1 = document.getElementById("next_show1");
    var next_show2 = document.getElementById("next_show2");
    var next_show3 = document.getElementById("next_show3");

    next_show1.onclick = function () {
        show_movieInfo(banzaiMovie)
    };
    next_show2.onclick = function () {
        show_movieInfo(plan9Movie)
    };
    next_show3.onclick = function () {
        show_movieInfo(forbiddenPlanetMovie)
    };
}

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!")
        }
    };
}

var fido = new Dog("Fido", "Mixed", 38);
var tiny = new Dog("Tiny", "Chawalla", 8);
var clifford = new Dog("Clifford", "Bloodhound", 65);

function show_dogInfo(dog) {
    var str = "";
    var prop;
    var i = 0;
    for (prop in dog) {
        str += prop + ": " + dog[prop] + "<br>";
        i++;
        if (i > 2) break;
    }
    var write = document.getElementById("dog_content");
    write.innerHTML = str;
    dog.bark();
}

function Movie(title, genre, rating, showtimes) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
    this.getNextShowing = function () {
        var now = new Date().getTime();
        for (var i = 0; i < this.showtimes.length; i++) {
            var showtime = getTimeFromString(this.showtimes[i]);
            if ((showtime - now) > 0) {
                return "Next showing of <i>" + this.title + "</i> is " + this.showtimes[i];
            }
        }
        return this.title + ": Today Has no Showing time, try it next day";
    };
}

function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);
    return theTime.getTime();
}

var banzaiMovie = new Movie("Buckaroo Banzai", "Cult Classic", 5, ["1:00pm", "5:00pm", "7:00pm", "11:00pm"]);
var plan9Movie = new Movie("Plan 9 from Outer Space", "Cult Classic", 2, ["3:00pm", "7:00pm", "11:00pm"]);
var forbiddenPlanetMovie = new Movie("Forbidden Planet", "Classic Sci-fi", 5, ["5:00pm", "9:00pm"]);

function show_movieInfo(movie) {

    var str = "";
    str += "<b>" + movie.getNextShowing() + "</b><br>";
    var prop;
    var i = 0;
    for (prop in movie) {
        str += prop + ": " + movie[prop] + "<br>";
        i++;
        if (i > 3) break;
    }

    var write = document.getElementById("cinema_content");
    write.innerHTML = str;

}
