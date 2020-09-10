// Mostrar LP

document.getElementById("cover").addEventListener("click", function mostrarLP(){
    document.getElementById("lp").style.opacity = 1;
    document.getElementById("lp").style.marginLeft = "244px";
    document.getElementById("lp").style.marginTop = "183px";
})

// hastes

document.getElementById("pausar").addEventListener("click", function pausar() {
    document.getElementById("música").pause()
    document.getElementById("lp-img").classList.remove("rotating")
    document.getElementById("haste").style.marginTop = "329px"
    document.getElementById("haste").style.marginLeft = "1041px"
    document.getElementById("haste").style.transform = "none"

    document.getElementById("pausar").style.display = "none"
    document.getElementById("tocar").style.display = "block"
})

document.getElementById("tocar").addEventListener("click", function tocar() {
    document.getElementById("haste").style.marginTop = "312px"
    document.getElementById("haste").style.marginLeft = "1006px"
    document.getElementById("haste").style.transform = "rotate(18deg)"

    document.getElementById("lp-img").classList.add("rotating")


    document.getElementById("tocar").style.display = "none"
    document.getElementById("pausar").style.display = "block"

    // Essas duas linhas são para evitar um problema no Safari, que só toca o áudio da segunda vez que é dado o comando de play
    document.getElementById("música").play()
    document.getElementById("música").pause()    

    setTimeout(function playing(){ 
    document.getElementById("música").play() }, 1000);

    document.getElementById("música").onended = function() {
        document.getElementById("lp-img").classList.remove("rotating")
        document.getElementById("haste").style.marginTop = "329px"
        document.getElementById("haste").style.marginLeft = "1041px"
        document.getElementById("haste").style.transform = "none"
        document.getElementById("tocar").style.display = "block"
        document.getElementById("pausar").style.display = "none"
    }
})

//Drag & Drop API

document.getElementById("lp").addEventListener("dragstart", function dragstart_handler(ev) {
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
    document.getElementById("lp").style.opacity = 0
    let img = new Image(); 
    img.src = './img/lp.png'; 
    ev.dataTransfer.setDragImage(img, 100, 100);
})

document.getElementById("dropzone").addEventListener("dragover", function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
})

document.getElementById("dropzone").addEventListener("drop", function drop_handler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("tocar").style.display = "block"
})