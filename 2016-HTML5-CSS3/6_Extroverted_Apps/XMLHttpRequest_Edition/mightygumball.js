window.onload = function () {
    blinklink();
    getData();
}

function getData() {

    var url = "http://127.0.0.1/share/TempRes/test.json";
    var request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = function () {
        if (request.status == 200) {
            updateSales(request.responseText);
        } else {
            //var salesDiv = document.getElementById("sales");
            //salesDiv.innerHTML = "Request faild";
            updateSales("Request faild");
        }
    };
    request.send(null);

}

function updateSales(responseText) {
    var salesDiv = document.getElementById("sales");
    var sales = JSON.parse(responseText);
    for (var i = 0; i < sales.length; i++) {
        var show = sales[i];
        var adddiv = document.createElement("div");
        adddiv.setAttribute("class", "sealeItem");
        adddiv.innerHTML = show.name + " sold " + show.sales + " gumballs";
        salesDiv.appendChild(adddiv);
    }
}