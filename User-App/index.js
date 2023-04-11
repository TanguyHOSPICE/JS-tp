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

	//7-fonction pour les dates avec un parametre date que l'on veut changer,la method toLocaleDateString() pour changer le format de la date
	const dateParser = (date) => {
		let newDate = new Date(date).toLocaleDateString('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		return newDate;
	};

	//8-fonction pour calculer le nombre de jours depuis l'inscription
	const daysSince = (date) => {
		//date du jrs
		let today = new Date();
		let todayTimestamp = Date.parse(today);

		let timestamp = Date.parse(date);
		//soustraire la date d'inscription de la date du jour et diviser par 8.64e7 pour avoir le nb de jours
		return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
	};

	document.body.innerHTML = usersData
		.map(
			//chq tour de boucle, on recupere un user ds une card
			(user) =>
				`
      <div class="card">
        <img src="${user.picture.large}" alt="photo de ${user.name.first}" />
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
        <em>Membre depuis : ${daysSince(user.registered.date)} jours</em>
      </div>  
      `
		)
		.join(''); //join() pour enlever les virgules
};

//appeler la fonction
displayUsers();
