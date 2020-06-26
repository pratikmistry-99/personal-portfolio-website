const TypeWriter = function(txtElement, words, wait = 2000){
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.index = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
}

TypeWriter.prototype.type = function(){
	//current index
	const i = this.index % this.words.length;
	// get full text of current word
	const fulltxt = this.words[i];

	//check if deleting
	if(this.isDeleting){
		//remove char
		this.txt = fulltxt.substring(0, this.txt.length - 1);
	}
	else{
		//add char
		this.txt = fulltxt.substring(0, this.txt.length + 1);
	}

	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
	
	let typeSpeed = 100;
	if(this.isDeleting){
		typeSpeed /= 2;
	}

	if(!this.isDeleting && this.txt === fulltxt){
		typeSpeed = this.wait;
		
		this.isDeleting = true;
	}
	else if(this.isDeleting && this.txt === '') {
		this.isDeleting = false;

		this.index++;
		typeSpeed = 200;
	}
	

	setTimeout(() => this.type(), typeSpeed);
}

document.addEventListener('DOMContentLoaded', init);

function init(){
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');

	new TypeWriter(txtElement, words, wait);
}