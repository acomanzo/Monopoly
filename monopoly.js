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
	if(player1.isTurn === true){
		var elem = document.getElementById("cell" + player1.position + "_1");
		elem.classList.remove("piece1");
		if(player1.position + die1 + die2 > 39){
			player1.position = player1.position + die1 + die2 - 40;
		} else {
			player1.position += (die1 + die2);
		}
		elem = document.getElementById("cell" + player1.position + "_1");
		elem.classList.add("piece1");
		player1.isTurn = false;
		player2.isTurn = true;
	}
	else if(player2.isTurn === true){
		var elem = document.getElementById("cell" + player2.position + "_2");
		elem.classList.remove("piece2");
		if(player2.position + die1 + die2 > 39){
			player2.position = player2.position + die1 + die2 - 40;
		} else {
			player2.position += (die1 + die2);
		}
		elem = document.getElementById("cell" + player2.position + "_2");
		elem.classList.add("piece2");
		player2.isTurn = false;
		player3.isTurn = true;
	}
	else if(player3.isTurn === true){
		var elem = document.getElementById("cell" + player3.position + "_3");
		elem.classList.remove("piece3");
		if(player3.position + die1 + die2 > 39){
			player3.position = player3.position + die1 + die2 - 40;
		} else {
			player3.position += (die1 + die2);
		}
		elem = document.getElementById("cell" + player3.position + "_3");
		elem.classList.add("piece3");
		player3.isTurn = false;
		player4.isTurn = true;
	}
	else if(player4.isTurn === true){
		var elem = document.getElementById("cell" + player4.position + "_4");
		elem.classList.remove("piece4");
		if(player4.position + die1 + die2 > 39){
			player4.position = player4.position + die1 + die2 - 40;
		} else {
			player4.position += (die1 + die2);
		}
		elem = document.getElementById("cell" + player4.position + "_4");
		elem.classList.add("piece4");
		player4.isTurn = false;
		player1.isTurn = true;
	}
}

function rollDice() {
	die1 = Math.floor((Math.random() * 6) + 1);
	die2 = Math.floor((Math.random() * 6) + 1);
	document.getElementById("die1-display").innerHTML = die1.toString(); //innerHTML changes the HTML within that element via ID
	document.getElementById("die2-display").innerHTML = die2.toString();
	updatePosition();
}

/*function toggleOnLoad() {
	for(parent = 1; parent < 40; parent++){
		for(child = 1; child <= 4; child++){
			var elem = document.getElementById("cell" + parent + "_" + child)
			elem.classList.toggle("piece1");
			elem.classList.toggle("piece2");
			elem.classList.toggle("piece3");
			elem.classList.toggle("piece4");
		}
	}
}*/
