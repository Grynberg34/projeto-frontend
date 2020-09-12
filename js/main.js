// // MENU INICIAL // // 


// 1. Vitrola
document.getElementsByClassName("menu__opção")[0].addEventListener("click", function mostrarVitrola(){
    document.getElementsByClassName("menu")[0].style.display = "none";
    document.getElementsByClassName("vitrola")[0].style.display = "block";
})

// 2. Rádio
document.getElementsByClassName("menu__opção")[1].addEventListener("click", function mostrarRádio(){
    document.getElementsByClassName("menu")[0].style.display = "none";
    document.getElementsByClassName("rádio")[0].style.display = "block";

    var música = document.getElementsByClassName("rádio__música")

    for (var i = 0; i < música.length; i++) {
        música[i].play();
        if (música[i].classList.contains("tocando")) {
            música[i].volume = 1
        }
        else
        música[i].volume = 0
    }

})

// 3. Discoteca (em breve)
document.getElementsByClassName("menu__opção")[2].addEventListener("click", function mostrarDiscoteca(){
    document.getElementsByClassName("menu")[0].style.display = "none";
    document.getElementsByClassName("embreve")[0].style.display = "block";
})


// 4. Boombox (em breve)
document.getElementsByClassName("menu__opção")[3].addEventListener("click", function mostrarBoombox(){
    document.getElementsByClassName("menu")[0].style.display = "none";
    document.getElementsByClassName("embreve")[0].style.display = "block";
})



// // EM BREVE // //


// Voltar para o Menu Inicial

document.getElementsByClassName("embreve__voltar")[0].addEventListener("click", function voltarMenuInicial(){
    document.getElementsByClassName("menu")[0].style.display = "block"
    document.getElementsByClassName("embreve")[0].style.display = "none"
})



// // VITROLA // //


// Mostrar LP

document.getElementsByClassName("vitrola__cover")[0].addEventListener("click", function mostrarLP(){
    document.getElementsByClassName("vitrola__lp")[0].style.opacity = 1;
    document.getElementsByClassName("vitrola__lp")[0].style.marginLeft = "244px";
    document.getElementsByClassName("vitrola__lp")[0].style.marginTop = "183px";
})


// Tocar e pausar música

document.getElementsByClassName("vitrola__música--pausar")[0].addEventListener("click", function pausar() {
    document.getElementsByClassName("vitrola__música")[0].pause()
    document.getElementsByClassName("vitrola__lp--img")[0].classList.remove("rotating")
    document.getElementsByClassName("vitrola__haste")[0].style.marginTop = "329px"
    document.getElementsByClassName("vitrola__haste")[0].style.marginLeft = "1041px"
    document.getElementsByClassName("vitrola__haste")[0].style.transform = "none"

    document.getElementsByClassName("vitrola__música--pausar")[0].style.display = "none"
    document.getElementsByClassName("vitrola__música--tocar")[0].style.display = "block"
})

document.getElementsByClassName("vitrola__música--tocar")[0].addEventListener("click", function tocar() {
    document.getElementsByClassName("vitrola__haste")[0].style.marginTop = "312px"
    document.getElementsByClassName("vitrola__haste")[0].style.marginLeft = "1006px"
    document.getElementsByClassName("vitrola__haste")[0].style.transform = "rotate(18deg)"

    document.getElementsByClassName("vitrola__lp--img")[0].classList.add("rotating")


    document.getElementsByClassName("vitrola__música--tocar")[0].style.display = "none"

    // Essas duas linhas são para evitar um problema no Safari, que só toca o áudio da segunda vez que é dado o comando de play
    document.getElementsByClassName("vitrola__música")[0].play()
    document.getElementsByClassName("vitrola__música")[0].pause()    

    setTimeout(function playing(){ 
    document.getElementsByClassName("vitrola__música")[0].play();
    document.getElementsByClassName("vitrola__música--pausar")[0].style.display = "block" }, 1000);

    document.getElementsByClassName("vitrola__música")[0].onended = function() {
        document.getElementsByClassName("vitrola__lp--img")[0].classList.remove("rotating")
        document.getElementsByClassName("vitrola__haste")[0].style.marginTop = "329px"
        document.getElementsByClassName("vitrola__haste")[0].style.marginLeft = "1041px"
        document.getElementsByClassName("vitrola__haste")[0].style.transform = "none"
        document.getElementsByClassName("vitrola__música--tocar")[0].style.display = "block"
        document.getElementsByClassName("vitrola__música--pausar")[0].style.display = "none"
    }
})

