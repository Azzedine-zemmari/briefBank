const montantInput = document.querySelector(".montant");
const dureeInput = document.querySelector(".duree");

const mensualite = document.querySelector(".mensualite .value");

const simulerBtn = document.querySelector(".simuler");

let montant = parseFloat(montantInput.value); 
let duree = parseFloat(dureeInput.value);
let interest = 6 / 100;

const calculate = () => {
    let mens = montant * interest * (Math.pow(1 + interest, duree) /
                                    (Math.pow(1 + interest, duree) - 1 ));

    return mens;                                
};
const update = (mens) => {
    mensualite.innerHTML = Math.round(mens);
};
const init = (event) => {
    montant = parseFloat(montantInput.value); 
    duree = parseFloat(dureeInput.value);
    let mens = calculate(); 
    event.preventDefault();
    update(mens);
    montantInput.value = "";
    dureeInput.value = "";
};


simulerBtn.addEventListener("click", init); 