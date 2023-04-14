const obj = {
	//index : value
	pseudo: 'John',
	ville: 'Paris',
	admin: false,

	//Méthode = fonction dans un objet
	direBonjour() {
		console.log('Bonjour je suis ' + this.pseudo + ' et je suis de ' + this.ville); //this = obj ( désigne l'objet courant) on aurait pu écrire obj.pseudo
	},
	//OU
	direBonjour2: function () {
		console.log('Bonjour je suis ' + this.pseudo + ' et je suis de ' + this.ville);
	},
};

//Ajouter une propriété
//obj.age = 25; //obj['age'] = 25;
/*const obj = {
	pseudo: 'John',
	ville: 'Paris',
  age: 25,
}; */

//Modifier une propriété
//obj.pseudo = 'Jane'; //obj['pseudo'] = 'Jane';

//Supprimer une propriété
//delete obj.ville; //delete obj['ville'];

//checker si une propriété existe
//console.log(obj.hasOwnProperty('pseudo')); //true
//console.log('ville' in obj); //false
/*
//Parcourir un objet
for (let key in obj) {
	console.log(key, obj[key]);
}

//OU

for (let key of Object.keys(obj)) {
	console.log(key + ':' + obj[key]);
}
//Parcourir un objet ES6
for (let [key, value] of Object.entries(obj)) {
	console.log(key, value);
}
//Parcourir un objet ES6 avec destructuring
for (let [key, value] of Object.entries(obj)) {
	console.log(`${key} : ${value}`);
}

//OU

//Parcourir un objet avec forEach
Object.keys(obj).forEach(function (key) {
	console.log(key + ':' + obj[key]);
});
//Parcourir un objet avec forEach ES6
Object.keys(obj).forEach((key) => console.log(key + ':' + obj[key]));
//Parcourir un objet avec forEach ES6 + destructuring
Object.keys(obj).forEach((key) => console.log(`${key} : ${obj[key]}`));
*/
//METHODE NATIVE A JS
//Obtenir les clés d'un objet
const keys = Object.keys(obj);
//console.log(keys); //['pseudo', 'ville', 'admin', 'direBonjour', 'direBonjour2']

//Obtenir les valeurs d'un objet
const values = Object.values(obj);
console.log(values); //['John', 'Paris', false, ƒ, ƒ]

//Obtenir les clés et les valeurs d'un objet sous forme de tableau
const nestedArray = Object.entries(obj);
//console.log(nestedArray); //[['pseudo', 'John'], ['ville', 'Paris'], ['admin', false], ['direBonjour', ƒ], ['direBonjour2', ƒ]]

//Fusionner plusieurs objets
const obj1 = {
	taille: '1.80m',
	poids: '80kg',
};

const fusion = Object.assign(obj, obj1);
//console.log(fusion); //{pseudo: 'John', ville: 'Paris', admin: false, direBonjour: ƒ, direBonjour2: ƒ, taille: '1.80m', poids: '80kg'}

//Empecher la modification et l'ajout d'un objet
//const newObj = Object.freeze(obj);
//Empeche l'ajout et la suppression de propriété mais permet la modification
const newObj = Object.seal(obj);
newObj.pseudo = 'Test';
newObj.adresse = '42 av. du code';
//console.log(newObj); //{pseudo: 'Test', ville: 'Paris', admin: false, direBonjour: ƒ, direBonjour2: ƒ}

/**--------------Construire des Objets----------------- */
//Créer un objet avec une fonction Constructeur
function User(pseudo, ville) {
	this.pseudo = pseudo;
	this.ville = ville;

	this.getCity = function () {
		return this.pseudo + ' habite à ' + this.ville;
	};
}
//instancier un objet
const user1 = new User('John', 'Paris');
const user2 = new User('Jane', 'Lyon');
console.log(user1); //User {pseudo: 'John', ville: 'Paris'}
console.log(user2); //User {pseudo: 'Jane', ville: 'Lyon'}
console.log(user1.getCity()); //John habite à Paris

//Créer un objet avec une factory functions
function createUser(pseudo, ville) {
	return {
		pseudo,
		ville,
		getCity() {
			return this.pseudo + ' habite à ' + this.ville;
		},
	};
}

const user3 = createUser('Denis', 'Nantes');
console.log(user3); //{pseudo: 'Denis', ville: 'Nantes', getCity: ƒ}

//Créer un objet avec une class
class Utilisateur {
	constructor(pseudo, ville) {
		this.pseudo = pseudo;
		this.ville = ville;
	}
	sayTheCity = function () {
		return this.pseudo + ' habite à ' + this.ville;
	};
}

const user4 = new Utilisateur('Samia', 'Lyon');
console.log(user4); //Utilisateur {pseudo: 'Samia', ville: 'Lyon', sayTheCity: ƒ}

Utilisateur.prototype.sayHello = function () {
	return 'Bonjour je suis ' + this.pseudo;
};
console.log(user4);
console.log(user4.sayHello()); //Bonjour je suis Samia
