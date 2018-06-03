class ConnectFour {
	constructor(selector){
		this.ROWS=6;
		this.COLS=7;
		this.selector = selector;
		this.createGameBoard();
	}

	createGameBoard(){
		const $board = $(this.selector);

		for(let row = 0; row<this.ROWS; row++){
			const $row = $('<div>')
				.addClass('row');
				
			for(let col=0; col<this.COLS; col++){
				const $col = $('<div>')
				.addClass('col empty')
				$row.append($col)
			}
			$board.append($row);
		}
	}
}