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
/* fetch('https://jsonplaceholder.typicode.com/posts')
	.then((res) => res.json())
	.then((data) => console.log(data)); //renvoi un tableau d'objets on choisit l'objet qu'on veut afficher avec son index
 */
//Tu vas me chercher un objet js : myHeaders
const myHeaders = new Headers();

const init = {
	method: 'GET', //CRUD (Create, Read, Update, Delete) (POST, GET, PUT, DELETE)
	headers: myHeaders,
	mode: 'cors', //Ce qui gère les transmissions de données exemple:fetch('http://facebook.com').then((res) => console.log(res)); donerra un mes d'erreur car le serveur ne permet pas de faire des requetes de ce type
	cache: 'default',
};

// fetch('data.json', init).then((res) => console.log(res));

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
/* 
document.querySelector('form').addEventListener('submit', () => {
	fetch('http://localhost:3000/users', init4).then(() => console.log('data envoyée'));
});
 */

/* ----- ASYNC ----- */
//1ier façon - setTimeout
/* setTimeout(() => {
	console.log("test d'async setTimeout après 2s");
}, 2000); */

//2ieme façon - promise
/* fetch('monLien').then((res) => {
	//tu vas me faire ... et quand tu auras fini tu me renvoi le résultat: res. ...
}); */

//3ieme façon - async ... await
// je déclare une fonction async et tu attendras chaque fois que tu auras un await
async function maFonction() {
	await fetch('monLien');

	await executeFunction;
	await console.log("test d'async await");
}
//OU
const fetchData2 = async () => {
	await fetch('monLien');
	await console.log("test d'async await");

	//executeFunction();
};

/**-----JSON------- */

//METHOD .json() => méthod qui s'auto-résout en renvoyant le body de la requete
fetch('data.json')
	.then((res) => res.json())
	.then((data) => {
		//stringify => converti un objet js en chaine de caractère
		let settings = JSON.stringify(data);
		// console.log(settings);
		//parse => converti json en objet js
		let settings2 = JSON.parse(settings);
		// console.log(settings2);
	});

/**-----Web API : API du navigateur------- */
// geolocation/canvas/history/client storage... (voir doc MDN)

//CLIENT STORAGE
//------------
//?localStorage/sessionStorage : stockage de données dans le navigateur
//----Capacité de stockage de 5Mo (sur firefox 10Mo) contrairement aux cookies qui ne peuvent pas dépasser 4Ko
//avantages données ne transitent pas sur le réseau (stockage côté client)
//Ds console => Application => Storage => Local Storage
//stockage de données en clé/valeur
localStorage.data = 'Je stock la data dans le local storage';
//Récupération de la donnée
// console.log(localStorage.data);
//OU a l'écran
// document.body.innerHTML = localStorage.data;
//Suppression de la donnée
// localStorage.removeItem('data');

//pour les objets
const obj = {
	name: 'Denis',
	age: 25,
	city: 'Paris',
};
// Il faut convertir l'objet en chaine de caractère car ne lit pas les objets:
// localStorage.user = obj; //ne fonctionne pas
localStorage.user = JSON.stringify(obj);
// transforme json en objet js
console.log(JSON.parse(localStorage.user));
