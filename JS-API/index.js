/**PRESENTATION Method xmlHttpRequest */

//2-fonction de callback
function reqListener() {
	console.log(this.responseText);
}

let req = new XMLHttpRequest(); //1-ou xhr
//3-Ecouteur lors chargemment requete
req.addEventListener('load', reqListener); // OU req.onload = reqListener;