//Drag & Drop API

document.getElementsByClassName("vitrola__lp")[0].addEventListener("dragstart", function dragstart_handler(ev) {
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
    document.getElementsByClassName("vitrola__lp")[0].style.opacity = 0
    let img = new Image(); 
    img.src = './img/vitrola/lp.png'; 
    ev.dataTransfer.setDragImage(img, 100, 100);
})

document.getElementsByClassName("vitrola__dropzone")[0].addEventListener("dragover", function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
})

document.getElementsByClassName("vitrola__dropzone")[0].addEventListener("drop", function drop_handler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
    document.getElementsByClassName("vitrola__música--tocar")[0].style.display = "block"
})

// Voltar para o Menu Inicial

document.getElementsByClassName("vitrola__voltar")[0].addEventListener("click", function voltarMenuInicial(){
    document.getElementsByClassName("menu")[0].style.display = "block"
    document.getElementsByClassName("vitrola")[0].style.display = "none"

    //resetar Vitrola ao retornar à página inicial

    function resetVitrola(){
        document.getElementsByClassName("vitrola__música")[0].pause()
        document.getElementsByClassName("vitrola__música")[0].currentTime = 0
        document.getElementsByClassName("vitrola__lp--img")[0].classList.remove("rotating")
        document.getElementsByClassName("vitrola__haste")[0].style.marginTop = "329px"
        document.getElementsByClassName("vitrola__haste")[0].style.marginLeft = "1041px"
        document.getElementsByClassName("vitrola__haste")[0].style.transform = "none"
        document.getElementsByClassName("vitrola__música--pausar")[0].style.display = "none"

        if (document.getElementsByClassName("vitrola__dropzone")[0].hasChildNodes()){
            document.getElementsByClassName("vitrola__música--tocar")[0].style.display = "block"
        }

    }

    resetVitrola()
})


//// RÁDIO ////

// Tocar próxima música //

document.getElementsByClassName("rádio__controle--próxima")[0].addEventListener("click", function tocarpróxima(){
    
    var música = document.getElementsByClassName("rádio__música");

    for (var i = 0; i < música.length; i++) {
        if (música[i].classList.contains("tocando")) {
            var número = i
        }
    }

    if (número == 0) {
        música[0].classList.remove("tocando")
        música[1].classList.add("tocando")
    }

    if (número == 1) {
        música[1].classList.remove("tocando")
        música[2].classList.add("tocando")
    }

    if (número == 2) {
        música[2].classList.remove("tocando")
        música[0].classList.add("tocando")
    }


    for (var i = 0; i < música.length; i++) {

        if (música[i].classList.contains("tocando")) {
            música[i].volume = 1
        }
        else
        música[i].volume = 0
    }

})

// Tocar música anterior //


document.getElementsByClassName("rádio__controle--anterior")[0].addEventListener("click", function tocaranterior(){

    var música = document.getElementsByClassName("rádio__música");

    for (var i = 0; i < música.length; i++) {
        if (música[i].classList.contains("tocando")) {
            var número = i;
        }
    }

    if (número == 0) {
        música[0].classList.remove("tocando")
        música[2].classList.add("tocando")
    }

    if (número == 1) {
        música[1].classList.remove("tocando")
        música[0].classList.add("tocando")
    }

    if (número == 2) {
        música[2].classList.remove("tocando")
        música[1].classList.add("tocando")
    }


    for (var i = 0; i < música.length; i++) {

        if (música[i].classList.contains("tocando")) {
            música[i].volume = 1
        }
        else
        música[i].volume = 0
    }

})

// Retornar para o menu inicial //

document.getElementsByClassName("rádio__voltar")[0].addEventListener("click", function voltarMenuInicial(){
    document.getElementsByClassName("menu")[0].style.display = "block"
    document.getElementsByClassName("rádio")[0].style.display = "none"

    var músicas = document.getElementsByClassName("rádio__música")
    var músicaTocando = document.getElementsByClassName("rádio__músicas--tocando")

    for (var i=0; músicas.length; i++) {
        músicas[i].pause();
        músicas[i].currentTime = 0;
    }

    músicaTocando.pause();
    músicaTocando.currentTime = 0;
    
})