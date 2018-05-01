function blinklink() {
    var blinkid = "blink";
    var blinkid1 = "blink1";
    var blinkid2 = "blink2";
    var color = ["rgb(226,54,40)", "rgb(34, 172,75)", "rgb(79,130,172)", "rgb(238,215,59)", "rgb(250,168,35)", "rgb(177,89,152)"];
    document.getElementById(blinkid).style.color = color[Math.floor(Math.random() * color.length)];
    document.getElementById(blinkid1).style.color = color[Math.floor(Math.random() * color.length)];
    document.getElementById(blinkid2).style.color = color[Math.floor(Math.random() * color.length)];
    var timer = setTimeout("blinklink()", 500);


}

function blinklink1() {
    var blinkid = "blink";
    var color = ["red", "green", "blue", "yellow"];
    var num = Math.floor(Math.random() * 4);
    document.getElementById(blinkid).style.color = color[num];
    timer = setTimeout("blinklink1()", 300);
}

function stoptimer() {
    clearTimeout(timer);
} 
