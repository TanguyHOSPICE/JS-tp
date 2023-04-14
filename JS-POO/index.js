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

//Parcourir un objet
//for (let key in obj) {console.log(key, obj[key])}
//for (let key of Object.keys(obj)) {}
