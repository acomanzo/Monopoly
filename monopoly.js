//javaScript stuff for monopoly

var player1 = {
	position: 0,
	money: 1500,
	color: "red",
	isTurn: true,
	inJail: false,
	properties: []
};

var player2 = {
	position: 0,
	money: 1500,
	color: "blue",
	isTurn: false,
	inJail: false,
	properties: []
};

var player3 = {
	position: 0,
	money: 1500,
	color: "yellow",
	isTurn: false,
	inJail: false,
	properties: []
};

var player4 = {
	position: 0,
	money: 1500,
	color: "green",
	isTurn: false,
	inJail: false,
	properties: []
};

var statenIsland = {
	costToBuy: 60,
	name: "staten island",
	rent: 4,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var bronx = {
	name: "bronx",
	costToBuy: 60,
	rent: 2,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var brooklyn = {
	name: "brooklyn",
	costToBuy: 100,
	rent: 6,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var queens = {
	name: "queens",
	costToBuy: 100,
	rent: 6,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var manhattan = {
	name: "manhattan",
	costToBuy: 120,
	rent: 8,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var washingtonSquarePark = {
	name: "washington square park",
	costToBuy: 160,
	rent: 12,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var batteryPark = {
	name: "battery park",
	costToBuy: 140,
	rent: 10,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var centralPark = {
	name: "central park",
	costToBuy: 140,
	rent: 10,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var chinatown = {
	name: "chinatown",
	costToBuy: 180,
	rent: 14,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var littleItaly = {
	name: "little italy",
	costToBuy: 180,
	rent: 14,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var greenwichVillage = {
	name: "greenwich viullage",
	costToBuy: 200,
	rent: 16,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var timesSquare = {
	name: "times square",
	costToBuy: 220,
	rent: 18,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var wallStreet = {
	name: "wall street",
	costToBuy: 240,
	rent: 20,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var broadway = {
	name: "broadway",
	costToBuy: 220,
	rent: 18,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var newYorkHarbor = {
	name: "new york harbor",
	costToBuy: 280,
	rent: 24,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var hudsonRiver = {
	name: "hudson river",
	costToBuy: 260,
	rent: 22,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var eastRiver = {
	name: "east river",
	costToBuy: 260,
	rent: 22,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var empireStateBuilding = {
	name: "empire state building",
	costToBuy: 320,
	rent: 28,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var statueOfLiberty = {
	name: "statue of liberty",
	costToBuy: 300,
	rent: 26,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var newYorkPublicLibrary = {
	name: "new york public library",
	costToBuy: 300,
	rent: 26,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var fifthAvenue = {
	name: "fifth avenue",
	costToBuy: 400,
	rent: 50,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var parkAvenue = {
	name: "park avenuye",
	costToBuy: 350,
	rent: 35,
	house1: false,
	house2: false,
	house3: false,
	isOwned: false,
	isMortgaged: false
};

var dTrain = {
	name: "\"A\" Train",
	costToBuy: 200,
	rent: 25,
	isOwned: false,
	isMortgaged: false
};

var fourTrain = {
	name: "\"A\" Train",
	costToBuy: 200,
	rent: 25,
	isOwned: false,
	isMortgaged: false
};

var nTrain = {
	name: "\"A\" Train",
	costToBuy: 200,
	rent: 25,
	isOwned: false,
	isMortgaged: false
};

var aTrain = {
	name: "\"A\" Train",
	costToBuy: 200,
	rent: 25,
	isOwned: false,
	isMortgaged: false
};

var electricCompany = {
	name: "electric company",
	costToBuy: 150,
	isOwned: false,
	isMortgaged: false
};

var waterWorks = {
	name: "water works",
	costToBuy: 150,
	isOwned: false,
	isMortgaged: false
};

var die1 = 0;
var die2 = 0;
var doublesRolled = 0;
var oldElem = null; //this is the previous space the player piece was on
var newElem = null; //this is the new space the player piece will be put on

var propertySpaces = ["go", statenIsland, "community chest", bronx,
"city tax", aTrain, brooklyn, queens, "chance", manhattan,
"jail", washingtonSquarePark, electricCompany, batteryPark, centralPark, 
dTrain, chinatown, "community chest", littleItaly, greenwichVillage, "free parking",
timesSquare, "chance", wallStreet, broadway, nTrain,
newYorkHarbor, hudsonRiver, waterWorks, eastRiver, "go to jail",
empireStateBuilding, statueOfLiberty, "community chest", newYorkPublicLibrary,
fourTrain, "chance", fifthAvenue, "luxury tax", parkAvenue];

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
						ruleAction();
						alert("You rolled doubles! Roll again.");
					}
				} else {
					ruleAction();
					/*player1.isTurn = false;
					console.log(player1.isTurn);
					player2.isTurn = true;*/
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
						ruleAction();
						alert("You rolled doubles! Roll again.");
					}
				} else {
					ruleAction();
					/*player2.isTurn = false;
					player3.isTurn = true;*/
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
						ruleAction();
						alert("You rolled doubles! Roll again.");
					}
				} else {
					ruleAction();
					/*player3.isTurn = false;
					player4.isTurn = true;*/
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
						ruleAction();
						alert("You rolled doubles! Roll again.");
					}
				} else {
					ruleAction();
					/*player4.isTurn = false;
					player1.isTurn = true;*/
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

function buyProperty(){//for some reason, after you click trade and then click back on buy, the log shows the property as null. This doesn't happen with showBuy()
	/* //var elem = document.getElementById("cell" + player1.position);
	var elem = document.getElementById("cell3");
	var name = elem.getAttribute('name');
	alert(name);*/
	
	var log = document.getElementById("log");
	//var box = document.getElementById("function-box");
	var choice; //will equal yes or no
	//box.style.display = "inline";
	var select = document.getElementById("firstDropdown");
	
	var select = document.getElementById("firstDropdown");
	for(i = 0; i < player1.properties.length; i++) { //this removes the properties from the first dropdown
		var option = document.createElement('option');
		option.text = player1.properties[i];
		select.remove(option, 0);
	}
	select = document.getElementById("secondDropdown");
	for(j = 1; j <= 4; j++){ //this removes the player names from the next dropdown
		var option = document.createElement('option');
		option.text = "Player " + j;
		select.remove(option, 0);
	}
	//alert(player1.isTurn);
	if(player1.isTurn === true){
		//alert("hi");
		if(propertySpaces[player1.position].isOwned === false){
			
		
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
				//alert(choice);
				if(choice === "yes"){
					propertySpaces[player1.position].isOwned = true;
					player1.money -= propertySpaces[player1.position].costToBuy;
					player1.properties.push(propertySpaces[player1.position].name);
					log.innerHTML = "Player 1 bought " + propertySpaces[player1.position].name + ". Resume with your turn.";
				}
				else if(choice === "no"){
					log.innerHTML = "Resume with your turn.";
				}
			});
		}		
	}
	else if(player2.isTurn === true && propertySpaces[player2.position].isOwned === false){
		//log.innerHTML = "Do you want to purchase " + propertySpaces[player2.position] + "?";
		select = document.getElementById("firstDropdown");
		log.innerHTML = "Do you want to purchase " + propertySpaces[player2.position].name + "?";
		var yes = document.createElement('option');
		yes.text = "yes";
		select.add(yes, 0);
		var no = document.createElement('option');
		no.text = "no";
		select.add(no, 0);
			
		document.getElementById("submitButton").addEventListener("click", function(){
			var e = document.getElementById("firstDropdown");
			choice = e.options[e.selectedIndex].text;
			//alert(choice);
			if(choice === "yes"){
				propertySpaces[player2.position].isOwned = true;
				player2.money -= propertySpaces[player2.position].costToBuy;
				player2.properties.push(propertySpaces[player2.position].name);
				log.innerHTML = "Player 2 bought " + propertySpaces[player2.position].name + ". Resume with your turn.";
			}
			else if(choice === "no"){
				log.innerHTML = "Resume with your turn.";
			}
		});
	}
	else if(player3.isTurn === true){
		//log.innerHTML = "Do you want to purchase " + propertySpaces[player3.position] + "?";
		select = document.getElementById("firstDropdown");
		log.innerHTML = "Do you want to purchase " + propertySpaces[player3.position].name + "?";
		var yes = document.createElement('option');
		yes.text = "yes";
		select.add(yes, 0);
		var no = document.createElement('option');
		no.text = "no";
		select.add(no, 0);
			
		document.getElementById("submitButton").addEventListener("click", function(){
			var e = document.getElementById("firstDropdown");
			choice = e.options[e.selectedIndex].text;
			//alert(choice);
			if(choice === "yes"){
				propertySpaces[player3.position].isOwned = true;
				player3.money -= propertySpaces[player3.position].costToBuy;
				player3.properties.push(propertySpaces[player3.position].name);
				log.innerHTML = "Player 3 bought " + propertySpaces[player3.position].name + ". Resume with your turn.";
			}
			else if(choice === "no"){
				log.innerHTML = "Resume with your turn.";
			}
		});
	}
	else if(player4.isTurn === true){
		//log.innerHTML = "Do you want to purchase " + propertySpaces[player4.position] + "?";
		select = document.getElementById("firstDropdown");
		log.innerHTML = "Do you want to purchase " + propertySpaces[player4.position].name + "?";
		var yes = document.createElement('option');
		yes.text = "yes";
		select.add(yes, 0);
		var no = document.createElement('option');
		no.text = "no";
		select.add(no, 0);
		
		document.getElementById("submitButton").addEventListener("click", function(){
			var e = document.getElementById("firstDropdown");
			choice = e.options[e.selectedIndex].text;
			//alert(choice);
			if(choice === "yes"){
				propertySpaces[player4.position].isOwned = true;
				player4.money -= propertySpaces[player1.position].costToBuy;
				player4.properties.push(propertySpaces[player4.position].name);
				log.innerHTML = "Player 4 bought " + propertySpaces[player4.position].name + ". Resume with your turn.";
			}
			else if(choice === "no"){
				log.innerHTML = "Resume with your turn.";
			}
		});
	}
}

function askTrade(){
	var splicedProperty;

	var select = document.getElementById("firstDropdown");
	
	select.remove(option, 0);
	select.remove(option, 0); //removes yes and no from buy function
	
	for(i = 0; i < player1.properties.length; i++) { //this removes the properties from the first dropdown
		var option = document.createElement('option');
		option.text = player1.properties[i];
		select.remove(option, 0);
	}
	select = document.getElementById("secondDropdown");
	for(j = 1; j <= 4; j++){ //this removes the player names from the next dropdown
		var option = document.createElement('option');
		option.text = "Player " + j;
		select.remove(option, 0);
	}
	
	var propOption;
	var pOption;
	var elem = document.getElementById("function-box");
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
		
		
		if(player1.isTurn === true){
			for(i = 0; i < player1.properties.length; i++){
				if(player1.properties[i] === propOption){
					splicedProperty = player1.properties[i];
					//splicedProperty = player1.properties.splice(i, 0).toString(); //WRONG! .splice returns an array
					player1.properties = player1.properties.splice(i, 0);
					//console.log(propOption);
					//console.log(splicedProperty);
				}
			}
		}
		else if(player2.isTurn === true){
			for(i = 0; i < player2.properties.length; i++){
				if(player2.properties[i] === propOption){
					splicedProperty = player2.properties[i];
					player2.properties = player2.properties.splice(i, 0);
				}
			}
		}
		else if(player3.isTurn === true){
			for(i = 0; i < player3.properties.length; i++){
				if(player3.properties[i] === propOption){
					splicedProperty = player3.properties[i];
					player3.properties = player3.properties.splice(i, 0);
				}
			}
		}
		else if(player4.isTurn === true){
			for(i = 0; i < player4.properties.length; i++){
				if(player4.properties[i] === propOption){
					splicedProperty = player4.properties[i];
					player4.properties = player4.properties.splice(i, 0);
				}
			}
		}
		//console.log(splicedProperty);
		//console.log(pOption);
		if(pOption === "Player 1"){
			player1.properties.push(splicedProperty);
		}
		else if(pOption === "Player 2"){
			player2.properties.push(splicedProperty);
		}
		else if(pOption === "Player 3"){
			player3.properties.push(splicedProperty);
		}
		else if(pOption === "Player 4"){
			player4.properties.push(splicedProperty);
		}
		//console.log(player4.properties[0]);
	});
}
	
function showBuy(){
	var elem;
	var yesNo;
	var select = document.getElementById("firstDropdown");
	
	select.remove(option, 0);
	select.remove(option, 0); //removes yes and no

	for(i = 0; i < player1.properties.length; i++) { //this removes the properties from the first dropdown
		var option = document.createElement('option');
		option.text = player1.properties[i];
		select.remove(option, 0);
	}
	var option = document.createElement('option');
	option.text = "yes";
	select.add(option, 0);
	var option = document.createElement('option');
	option.text = "no";
	select.add(option, 0);
	
	select = document.getElementById("secondDropdown");
	for(j = 1; j <= 4; j++){ //this removes the player names from the next dropdown
		var option = document.createElement('option');
		option.text = "Player " + j;
		select.remove(option, 0);
	}
	
	elem = document.getElementById("log");
	elem.innerHTML = "Do you want to buy " + propertySpaces[player1.position].name + "?";
	
	/*document.getElementById("submitButton").addEventListener("click", function(){
		elem = document.getElementById("firstDropdown");
		yesNo = elem.options[elem.selectedIndex].text;
		
		
	});*/
	
	document.getElementById("submitButton").addEventListener("click", function(){
		var e = document.getElementById("firstDropdown");
		choice = e.options[e.selectedIndex].text;
		//alert(choice);
		if(player1.isTurn === true){
			if(choice === "yes"){
				propertySpaces[player1.position].isOwned = true;
				player1.money -= propertySpaces[player1.position].costToBuy;
				player1.properties.push(propertySpaces[player1.position].name);
				log.innerHTML = "Player 1 bought " + propertySpaces[player1.position].name + ". Resume with your turn.";
			}
			else if(choice === "no"){
				log.innerHTML = "Resume with your turn.";
			}
		}
		else if(player2.isTurn === true){
			if(choice === "yes"){
				propertySpaces[player2.position].isOwned = true;
				player2.money -= propertySpaces[player2.position].costToBuy;
				player2.properties.push(propertySpaces[player2.position].name);
				log.innerHTML = "Player 2 bought " + propertySpaces[player2.position].name + ". Resume with your turn.";
			}
			else if(choice === "no"){
				log.innerHTML = "Resume with your turn.";
			}
		}
		else if(player3.isTurn === true){
			if(choice === "yes"){
				propertySpaces[player3.position].isOwned = true;
				player3.money -= propertySpaces[player3.position].costToBuy;
				player3.properties.push(propertySpaces[player3.position].name);
				log.innerHTML = "Player 3 bought " + propertySpaces[player3.position].name + ". Resume with your turn.";
			}
			else if(choice === "no"){
				log.innerHTML = "Resume with your turn.";
			}
		}
		else if(player4.isTurn === true){
			if(choice === "yes"){
				propertySpaces[player4.position].isOwned = true;
				player4.money -= propertySpaces[player4.position].costToBuy;
				player4.properties.push(propertySpaces[player4.position].name);
				log.innerHTML = "Player 4 bought " + propertySpaces[player4.position].name + ". Resume with your turn.";
			}
			else if(choice === "no"){
				log.innerHTML = "Resume with your turn.";
			}
		}
	});
}	

function switchTurn(){
	var log = document.getElementById("log");
	if(player1.isTurn === true){
		player1.isTurn = false;
		player2.isTurn = true;
		log.innerHTML = "It's player 2's turn.";
	}
	else if(player2.isTurn === true){
		player2.isTurn = false;
		player3.isTurn = true;
		log.innerHTML = "It's player 3's turn.";
	}
	else if(player3.isTurn === true){
		player3.isTurn = false;
		player4.isTurn = true;
		log.innerHTML = "It's player 4's turn.";
	}
	else if(player4.isTurn === true){
		player4.isTurn = false;
		player1.isTurn = true;
		log.innerHTML = "It's player 1's turn.";
	}
}

function showMoney(){
	var log = document.getElementById("log");
	if(player1.isTurn === true){
		log.innerHTML = player1.money;
	}
	else if(player2.isTurn === true){
		log.innerHTML = player2.money;
	}
	else if(player3.isTurn === true){
		log.innerHTML = player3.money;
	}
	else if(player4.isTurn === true){
		log.innerHTML = player4.money;
	}
}	

function showProperties(){
	var log = document.getElementById("log");
	log.innerHTML = "";
	if(player1.isTurn === true){
		for(i = 0; i < player1.properties.length; i++){
			log.innerHTML += player1.properties[i] + ", ";
		}
	}
	else if(player2.isTurn === true){
		for(i = 0; i < player2.properties.length; i++){
			log.innerHTML += player2.properties[i] + ", ";
		}
	}
	else if(player3.isTurn === true){
		for(i = 0; i < player3.properties.length; i++){
			log.innerHTML += player3.properties[i] + ", ";
		}
	}
	else if(player4.isTurn === true){
		for(i = 0; i < player4.properties.length; i++){
			log.innerHTML += player4.properties[i] + ", ";
		}
	}
}

function ruleAction(){ //carries out the rules depending on which space you land on
	var e;
	if(player1.isTurn === true){
		if(propertySpaces[player1.position].isOwned === true){
			alert("You had to pay " + propertySpaces[player1.position].rent + " for rent.");
			player1.money -= propertySpaces[player1.position].rent;
		}
		else if(propertySpaces[player1.position].isOwned === false){
			buyProperty();
		}
		else if(propertySpaces[player1.position] === "community chest"){
			alert("Community chest: move back 2 spaces");
			e = document.getElementById("cell" + player1.position + "_1");
			e.classList.remove("piece1");
			if(player1.position >= 2){
				player1.position -= 2;
			}
			else if(player1.position === 1){
				player1.position = 39;
			}
			else{
				player1.position = 38;
			}
			e = document.getElementById("cell" + player1.position + "_1");
			e.classList.add("piece1");
		}
		else if(propertySpaces[player1.position] === "chance"){
			alert("Chance: move forward 1 space");
			e = document.getElementById("cell" + player1.position + "_1");
			e.classList.remove("piece1");
			if(player1.position <= 38){
				player1.position += 1;
			}
			else{
				player1.position = 0;
				player1.money += 200;
			}
			e = document.getElementById("cell" + player1.position + "_1");
			e.classList.add("piece1");
		}
		else if(propertySpaces[player1.position] === "city tax"){
			alert("City tax: pay $200.00");
			player1.money -= 200;
		}
		else if(propertySpaces[player1.position] === "luxury tax"){
			alert("Luxury tax: pay $75");
			player1.money -= 75;
		}
	}
	
	if(player2.isTurn === true){
		if(propertySpaces[player2.position].isOwned === true){
			alert("You had to pay " + propertySpaces[player2.position].rent + " for rent.");
			player2.money -= propertySpaces[player2.position].rent;
		}
		else if(propertySpaces[player2.position].isOwned === false){
			buyProperty();
		}
		else if(propertySpaces[player2.position] === "community chest"){
			alert("Community chest: move back 2 spaces");
			e = document.getElementById("cell" + player2.position + "_2");
			e.classList.remove("piece2");
			if(player2.position >= 2){
				player2.position -= 2;
			}
			else if(player2.position === 1){
				player2.position = 39;
			}
			else{
				player2.position = 38;
			}
			e = document.getElementById("cell" + player2.position + "_2");
			e.classList.add("piece2");
		}
		else if(propertySpaces[player2.position] === "chance"){
			alert("Chance: move forward 1 space");
			e = document.getElementById("cell" + player2.position + "_2");
			e.classList.remove("piece2");
			if(player2.position <= 38){
				player2.position += 1;
			}
			else{
				player2.position = 0;
				player2.money += 200;
			}
			e = document.getElementById("cell" + player2.position + "_2");
			e.classList.add("piece2");
		}
		else if(propertySpaces[player2.position] === "city tax"){
			alert("City tax: pay $200.00");
			player2.money -= 200;
		}
		else if(propertySpaces[player2.position] === "luxury tax"){
			alert("Luxury tax: pay $75");
			player2.money -= 75;
		}
	}
	
	if(player3.isTurn === true){
		if(propertySpaces[player3.position].isOwned === true){
			alert("You had to pay " + propertySpaces[player3.position].rent + " for rent.");
			player3.money -= propertySpaces[player3.position].rent;
		}
		else if(propertySpaces[player3.position].isOwned === false){
			buyProperty();
		}
		else if(propertySpaces[player3.position] === "community chest"){
			alert("Community chest: move back 2 spaces");
			e = document.getElementById("cell" + player3.position + "_3");
			e.classList.remove("piece3");
			if(player3.position >= 2){
				player3.position -= 2;
			}
			else if(player3.position === 1){
				player3.position = 39;
			}
			else{
				player3.position = 38;
			}
			e = document.getElementById("cell" + player3.position + "_3");
			e.classList.add("piece3");
		}
		else if(propertySpaces[player3.position] === "chance"){
			alert("Chance: move forward 1 space");
			e = document.getElementById("cell" + player3.position + "_3");
			e.classList.remove("piece3");
			if(player3.position <= 38){
				player3.position += 1;
			}
			else{
				player3.position = 0;
				player3.money += 200;
			}
			e = document.getElementById("cell" + player3.position + "_3");
			e.classList.add("piece3");
		}
		else if(propertySpaces[player3.position] === "city tax"){
			alert("City tax: pay $200.00");
			player3.money -= 200;
		}
		else if(propertySpaces[player3.position] === "luxury tax"){
			alert("Luxury tax: pay $75");
			player3.money -= 75;
		}
	}
	
	if(player4.isTurn === true){
		if(propertySpaces[player4.position].isOwned === true){
			alert("You had to pay " + propertySpaces[player4.position].rent + " for rent.");
			player4.money -= propertySpaces[player4.position].rent;
		}
		else if(propertySpaces[player4.position].isOwned === false){
			buyProperty();
		}
		else if(propertySpaces[player4.position] === "community chest"){
			alert("Community chest: move back 2 spaces");
			e = document.getElementById("cell" + player4.position + "_4");
			e.classList.remove("piece4");
			if(player4.position >= 2){
				player4.position -= 2;
			}
			else if(player4.position === 1){
				player4.position = 39;
			}
			else{
				player4.position = 38;
			}
			e = document.getElementById("cell" + player4.position + "_4");
			e.classList.add("piece4");
		}
		else if(propertySpaces[player4.position] === "chance"){
			alert("Chance: move forward 1 space");
			e = document.getElementById("cell" + player4.position + "_4");
			e.classList.remove("piece4");
			if(player4.position <= 38){
				player4.position += 1;
			}
			else{
				player4.position = 0;
				player4.money += 200;
			}
			e = document.getElementById("cell" + player4.position + "_4");
			e.classList.add("piece4");
		}
		else if(propertySpaces[player4.position] === "city tax"){
			alert("City tax: pay $200.00");
			player4.money -= 200;
		}
		else if(propertySpaces[player4.position] === "luxury tax"){
			alert("Luxury tax: pay $75");
			player4.money -= 75;
		}
	}
}

function buyStudio(){
	var house;
	var choice;
	var elem;
	var select = document.getElementById("firstDropdown");
	var log = document.getElementById("log");
	log.innerHTML = "Buy a studio for which property?";
	
	/*select.remove(option, 0);
	select.remove(option, 0); //removes yes and no

	for(i = 0; i < 10; i++) { //this removes the properties from the first dropdown
		//var option = document.createElement('option');
		//option.text = player1.properties[i];
		select.remove(option, 0);
	}
	
	select = document.getElementById("secondDropdown");
	for(j = 1; j <= 4; j++){ //this removes the player names from the next dropdown
		var option = document.createElement('option');
		option.text = "Player " + j;
		select.remove(option, 0);
	}*/
	
	var select = document.getElementById("firstDropdown");
	
	select.remove(option, 0);
	select.remove(option, 0); //removes yes and no from buy function
	
	for(i = 0; i < player1.properties.length; i++) { //this removes the properties from the first dropdown
		var option = document.createElement('option');
		option.text = player1.properties[i];
		select.remove(option, 0);
	}
	select = document.getElementById("secondDropdown");
	for(j = 1; j <= 4; j++){ //this removes the player names from the next dropdown
		var option = document.createElement('option');
		option.text = "Player " + j;
		select.remove(option, 0);
	}
	//console.log(player1.properties[0]);
	
	select = document.getElementById("firstDropdown");
	if(player1.isTurn === true){
		console.log(player1.properties[0]);
		for(k = 0; k < player1.properties.length; k++){
			var option = document.createElement('option');
			option.text = player1.properties[i];
			//console.log(player1.properties[i]);
			select.add(option, 0);
		}
	}
	else if(player2.isTurn === true){
		for(k = 0; k < player2.properties.length; k++){
			var option = document.createElement('option');
			option.text = player2.properties[i];
			select.add(option, 0);
		}
	}
	else if(player3.isTurn === true){
		for(k = 0; k < player3.properties.length; k++){
			var option = document.createElement('option');
			option.text = player3.properties[i];
			select.add(option, 0);
		}
	}
	else if(player4.isTurn === true){
		for(k = 0; k < player4.properties.length; k++){
			var option = document.createElement('option');
			option.text = player4.properties[i];
			select.add(option, 0);
		}
	}
	
	document.getElementById("submitButton").addEventListener("click", function(){
		elem = document.getElementById("firstDropdown");
		choice = elem.options[elem.selectedIndex].text;
		alert(choice);
		for(q = 0; q < propertySpaces.length; q++){
			if(choice === propertySpaces[q].name){
				if(propertySpaces[q].house1 === true){
					if(propertySpaces[q].house2 === true){
						if(propertySpaces[q].house3 === true){
							document.getElementById("cell" + q + "_h1").classList.remove("house");
							document.getElementById("cell" + q + "_h2").classList.remove("house");
							document.getElementById("cell" + q + "_h3").classList.remove("house");
							document.getElementById("cell" + q + "_h1").classList.add("hotel");
						}
						else{
							house = document.getElementById("cell" + q + "_h3");
							house.classList.add("house");
							propertySpaces[q].house3 = true;
						}
					}
					else{
						house = document.getElementById("cell" + q + "_h2");
						house.classList.add("house");
						propertySpaces[q].house2 = true;
					}
				}
				else{
					house = document.getElementById("cell" + q + "_h1");
					house.classList.add("house");
					propertySpaces[q].house1 = true;
				}
			}
		}
	});
}

var poop = 1;
function test() {
	var elem = document.getElementById("cell1_h" + poop);
	elem.classList.add("house");
	elem.style.backgroundColor = "red";
	poop++;
}
