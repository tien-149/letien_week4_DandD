(() => {

	//sete up puzzle piece and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	// This is a string
	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector('.puzzle-board'),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll('.drop-zone')
	// function go in the middle
	function createPuzzlePieces(pictureIndex) {
		//generate puzzle piece for the left hand side
		// debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;
			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`

		initDrag();
	}

	//Drag and drop funtionality goes here
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				//e.preventDefault();
				console.log('draggin...');

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	//handle dragover and drop
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("You dragged over me");
		});
		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("You drop some sumpin on me");

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});

	function resetPuzzlePieces() {
		// empty the thumnail container
		piecesBoard.innerHTML = "";
		//changed code here
		dropZones.forEach(dropzone => dropzone.innerHTML = "");
		createPuzzlePieces(this.dataset.puzzleref);
	}
	//event handling down here
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces))

	createPuzzlePieces(0);

})();
