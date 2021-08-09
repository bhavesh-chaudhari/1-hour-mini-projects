const bar = document.querySelector(".bar");
var timer = null;
heading = document.querySelector(".heading h1");

window.addEventListener("scroll", () => {
  var windowScrolled =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolledPercent = (windowScrolled / height) * 100;
  heading.innerHTML =
     "Scroll The Page to see the progress bar at bottom ";
  if(scrolledPercent > 1){
      heading.innerHTML =
        "You have Scrolled" +
        ` <span>${Math.round(scrolledPercent * 100) / 100}%</span> ` + "of the website";
  }
  bar.style.width = scrolledPercent + "%";
  bar.style.background = "blue";
  bar.style.opacity = "1";
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    bar.style.opacity = "0.3";
  }, 50);
});
