/**PRESENTATION Method xmlHttpRequest */

//2-fonction de callback
/* function reqListener() {
	console.log(this.responseText);
}

let req = new XMLHttpRequest(); //1-ou xhr
//3-Ecouteur lors chargemment requete
req.addEventListener('load', reqListener); // OU req.onload = reqListener;
//recherche des données sur elts distant ici data.txt
req.open('GET', 'data.txt', true);
//recherche des données sur elts distant ici data.json
//req.open('GET', 'data.json', true); //renvoie l'objet json
//recherche des données sur elts distant ici url
//req.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); //renvoie l'objet json
//4-envoi de la requete
req.send(); */

/**--------------FETCH--(Va chercher)--------------- */
//1- fetch
/* fetch('monLien', 'monObjet')
	//2-then (renvoie une promesse)
	.then(
		//renvoi forcément en 1er parametre le contenu de la reponse
		function (res) {
			//res
			console.log(res);
		}
	)
	//3-catch (renvoie une promesse)
	.catch(
		//renvoi forcément en 1er parametre l'erreur (si il y en a une erreur)
		(err) => {
			console.log(err);
		}
	);
 */
//Exemple Théorique:
/* fetch('https://api.blablagues.net/?rub=blagues')
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); */

/* fetch('data.txt').then((res) => console.log(res));
//pour lire le contenu de data.txt : res.text()
fetch('data.txt')
	//transforme le contenu de data.txt en texte
	.then((res) => res.text())
	//renvoi la resp de ce qui lui a été demandé au dessus (res.text())
	.then((data) => console.log(data));
 */

//json
fetch('https://jsonplaceholder.typicode.com/posts')
	.then((res) => res.json())
	.then((data) => console.log(data)); //renvoi un tableau d'objets on choisit l'objet qu'on veut afficher avec son index
