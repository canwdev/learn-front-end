window.onload = init;

function init() {
    var button = document.getElementById("addButton");
    button.onclick = handle_button_click;
    var button_empty = document.getElementById("emptyButton");
    button_empty.onclick = empty_input;
    var button_empty = document.getElementById("emptyList");
    button_empty.onclick = empty_list;
}


function handle_button_click() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;

    if (songName == "") {
        //alert("Nothing Input");
    } else {
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul = document.getElementById("playlist");
        ul.appendChild(li);
        //alert("Added " + songName);
    }

}

function empty_input() {
    document.getElementById("songTextInput").value = "";
}

function empty_list() {
    if (confirm("Are you sure to empty the song list?")) {
        var ul = document.getElementById("playlist");
        ul.innerHTML = "";
    }

}