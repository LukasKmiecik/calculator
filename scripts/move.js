const calcu = document.querySelector(".calcu");

calcu.addEventListener("mousedown",e =>{
    document.addEventListener("mousemove",move)
});

document.addEventListener("mouseup",function stop (e){
    document.removeEventListener("mousemove",move)
});

function move(e) {
    calcu.style.top = `${e.offsetY}px`;
    calcu.style.left = `${e.offsetX}px`;
    calcu.style.pointerEvent = "none";
}