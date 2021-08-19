const videoPlayer = document.getElementById("videoPlayer");
const question = document.getElementById("question");
const continueBtn = document.getElementById("continueBtn");
const review = document.getElementById("review");
const select = document.getElementById("select");
const setTimeBtn = document.getElementById("setTime");
const timeCount = document.querySelector(".timeCount");

videoPlayer.load();

const setOptions = () => {
  for (i = 0; i <= Math.floor(videoPlayer.duration); i++) {
    select.innerHTML += `<option value="${i}">show question at ${i}th second</option>`;
  }
};

videoPlayer.addEventListener('loadeddata',()=>setOptions())

const setTime = () => {
  console.log(select.value)
  timeCount.style.opacity = 1;
  timeCount.innerHTML = `<p>The Question will appear in ${select.value} second/s</p>`;
  videoPlayer.currentTime = 0;
  question.style.display = "none";
  videoPlayer.play();
  manageInterval()
};

setTimeBtn.addEventListener("click", () => setTime());

const showQuestion = (time) => {
  console.log(time, videoPlayer.currentTime);
  if (Math.floor(videoPlayer.currentTime) === time) {
    question.style.display = "block";
    videoPlayer.pause();
    clearInterval(myInterval);
  }
};

const manageInterval = ()=>{
  console.log("this is manage interval");
  if (Math.floor(videoPlayer.currentTime) > select.value && select.value != 0) {
    console.log("fall");
    clearInterval(myInterval);
  }
  if (Math.floor(videoPlayer.currentTime) < select.value) {
    console.log("call");
    myInterval = setInterval(
      () => showQuestion(parseInt(select.value, 10)),
      1000
    );
  }
}

videoPlayer.onplay = ()=>{
  manageInterval()
  if (select.value == 0 && videoPlayer.currentTime < 1) {
    question.style.display = "block";
    videoPlayer.pause();
    videoPlayer.currentTime = 1;
  }
}

continueBtn.addEventListener("click", () => continueVideo());

const continueVideo = () => {
  videoPlayer.play();
  question.style.display = "none";
};

const checkAnswer = () => {
  if (document.querySelector('input[value="mango"]:checked')) {
    review.innerHTML = "Yay ! your answer is correct !";
    continueBtn.style.display = "block";
    document.getElementById("submitBtn").style.display = "none";
  } else {
    review.innerHTML = "Your answer was wrong, Please try again !";
  }
};


// Bugs 
// 1. doesn't works at t = 0 (update : bug is almost fixed but we have to run the myInterval twice to work things normally)
// 2. controls by keyboard