function galeriaAI() {
    elemento = document.getElementById("galeria-ai");
    elemento.style.display = "none";

    if (galeriaAI() == true) {
        galeriaAI();
    }else {
        galeriaAI2();
    }
}
function galeriaAI2() {
    elemento = document.getElementById("galeria-ai");
    elemento.style.display = "flex";

}


