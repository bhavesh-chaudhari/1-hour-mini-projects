const mobile = document.getElementById("mobile")
const navbar = document.getElementById("navbar")
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", ()=>{
    navbar.style.transform = "translate(0,0)";
    mobile.style.display = "none"
    open.style.display = "none";
    close.style.display = "block"
    document.querySelector("body").style.overflowY = "hidden"
})

close.addEventListener("click",()=>{
    close.style.display = "none";
    open.style.display = "block"
    mobile.style.display = "block";
    navbar.style.transform = "translate(0,-100%)";
    document.querySelector("body").style.overflowY = "auto";
})