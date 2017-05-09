//when you click the button, an alert will pop up and ask for the player's names
$(document).ready(function(){
	$('#start').on('click', function(text){
	var first=prompt('Player 1, what is your name?');
	$('#playerOne').append().html(first);
	var second=prompt('Player 2, what is your name?');
	$('#playerTwo').append().html(second); //player's names will be appended to the board either to the sides of the start button or play again button
	
	});
	var $circles = $('td');
	var $playAgain =$('#playAgain');

	var counter=1;
	var playerOne=[];
	var playerTwo=[];
	
	function redOrBlack (){
		 if($(this).css().length === "rgba(0,0,0,0)"){
		 	var circleColor = parseInt($(this).attr(''));
		 	counter ++;

		 	if (counter %2===0){
		 		playerOne.push(circleColor);
		 		$(this).css('background-color', 'black');
		 		$(this).attr('class', 'playerOne');
		 		winner(playerOne).css('background-color', 'black');

		 	}
		 }
	}
	function winner (){

	}

	
})





//Player's name will light up when it is their turn


//when a circle is clicked, it is either red or black depending on whose turn it is

//player has to start from the bottom then move their way up
//top spots cannot be clicked unless the space below has already been played

//4 in a row, any direction wins

//play again button will clear board