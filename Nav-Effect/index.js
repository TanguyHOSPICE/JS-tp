// Créer un événément au scroll

// Cacher la navbar si l'utilisateur commence à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
let lastScroll = 0;

window.addEventListener('scroll', () => {
	// console.log(window.scrollY); //on test
	if (window.scrollY < lastScroll) {
		// console.log(navbar); //On n'a pas besoin de déclarer car possède un #
		navbar.style.top = 0;
	} else {
		navbar.style.top = '-60px';
	}
	lastScroll = window.scrollY;
});
