const counterDisplay = document.querySelector('h3');
let counter = 0;
const bubbleMaker = () => {
	const bubble = document.createElement('span');
	//J'injecte un <span> ds le body
	document.body.appendChild(bubble);
	//CSS : Add class + JS
	bubble.classList.add('bubble');
	//Math.random() pour générer un chiffre aléatoire -ici entre 100 et  300
	const size = Math.random() * 200 + 50 + 'px';
	//Injecte style bubble
	bubble.style.width = size;
	bubble.style.height = size;

	bubble.style.top = Math.random() * 100 + '%';
	bubble.style.left = Math.random() * 100 + '%';

	//CSS : opacity & anim & var ds keyframes
	//inject var et son contenue
	//var pour plus et moins aléatoire
	const minusPlus = Math.random() > 0.5 ? 1 : -1;
	bubble.style.setProperty('--left', Math.random() * 100 * minusPlus + '%');

	//destruction bulle au clic et incrementation counter
	bubble.addEventListener('click', () => {
		counter++;
		counterDisplay.textContent = counter;
		bubble.remove();
	});

	//setTimeout pour effacer bubbles ttes les 8000
	setTimeout(() => {
		bubble.remove();
	}, 8000);
};

//setInterval qui appel la fonction touts les 300 mil/ms
setInterval(bubbleMaker, 3000);
