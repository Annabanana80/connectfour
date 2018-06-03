class ConnectFour {
	constructor(selector){
		this.ROWS=6;
		this.COLS=7;
		this.player = 'red';
		this.gameOver = false;
		this.move = function(){};
		this.selector = selector;
		this.createGameBoard();
	}
	
	createGameBoard(){
		const $board = $(this.selector);
		const that = this;

		for(let row = 0; row<this.ROWS; row++){
			const $row = $('<div>')
				.addClass('row');
				
			for(let col=0; col<this.COLS; col++){
				const $col = $('<div>')
				.addClass('col empty')
				.attr('data-col', col)
				.attr('data-row', row);
				$row.append($col);
			}
			$board.append($row);
		}

		function findPrevEmptyCell(col){
			const cells = $(`.col[data-col='${col}']`);
			for (let i=cells.length -1; i>=0; i--){
				const $cell = $(cells[i]);
				if($cell.hasClass('empty')){
					return $cell;
				}
			}
			return null;
		}

		$board.on('mouseenter','.col.empty', function(){
			if(that.gameOver) return;
			const col = $(this).data('col');
			const $prevEmptyCell = findPrevEmptyCell(col);
			$prevEmptyCell.addClass(`play-${that.player}`);
			
		});

		$board.on('mouseleave', '.col', function(){
			$('.col').removeClass(`play-${that.player}`);
		});

		$board.on('click', '.col.empty', function(){

			const col = $(this).data('col');
			const row = $(this).data('row');
			const $prevEmptyCell = findPrevEmptyCell(col);
			$prevEmptyCell.removeClass('empty');
			$prevEmptyCell.addClass(that.player);
			$prevEmptyCell.data('player', that.player);

			const win = that.winner($prevEmptyCell.data('row'), $prevEmptyCell.data('col'));
			
			if (win){
				that.gameOver = true;
				alert(`You win ${that.player}!`);
				$('.col.empty').removeClass('empty');
				return;
			}

			that.player = (that.player ==='red') ? 'black' : 'red';
			if(that.player === 'red'){
				$('#player').css('color','red');
			}else{
				$('#player').css('color','black');
			}
			that.move();
		});
	}
	winner(row, col){

		const that = this;

		function getCell(i, j){
			return $(`.col[data-row='${i}'][data-col='${j}']`);
		}

		function chDir(dir){
			let total = 0;
			let i = row + dir.i;
			let j = col + dir.j;
			let $next = getCell(i,j);

			while (i>=0 && 
				i<that.ROWS && 
				j<that.COLS && 
				$next.data('player')===that.player){
				total++;
				i += dir.i;
				j += dir.j;
				$next = getCell(i, j);
			}
			return total;
			console.log(total);
		}

		function chWinner(dirA, dirB){
			const total = 1 +
			chDir(dirA) +
			chDir(dirB);

			if(total >=4){
				return that.player;
			}else{
				return null;
			}
		}

		function chVert(){
			return chWinner({i: -1, j: 0},{i:1, j: 0});
		}
		function chHor(){
			return chWinner({i: 0, j: -1},{i:0, j: 1});
		}
		function chDiagBT(){
			return chWinner({i:1, j:-1},{i:1, j:1});
		}
		function chDiagTB(){
			return chWinner({i:1, j:1}, {i:-1, j:-1});
		}
		return chVert() || chHor() || chDiagBT() || chDiagTB();
	}
	
}

