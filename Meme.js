// form that accepts link to an Image
// form that accepts text for the top of the Meme
// form that accepts text for the bottom of the meme

const memeArea = document.querySelector('#meme-creations');
const imgBtn = document.querySelector('#insert-img-btn');
let statusMsg = document.querySelector('#status');

//Retrieve valid form inputs and send to createMemeCard function for HTML display.
imgBtn.addEventListener('click', function(e){
	e.preventDefault();
	const inputUrl = document.querySelector('#img-url-input').value;
	const inputTopText = document.querySelector('#top-text-input').value;
	const inputBottomText = document.querySelector('#bottom-text-input').value;
	if (inputUrl && (inputTopText || inputBottomText)) {
		// input validation: require image URL and either top or bottom text input
		const newMeme = { inputUrl, inputTopText, inputBottomText };
		createMemeCard(newMeme);
		clearForm();
	}
	else {
		displayMessage('Enter a valid URL and at least one text field.');
	}
});

function createMemeCard(meme){
	//Create 'meme card' div element, prepend to gallery section
	const memeCard = document.createElement('div');
	memeCard.setAttribute('class', 'creation-card');
	memeCard.innerHTML = `
        <img src="${meme.inputUrl}">
        <div class="top-middle meme-text">${meme.inputTopText}</div>
        <div class="bottom-middle meme-text">${meme.inputBottomText}</div>
        <div class="delete-meme">[ <a href="#">Delete</a> ]</div>
        `;
	//listen for delete
	const deleteBtn = memeCard.querySelector('a');
	deleteBtn.addEventListener('click', function(e){
		e.preventDefault();
		memeCard.remove();
	});
displayMemeCard(memeCard);
}

function clearForm(){
	displayMessage('');
	const formInputs = document.querySelectorAll('input');
	for (let input of formInputs) {
		input.value = '';
	}
}

function displayMemeCard(card){
	memeArea.prepend(card);
}

function displayMessage(msg){
	statusMsg.innerText = msg;
}