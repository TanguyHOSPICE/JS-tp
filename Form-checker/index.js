//identifier input
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

//4-Création des fonctions propres à chq input -on récupère la value
const pseudoChecker = (value) => {
  console.log(value);//vérif élt tapé
};

const emailChecker = (value) => {
  console.log(value);//vérif élt tapé
};

const passwordChecker = (value) => {
  console.log(value);//vérif élt tapé
};

const confirmChecker = (value) => {
  console.log(value);//vérif élt tapé
};


//2-j'y adosse un évt à chacun
inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    //3- console.log(e.target.id);// Vérification
    //5-fait appel au fonctions selon les cas
    switch (e.target.id) {
      case 'pseudo':
        pseudoChecker(e.target.value);//pass e.target.value pour nous renvoyer les élts 
        break;
      case 'email':
        emailChecker(e.target.value)
        break;
      case 'password':
        passwordChecker(e.target.value)
        break;
      case 'confirm':
        confirmChecker(e.target.value)
        break;
    
      default:null
        break;
    }
  });
});