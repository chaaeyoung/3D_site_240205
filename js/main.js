let circle = document.querySelector("#circle");
let article = circle.querySelectorAll("article");

for(let el of article){
    el.addEventListener("mouseenter", e => {

        circle.style.animationPlayState ="paused";
    });
    el.addEventListener("mouseleave", e => {
        circle.style.animationPlayState ="running";
    });
}