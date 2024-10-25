var slides = document.getElementById("slides");

var content = [
    `<div class="container-box">
    <img class="img-paragraphe" src="images/marocain_resident_a_letranger.webp" alt="apropos" />
    <h4>Marocain du Monde</h4>
  </div>`,
    `<div class="container-box">
    <img class="img-paragraphe" src="images/tpe.webp" alt="apropos" />
    <h4>Trés petite entreprise</h4>
  </div>`,
    ` <div class="container-box">
    <img class="img-paragraphe" src="images/jeune_actif.webp" alt="apropos" />
    <h4>Prêts</h4>
  </div>`
];

var i = 0;
slides.innerHTML = content[i];

setInterval(() => {
    i = (i + 1) % content.length;
    slides.innerHTML = content[i];
}, 2000);

