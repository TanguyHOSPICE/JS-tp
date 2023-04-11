/* API : https://randomuser.me/api/?results=24 */

//4-regrouper les users dans un tableau (box)
let usersData = [];

//3-Englober le fetch dans une fonction & 5-rend la fonction async
const fetchUsers = async () => {
	//2-recuperer les données de l'API
	await fetch('https://randomuser.me/api/?results=24')
		.then((res) => res.json())
		.then((data) => (usersData = data.results)); //2bis- console.log(data.results) & 4bis-ajouter les users dans le tableau usersData =

	console.log(usersData); //5bis- log usersData ac un await du fetch
};

//6-fonction afficher les users

//3bis-Appeler la fonction
fetchUsers();
