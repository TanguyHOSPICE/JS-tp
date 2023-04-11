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

//Tu vas me chercher un objet js : myHeaders
const myHeaders = new Headers();

const init = {
	method: 'GET', //CRUD (Create, Read, Update, Delete) (POST, GET, PUT, DELETE)
	headers: myHeaders,
	mode: 'cors', //Ce qui gère les transmissions de données exemple:fetch('http://facebook.com').then((res) => console.log(res)); donerra un mes d'erreur car le serveur ne permet pas de faire des requetes de ce type
	cache: 'default',
};

fetch('data.json', init).then((res) => console.log(res));

//Simulation d'un serveur : BIBLIOTHEQUE json-server (nodejs=>npm -v =>npm init -y =>npm i -g json-server =>creer un fichier db.json : {'posts:[]'//on y enverra des posts}=> json-server --watch db.json)
const init2 = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json', //(prend le token d'utilisation => le met ds cookies => le renvoi ds le header)
	},
	body: JSON.stringify({
		pseudo: 'Htcvhs',
		message: 'Je suis le mess 3 de Htcvhs',
	}), //transforme un JSON objet js en chaine de caractère
	mode: 'cors',
	credentials: 'same-origin',
};
/* 
document.querySelector('form').addEventListener('submit', () => {
	fetch('http://localhost:3000/posts', init2).then(() => console.log('data envoyée')); //renvoi les posts init2 à l'infini on peut l'englober dans un formulaire pr éviter ça
});
 */
//pour un delete
const init3 = {
	method: 'DELETE',
	headers: {
		'Content-Type': 'application/json',
	},
	mode: 'cors',
	credentials: 'same-origin',
};
/* 
document.querySelector('form').addEventListener('submit', () => {
	fetch('http://localhost:3000/posts/2', init3).then(() => console.log('data envoyée')); //efface le posts de avec id: 2
});
 */
//post user
const init4 = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		pseudo: 'Htcvhs',
		age: 25,
	}),
	mode: 'cors',
	credentials: 'same-origin',
};

document.querySelector('form').addEventListener('submit', () => {
	fetch('http://localhost:3000/users', init4).then(() => console.log('data envoyée'));
});
