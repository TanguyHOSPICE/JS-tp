const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');
//Priorité sélection: # > . > tag
//CLICK EVENT
questionContainer.addEventListener('click', () => {
	//Injecter du style
	questionContainer.style.background = 'linear-gradient(to right, #f0f2f0, #000c40)';
	//Injecter du style sur des propriété en 2 mots -(camelCase)
	questionContainer.style.borderRadius = 50 + '%';
	//Injection de plusieurs style sur le le même tag => add class/remove ou toggle
	questionContainer.classList.toggle('nom de la classe');
});
//Apparition de la réponse
btn1.addEventListener('click', () => {
	response.classList.toggle('show-response');
	response.style.background = 'green';
});
btn2.addEventListener('click', () => {
	response.classList.toggle('show-response');
	response.style.background = 'red';
});
