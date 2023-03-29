$(document).ready(function(){

	let cardsArray = ["picture1.jpg", "picture2.jpg", "picture3.jpg", "picture4.jpg", "picture5.jpg", "picture6.jpg", "picture7.jpg", "picture8.jpg", "picture9.jpg", "picture10.jpg", "picture1.jpg", "picture2.jpg", "picture3.jpg", "picture4.jpg", "picture5.jpg", "picture6.jpg", "picture7.jpg", "picture8.jpg", "picture9.jpg", "picture10.jpg"];
	let randomCardsArray = new Array(cardsArray.length);

    // Randomize array
    for (i=0; i<cardsArray.length; i++) {
        let randomCards = Math.floor(Math.random()*20);
            
        if (cardsArray[randomCards] == ('')) {
            do {
                randomCards = Math.floor(Math.random()*20);
                randomCardsArray [i] = cardsArray[randomCards]; 
            }
            while (cardsArray[randomCards] == (''))
            cardsArray[randomCards] = ('');
        } else {
            randomCardsArray [i] = cardsArray[randomCards];
            cardsArray[randomCards] = ('');
        }     
    } 

	for (i=0; i<randomCardsArray.length; i++) {
		$('.container').append(`<div class="card" id="c${i}"></div>`)
	}
	$('.container').append('<div class="score">Turn counter: 1 </div>')

	let c0 = document.getElementById('c0');
	let c1 = document.getElementById('c1');
	let c2 = document.getElementById('c2');
	let c3 = document.getElementById('c3');
	let c4 = document.getElementById('c4');

	let c5 = document.getElementById('c5');
	let c6 = document.getElementById('c6');
	let c7 = document.getElementById('c7');
	let c8 = document.getElementById('c8');
	let c9 = document.getElementById('c9');

	let c10 = document.getElementById('c10');
	let c11 = document.getElementById('c11');
	let c12 = document.getElementById('c12');
	let c13 = document.getElementById('c13');
	let c14 = document.getElementById('c14');

	let c15 = document.getElementById('c15');
	let c16 = document.getElementById('c16');
	let c17 = document.getElementById('c17');
	let c18 = document.getElementById('c18');
	let c19 = document.getElementById('c19');

	c0.addEventListener("click", function() { reviewallCard(0); });
	c1.addEventListener("click", function() { reviewallCard(1); });
	c2.addEventListener("click", function() { reviewallCard(2); });
	c3.addEventListener("click", function() { reviewallCard(3); });
	c4.addEventListener("click", function() { reviewallCard(4); });
	c5.addEventListener("click", function() { reviewallCard(5); });
	c6.addEventListener("click", function() { reviewallCard(6); });
	c7.addEventListener("click", function() { reviewallCard(7); });
	c8.addEventListener("click", function() { reviewallCard(8); });
	c9.addEventListener("click", function() { reviewallCard(9); });
	c10.addEventListener("click", function() { reviewallCard(10); });
	c11.addEventListener("click", function() { reviewallCard(11); });
	c12.addEventListener("click", function() { reviewallCard(12); });
	c13.addEventListener("click", function() { reviewallCard(13); });
	c14.addEventListener("click", function() { reviewallCard(14); });
	c15.addEventListener("click", function() { reviewallCard(15); });
	c16.addEventListener("click", function() { reviewallCard(16); });
	c17.addEventListener("click", function() { reviewallCard(17); });
	c18.addEventListener("click", function() { reviewallCard(18); });
	c19.addEventListener("click", function() { reviewallCard(19); });

	let oneVisible = false;
	let turnCounter = 0;
	let visible_nr;
	let lock = false;
	let pairsLeft = 10;

	function reviewallCard(nr) {
		
		let opacityValue = $('#c'+nr).css('opacity');
		if (opacityValue != 0 && lock == false) {
			lock = true;
			$('#c'+nr).css('background-image', `url(img/${randomCardsArray[nr]})`);
			$('#c'+nr).addClass('cardA');
			$('#c'+nr).removeClass('card');
		
			if (oneVisible == false) {
				// first card
				oneVisible = true;
				visible_nr = nr;
				lock = false; 
			}

			else {
				//second card
				if(randomCardsArray[visible_nr] == randomCardsArray[nr]) {
					//pair of cards
					setTimeout(function() { hide2cards(nr, visible_nr) }, 750);
				}
				else {
					//missed
					setTimeout(function() { restore2cards(nr, visible_nr) }, 1000);
				}
				turnCounter++;
				$('.score').html('Turn counter: ' + turnCounter);
				oneVisible = false;
			}	
		}
	}

	function hide2cards(nr1, nr2) {
		$('#c'+nr1).css('opacity','0');
		$('#c'+nr2).css('opacity','0');
		pairsLeft--;
		
		if(pairsLeft == 0) {
			$('header').html('<h1>You win!<br>Done in '+ turnCounter+' turns!<br><span class="again" onclick="location.reload()">Again</span></h1>');
			$('.score').remove();
		}
		lock = false;
	}

	function restore2cards(nr1, nr2) {
		$('#c'+nr1).css('background-image', 'url(img/picture0.jpg)');
		$('#c'+nr1).addClass('card');
		$('#c'+nr1).removeClass('cardA');
		
		$('#c'+nr2).css('background-image', 'url(img/picture0.jpg)');
		$('#c'+nr2).addClass('card');
		$('#c'+nr2).removeClass('cardA');
		lock=false;
	}
});