// Mostrar LP

document.getElementsByClassName("vitrola__cover")[0].addEventListener("click", function mostrarLP(){
    document.getElementsByClassName("vitrola__lp")[0].style.opacity = 1;
    document.getElementsByClassName("vitrola__lp")[0].style.marginLeft = "244px";
    document.getElementsByClassName("vitrola__lp")[0].style.marginTop = "183px";
})


// hastes

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
    document.getElementsByClassName("vitrola__música--pausar")[0].style.display = "block"

    // Essas duas linhas são para evitar um problema no Safari, que só toca o áudio da segunda vez que é dado o comando de play
    document.getElementsByClassName("vitrola__música")[0].play()
    document.getElementsByClassName("vitrola__música")[0].pause()    

    setTimeout(function playing(){ 
    document.getElementsByClassName("vitrola__música")[0].play() }, 1000);

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
