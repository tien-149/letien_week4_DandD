(() => {
	//Select the element that you want to work with
	let theButton = document.querySelector("#buttonHolder img");
	window.addEventListener("load", changeHeaderText);

	function changeHeaderText() {
		document.querySelector("h1").textContent = "Hey threr from Java Scrip"
	}
	// set up the puzzle pieces and boards
	// event handling goes at the buttom
	theButton.addEventListener("click", changeHeaderText)
	//set up the puzzle pueces and boards
	
})();


(() => {
	window.addEventListener("load", changeTheP);

	function changeTheP() {
		document.querySelector("p").textContent = "OMG what i'm gonna do"
	}
	
})();