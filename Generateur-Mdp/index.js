const pwdLength = document.getElementById('password-length');
const pwdDisplay = document.getElementById('display-password-length');

//On connecte les inputs range et sa valeur : password-length & display-password-length
pwdLength.addEventListener('input', 
  (e) => {
    pwdDisplay.value = e.target.value;
  })
  pwdDisplay.addEventListener('input', 
  (e) => {
    pwdLength.value = e.target.value;
  })

  /* 
  OU ds html ds input type range
  oninput="document.getElementById('display-password-length').value = this.value"
  */