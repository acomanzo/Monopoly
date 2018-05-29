//javaScript stuff for monopoly

var player1 = {
	position: 0,
	color: "red",
	isTurn: true,
	inJail: false,
	properties: ["staten island","bronx"]
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

var statenIsland = {
	house1: false,
	house2: false,
	house3: false
};

var die1 = 0;
var die2 = 0;
var doublesRolled = 0;
var oldElem = null; //this is the previous space the player piece was on
var newElem = null; //this is the new space the player piece will be put on
var propertySpaces = ["null", "staten island", "null", "bronx",
"null", "null", "brooklyn", "queens", "null", "manhattan",
"null", "washington square park", "null", "battery park", "central park", 
"null", "chinatown", "null", "little italy", "greenwich village", "null",
"times square", "null", "wall street", "broadway", "null",
"new york harbor", "hudson river", "null", "east river", "null",
"empire state building", "statue of liberty", "null", "new york public library",
"null", "null", "fifth avenue", "null", "park avenue"];

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
		if(player1.inJail === true){
			getOutOfJail();
			player1.isTurn = false;
			player2.isTurn = true;
		}
		else {
			oldElem = document.getElementById("cell" + player1.position + "_1");
			oldElem.classList.remove("piece1");
			if(player1.position + die1 + die2 > 39){
				player1.position = player1.position + die1 + die2 - 40;
			} else {
				player1.position += (die1 + die2);
			}
			newElem = document.getElementById("cell" + player1.position + "_1");
			newElem.classList.add("piece1");
			if(goToJail() === false) {
				if(die1 === die2){
					doublesRolled++;
					if(doublesRolled === 3){
						alert("You rolled 3 doubles! You're going to jail!");
						player1.inJail = true;
						player1.position = 10;
						newElem.classList.remove("piece1");
						newElem = document.getElementById("cell10_1");
						newElem.classList.add("piece1");
						
						/*player1.isTurn = false;
						player2.isTurn = true;*/
					} else {
						alert("You rolled doubles! Roll again.");
					}
				} else {
					player1.isTurn = false;
					player2.isTurn = true;
					doublesRolled = 0;
				}
			}
		}
	}
	else if(player2.isTurn === true){
		if(player2.inJail === true){
			getOutOfJail();
			player2.isTurn = false;
			player3.isTurn = true;
		}
		else {
			oldElem = document.getElementById("cell" + player2.position + "_2");
			oldElem.classList.remove("piece2");
			if(player2.position + die1 + die2 > 39){
				player2.position = player2.position + die1 + die2 - 40;
			} else {
				player2.position += (die1 + die2);
			}
			newElem = document.getElementById("cell" + player2.position + "_2");
			newElem.classList.add("piece2");
			if(goToJail() === false){
				if(die1 === die2){
					doublesRolled++;
					if(doublesRolled === 3){
						alert("You rolled 3 doubles! You're going to jail!");
						player2.inJail = true;
						player2.position = 10;
						newElem.classList.remove("piece2");
						newElem = document.getElementById("cell10_2");
						newElem.classList.add("piece2");
						
						/*player2.isTurn = false;
						player3.isTurn = true;*/
					} else {
						alert("You rolled doubles! Roll again.");
					}
				} else {
					player2.isTurn = false;
					player3.isTurn = true;
					doublesRolled = 0;
				}
			}
		}
	}
	else if(player3.isTurn === true){
		if(player3.inJail === true) {
			getOutOfJail();
			player3.isTurn = false;
			player4.isTurn = true;
		}
		else {
			oldElem = document.getElementById("cell" + player3.position + "_3");
			oldElem.classList.remove("piece3");
			if(player3.position + die1 + die2 > 39){
				player3.position = player3.position + die1 + die2 - 40;
			} else {
				player3.position += (die1 + die2);
			}
			newElem = document.getElementById("cell" + player3.position + "_3");
			newElem.classList.add("piece3");
			if(goToJail() === false){
				if(die1 === die2){
					doublesRolled++;
					if(doublesRolled === 3){
						alert("You rolled 3 doubles! You're going to jail!");
						player3.inJail = true;
						player3.position = 10;
						newElem.classList.remove("piece3");
						newElem = document.getElementById("cell10_3");
						newElem.classList.add("piece3");
						
						/*player3.isTurn = false;
						player4.isTurn = true;*/
					} else {
						alert("You rolled doubles! Roll again.");
					}
				} else {
					player3.isTurn = false;
					player4.isTurn = true;
					doublesRolled = 0;
				}
			}
		}	
	}
	else if(player4.isTurn === true){
		if(player4.inJail === true){
			getOutOfJail();
			player4.isTurn = false;
			player1.isTurn = true;
		}
		else {
			oldElem = document.getElementById("cell" + player4.position + "_4");
			oldElem.classList.remove("piece4");
			if(player4.position + die1 + die2 > 39){
				player4.position = player4.position + die1 + die2 - 40;
			} else {
				player4.position += (die1 + die2);
			}
			newElem = document.getElementById("cell" + player4.position + "_4");
			newElem.classList.add("piece4");
			if(goToJail() === false){
				if(die1 === die2){
					doublesRolled++;
					if(doublesRolled === 3){
						alert("You rolled 3 doubles! You're going to jail!");
						player4.inJail = true;
						player4.position = 10;
						newElem.classList.remove("piece4");
						newElem = document.getElementById("cell10_4");
						newElem.classList.add("piece4");
						
						/*player4.isTurn = false;
						player1.isTurn = true;*/
					} else {
						alert("You rolled doubles! Roll again.");
					}
				} else {
					player4.isTurn = false;
					player1.isTurn = true;
					doublesRolled = 0;
				}
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
		for(child = 1; child <= 3; child++){
		if(parent === 2 
			|| parent === 4
			|| parent === 5
			|| parent === 8
			|| parent === 10
			|| parent === 12
			|| parent === 15
			|| parent === 17
			|| parent === 20
			|| parent === 22
			|| parent === 25
			|| parent === 28
			|| parent === 30
			|| parent === 33
			|| parent === 35
			|| parent === 36
			|| parent === 38){
			var elem = document.getElementById("cell" + parent + "_h" + child)
			elem.classList.toggle("house");
			}			
		}
	}
	//document.getElementById("cell1_h1").classList.toggle("house");
}*/

/*function startup() {
	document.getElementById("timessquare").innerHTML = "<div style = background-color: \"blue\";>hi</div>";
}*/

function goToJail() {
	if(player1.position === 30){
		alert("You're going to jail!");
		oldElem = document.getElementById("cell" + player1.position + "_1");
		oldElem.classList.remove("piece1");
		newElem = document.getElementById("cell10_1");
		newElem.classList.add("piece1");
		player1.position = 10;
		player1.inJail = true;
		player1.isTurn = false;
		player2.isTurn = true;
		return true;
	}
	else if(player2.position === 30){
		alert("You're going to jail!");
		oldElem = document.getElementById("cell" + player2.position + "_2");
		oldElem.classList.remove("piece2");
		newElem = document.getElementById("cell10_2");
		newElem.classList.add("piece2");
		player2.position = 10;
		player2.inJail = true;
		player2.isTurn = false;
		player3.isTurn = true;
		return true;
	}
	else if(player3.position === 30){
		alert("You're going to jail!");
		oldElem = document.getElementById("cell" + player3.position + "_3");
		oldElem.classList.remove("piece3");
		newElem = document.getElementById("cell10_3");
		newElem.classList.add("piece3");
		player3.position = 10;
		player3.inJail = true;
		player3.isTurn = false;
		player4.isTurn = true;
		return true;
	}
	else if(player4.position === 30){
		alert("You're going to jail!");
		oldElem = document.getElementById("cell" + player4.position + "_4");
		oldElem.classList.remove("piece4");
		newElem = document.getElementById("cell10_4");
		newElem.classList.add("piece4");
		player4.position = 10;
		player4.inJail = true;
		player4.isTurn = false;
		player1.isTurn = true;
		return true;
	}
	return false;
}

function getOutOfJail() {
	if(player1.isTurn === true){
		if(die1 === die2){
			player1.inJail = false;
			alert("Player 1 is out of jail.");
		}
	}
	if(player2.isTurn === true){
		if(die1 === die2){
			player2.inJail = false;
			alert("Player 2 is out of jail.");
		}
	}
	if(player3.isTurn === true){
		if(die1 === die2){
			player3.inJail = false;
			alert("Player 3 is out of jail.");
		}
	}
	if(player4.isTurn === true){
		if(die1 === die2){
			player4.inJail = false;
			alert("Player 4 is out of jail.");
		}
	}
}

function buyProperty(){
	//var elem = document.getElementById("cell" + player1.position);
	var elem = document.getElementById("cell3");
	var name = elem.getAttribute('name');
	alert(name);
	var elem = document.getElementById("log");
	elem.innerHTML = "Do you want to purchase " + propertySpaces[1] + "?";
}

function askTrade(){
	var propOption;
	var pOption;
	var elem = document.getElementById("selectBox");
	elem.style.display = "inline";
	var select = document.getElementById("tradeSelect");
	for(i = 0; i < player1.properties.length; i++) {
		var option = document.createElement('option');
		option.text = player1.properties[i];
		select.add(option, 0);
	}
	
	select = document.getElementById("playerSelect");
	for(j = 1; j <= 4; j++){
		option = document.createElement('option');
		option.text = "Player " + j;
		select.add(option, 0);
	}
	elem = document.getElementById("log");
	elem.innerHTML = "Choose a property and player.";
	
	document.getElementById("submitButton").addEventListener("click", function(){
		elem = document.getElementById("tradeSelect");
		propOption = elem.options[elem.selectedIndex].text;
		
		elem = document.getElementById("playerSelect");
		pOption = elem.options[elem.selectedIndex].text;
		alert(propOption + " to " + pOption);
	});
}
	

var poop = 1;
function test() {
	var elem = document.getElementById("cell1_h" + poop);
	elem.classList.add("house");
	elem.style.backgroundColor = "red";
	poop++;
}
