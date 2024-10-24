/* FONCTION POUR AFFICHER/MASQUER LE MOT DE PASSE DANS LE FORMULAIRE DE CONNEXION */
const passwordAccess = (loginPass, loginEye) => {
  // Sélectionner l'élément input (mot de passe) et l'icône oeil
  const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

  // Ajouter un événement au clic sur l'icône œil
  iconEye.addEventListener('click', () => {
     // Si l'input est de type "password", changer en "text", sinon revenir à "password"
     input.type === 'password' ? input.type = 'text' : input.type = 'password'

     // Basculer entre les icônes "œil ouvert" et "œil barré"
     iconEye.classList.toggle('ri-eye-fill')
     iconEye.classList.toggle('ri-eye-off-fill')
  })
}

// Appel de la fonction avec les ID de l'input mot de passe et de l'icône œil
passwordAccess('password', 'loginPassword')

/************/
/* FONCTION POUR AFFICHER/MASQUER LE MOT DE PASSE (CRÉATION DE COMPTE) */
const passwordRegister = (loginPass, loginEye) => {
  // Sélection des éléments input (mot de passe) et icône œil
  const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

  // Ajouter un événement au clic sur l'icône œil
  iconEye.addEventListener('click', () => {
     // Alterner entre "password" et "text" pour afficher/masquer le mot de passe
     input.type === 'password' ? input.type = 'text' : input.type = 'password'

     // Alterner entre les icônes "œil ouvert" et "œil barré"
     iconEye.classList.toggle('ri-eye-fill')
     iconEye.classList.toggle('ri-eye-off-fill')
  })
}

// Appel de la fonction avec les ID du champ mot de passe et de l'icône œil
passwordRegister('passwordCreate', 'loginPasswordCreate')

/********************/
/* AFFICHER/MASQUER FORMULAIRES CONNEXION ET CRÉATION DE COMPTE */
const loginAcessRegister = document.getElementById('loginAccessRegister'), // Section contenant les formulaires
      buttonRegister = document.getElementById('loginButtonRegister'), // Bouton pour créer un compte
      buttonAccess = document.getElementById('loginButtonAccess') // Bouton pour se connecter

// Affiche le formulaire "Créer un compte" en ajoutant la classe 'active'
buttonRegister.addEventListener('click', () => {
   loginAcessRegister.classList.add('active')
})

// Revient au formulaire "Connexion" en supprimant la classe 'active'
buttonAccess.addEventListener('click', () => {
   loginAcessRegister.classList.remove('active')
})


// Redirection vers index.html lors du clic sur le bouton "Se connecter"
loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Empêche le comportement par défaut du bouton (soumission du formulaire)
  window.location.href = 'index.html'; // Redirige vers index.html
});

