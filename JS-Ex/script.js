const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
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
		console.log(e.target);
		e.target.style.transform = 'scale(.5)';
	});
});
