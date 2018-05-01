// This is a function
function calc(a, b) {
    return a * b;
}

// A function can call other function
function printResult(a, b) {
    return document.write(calc(a, b));
}

// This function prints "<br/>"
function br() {
    return document.write("<br/>");
}

// Easy to write
function w(obj) {
    return document.write(obj);
}

// Easy to write line+br
function wl(obj) {
    return document.writeln(obj + "<br/>");
}

// This is a way to create an object
store = {};       // Create a new object
store.num_a = 8;  // Object can include variables
store.num_b = 3;

// A normal way to create an object, Object is variable
var wall = new Object();
wall.store = store;   // object can include object
wall.print = wl;      // object can include function

// Another way to create object
var person = {name: "Namey", weight: 50};

function dream() {
    wl("Dream is future");
}

person.future = dream;

// Simply way to create it as a object
var person2 = function (name, weight) {
    this.name = name;
    this.weight = weight;
    this.future = function dreams() {
        dream();
        wl("Too!");
    }
}

var chinapeople = function () {
    this.country = "CHINA";
}
// The way that JavaScript inherts.
chinapeople.prototype = new person2();

// ------------------------------------
// This is variable
var aa = 3;
var bb = 4;

// Call our functions with variables
printResult(aa, bb);
br();

w(typeof document);

wl(store.num_a * store.num_b);
wl(typeof wall.store);

wall.print(typeof wall.print);

w(typeof person);
wl(person.name + " " + person.weight);
person.future();

var p2 = new person2("Nameey", 51);
wl(p2.name + " " + p2.weight);
p2.future();

var zhangsan = new chinapeople("ZhangSan", 52);
wl(typeof zhangsan + " " + zhangsan.country);
// ----------------------------------------

// We can know anything is Object!
// This can be run when webpage fully loaded
window.onload = function () {

    // This is the little use of DOM(Document Object Model)
    var idhwd = document.getElementById("idhwd");
    idhwd.style.backgroundColor = "#00ccff";
}