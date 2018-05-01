window.onload = function () {

    setInterval(refresh, 600);
}
count = 0;
id = "mycanvas";

function refresh() {
    count++;
    var myCan = document.getElementById(id);
    writeLineCycle = setInterval("writeLine()", 100);

    myCan.innerHTML += "<br>#> ";
    if (count == 25) {
        count = 0;
        myCan.innerHTML = "#> ";
    }

}


count_w = 0;

function writeLine() {
    var str = "";
    var ran = genRannum(50);
    var myStr = randomWord(false, 1);
    var reg = new RegExp("[0-9]+");
    myStr = myStr.replace(reg, " ");
    str += myStr.toUpperCase();
    var myCan = document.getElementById(id);
    myCan.innerHTML += str;
    count_w++;
    if (count_w > ran) {

        window.clearInterval(writeLineCycle);
        //alert("over"+ran+" "+count_w);
        count_w = 0;
    }
    blinklink();
}

function randomWord(randomFlag, min, max) {
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}

function genRannum(num) {
    return Math.floor(Math.random() * num);
}

function blinklink() {
    var blinkid = id;

    var color = ["rgb(226,54,40)", "rgb(34, 172,75)", "rgb(79,130,172)", "rgb(238,215,59)", "rgb(250,168,35)", "rgb(177,89,152)"];
    document.getElementById(blinkid).style.color = color[Math.floor(Math.random() * color.length)];
    document.getElementById(blinkid).style.borderColor = color[Math.floor(Math.random() * color.length)];

    //var timer = setTimeout("blinklink()", 400);


}