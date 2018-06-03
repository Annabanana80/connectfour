$(document).ready(function(){

	const connectFour = new ConnectFour('#board');


	$('#start').on('click', function(text){
	var first=prompt('Player 1, what is your name?');
	$('#playerOne').append().html(first);
	var second=prompt('Player 2, what is your name?');
	$('#playerTwo').append().html(second); //player's names will be appended to the board either to the sides of the start button or play again button
	
	});
	
	var playAgain =$('#playAgain');

	var counter=1;
	
})
