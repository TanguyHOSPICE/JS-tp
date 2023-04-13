// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
// 4bis - declarer une variable pour afficher les cartes de chaque pays
const countriesContainer = document.querySelector('.countries-container');
// 3 - Passer les données à une variable
let countries = [];

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
const fetchCountries = async () => {
	await fetch('https://restcountries.com/v3.1/all')
		.then((res) => res.json())
		.then((data) => (countries = data[0])); //!provisoire

	// 3bis - logguer les données dans la variable countries
	console.log(countries); //!provisoire
};
// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
const displayCountries = () => {
	// 4ter - afficher a l'ecran les cartes de chaque pays et boucler sur les données
	countriesContainer.innerHTML = countries
		.map((country) => {
			return `
      <li class="card">

      </li>
    `;
		})
		.join('');
};

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

// ----------------- //
//appel de la fonction
fetchCountries();
displayCountries();
