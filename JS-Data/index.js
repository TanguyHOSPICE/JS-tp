let data = [
	{
		pseudo: 'Denis',
		age: 34,
		techno: ['Javascript', 'React', 'NodeJs'],
		admin: false,
	},
	{
		pseudo: 'Samia',
		age: 24,
		techno: ['Javascript', 'PHP', 'NodeJs'],
		admin: false,
	},
	{
		pseudo: 'Hubert',
		age: 34,
		techno: ['PHP', 'React', 'Symfony'],
		admin: true,
	},
];
/* **
LES STRUCTURES DE CONTROLES
** */
//-IF
/* if (data[0].age > data[1].age) {
	// console.log(`Log de if: ${data[0].pseudo} est plus agé que ${data[1].pseudo}`);
} else {
	//Valeur si faux
}
//-WHILE
let w = 0;
while (w < 5) {
	w++;
	// console.log(`Log de while: La valeur de w est de: ${w}`);
}
//-DO WHILE----Equivalent à while
let d = 0;
do {
	// d++;
	// console.log(`Log de DO while: La valeur de w est de: ${d}`);
} while (d < 5);
//-FOR OF
for (const user of data) {
	// document.body.innerHTML += `<li>${user.pseudo}</li>`;
}
//-FOR
for (i = 0; i < data.length; i++) {
	// console.log(data[i]);
	// console.log(data[i].techno);
	document.body.innerHTML += `<h2>${data[i].pseudo}</h2>`;
} */
//-SWITCH
// document.body.addEventListener('click', (e) => {
// 	// console.log(e);
// 	console.log("J'ai clické sur l'id : " + e.target.id);
// 	switch (e.target.id) {
// 		case 'javascript':
// 			javascript.style.background = 'red';
// 			break;
// 		case 'php':
// 			php.style.background = 'yellow';
// 			break;
// 		case 'python':
// 			python.style.background = 'green';
// 			break;

// 		default:
// 			null;
// 	}
// });

//-Method STRING
let string2 = 'Javascript est un langage orienté objet';

//-EVAL - Concatène
//console.log(eval('2' + 4)); //- 24
//PARSEINT - Transforme une string en number
//console.log(eval(parseInt('2') + 4)); //- 6
//console.log(typeof '42'); //- string
//console.log(typeof parseInt('42')); //- number
//isNaN
//console.log(isNaN(string2)); //- true
//INDEX OF
//console.log(string2.indexOf('langage')); //- 18 index du mot commence à...
//console.log(string2.indexOf('o')); //-26
//console.log(string2.indexOf('x')); //- -1 qd <0 = elt qu'il ne connait pas

//let newString = string2.slice(2);
//let newString2 = string2.slice(5, 17);
//SLICE
//console.log(newString); //- "vascript est un langage orienté objet" coupe à partir de l'index rentré
//console.log(newString2); //- "cript est un " coupe à partir de l'index rentré et s'art à l'autre index
//SPLIT
//console.log(string2.split('i')); //- Partout ou tu trouve un 'i tu coupe et mets ds un []
//REPLACE
//console.log(string2.replace('Javascript', 'PHP')); //-remplace 1ier arg par 2ieme

//-Method NUMBERS
//let number2 = 42.1234;
//let numberString = '42.25 est un chiffre';
//-to FIXED
//console.log(number2.toFixed(1)); //- 42.1 Nb chiffres après la virgule
//PARSE INT - Transforme une string en number
//console.log(parseInt(numberString)); //- 42 s'art au 1ier chiffre - ici "." n'est pas un chiffre
//PARSE FLOAT
//console.log(parseFloat(numberString)); //- 42.25 s'art au 1ier chiffre avec "."
//MATH
//console.log(Math.PI); //- 3.14
//console.log(Math.round(4.4)); //- 4
//console.log(Math.round(4.5)); //- 5
//console.log(Math.floor(4.9)); //- 4 -floor = fleur = sol
//console.log(Math.ceil(4.1)); //- 5 -ceil = ciel
//console.log(Math.pow(2, 2)); //- 4 - 2 à la puissance 2 OU 2**2
//console.log(Math.sqrt(16)); //- 4 - racine carré

//console.log(Math.floor(Math.random() * 50)); //- Chiffre aléatoire entre 0 et 50 si rajoute floor ce chiffre = entier

//-Method ARRAYS
let array3 = ['Javascript', 'PHP', 'Python'];
let array4 = ['Ruby', 'Solidity'];
let array5 = ['Symfony', 'Angular'];

let newArrayString = array3 + array4; //!- =string:'Javascript', 'PHP', 'Python','Ruby', 'Solidity'
let newArrayTbl = [array3, array4]; //!- =2 arrays: [['Javascript', 'PHP', 'Python'],['Ruby', 'Solidity']]

//CONCAT - fusionne tbl
let newArray = array3.concat(array4); //- ['Javascript', 'PHP', 'Python','Ruby', 'Solidity']
//SPREAD OPEARATOR - ...
let newArray2 = [...array3, ...array4]; //- ['Javascript', 'PHP', 'Python','Ruby', 'Solidity']

//JOIN
//console.log(array3.join(' ')); //- Casse le tbl et crée une string avac l'arg  ici " " : Javascript PHP Python

//SLICE
//console.log(array3.slice(2)); //- Coupe à le nb d'index rentré en arg : ['Python']
//console.log(newArray2.slice(2, 5)); //- Coupe au nb d'index rentré en 1ier arg et garde jusqu'au 2iem arg : ['Python','Ruby', 'Solidity']

//index OF
//console.log(array3.indexOf('Python')); //- 2

//forEACH
//newArray2.forEach((languages) => console.log(languages));

//EVERY
//console.log(array3.every((language) => language === 'PHP')); //- false - Est ce que ds chq TOURS du tbl il y a ici la string exact :PHP
//SOME
//console.log(array3.some((language) => language === 'PHP')); //- true - Est ce que ds chq TOURS du tbl il y a ici UNE string exact :PHP

//SHIFT
//let shift = array3.shift();
//console.log(shift); //-'Javascript' - permet de retirer le premier élément d'un tableau et de renvoyer cet élt
//console.log(array3); //-['PHP', 'Python']
//POP
//console.log(array3.pop()); //-['Python'] -supprime le dernier élément d'un tableau et retourne cet élt
//SPLICE
const restArray = array3.splice(0, 2, 'C++'); //-Remplace 2 élt a partir l'index 0 par 'C++'
//console.log(array3); //-['C++', 'Python']
const restArry2 = array4.splice(0, 1, ...array5);
//console.log(array4); //-['Symfony', 'Angular', 'Solidity']

//! IMPORTANT
let arrayNumber = [4, 74, 28, 12, 1];
//REDUCE
//console.log(arrayNumber.reduce((x, y) => x + y)); //- 119 - applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur
//PUSH - Ajout
arrayNumber.push('coucou');
//console.log(arrayNumber); //- [4, 74, 28, 12, 1, 'coucou']

//FILTER, SORT, MAP
//console.log(arrayNumber.filter((number) => number > 20)); //- [74, 28]
//console.log(arrayNumber.sort((a, b) => b - a));
document.body.innerHTML += arrayNumber
	.map((number) => `<li> ${number}</li>`)
	.join(' ');
