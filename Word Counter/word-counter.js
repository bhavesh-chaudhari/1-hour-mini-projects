const input = document.getElementById('input');
const numberOfWordsPara = document.querySelector(".words p");
const numberOfLettersPara = document.querySelector(".letters p");
const numberOfEmailsPara = document.querySelector(".emails p");
const btn = document.getElementById('btn');
const reset = document.getElementById('reset');

const getCounts = ()=>{
     textContent = input.value;

     // Get Words
     let wordsArray = textContent.split(" ");
     numberOfWordsPara.innerHTML = wordsArray.filter(
       (word) => word != ""
     ).length;

     // Get Letters
     let numberOfLetters = textContent.replace(/ /g, "").length;
     numberOfLettersPara.innerHTML = numberOfLetters;

     // Get Emails
     let getNumberOfEmails = wordsArray.filter((word) => {
       var regex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return regex.test(word);
     });
     numberOfEmailsPara.innerHTML = getNumberOfEmails.length;
}

input.addEventListener('input',getCounts)


const APIURL = "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1";

const getBaconIpsum = async ()=>{
    const resp = await fetch(APIURL);
    const data = await resp.json()
    input.value = data[0]
    getCounts()
}

btn.addEventListener('click',getBaconIpsum)
reset.addEventListener('click',()=>{
    input.value = ""
    getCounts()
})
