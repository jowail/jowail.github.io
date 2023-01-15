const pop = document.querySelector('.popping_cat');

pop.addEventListener('mousedown', () => {
  if (pop.src.match("assets/popping_cat1.png")) {
    pop.src = "assets/popping_cat2.png";
  }
});

pop.addEventListener('mouseup', () => {
  if (pop.src.match("assets/popping_cat2.png")) {
    pop.src = "assets/popping_cat1.png";
  }
});