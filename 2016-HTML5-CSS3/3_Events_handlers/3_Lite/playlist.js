window.onload = init;

function init() {
    var button = document.getElementById("addButton");
    var button_clsinput = document.getElementById("clsInput");
    var button_clslist = document.getElementById("clsList");
    button.onclick = add_list;
    button_clsinput.onclick = cls_input;
    button_clslist.onclick = cls_list;

    loadPlaylist();
}

function add_list() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if (songName == "") {
        //alert("None");
    } else {
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul = document.getElementById("playlist");
        ul.appendChild(li);

        save(songName);
    }
}

function cls_input() {
    var clear = document.getElementById("songTextInput");
    clear.value = "";
}

function cls_list() {
    if (confirm("Confirm to clear the list?")) {
        var clear = document.getElementById("playlist");
        clear.innerHTML = "";
    }

}

