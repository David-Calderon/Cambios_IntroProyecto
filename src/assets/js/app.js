//Animación de movimiento por suceder
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Artículos
const sneaker = document.querySelector(".sneaker img");
const description = document.querySelector(".info h3");

//Evento de animación en movimiento
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animar entrada
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  sneaker.style.transform = "translateZ(200px) rotateZ(0deg)";
});
//Animación saliente
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});
