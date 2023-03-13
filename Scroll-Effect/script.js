// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
/* 
window.addEventListener('scroll', (e) => {
// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut
//NAVBAR Effect
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
 */
let playOnce = true; //pr que l'elt ne revienne pas à chq scroll - ici la popup

window.addEventListener('scroll', () => {
	//NAVBAR Effect
	if (window.scrollY > 50) {
		navbar.style.height = '45px';
	} else if (window.scrollY === 0) {
		navbar.style.height = '90px';
	}

	//Création '%' :Qd tu es à tel valeur de scroll de l'écran tu fais... si = 1 = 100%
	//valeur global (total) du body = document.body.offSetHeight
	//window.scrollY = niveau du scroll au niveau du haut de la bar de scroll
	// Si l'on ajout innerHeight au window.scrollY = niveau du scroll au niveau du BAS de la bar de scroll
	let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
	console.log(scrollValue);

	//IMG
	if (scrollValue > 0.45) {
		imgImprovise.style.transform = 'none';
		imgImprovise.style.opacity = 1;
	}

	//POP UP
	if (scrollValue > 0.85 && playOnce) {
		console.log(popup);
		popup.style.transform = 'none';
		popup.style.opacity = 1;
		playOnce = false;
	}
});

closeBtn.addEventListener('click', () => {
	popup.style.transform = 'translateX(500px)';
	popup.style.opacity = 1;
});
