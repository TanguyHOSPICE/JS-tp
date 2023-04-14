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
console.log(keys); //['pseudo', 'ville', 'admin', 'direBonjour', 'direBonjour2']

//Obtenir les valeurs d'un objet
const values = Object.values(obj);
console.log(values); //['John', 'Paris', false, ƒ, ƒ]

//Obtenir les clés et les valeurs d'un objet sous forme de tableau
const nestedArray = Object.entries(obj);
console.log(nestedArray); //[['pseudo', 'John'], ['ville', 'Paris'], ['admin', false], ['direBonjour', ƒ], ['direBonjour2', ƒ]]
