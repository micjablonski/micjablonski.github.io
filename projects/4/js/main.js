$(document).ready(function(){
	
	let tableHint = [		
	 	"It's an animal.",
		"It's an animal.",
		"It's an animal.",
		"It's a color.",
		"It's a color.",
		"It's a color.",
		"It's a furniture.",
		"It's a furniture.",
		"It's time of year.",
		"It's time of year.",
		"It's a toy.",
		"It's a toy.",
		"It's a country.",
		"It's a country.",
		"It's a city.",
		"It's a city.",
		"It's a continent.",
		"It's a continent.",
		"It's a river.",
		"It's a river.",

	];

	let tableTitle = [
		"Elephant",
		"Lion",
		"Dog",
		"Red",
		"Blue",
		"Green",
		"Table",
		"Chair",
		"Winter",
		"Spring",
		"Doll",
		"Car",
		"Poland",
		"Norway",
		"London",
		"Paris",
		"Africa",
		"Australia",
		"Nile",
		"Volga",
	];

	let randomTableTitle = Math.floor(Math.random()*20);		//Random number from 1 to 20
	let passwordTitle = tableTitle[randomTableTitle];
	let passwordHint = tableHint[randomTableTitle]; 
	let passwordLength = passwordTitle.length;
	passwordTitle = passwordTitle.toUpperCase();
	// console.log(passwordTitle);
	let wrongAnswer = 0;
	let passwordHidden = "";
	let yes = new Audio("sound/yes.wav");
	let no = new Audio("sound/no.wav");
	let win = new Audio("sound/win.wav")
	let lost = new Audio("sound/lost.wav")

	let lettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	for (i=0; i<passwordLength; i++) {
		passwordHidden = passwordHidden + "-";
	}

	$(".password-hint").text(passwordHint);
	$(".password-title").text(passwordHidden);

	function start()
	{
		let letter = "";
		for (i=0; i<=25; i++) {
			letter = lettersArray[i];
			$('.alphabet').append(`<div class="letter" id="${letter}" >${letter}</div>`);
		}
	}

	start();

	let passwordArray = [...passwordTitle];
	let passwordHiddenArray = [...passwordHidden];

	$('.letter').click(function() {
		let choiceLetter = this.innerHTML;
		let choiceSelector = this;
		let answer = false;
		let i = 0;

		for (let element of passwordArray) {
			if (choiceLetter == element) {
				answer = true
				passwordHiddenArray[i] = element;
			} 
			i++; 
		}
		passwordHidden = passwordHiddenArray.join("");
		
		if (answer) { 
			$(choiceSelector).css({
			'background-color': 'rgb(0,50,0)',
			'color': 'rgb(0,200,0)',
			'border': '3px solid rgb(0,200,0)',
			'cursor': 'default'
			});
		yes.play();
		$(".password-title").text(passwordHidden);
		$(this).off('click');

		} else {
			$(choiceSelector).css({
				'background-color': 'rgb(50,0,0)',
				'color': 'rgb(200,0,0)',
				'border': '3px solid rgb(200,0,0)',
				'cursor': 'default'
			});
			wrongAnswer ++;
			$('img').attr('src', `img/s${wrongAnswer}.jpg`);
			no.play();
			// console.log('Wrong answer: ' + wrongAnswer);
			$(this).off('click');
		}
		
		if (passwordHidden == passwordTitle) {
			$(".password-hint").text("Congratulations, You Won!");
			$('.alphabet').remove();
			$('img').attr('src', 'img/win.jpg');
			$(".container").append('<div class="again" onclick ="location.reload()">Once again</div>');
			win.play();
		} 
		if (wrongAnswer == 6) {
			$(".password-hint").text("I'm sorry You lost! The correct answer is:");	
			$('.password-title').text(passwordTitle);	
			$('.alphabet').remove();
			$(".container").append('<div class="again" onclick ="location.reload()">Once again</div>');	
			lost.play();
		};
	});
});