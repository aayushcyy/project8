const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

document.addEventListener("mousemove", function (event) {
  const cursor = document.querySelector(".cursor");
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Move the cursor to the mouse position
  cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
});

function firstPageAnim() {
  var tl = gsap.timeline();
  tl.from(".nav", {
    y: "-10",
    opacity: 0,
    duration: 1.2,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1,
      stagger: 0.2,
      delay: -1,
    })
    .from(".hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
    });
}
firstPageAnim();

function circleChaptaKaro() {
  var yscale = 1;
  var xscale = 1;
  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;
  });
}

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mousemove", function (details) {
    console.log(details);
  });
});

//clock digital

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const isAm = hours < 12;
  const amPm = isAm ? "AM" : "PM";

  // Convert from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Add leading zeros to minutes and seconds if needed
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

  const timeString = `${hours}:${minutesStr}:${secondsStr} ${amPm}`;

  clock.textContent = timeString;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

//mail button
document.getElementById("emailButton").addEventListener("click", function () {
  window.location.href =
    "mailto:aayushcyy@gmail.com?subject=Inquiry&body=Hello, I would like to...";
});
