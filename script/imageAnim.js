(() => {

	//sete up puzzle piece and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector('.puzzle-board'),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");
	// function go in the middle
	function createPuzzlePieces(pictureIndex) {
		//generate puzzle piece for the left hand side
		// debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;
			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`
	}

	function resetPuzzlePieces() {
		// empty the thumnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref);
	}
	//event handling down here
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces))

	createPuzzlePieces(0);

})();
