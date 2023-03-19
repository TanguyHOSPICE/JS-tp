//Décla pwd range
const rangeValue = document.getElementById('password-length');
const pwdDisplay = document.getElementById('display-password-length');
//Décla input Output
const pwdOutput = document.getElementById('password-output');
//Décla input checkbox
const dataLowercase = 'azertyuiopqsdfghjklmwxcvbn';
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = '0123456789';
const dataSymbols = '!:;,&\"(-_)?./'

//On connecte les inputs range et sa valeur : password-length & display-password-length
rangeValue.addEventListener('input', 
  (e) => {
    pwdDisplay.value = e.target.value;
  })
pwdDisplay.addEventListener('input', 
  (e) => {
    rangeValue.value = e.target.value;
  })

  /* 
  OU ds html ds input type range
  oninput="document.getElementById('display-password-length').value = this.value"
  */

const generatePassword = () => {
  //Creation tbl data pour enregistrer les élts choisis
  let data = [];
  //Création d'une liste de string qui accueillera le pwd
  let pwd = "";

  //Push ds tbl data les élts / ... pr rendre chq élts indépendants
  if(uppercase.checked) data.push(...dataUppercase);
  if(lowercase.checked) data.push(...dataLowercase);
  if(numbers.checked) data.push(...dataNumbers);
  if(symbols.checked) data.push(...dataSymbols)
  
  //Cas d'aucunes sélections
  if(data.length === 0){
    alert('Veuillez sélectionner des critères !')
    //ne va pas plus loin
    return;
  }

  //Loop sur le range value qui détermine la longueur du pwd
  for (i = 0; i < rangeValue.value; i++) {
    //pwd aléatoire
    pwd += data[Math.floor(Math.random() * data.length)];  
  }
//Injectle pwd à l'écran
  pwdOutput.value = pwd; 

  //Une fois généré on veut pouvoir copié le pwd
  navigator.clipboard.writeText(pwdOutput.value);

  //Changement texte
  generateButton.textContent = 'Copié !';
  //Retransformer le btn
  setTimeout(() =>{
  generateButton.textContent = 'Générer mot de passe';
  },2000)
}

generateButton.addEventListener('click', generatePassword);