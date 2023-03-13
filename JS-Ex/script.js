const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn1');
const btn2 = document.getElementById('btn2');
const response = document.querySelector('p');
//Priorité sélection: # > . > tag
//CLICK EVENT----------------------------------
//Apparition de la réponse
btn1.addEventListener('click', () => {
	response.classList.toggle('show-response');
	response.style.background = 'green';
});
btn2.addEventListener('click', () => {
	response.classList.toggle('show-response');
	response.style.background = 'red';
});

//MOUSE EVENTS -------------------------
const mousemove = document.querySelector('.mousemove');
//MOUSEMOVE
window.addEventListener('mousemove', (e) => {
	// console.log(e);
	mousemove.style.left = e.pageX + 'px';
	mousemove.style.top = e.pageY + 'px';
});
//Click long = MOUSEDOWN
window.addEventListener('mousedown', () => {
	//Scale change => le % aussi
	mousemove.style.transform = 'scale(2) translate(-25%, -25%)';
});
//Pas de Click = MOUSEUP
window.addEventListener('mouseup', () => {
	//Scale change => le % aussi
	mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
	mousemove.style.border = '2px solid teal';
});
//MOUSEENTER
questionContainer.addEventListener('mouseenter', () => {
	questionContainer.style.background = 'rgba(0,0,0,0.6)';
});
//MOUSEOUT
questionContainer.addEventListener('mouseout', () => {
	questionContainer.style.background = 'blue';
});
//MOUSEOVER
response.addEventListener('mouseover', () => {
	response.style.transform = 'rotate(2deg)';
});

//KEYPRESS EVENTS -----------(& AUDIO)--------------
const keyPressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');
//Intégrer un audio -ici le param (z) est le nom de l'audio-permet de mettre plusieurs music ds ring
const ring = (key) => {
	const audio = new Audio();
	audio.src = key + '.mp3';
	audio.play();
};

document.addEventListener('keypress', (e) => {
	// console.log(e);
	key.innerText = "' " + e.key + " '";
	if (e.key === 'h') {
		keyPressContainer.style.background = 'blue';
	} else {
		keyPressContainer.style.background = 'red';
	}
	if (e.key === 'z') ring(e.key);
});

//SCROLL EVENTS -------------------------
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
	//Pas besoin de 'e' car ac window.scrollY on a la valeur du scroll
	// console.log(window.scrollY);
	//Apparition nav qd scroll =>
	if (window.scrollY > 120) {
		nav.style.top = 0;
	} else {
		nav.style.top = '-50px';
	}
});

//FORM EVENTS------------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
let language = '';

inputName.addEventListener('input', (e) => {
	//Affiche ce qui est tapé ds l'input
	// console.log(e.target.value);
	pseudo = e.target.value;
	// console.log(pseudo);
});

select.addEventListener('input', (e) => {
	language = e.target.value;
	// console.log(language);
});

form.addEventListener('submit', (e) => {
	//Empêche le refresh de la page
	e.preventDefault();
	// console.log("c'est validé!");
	//pas la peine de déclarer les checkbox ou btn car reconnait l'id
	if (cgv.checked) {
		document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préférés : ${language}</h4>
        `;
	} else {
		alert('Veuillez accepter les CGV');
	}
});

//LOAD EVENT ----------------------------------------
window.addEventListener('load', () => {
	//Pratique pour lancer fonctions...etc
	console.log('Doc chargé !!');
});

//ForEach ----------------------------------------
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
	box.addEventListener('click', (e) => {
		// console.log(e.target);
		// e.target.style.transform = 'scale(.5)';
	});
});

//Bubbling => Param de Fin (de base eventListener en bubbling)----------------------
//Changement de l'ordre de lecture du navigateur
document.addEventListener('click', () => {
	console.log('Click 1 : bubbling !');
});

//Usecapture ---------------------
document.addEventListener(
	'click',
	() => {
		console.log('Click 2 : usecapture !');
	},
	true
);

//Stop Propagation --------------------------
/* Ex:event au click mais on ne veut pas que tous les élts se déclenchent (juste l'elt touché puis on art la propagation)*/

questionContainer.addEventListener('click', (e) => {
	// alert('Test : stop propagation !');
	// e.stopPropagation();
	//le usecapture précédent se déclenchera puis l'alert et après stoppera le reste (ici le click 1)
});

//Remove enventListener --------------------------
//Possibilité de retirer un event listener

//BOM = (objet:window)
//console.log('window.innerHeight : ' + window.innerHeight); //Hauteur fenêtre
//console.log('window.scrollY : ' + window.scrollY); //Niveau scroll vertical
//window.open('http://google.com', 'cours js', 'height=600 width=800'); //ouvre ou ferme:window.close() google.com sur recherche cours js avec se style: height=600 width=800

//Event adossé à window---------------
//ALERT
//window.alert('hello') = alert('hello')

//CONFIRM
//Donne le choix de confirmer ou d'annuler une action contrairement à alert
btn2.addEventListener('click', () => {
	confirm('Voulez vous confirmer la...suppression...validation...');
});

//PROMPT
// Permet au user de rentrer un Elts
let answer;

btn1.addEventListener('click', () => {
	let answer = prompt('Entrez votre nom');
	questionContainer.innerHTML += '<h3>Bravo ' + answer + '</h3>';
});

//SET TimeOut
setTimeout(() => {
	//instruction à exécuter
}, 'temps en millisecondes avant de déclencher');

//SET Intervall
setInterval(() => {
	//instruction à exécuter
}, 'temps en millisecondes déclenche toute les millisecondes');

//OU
let interval = setInterval(() => {
	//instruction à exécuter
}, 'temps en millisecondes déclenche toute les millisecondes');

//Pour stopper
document.body.addEventListener('click', () => {
	clearInterval(interval);
});

//location
console.log(location.href); //site ou l'on setrouve ou le user se trouve
console.log(location.host); //'nom' du site
console.log(location.pathname); //l'elt après le host
console.log(location.search); //l'elt après le search(?...)
console.log(location.replace('redirige vers liens'));

//Navigator
console.log(navigator.userAgent); //infos sur notre navigation (!privée)

//peux nous géocaliser sans passer par une API
//mdn: Geolocation.getCurrentPosition()
var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0,
};

function success(pos) {
	var crd = pos.coords;

	console.log('Votre position actuelle est :');
	console.log(`Latitude : ${crd.latitude}`);
	console.log(`Longitude : ${crd.longitude}`);
	console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
	console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

//Possibilité de se géolocaliser ou l'on veut
// navigateur => inspecter =>parametres => locations

//HISTORY
console.log(history);
window.history.back(); //revenir en arrière
history.go(-2); //retour 2 pages avant

//SET Property ---------------
window.addEventListener('mousemove', (e) => {
	nav.style.setProperty('--x', e.layerX + 'px');
	nav.style.setProperty('--y', e.layerY + 'px');
});
