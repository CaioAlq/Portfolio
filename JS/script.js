const mainTitle = document.getElementById("main-heading");
const secondTitle = document.getElementById("second-heading");
const paragraphTitle = document.getElementById("paragraph-heading");

function typeWriter(elemento) {

    const textoArray = elemento.textContent.split('');

    elemento.textContent = "";

    textoArray.forEach(function (letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 125 * i)
    })

}

setTimeout(function() {
    setTimeout(function() {
        setTimeout(function() {
            document.getElementById("paragraph-heading").classList.remove("hidden");
            typeWriter(paragraphTitle);
        }, 2500)
        document.getElementById("second-heading").classList.remove("hidden");
        typeWriter(secondTitle);
    }, 1500);
   
    document.getElementById("main-heading").classList.remove("hidden");
    typeWriter(mainTitle);
}, 10)


