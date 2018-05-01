window.onload = function () {
    var head1 = document.getElementById("head1");
    head1.innerHTML = "My Dog Information";
    mydog();
    var show_button = document.getElementById("show_button");
    show_button.onclick = props_mydog;
    var lweight_button = document.getElementById("lweight_button");
    lweight_button.onclick = function () {
        dog_loseWeight(fido)
    };
    var aweight_button = document.getElementById("aweight_button");
    aweight_button.onclick = function () {
        dog_addWeight(fido)
    };
    var bark_button = document.getElementById("bark_button");
    bark_button.onclick = function () {
        dog_bark(fido)
    };

    cinema_lists();
    var next_show1 = document.getElementById("next_show1");
    next_show1.onclick = alert_nextShowing1;

    var next_show2 = document.getElementById("next_show2");
    next_show2.onclick = alert_nextShowing2;
}
