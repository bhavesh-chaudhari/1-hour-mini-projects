const APIURL = "https://icanhazdadjoke.com/search?page=";

const timer = document.getElementById('timer')
const question = document.getElementById('question')

var remainingTime = 0
// const setTimer = setInterval(function(){

//         // When the time is over
//         if(remainingTime >= 10){
//             timer.innerHTML = `<h1>Time Up !</h1>`;
//             clearInterval(setTimer);
//         }

//         // Start the countdown
//         else{
//             count = 10 - remainingTime;
//             timer.innerHTML = `<h1>${count}</h1>`;
//             remainingTime += 1;
//             console.log("lol");
//         }
// },1000)


const getJokes = async()=>{
    const resp = await fetch(APIURL, {
      headers: {
        Accept: "application/json",
      },
    });
    const jokes = await resp.json()
    myJokesArray = []
    for(i = 0;i < jokes.results.length;i++){
        myJokesArray.push(jokes.results[i].joke)
    }

    myOptionsArray = []
    

    question.innerHTML = `<h1>${myJokesArray[0]}</h1>`
    console.log(myJokesArray[0]);

    console.log(jokes)
}

getJokes()

const quiz = ()=>{
    
}