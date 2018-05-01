var fido = {
    name: "Fido",
    weight: 40,
    breed: "Mixed",
    loves: ["walks", "fetching balls"],
    bark: function () {
        alert(this.name + ": Woof woof!");
    }
};

fido.weight = 30;
fido.breed = "Chawalla/GreatDane mix";
fido.loves.push("Chewing bones");
fido.age = 5;
//delete fido.age;
var string_to_write = "";

function mydog() {
    var likes = fido.loves;
    var likeString = "";
    for (var i = 0; i < likes.length; i++) {
        likeString += likes[i] + ", "
    }
    string_to_write = "<hr>Name: " + fido.name + "<br>Weight: " + fido.weight + "<br>Breed: " + fido.breed + "<br>Loves: " + likeString;
    var content = document.getElementById("dog_content");
    content.innerHTML = string_to_write;
}

function props_mydog() {
    mydog();
    var prop;
    for (prop in fido) {
        alert(prop + ": " + fido[prop]);
    }
    fido.bark();
}

function dog_bark(dog) {
    if (dog.weight > 25) {
        alert("WOOF!!");
    } else {
        alert("yip~~")
    }
}

function dog_loseWeight(dog) {
    if (dog.weight > 20)
        dog.weight -= 1;
    mydog();
}

function dog_addWeight(dog) {
    if (dog.weight < 60)
        dog.weight += 1;
    mydog();
}

