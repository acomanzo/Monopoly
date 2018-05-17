//javaScript stuff for monopoly

var player = {
	position: 0
};

var die1 = 0;
var die2 = 0;

//when user clicks on div, open the popup
function myFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
	rollDice();
}

function rollDice() {
	die1 = Math.floor((Math.random() * 6) + 1);
	die2 = Math.floor((Math.random() * 6) + 1);
	document.getElementById("die1-display").innerHTML = die1.toString(); //innerHTML changes the HTML within that element via ID
	document.getElementById("die2-display").innerHTML = die2.toString();
}

function updatePosition() {
	for(i = 0; i < 40; i++) { // a way to cycle through all board ID's
		document.getElementById("cell" + i)
	}
}
