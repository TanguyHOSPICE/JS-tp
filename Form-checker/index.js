//20-Déclare pr envoi form
const form = document.querySelector('form');

//identifier input
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
//12- déclare box pr récupérer les données entré
let pseudo, email, password, confirmPass;
//15- pointe la progress bar
const progressBar = document.getElementById('progress-bar');

//7-fonction affichage:
const errorDisplay = (tag, message , valid) =>{
  //8-rend le pointage dynamique
  const container = document.querySelector("."+ tag + "-container");
  const span = document.querySelector("."+ tag + "-container > span");
  //-9 Est ce valid ou non
  if (!valid) {
    //10-Si pas valid => add class & span mess dynamique
    container.classList.add('error');
    span.textContent = message;    
  } else {
    //11-Si valid => remove class & span mess dynamique
    container.classList.remove('error');
    span.textContent = message;  
  }
}


//4-Création des fonctions propres à chq input -on récupère la value
const pseudoChecker = (value) => {
  //console.log(value);//vérif élt tapé
  /*6-logique => fonction d'affichage:
  -pointer le container & le span du mess erreur
  -est ce que pseudo fait < 3 ou > 20 caractères & pseudo diff de 0 => add class error & afficher mess
  -si il y a 1 caractères spé =>  add class error & afficher mess
  -si saisie ok =>  remove class error & afficher mess vide*/
 /*  
  const pseudoContainer = document.querySelector(".pseudo-container");
  const span = document.querySelector(".pseudo-container > span");

  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    pseudoContainer.classList.add('error');
    errorDisplay.textContent ='Le pseudo doit faire entre 3 et 20 caractères';
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    pseudoContainer.classList.add('error');
    errorDisplay.textContent ='Le pseudo ne ldoit pas contenir de caractères spéciaux';
  } else {
    pseudoContainer.classList.remove('error');
    errorDisplay.textContent ='';
  } */
  
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(
      'pseudo', 
      'Le pseudo doit faire entre 3 et 20 caractères'
    );
    //13bis-on bloc la validation form si pseudo pas valid
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      'pseudo', 
      'Le pseudo ne doit pas contenir de caractères spéciaux'
    );
    //13bis-on bloc la validation form si pseudo pas valid
    pseudo = null;
  } else {
    errorDisplay(
      'pseudo', 
      '', 
      true
    );
    //13-incrémente les box de "saisie"
    pseudo = value;
  }
};

const emailChecker = (value) => {
  //console.log(value);//vérif élt tapé
  //14-
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide !");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  //console.log(value);//vérif élt tapé
  //17-Pr éviter d'empiler les class:
  progressBar.classList = "";
  //-16 (password doit contenir 1 maj/1min...)
  if (!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
  )) {
    errorDisplay(
      'password', 
      'Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial'
    );
    progressBar.classList.add('progressRed');
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add('progressBlue');
    errorDisplay('password', '', true);
    password = value;
  } else {
    progressBar.classList.add('progressGreen');
    errorDisplay('password', '', true);
    password = value;
  }
  //19-Si on saisie qqch ds password il faut que ça corresponde ac confirmPass
  if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  //console.log(value);//vérif élt tapé
  //18-
  if (value !== password) {
    errorDisplay('confirm', 'Les mots de passe ne correspondent pas');
    confirmPass = false;
  } else {
    errorDisplay('confirm', '', true);
    confirmPass = true;
  }
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
    
      default: null
        break;
    }
  });
});

//21-evt submit
form.addEventListener('submit', (e) =>{
  //pr empêcher le rafraichissement automatique
  e.preventDefault();
  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo,
      email,
      password,
    };
    console.log(data);
    //vide tous les inputs
    inputs.forEach((input) => (input.value = ""));
    //retire la progress bar
    progressBar.classList = "";

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription validée !");
  } else {
    alert("veuillez remplir correctement les champs");
  }

})