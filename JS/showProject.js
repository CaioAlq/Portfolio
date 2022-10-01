//Variaveis

let dice = document.getElementById("btnDice");
let toDo = document.getElementById("btnTo");
let tinDog = document.getElementById("btnTin");
let simon = document.getElementById("btnSimon")

//Evento Dice

dice.addEventListener("mouseenter", function() {
    document.getElementById("imgDice").classList.add("image-exposed");
})

dice.addEventListener("mouseleave", function() {
    document.getElementById("imgDice").classList.remove("image-exposed");
})

//Evento To Do

toDo.addEventListener("mouseenter", function() {
    document.getElementById("imgTo").classList.add("image-exposed");
})

toDo.addEventListener("mouseleave", function() {
    document.getElementById("imgTo").classList.remove("image-exposed");
})

//Evento Tin Dog

tinDog.addEventListener("mouseenter", function() {
    document.getElementById("imgTin").classList.add("image-exposed");
})

tinDog.addEventListener("mouseleave", function() {
    document.getElementById("imgTin").classList.remove("image-exposed");
})

//Evento Simon Game

simon.addEventListener("mouseenter", function() {
    document.getElementById("imgSimon").classList.add("image-exposed");
})

simon.addEventListener("mouseleave", function() {
    document.getElementById("imgSimon").classList.remove("image-exposed");
})