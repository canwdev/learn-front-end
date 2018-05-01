var position = 0;
var playlist;
var video;
var effectFunction = null;

window.onload = function () {
    setControlButtons();
    playlist = ["video/sample.mp4", "video/video01.mp4", "video/video02.ogg"];
    video = document.getElementById("video");
    video.controls = false;
    video.addEventListener("ended", nextVideo, false);
    //video.src = playlist[position] + getFormatExtension();
    video.src = playlist[position];
    video.load();
    //video.play();

    video.addEventListener("play", processFrame, false);
}

function setControlButtons() {
    var controlLinks = document.querySelectorAll("a.control");
    for (var i = 0; i < controlLinks.length; i++) {
        controlLinks[i].onclick = handleControl;
    }

    var effectLinks = document.querySelectorAll("a.effect");
    for (var i = 0; i < effectLinks.length; i++) {
        effectLinks[i].onclick = setEffect;
    }

    var videoLinks = document.querySelectorAll("a.videoSelection");
    for (var i = 0; i < videoLinks.length; i++) {
        videoLinks[i].onclick = setVideo;
    }
    pushUnpushButtons("pause", ["play"]);

    pushUnpushButtons("normal", []);
}

function handleControl(e) {
    var id = e.target.getAttribute("id");

    if (id == "play") {
        pushUnpushButtons("play", ["pause"]);
        if (video.ended) {
            video.load();
        }
        video.play();
    } else if (id == "pause") {
        pushUnpushButtons("pause", ["play"]);
        video.pause();
    } else if (id == "loop") {
        if (isButtonPushed("loop")) {
            pushUnpushButtons("", ["loop"]);
        } else {
            pushUnpushButtons("loop", []);
        }
        video.loop = !video.loop;
    } else if (id == "mute") {
        if (isButtonPushed("mute")) {
            pushUnpushButtons("", ["mute"]);
        } else {
            pushUnpushButtons("mute", []);
        }
        video.muted = !video.muted;
    }
}

function setEffect(e) {
    var id = e.target.getAttribute("id");

    if (id == "normal") {
        pushUnpushButtons("normal", ["western", "noir", "scifi"]);
        effectFunction = null;
    } else if (id == "western") {
        pushUnpushButtons("western", ["normal", "noir", "scifi"]);
        effectFunction = western;
    } else if (id == "noir") {
        pushUnpushButtons("noir", ["normal", "western", "scifi"]);
        effectFunction = noir;
    } else if (id == "scifi") {
        pushUnpushButtons("scifi", ["normal", "western", "noir"]);
        effectFunction = test_effect;
    }
}

function setVideo(e) {
    var id = e.target.getAttribute("id");

    if (id == "video1") {
        pushUnpushButtons("video1", ["video2"]);
        pushUnpushButtons("pause", ["play"]);
        if (position > 0) {
            position--;
            video.src = playlist[position];
            video.load();
            video.play();
            pushUnpushButtons("play", ["pause"]);
        } else {
            pushUnpushButtons("play", ["pause"]);
        }

        setTimeout("pushUnpushButtons(\"\",[\"video1\"])", 100);
    } else if (id == "video2") {
        pushUnpushButtons("video2", ["video1"]);
        pushUnpushButtons("pause", ["play"]);
        if (position < 2) {
            position++;
            video.src = playlist[position];
            video.load();
            video.play();
            pushUnpushButtons("play", ["pause"]);
        } else {
            pushUnpushButtons("play", ["pause"]);
        }
        setTimeout("pushUnpushButtons(\"\",[\"video2\"])", 100);
    }
}

function pushUnpushButtons(idToPush, idArrayToUnpush) {
    if (idToPush != "") {
        var anchor = document.getElementById(idToPush);
        var theClass = anchor.getAttribute("class");
        if (!theClass.indexOf("selected") >= 0) {
            theClass += " selected";
            anchor.setAttribute("class", theClass);
            var newImage = "url(src/button_pressed.png)";
            anchor.style.backgroundImage = newImage;
            anchor.style.backgroundRepeat = "no-repeat";
            anchor.style.color = "cyan";
            anchor.style.paddingTop = "20";
        }
    }

    for (var i = 0; i < idArrayToUnpush.length; i++) {
        anchor = document.getElementById(idArrayToUnpush[i]);
        theClass = anchor.getAttribute("class");
        if (theClass.indexOf("selected") >= 0) {
            theClass = theClass.replace("selected", "");
            anchor.setAttribute("class", theClass);
            anchor.style.backgroundImage = "url(src/button.png)";
            anchor.style.color = "white";
            anchor.style.paddingTop = "15";
        }
    }
}

function isButtonPushed(id) {
    var anchor = document.getElementById(id);
    var theClass = anchor.getAttribute("class");
    return (theClass.indexOf("selected") >= 0);
}

function nextVideo() {
    position++;
    if (position >= playlist.length) {
        position = 0;
    }
    video.src = playlist[position];
    video.load();
    video.play();
}

function getFormatExtension() {
    if (video.canPlayType("video/mp4") != "") {
        return ".mp4";
    } else if (video.canPlayType("video/webm") != "") {
        return ".webm";
    } else if (video.canPlayType("video/ogg") != "") {
        return ".ogv";
    }
}

function processFrame() {
    var video = document.getElementById("video");
    if (video.paused || video.ended) {
        return;
    }
    var bufferCanvas = document.getElementById("buffer");
    var displayCanvas = document.getElementById("display");
    var buffer = bufferCanvas.getContext("2d");
    var display = displayCanvas.getContext("2d");
    buffer.drawImage(video, 0, 0, video.width, video.height);
    var frame = buffer.getImageData(0, 0, video.width, video.height);

    var length = frame.data.length / 4;
    for (var i = 1; i < length; i++) {
        var r = frame.data[i * 4 + 0];
        var g = frame.data[i * 4 + 1];
        var b = frame.data[i * 4 + 2];
        if (effectFunction) {
            effectFunction(i, r, g, b, frame.data);
        }
    }

    display.putImageData(frame, 0, 0);

    setTimeout(processFrame, 0);
}

function noir(pos, r, g, b, data) {
    var brightness = (3 * r + 4 * g + b) >>> 3;
    if (brightness < 0)
        brightness = 0;
    data[pos * 4 + 0] = brightness;
    data[pos * 4 + 1] = brightness;
    data[pos * 4 + 2] = brightness;

}

function scifi(pos, r, g, b, data) {
    var offset = pos * 4;

    data[offset] = Math.round(255 - r);
    data[offset] = Math.round(255 - g);
    data[offset] = Math.round(255 - b);

}

function western(pos, r, g, b, data) {
    var brightness = (3 * r + 4 * g + b) >>> 3;
    data[pos * 4 + 0] = brightness + 40;
    data[pos * 4 + 1] = brightness + 20;
    data[pos * 4 + 2] = brightness - 20;

}

function bwcartoon(pos, r, g, b, outputData) {
    var offset = pos * 4;
    if (outputData[offset] < 120) {
        outputData[offset] = 80;
        outputData[++offset] = 80;
        outputData[++offset] = 80;
    } else {
        outputData[offset] = 255;
        outputData[++offset] = 255;
        outputData[++offset] = 255;
    }
    outputData[++offset] = 255;
    ++offset;
}

function test_effect(pos, r, g, b, data) {
    //str = "pos:"+pos+" r:"+r+" g:"+g+" b:"+b+" brightness:"+brightness;
    data[pos * 4 + 0] = Math.round(Math.random() * 300);
    data[pos * 4 + 1] = Math.round(Math.random() * 300);
    data[pos * 4 + 2] = Math.round(Math.random() * 300);
}