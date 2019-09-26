let coverImage = [];
let coverQuote = [];
let i = 0;

coverImage[0] = 'url("../img/assortment-cabbage-cherry-tomatoes-1458694.jpg")';
coverImage[2] = 'url("../img/beans-corn-food-142520.jpg")';
coverImage[1] = 'url("../img/cherry-food-fresh-890507.jpg")';

coverQuote[0] = "We Serve Fresh Vegetables & Fruits";
coverQuote[1] = "100% Fresh & Orignial Food";
coverQuote[2] = "Stay Healthy & Safe";

function changeCoverImage() {
  //  document.querySelector('#img1').style.animation = 'smoothdisplay 1s infinity'

  document.querySelector("#img1").style.backgroundImage = coverImage[i];
  document.querySelector("#img1 h1").textContent = coverQuote[i];

  if (i < coverImage.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeCoverImage()", 3000);
}

function scroll() {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 700) {
    document.querySelector("#nav").style.padding = "15px";
  } else if (window.pageYOffset < 500) {
    document.querySelector("#nav").style.padding = "25px";
  }
  console.log(document.querySelector("#fruits"));
  const serviceContent = document.querySelector(".serviceContent");
  const fruits = document.querySelector("#fruits");
  const juice = document.querySelector("#juice");
  const beans = document.querySelector("#beans");
  const veg = document.querySelector("#veg");
  const dried = document.querySelector("#dried");
  const product = document.querySelector(".pd");
  let scPos = serviceContent.getBoundingClientRect().top;
  let fruitPos = fruits.getBoundingClientRect().top;
  let juicePos = juice.getBoundingClientRect().top;
  let beansPos = beans.getBoundingClientRect().top;
  let vegPos = veg.getBoundingClientRect().top;
  let driedPos = dried.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.3;
  let pdPos = product.getBoundingClientRect().top;
  // console.log(screenPosition)
  if (scPos < screenPosition) {
    const allSC = document.querySelectorAll(".serviceContent");
    allSC.forEach(e => {
      e.classList.add("item-visible");
    });
  }
  if (fruitPos < screenPosition) {
    fruits.classList.add("item-visible");
  }
  if (juicePos < screenPosition) {
    juice.classList.add("item-visible");
  }
  if (beansPos < screenPosition) {
    beans.classList.add("item-visible");
  }
  if (vegPos < screenPosition) {
    veg.classList.add("item-visible");
  }
  if (driedPos < screenPosition) {
    dried.classList.add("item-visible");
  }
  if (pdPos < screenPosition) {
    document.querySelectorAll(".pd").forEach(e => {
      e.classList.add("item-visible");
    });
  }
}

//Timer
let hrs = 77;
let mins = 60;
let sec = 0;
const timer = setInterval(() => {
  //console.log(timer)
  if (sec === 60) {
    mins -= 1;
    if (mins == 0) {
      if (hrs > 0) {
        hrs -= 1;
      }
      //mins = 60;
      if (hrs == 0) {
        mins = 0;
        sec = 0;
        document.querySelector('#hrs').innerHTML = "00 hrs"
        document.querySelector('#mins').innerHTML = "00 mins"
        document.querySelector('#sec').innerHTML = "00 secs"
        clearInterval(timer);
      } else {
        mins = 60;
        document.querySelector('#hrs').innerHTML = hrs + " hrs";
        document.querySelector('#mins').innerHTML = mins + " mins";
        sec = 0;

      }


    } else {
      document.querySelector("#hrs").innerHTML = hrs + ' hrs';
      document.querySelector('#mins').innerHTML = mins + ' mins';
      sec = 0;
    }

  } else {
    sec++;
    document.querySelector('#sec').innerHTML = sec + " secs";
  }

}, 1000)

window.addEventListener("scroll", scroll);
window.onload = changeCoverImage;