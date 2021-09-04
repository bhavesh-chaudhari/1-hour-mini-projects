const hamburgerBtn = document.getElementById("hamburger-btn")
const mobile = document.getElementById("mobile")
const navbar = document.getElementById("navbar")

hamburgerBtn.addEventListener("click", ()=>{
    console.log("clicked");
    navbar.style.display = "block"
    mobile.style.display = "none"
})