// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
// 4bis - declarer une variable pour afficher les cartes de chaque pays
const countriesContainer = document.querySelector('.countries-container');
const result = document.querySelector('#result');
// 5bis - declarer une variable pour récupérer ce qui est tapé dans l'input
const inputSearch = document.getElementById('inputSearch');
// 6bis - declarer une variable pour récupérer ce qui est tapé dans l'inputRange
const inputRange = document.getElementById('inputRange');
// 6ter - declarer une variable pour lier l'inputRange et le rangeValue (input & span)
const rangeValue = document.getElementById('rangeValue');
// 3 - Passer les données à une variable
let countriesData = [];

// 4quater - Créer une fonction pour capitaliser la première lettre du nom du pays
const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
const fetchCountries = async () => {
	await fetch('https://restcountries.com/v3.1/all')
		.then((res) => res.json())
		// 3bis - Récupérer les données de l'API ATTENTION: plusieurs lignes mettre des accolades
		.then((data) => {
			// 3bis - logguer les données de la variable data
			//console.log(data); //!provisoire
			// 3ter - passer les données à la variable countriesData
			countriesData = data;
			//3quater - afficher les données dans la console
			console.log(countriesData); //!provisoire
		});
	// 4bis - appeler la fonction d'affichage
	displayCountries();
};
// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
const displayCountries = () => {
	// 4ter - afficher a l'ecran les cartes de chaque pays et boucler sur les données
	result.innerHTML = countriesData
		.filter((country) =>
			country.translations.fra.common.toLowerCase().includes(inputSearch.value.toLowerCase())
		) // 5 - récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données avec la methode includes et toLowerCase lors de la saisie // coutry.name.includes(inputSearch.value);
		.slice(0, inputRange.value) // 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)
		.map((country) => {
			return `
        <li class="card">
          <img src="${country.flags.svg}" alt=" drapeau ${country.translations.fra.common}" />
          <h2>${capitalizeFirstLetter(country.translations.fra.common)}</h2>
          <p><strong>Capital:</strong> ${country.capital}</p>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p>
            <strong>Region:</strong> ${country.region} 
            <br> 
            <strong>Subregion:</strong> ${country.subregion}
          </p>    
        </li>
      `;
		})
		.join('');
};

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

// ----------------- //
// 2bis -appel de la fonction au chargement de la page
window.addEventListener('load', fetchCountries);
// 5bis - écouter l'input et récupérer ce qui est tapé dans l'input
inputSearch.addEventListener('input', displayCountries);
// 6bis - écouter l'inputRange et récupérer ce qui est choisi dans l'inputRange
inputRange.addEventListener('input', () => {
	displayCountries();
	rangeValue.textContent = inputRange.value; //6ter - Lier l'inputRange et le rangeValue (input & span)
});
