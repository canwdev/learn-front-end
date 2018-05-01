window.onload = function () {
    blinklink();

}

function updateSales(sales) {
    var salesDiv = document.getElementById("sales");

    for (var i = 0; i < sales.length; i++) {
        var show = sales[i];
        var adddiv = document.createElement("div");
        adddiv.setAttribute("class", "saleItem");
        adddiv.innerHTML = show.name + " sold " + show.sales + " gumballs";
        salesDiv.appendChild(adddiv);
    }
}