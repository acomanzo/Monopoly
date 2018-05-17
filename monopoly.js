//javaScript stuff for monopoly

var player1 = {
	position: 0,
	color: "red",
	isTurn: true
};

var player2 = {
	position: 0,
	color: "blue",
	isTurn: false
};

var player3 = {
	position: 0,
	color: "yellow",
	isTurn: false
};

var player4 = {
	position: 0,
	color: "green",
	isTurn: false
};

var die1 = 0;
var die2 = 0;

//when user clicks on div, open the popup
function myFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
	rollDice();
}

function p1Color() { //test
	var elem = document.getElementById("cell1");
	elem.classList.toggle("p1");
}

function updatePosition() {
	//for(i = 0; i < 40; i++) { // a way to cycle through all board ID's
	//	document.getElementById("cell" + i)
	//}
	var elem = document.getElementById("cell0");
	elem.classList.toggle("player1");
}

function rollDice() {
	die1 = Math.floor((Math.random() * 6) + 1);
	die2 = Math.floor((Math.random() * 6) + 1);
	document.getElementById("die1-display").innerHTML = die1.toString(); //innerHTML changes the HTML within that element via ID
	document.getElementById("die2-display").innerHTML = die2.toString();
	if(player1.isTurn === true){
		player1.position += (die1 + die2);
		document.getElementById("cell" + position).innerHTML += <div class = "player1"></div>
	}
	
}
