// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
/* 
const mouseMove = document.querySelector('.mouseMove');
const mouseMoveMd = document.querySelector('.mouseMoveMd');
const mouseMoveFs = document.querySelector('.mouseMoveFs');

window.addEventListener('mousemove', (e) => {
	// console.log(e);
	mouseMove.style.left = e.pageX + 'px';
	mouseMove.style.top = e.pageY + 'px';
	mouseMoveMd.style.left = e.pageX + 'px';
	mouseMoveMd.style.top = e.pageY + 'px';
	mouseMoveFs.style.left = e.pageX + 'px';
	mouseMoveFs.style.top = e.pageY + 'px';
});
 */
const mouses = document.querySelectorAll('.mouse');
window.addEventListener('mousemove', (e) => {
	mouses.forEach((mouse) => {
		// console.log(e);
		mouse.style.left = e.x + 'px';
		mouse.style.top = e.y + 'px';
	});
});
