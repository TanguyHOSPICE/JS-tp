/**API : https://www.themealdb.com/api/json/v1/1/search.php?s=duck */
//6-logique affichage des données dans le DOM
//6bis- déclaration de la variable qui affichera les données dans le DOM
const result = document.getElementById('result');
//9bis- déclaration de la variable form qui récupère le formulaire
const form = document.querySelector('form');
//12bis- déclaration de la variable qui récupère l'input
const input = document.querySelector('input');
//3-declaration box qui contiendra les données de l'API
let meals = [];
//----------
//2- fonction qui récupère les données de l'API et 14bis-on associe 1 paramètre à la fonction pour récupérer la valeur de l'input dans l'URL
const fetchMeals = async (search) => {
	//1-logique récupération des données et 5bis-await et 14bis-on associe 1 paramètre à la fonction pour récupérer la valeur de l'input dans l'URL
	await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
		.then((res) => res.json()) //recupere les données en json
		//1bis- .then((data) => console.log(data.meals)); //affiche les données dans la console
		.then((data) => {
			meals = data.meals;
		}); //4- envoie les données dans la variable meals
	console.log(meals); //5- affiche les données dans la console
};
//----------
//7-fonction qui affiche les données dans le DOM
const mealsDisplay = () => {
	//8-affichage de seulement 12 plats
	meals.length = 12;
	//9- boucle qui affiche les données dans le DOM avec chaque plat = meal
	result.innerHTML = meals
		.map(
			(meal) =>
				`
      <li class="card">
        <h2>${meal.strMeal}</h2>
        <p>${meal.strArea}</p>
        <img src="${meal.strMealThumb}" alt="photo ${meal.strMeal}" />
        <ul></ul>
      </li>
    `
		)
		.join(''); //9bis- join pour enlever les virgules
};
//----------
//12- écouteur d'événement sur l'input
input.addEventListener('input', (e) => {
	// console.log(e.target.value);
	//13- récupère la valeur de l'input et 14- appel de la fonction
	fetchMeals(e.target.value);
});
//10- écouteur d'événement sur le formulaire
form.addEventListener('submit', (e) => {
	//11- empêche le rechargement de la page
	e.preventDefault();
	//2bis- appel de la fonction et 14ter- on supprime fetchMeals().then(() => {mealsDisplay();}); pour éviter les doublons
	//7bis- appel de la fonction et 14ter
	mealsDisplay();
});
