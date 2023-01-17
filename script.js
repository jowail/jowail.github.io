
// popping cat
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

// no drag
document.getElementById('gif').ondragstart = function () { return false; };
const images = document.getElementsByTagName("img");
for (let image of images) {
  image.ondragstart = function () { return false };
}

// scroll reveal
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("revealed");
    } else {
      reveals[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", reveal);

// smooth scroll
document.querySelectorAll('#move_in_page').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
