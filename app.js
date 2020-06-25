const titles = ['Full-Stack Developer','IT Security Analyst'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

	if(count == titles.length){
		count = 0;
	}
	currentText = titles[count];
	letter = currentText.slice(0,++index);

	document.querySelector('.user-box .typing').textContent = letter;
	if(letter.length === currentText.length){
		count++;
		index = 0;
	}
	setTimeout(type, 200);
	

}());
