window.onload = function () {
    blinklink();
    setInterval(handleRefrash, 3000);
}

function handleRefrash() {
    var url = "http://gumball.wickedlysmart.com/?callback=updateSales" + "&lastreporttime=" + lastReportTime + "&random=" + (new Date()).getTime();

    var newScriptElement = document.createElement("script");
    newScriptElement.setAttribute("src", url);
    newScriptElement.setAttribute("id", "jsonp");

    var oldScriptElement = document.getElementById("jsonp");
    var head = document.getElementsByTagName("head")[0];
    if (oldScriptElement == null) {
        head.appendChild(newScriptElement);
    } else {
        head.replaceChild(newScriptElement, oldScriptElement);
    }
}

var lastReportTime = 0;

function updateSales(sales) {
    var salesDiv = document.getElementById("sales");

    for (var i = 0; i < sales.length; i++) {
        var show = sales[i];
        var adddiv = document.createElement("div");
        adddiv.setAttribute("class", "saleItem");
        adddiv.innerHTML = show.name + " sold " + show.sales + " gumballs";
        salesDiv.appendChild(adddiv);
    }
    if (sales.length > 0) {
        lastReportTime = sales[sales.length - 1].time;
    }
}