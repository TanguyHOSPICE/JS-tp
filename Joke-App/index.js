/**https://api.blablagues.net/?rub=blagues */

//1-tester liens API ds url (les blagues se trouvent ds data.content)
//2-coller le lien ds fetch et recupérer les données ,les enregistrer ds une variable data et les afficher ds la console
fetch('https://api.blablagues.net/?rub=blagues')
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	});
