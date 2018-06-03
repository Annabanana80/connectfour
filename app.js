//when you click the button, an alert will pop up and ask for the player's names
$(document).ready(function(){

	const connectFour = new ConnectFour('#board');

	connectFour.move = function(){
		$('#player').text(connectFour.player);
	}

	$('#playAgain').on('click', function(){
		setTimeout(function() { 
			location.reload() },1000);
	});

	$('#chColor').on('click',function(){
		var randomColor='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$('#board').css('background-color', randomColor);
		$('#gametitle').css('color', randomColor);
		$('button').css('background-color', randomColor);
	});
	
})

