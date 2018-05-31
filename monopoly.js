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
	name: "staten island",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var bronx = {
	name: "bronx",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var brooklyn = {
	name: "brooklyn",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var queens = {
	name: "queens",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var manhattan = {
	name: "manhattan",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var washingtonSquarePark = {
	name: "washington square park",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var batteryPark = {
	name: "battery park",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var centralPark = {
	name: "central park",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var chinatown = {
	name: "chinatown",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var littleItaly = {
	name: "little italy",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var greenwichVillage = {
	name: "greenwich viullage",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var timesSquare = {
	name: "times square",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var wallStreet = {
	name: "wall street",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var broadway = {
	name: "broadway",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var newYorkHarbor = {
	name: "new york harbor",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var hudsonRiver = {
	name: "hudson river",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var eastRiver = {
	name: "east river",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var empireStateBuilding = {
	name: "empire state building",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var statueOfLiberty = {
	name: "statue of liberty",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var newYorkPublicLibrary = {
	name: "new york public library",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var fifthAvenue = {
	name: "fifth avenue",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var parkAvenue = {
	name: "park avenuye",
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var die1 = 0;
var die2 = 0;
var doublesRolled = 0;
var oldElem = null; //this is the previous space the player piece was on
var newElem = null; //this is the new space the player piece will be put on

var propertySpaces = [null, statenIsland, null, bronx,
null, null, brooklyn, queens, null, manhattan,
null, washingtonSquarePark, null, batteryPark, centralPark, 
null, chinatown, null, littleItaly, greenwichVillage, null,
timesSquare, null, wallStreet, broadway, null,
newYorkHarbor, hudsonRiver, null, eastRiver, null,
empireStateBuilding, statueOfLiberty, null, newYorkPublicLibrary,
null, null, fifthAvenue, null, parkAvenue];

/*var propertySpaces = ["null", "statenIsland", "null", "bronx",
"null", "null", "brooklyn", "queens", "null", "manhattan",
"null", "washingtonSquarePark", "null", "batteryPark", "centralPark", 
"null", "chinatown", "null", "littleItaly", "greenwichVillage", "null",
"timesSquare", "null", "wallStreet", "broadway", "null",
"newYorkHarbor", "hudsonRiver", "null", "eastRiver", "null",
"empireStateBuilding", "statueOfLiberty", "null", "newYorkPublicLibrary",
"null", "null", "fifthAvenue", "null", "parkAvenue"];*/

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
						buyProperty();
						alert("You rolled doubles! Roll again.");
					}
				} else {
					buyProperty();
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
						buyProperty();
						alert("You rolled doubles! Roll again.");
					}
				} else {
					buyProperty();
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
						buyProperty();
						alert("You rolled doubles! Roll again.");
					}
				} else {
					buyProperty();
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
						buyProperty();
						alert("You rolled doubles! Roll again.");
					}
				} else {
					buyProperty();
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
	
	var log = document.getElementById("log");
	var box = document.getElementById("selectBox");
	var choice; //will equal yes or no
	box.style.display = "inline";
	var select = document.getElementById("firstDropdown");
	if(player1.isTurn === true){
		//alert("hi");
		if(propertySpaces[player1.position].isOwned === false){
			var select = document.getElementById("firstDropdown");
			for(i = 0; i < player1.properties.length; i++) { //this removes the properties from the first dropdown
				var option = document.createElement('option');
				option.text = player1.properties[i];
				select.remove(option, 0);
			}
			select = document.getElementById("firstDropdown");
			for(j = 1; j <= 4; j++){ //this removes the player names from the next dropdown
				var option = document.createElement('option');
				option.text = "Player " + j;
				select.remove(option, 0);
			}
		
			select = document.getElementById("firstDropdown");
			log.innerHTML = "Do you want to purchase " + propertySpaces[player1.position].name + "?";
			var yes = document.createElement('option');
			yes.text = "yes";
			select.add(yes, 0);
			var no = document.createElement('option');
			no.text = "no";
			select.add(no, 0);
			
			document.getElementById("submitButton").addEventListener("click", function(){
				var e = document.getElementById("firstDropdown");
				choice = e.options[e.selectedIndex].text;
				alert(choice);
				if(choice === "yes"){
					player1.properties.push(propertySpaces[player1.position.name]);
					log.innerHTML = "Player 1 bought " + propertySpaces[player1.position].name + ". Resume with your turn.";
				}
				else if(choice === "no"){
					log.innerHTML = "Resume with your turn.";
				}
			});
		}
		
		
	}
	else if(player2.isTurn === true && propertySpaces[player1.position].isOwned === false){
		elem.innerHTML = "Do you want to purchase " + propertySpaces[player2.position] + "?";
	}
	else if(player3.isTurn === true){
		elem.innerHTML = "Do you want to purchase " + propertySpaces[player3.position] + "?";
	}
	else if(player4.isTurn === true){
		elem.innerHTML = "Do you want to purchase " + propertySpaces[player4.position] + "?";
	}
	
}

function askTrade(){
	var propOption;
	var pOption;
	var elem = document.getElementById("selectBox");
	elem.style.display = "inline";
	var select = document.getElementById("firstDropdown");
	for(i = 0; i < player1.properties.length; i++) {
		var option = document.createElement('option');
		option.text = player1.properties[i];
		select.add(option, 0);
	}
	
	select = document.getElementById("secondDropdown");
	for(j = 1; j <= 4; j++){
		option = document.createElement('option');
		option.text = "Player " + j;
		select.add(option, 0);
	}
	elem = document.getElementById("log");
	elem.innerHTML = "Choose a property and player.";
	
	document.getElementById("submitButton").addEventListener("click", function(){
		elem = document.getElementById("firstDropdown");
		propOption = elem.options[elem.selectedIndex].text;
		
		elem = document.getElementById("secondDropdown");
		pOption = elem.options[elem.selectedIndex].text;
		alert(propOption + " to " + pOption);
	});
	
	
}
	
function showBuy(){
	
}	

var poop = 1;
function test() {
	var elem = document.getElementById("cell1_h" + poop);
	elem.classList.add("house");
	elem.style.backgroundColor = "red";
	poop++;
}
