// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

window.addEventListener('scroll', (e) => {
	if (window.scrollY > 0) {
		navbar.style.height = '40px';
	} else if (window.scrollY === 0) {
		navbar.style.height = '90px';
	}
	if (window.scrollY > 233) {
		imgImprovise.style.transform = 'translateX(0px)';
		imgImprovise.style.opacity = 1;
	}
	if (window.scrollY >= 1150) {
		console.log(popup);
		popup.style.transform = 'translateX(0px)';
		popup.style.opacity = 1;
		closeBtn.addEventListener('click', () => {
			popup.remove();
		});
	}
	// console.log('innerheight : ' + window.innerHeight);
	// console.log('scrollY : ' + window.scrollY);
});
