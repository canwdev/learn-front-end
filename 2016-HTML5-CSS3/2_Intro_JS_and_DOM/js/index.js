function init() {
    hello_world();
    js_stage();
    phrase_show2();
}

function hello_world() {
    var change = document.getElementById("to_be_changed");
    change.innerHTML = "This world has been changed when the page is fully changed.";

    var song1 = document.getElementById("song1");
    var song2 = document.getElementById("song2");
    var song3 = document.getElementById("song3");

    song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
    song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
    song3.innerHTML = "I Code the Line, by John JavaScript";
}

function js_stage() {
    var times = 10;

    var arrays = new Array();
    for (var i = 0; i < times; i++) {
        arrays[i] = Math.random() * 10;
    }

    var temp = "$> show random numbers for " + times + " times<br>";
    for (var i = 0; i < times; i++) {
        output += arrays[i] + "<br>";
    }
    var display_lines;
    display_lines = output + "$> _";
    var js_stage = document.getElementById("js_stage");
    js_stage.innerHTML = display_lines;
}


function phrase_show2() {
    var words1 = ["24/7", "multi-Tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solotion", "tipping-point", "strategy", "vision"];

    var times = 13;
    var phrase = "";
    var rand1, rand2, rand3;
    for (var i = 0; i < times; i++) {
        rand1 = Math.floor(Math.random() * words1.length);
        rand2 = Math.floor(Math.random() * words2.length);
        rand3 = Math.floor(Math.random() * words3.length);
        phrase += words1[rand1] + " " + words2[rand2] + " " + words3[rand3] + "<br>";
    }

    var phrase_stage = document.getElementById("phrase");
    phrase_stage.innerHTML = phrase;
}

window.onload = init;
