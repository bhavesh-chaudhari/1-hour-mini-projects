imageDiv = document.getElementById("img");
const contextMenu = document.getElementById("contextMenu");
const srcInput = document.getElementById("srcInput");
const btn = document.getElementById("btn");

const setImage = (sourceUrl) => {
  imageEl = document.createElement("img");
  imageEl.src = sourceUrl;
  imageEl.id = "image-instance";
  imageDiv.appendChild(imageEl);

  // Add context menu
  if (imageEl.addEventListener) {
    imageEl.addEventListener(
      "contextmenu",
      function (e) {
        getContextMenu(e);
        e.preventDefault();
      },
      false
    );
  } else {
    imageEl.attachEvent("oncontextmenu", function () {
      window.event.returnValue = false;
    });
  }

  srcInput.value = ""
};

setImage("https://source.unsplash.com/random");


const getContextMenu = (someEvent) => {
  someEvent.preventDefault();
  contextMenu.style.display = "block";
  if(someEvent.clientY < 500){
     contextMenu.style.left = `${someEvent.clientX}px`;
     contextMenu.style.top = `${someEvent.clientY}px`;
  }
  else{
    contextMenu.style.left = `${someEvent.clientX}px`;
    contextMenu.style.top = `${someEvent.clientY - 100 }px`;
  }
 
};

btn.addEventListener("click", () => changeImage());
const abbr = document.querySelector("abbr");

const changeImage = () => {
  imageDiv.innerHTML = "";
   abbr.innerHTML = srcInput.value;
   abbr.title = srcInput.value;
  setImage(srcInput.value);
  contextMenu.style.display = "none";
  document.getElementById('notify').innerHTML = "The Image was changed with new url"
  document.querySelector('p').style.display = "block"
  btn.style.display = "none";

};

btn.style.display = "none";

srcInput.addEventListener('input',()=>{
        if(srcInput.value == ""){
            btn.style.display = "none"
           
        }
        else{
            btn.style.display = "block"
        }
})

document.addEventListener('click',(e)=>{
    e.preventDefault()
   if(!e.target.classList.contains("block")){
        contextMenu.style.display = "none";
   }
})

const generateOption = document.getElementById('generate');
generateOption.addEventListener('click',()=>generateUrl())

const UNSPLASHURL = "https://source.unsplash.com/1600x900/?";

const generateUrl = ()=>{
  const imgArray = ["nature","water","sports","cartoon","beautiul","world","news","boy","girl","smile","cry","doll","movie","happy","sad","landscape","desert","ocean","river"]

  setUrl = UNSPLASHURL + imgArray[Math.floor(Math.random()*imgArray.length)];
  srcInput.value = setUrl;
  btn.style.display = "block";
}
