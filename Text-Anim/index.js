const target = document.getElementById('target');

let wordsArray = ['développeur', 'photograph', 'junior'];
//On crée une identation pr se balader ds wordArray et ds chq Elts de wordArray
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
	const letter = document.createElement('span');
	target.appendChild(letter);

	letter.textContent = wordsArray[wordIndex][letterIndex];
	//remove les lettres après un certain tps
	setTimeout(() => {
		letter.remove();
	}, 2800);
};

const loop = () => {
	//Créé un setTimeout- "fait moi des lettres"
	setTimeout(() => {
		//Relance le tbl
		if (wordsArray >= wordsArray.length) {
			wordIndex = 0;
			letterIndex = 0;
			loop();
		}
		if (letterIndex < wordsArray[wordIndex].length) {
			createLetter();
			letterIndex++;
			loop();
		} else {
			wordIndex++;
			letterIndex = 0;
			//instaurer un délais avant de réécrire un mot
			setTimeout(() => {
				loop();
			}, 2800);
		}
	}, 60);
};

loop();
