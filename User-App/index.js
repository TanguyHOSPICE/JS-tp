/* API : https://randomuser.me/api/?results=24 */

//4-regrouper les users dans un tableau (box)
let usersData = [];

//3-Englober le fetch dans une fonction & 5-rend la fonction async
const fetchUsers = async () => {
	//2-recuperer les données de l'API
	await fetch('https://randomuser.me/api/?results=24')
		.then((res) => res.json())
		.then((data) => (usersData = data.results)); //2bis- console.log(data.results) & 4bis-ajouter les users dans le tableau usersData =

	console.log(usersData[0]); //5bis- log usersData ac un await du fetch
};

//6-fonction afficher les users la rendre async pr afficher le map
const displayUsers = async () => {
	//3bis-Appeler la fonction & awwait le fait de chercher les users
	await fetchUsers();

	document.body.innerHTML = usersData
		.map(
			//chq tour de boucle, on recupere un user ds une card
			(user) =>
				`
      <div class="card">
        <img src="${user.picture.large}" alt="photo de ${user.name.first}" />
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${user.dob.date}</p>
        <em>Membre depuis : ${user.registered.date} jours</em>
      </div>  
      `
		)
		.join(''); //join() pour enlever les virgules
};

//appeler la fonction
displayUsers();
