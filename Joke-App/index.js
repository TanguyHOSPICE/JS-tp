/**https://api.blablagues.net/?rub=blagues */

//4-Déclare les elts du DOM
const headerJoke = document.getElementById('headerJoke');
const contentJoke = document.getElementById('contentJoke');
//console.log(headerJoke, contentJoke);//test

//8-créer une fonction pour afficher une blague
function getJoke() {
	//1-tester liens API ds url (les blagues se trouvent ds data.content)
	//2-coller le lien ds fetch et recupérer les données ,les enregistrer ds une variable data et les afficher ds la console
	fetch('https://api.blablagues.net/?rub=blagues')
		.then((response) => response.json())
		.then((data) => {
			//3-j'affiche l'en tête de la blague ds la console (je px le faire pas à pas :data puis data.data...)
			{
				//11-on déclare une variable pour eviter dat.data.content
				const joke = data.data.content;
				//5-on log les données pour voir ce qu'on a (en direct)
				//console.log(joke); //provisoire
				//6-on affiche les données ds le DOM
				headerJoke.textContent = joke.text_head;
				//!7-vu qu'il y a 3 types de réponse, on fait une ternaire pour afficher la bonne (boolean)
				contentJoke.textContent =
					/*si joke.text est différent de '' alors...
      car si on fait joke.text === true il ne fera pas la diff */
					joke.text !== '' ? joke.text : joke.text_hidden;
			}
		});
}

//9-on appelle la fonction
getJoke();
//10-on ajoute un event listener au click sur le body
document.body.addEventListener('click', getJoke);
