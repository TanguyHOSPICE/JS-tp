const insertOneWord = () => {
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
};

insertOneWord();

// ------------------------------------
//-INJECTION TEXTES
// ------------------------------------

const insertAllWords = () => {
	const text = document.querySelector('p');

	//-Indentation
	let textWordIndex = 0;
	let textLetterIndex = 0;

	//Insérer les mots ds un tbl
	let wordsOfText = text.textContent.split(' ');

	//-Création lettres
	const createTextLetter = () => {
		const textLetter = document.createElement('span');
		insert.appendChild(textLetter);
		//J'insert ds span le mot ou lettre
		textLetter.textContent = wordsOfText[0][0];

		//Suppression des mots après un tps donné
		/* setTimeout(() => {
			textLetter.remove();
		}, 10000); */
	};
	createTextLetter();
};

insertAllWords();
