let obstacles = document.querySelectorAll(".obstacle");
let bird = document.querySelector(".birdimage");

let xPosition = 0;
let yPosition = 0;

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowUp") {
    xPosition = 0;
    yPosition -= 50;

    bird.style.transform = `translateY(${yPosition}px)`;
    bird.style.transition = "0.3s all";

    bird.style.transition = "0.3s all";
  } else if (e.key === "ArrowDown") {
    xPosition = 0;
    yPosition += 50;
    bird.style.transform = `translateY(${yPosition}px)`;

    bird.style.transition = "0.3s all";

    bird.style.transition = "0.3s all";
  } else if (e.key === "ArrowRight") {
    yPosition = 0;
    xPosition += 50;
    bird.style.transform = `translateX(${xPosition}px)`;
    bird.style.transition = "0.3s all";

    bird.style.transition = "0.3s all";
  } else if (e.key === "ArrowLeft") {
    yPosition = 0;
    xPosition -= 50;
    bird.style.transform = `translateX(${xPosition}px)`;
    bird.style.transition = "0.3s all";
    getBoundingClientRect();
  }
});
