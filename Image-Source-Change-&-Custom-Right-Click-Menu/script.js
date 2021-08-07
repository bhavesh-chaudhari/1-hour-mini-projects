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
      alert("You've tried to open context menu");
      window.event.returnValue = false;
    });
  }

  srcInput.value = ""
};

setImage("https://source.unsplash.com/random");


const getContextMenu = (someEvent) => {
  someEvent.preventDefault();
  
  contextMenu.style.display = "block";
  contextMenu.style.left = `${someEvent.clientX}px`;
  contextMenu.style.top = `${someEvent.clientY}px`;
 
};

btn.addEventListener("click", () => changeImage());

const changeImage = () => {
  imageDiv.innerHTML = "";
  setImage(srcInput.value);
  contextMenu.style.display = "none";
  document.getElementById('notify').innerHTML = "The Image was changed with new url"
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

document.addEventListener('click',()=>{
    contextMenu.style.display = "none";
})