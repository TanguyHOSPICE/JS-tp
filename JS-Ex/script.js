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
	ring(e.key);
});
