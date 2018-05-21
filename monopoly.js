//javaScript stuff for monopoly

var player1 = {
	position: 0,
	color: "red",
	isTurn: true,
	inJail: false
};

var player2 = {
	position: 0,
	color: "blue",
	isTurn: false,
	inJail: false
};

var player3 = {
	position: 0,
	color: "yellow",
	isTurn: false,
	inJail: false
};

var player4 = {
	position: 0,
	color: "green",
	isTurn: false,
	inJail: false
};

var kentuckyAvenue = {
	
};

var die1 = 0;
var die2 = 0;
var doublesRolled = 0;

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
		var oldElem = document.getElementById("cell" + player1.position + "_1");
		oldElem.classList.remove("piece1");
		if(player1.position + die1 + die2 > 39){
			player1.position = player1.position + die1 + die2 - 40;
		} else {
			player1.position += (die1 + die2);
		}
		var newElem = document.getElementById("cell" + player1.position + "_1");
		newElem.classList.add("piece1");
		if(die1 === die2){
			doublesRolled++;
			if(doublesRolled === 3){
				alert("You rolled 3 doubles! You're going to jail!");
				player1.inJail = true;
				player1.position = 10;
				newElem.classList.remove("piece1");
				newElem = document.getElementById("cell10_1");
				newElem.classList.add("piece1");
				
				player1.isTurn = false;
				if(player2.inJail === false){
					player2.isTurn = true;
				} else if(player3.inJail === false){
					player3.isTurn = true;
				} else if(player4.inJail === false){
					player4.isTurn = true;
				} else {
					player1.isTurn = true;
				}
			} else {
				alert("You rolled doubles! Roll again.");
			}
		} else {
			player1.isTurn = false;
			if(player2.inJail === false){
				player2.isTurn = true;
			} else if(player3.inJail === false){
				player3.isTurn = true;
			} else if(player4.inJail === false){
				player4.isTurn = true;
			} else {
				player1.isTurn = true;
			}
		}
	}
	else if(player2.isTurn === true){
		var oldElem = document.getElementById("cell" + player2.position + "_2");
		oldElem.classList.remove("piece2");
		if(player2.position + die1 + die2 > 39){
			player2.position = player2.position + die1 + die2 - 40;
		} else {
			player2.position += (die1 + die2);
		}
		var newElem = document.getElementById("cell" + player2.position + "_2");
		newElem.classList.add("piece2");
		if(die1 === die2){
			doublesRolled++;
			if(doublesRolled === 3){
				alert("You rolled 3 doubles! You're going to jail!");
				player2.inJail = true;
				player2.position = 10;
				newElem.classList.remove("piece2");
				newElem = document.getElementById("cell10_2");
				newElem.classList.add("piece2");
				
				player2.isTurn = false;
				if(player3.inJail === false){
					player3.isTurn = true;
				} else if(player4.inJail === false){
					player4.isTurn = true;
				} else if(player1.inJail === false){
					player1.isTurn = true;
				} else {
					player2.isTurn = true;
				}
			} else {
				alert("You rolled doubles! Roll again.");
			}
		}  else {
			player2.isTurn = false;
			if(player3.inJail === false){
				player3.isTurn = true;
			} else if(player4.inJail === false){
				player4.isTurn = true;
			} else if(player1.inJail === false){
				player1.isTurn = true;
			} else {
				player2.isTurn = true;
			}
		}
	}
	else if(player3.isTurn === true){
		var oldElem = document.getElementById("cell" + player3.position + "_3");
		oldElem.classList.remove("piece3");
		if(player3.position + die1 + die2 > 39){
			player3.position = player3.position + die1 + die2 - 40;
		} else {
			player3.position += (die1 + die2);
		}
		var newElem = document.getElementById("cell" + player3.position + "_3");
		newElem.classList.add("piece3");
		if(die1 === die2){
			doublesRolled++;
			if(doublesRolled === 3){
				alert("You rolled 3 doubles! You're going to jail!");
				player3.inJail = true;
				player3.position = 10;
				newElem.classList.remove("piece3");
				newElem = document.getElementById("cell10_3");
				newElem.classList.add("piece3");
				
				player3.isTurn = false;
				if(player4.inJail === false){
					player4.isTurn = true;
				} else if(player1.inJail === false){
					player1.isTurn = true;
				} else if(player2.inJail === false){
					player2.isTurn = true;
				} else {
					player3.isTurn = true;
				}
			} else {
				alert("You rolled doubles! Roll again.");
			}
		} else {
			player3.isTurn = false;
			if(player4.inJail === false){
				player4.isTurn = true;
			} else if(player1.inJail === false){
				player1.isTurn = true;
			} else if(player2.inJail === false){
				player2.isTurn = true;
			} else {
				player3.isTurn = true;
			}
		}
	}
	else if(player4.isTurn === true){
		var oldElem = document.getElementById("cell" + player4.position + "_4");
		oldElem.classList.remove("piece4");
		if(player4.position + die1 + die2 > 39){
			player4.position = player4.position + die1 + die2 - 40;
		} else {
			player4.position += (die1 + die2);
		}
		var newElem = document.getElementById("cell" + player4.position + "_4");
		newElem.classList.add("piece4");
		if(die1 === die2){
			doublesRolled++;
			if(doublesRolled === 3){
				alert("You rolled 3 doubles! You're going to jail!");
				player4.inJail = true;
				player4.position = 10;
				newElem.classList.remove("piece4");
				newElem = document.getElementById("cell10_4");
				newElem.classList.add("piece4");
				
				player4.isTurn = false;
				if(player1.inJail === false){
					player1.isTurn = true;
				} else if(player2.inJail === false){
					player2.isTurn = true;
				} else if(player3.inJail === false){
					player3.isTurn = true;
				} else {
					player4.isTurn = true;
			}
			} else {
				alert("You rolled doubles! Roll again.");
			}
		} else {
			player4.isTurn = false;
			if(player1.inJail === false){
				player1.isTurn = true;
			} else if(player2.inJail === false){
				player2.isTurn = true;
			} else if(player3.inJail === false){
				player3.isTurn = true;
			} else {
				player4.isTurn = true;
			}
		}
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

function putInJail() {
	
}
