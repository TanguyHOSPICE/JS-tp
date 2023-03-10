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
