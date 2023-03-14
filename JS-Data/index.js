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
document.body.addEventListener('click', (e) => {
	// console.log(e);
	console.log("J'ai clické sur l'id : " + e.target.id);
	switch (e.target.id) {
		case 'javascript':
			javascript.style.background = 'red';
			break;
		case 'php':
			php.style.background = 'yellow';
			break;
		case 'python':
			python.style.background = 'green';
			break;

		default:
			null;
	}
});
