/* On selectionne les element html de classe montant et duree */
const montantInput = document.querySelector(".montant"); 
const dureeInput = document.querySelector(".duree");
/*On selectionne la valeur associé a mensualité  */
const mensualite = document.querySelector(".mensualite .value");
/*On selectionne le bouton simuler  */
const simulerBtn = document.querySelector(".simuler");
/*On extrait le reel montant a partir du chaine de caratctere extraite de la classe html montant 
et on fait la meme chose pour duree */
let montant = parseFloat(montantInput.value); 
let duree = parseInt(dureeInput.value);
/*On fixe les interets mensuels a 6% */
let interest = 6 / 100;
/*La fonction qui calcule les mensualité qu il faut payer avaec la formule approprié  */
const calculate = () => {
    let mens = montant * interest * (Math.pow(1 + interest, duree) /
                                    (Math.pow(1 + interest, duree) - 1 ));

    return mens;                                
};
/*La fonction qui mis à jour la valeur de mensualité dans la page html  */
const update = (mens) => {
    mensualite.innerHTML = Math.round(mens);
};
/*la fonction qui declenche le calcul de la mensualité et la mis a jour dans la page html  */
const init = (event) => {
    montant = parseFloat(montantInput.value); 
    duree = parseInt(dureeInput.value);
    let mens = calculate(); 
    event.preventDefault();
    update(mens);
    montantInput.value = "";
    dureeInput.value = "";
};

/*la ligne qui declenche la fonction init quand on clique sur le bouton simuler */
simulerBtn.addEventListener("click", init); 