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

videoPlayer.addEventListener("loadeddata", () => setOptions());

const setTime = () => {
  timeCount.style.opacity = 1;
  timeCount.innerHTML = `<p>The Question will appear in ${select.value} second/s</p>`;
  // All our functionality for question appearance happens when videoPlayer.onplay() is fired
  // So, always pause video before playing because videoPlayer.play() won't fire videoPlayer.onplay if it is already playing and user might set new time while the video is running
  videoPlayer.pause();
  videoPlayer.play();
  videoPlayer.currentTime = 0;
  question.style.display = "none";
};

setTimeBtn.addEventListener("click", () => setTime());

const showQuestion = () => {
  // console.log("I am showQuestion function")
  if (videoPlayer.currentTime >= parseInt(select.value, 10)) {
    // console.log(videoPlayer.currentTime);
    question.style.display = "block";
    videoPlayer.pause();
    timeCount.innerHTML = "";
    videoPlayer.removeEventListener("timeupdate", startTimeUpdate);
  }
};

const startTimeUpdate = () => {
  {
    // console.log("timeupdate");
    if (
      videoPlayer.currentTime > parseInt(select.value, 10) - 1 &&
      videoPlayer.currentTime <= parseInt(select.value, 10) + 1
    ) {
      showQuestion();
    }
  }
};

videoPlayer.onplay = () => {
  // console.log("played");
  if (videoPlayer.currentTime <= parseInt(select.value, 10)) {
    videoPlayer.addEventListener("timeupdate", startTimeUpdate);
  }
  if(videoPlayer.currentTime > parseInt(select.value, 10)){
    videoPlayer.removeEventListener("timeupdate", startTimeUpdate);
  }
};

continueBtn.addEventListener("click", () => continueVideo());

const continueVideo = () => {
  if (parseInt(select.value, 10) === 0) {
    videoPlayer.currentTime = 0.1;
  }
  videoPlayer.play();
  question.style.display = "none";
  continueBtn.style.display = "none";
  review.style.display = "none";
  document.getElementById("submitBtn").style.display = "block";
};

const checkAnswer = () => {
  if (document.querySelector('input[value="mango"]:checked')) {
    review.innerHTML = "Yay ! your answer is correct !";
    review.style.color = "green";
    review.style.display = "block";
    continueBtn.style.display = "block";
    document.getElementById("submitBtn").style.display = "none";
  } else {
    review.innerHTML = "Wrong answer, Please try again !";
    review.style.color = "red";
    review.style.display = "block";
    question.style.display = "block";
  }
};