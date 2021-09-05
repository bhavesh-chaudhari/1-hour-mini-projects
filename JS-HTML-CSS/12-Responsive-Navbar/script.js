const mobile = document.getElementById("mobile")
const navbar = document.getElementById("navbar")
const open = document.getElementById("open");
const close = document.getElementById("close");
const content = document.getElementById("content")

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

function Reset(x) {
  if (x.matches) { // If media query matches
    mobile.style.display = "none"
    navbar.style.transform = "translate(0,0)";
    document.querySelector("body").style.overflowY = "auto";
    close.style.display = "none";
  } 
  else{
    mobile.style.display = "block";
    navbar.style.transform = "translate(0,-100%)";
    open.style.display = "block";
  }
}

var x = window.matchMedia("(min-width: 700px)")
Reset(x) 
x.addListener(Reset) 