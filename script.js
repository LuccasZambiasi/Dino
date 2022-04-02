const dino = document.getElementById("dino");
const cacto = document.getElementById("cacto")

function pular() {
    if (dispatchEvent.classList != "pulinho") 
    {
        dino.classList.add("pulinho");
        setTimeout(function() {
            dino.classList.remove("pulinho"); 
        }, 300)
    }
}
let checkAlive = setInterval(function() {
    let dinoPulo = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactoMovimento = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));
    // Verificar colisão  
    if (cactoMovimento > 0 && cactoMovimento < 70 && dinoPulo >= 143) {
        dino.style.animationPlayState = 'paused';
        cacto.style.animationPlayState = 'paused';
        alert("Morreu! :(");
        window.location.reload();
    }
}, 10);
document.addEventListener("keydown", function(event) {
    pular();
})