var player1 = {
  isTurn: false,
  money: 1500,
  position: 1,
  color: "red",
  inJail: false,
  number: 1,
  isBankrupt: false,
  trainsOwned: 0,
  utilitiesOwned: 0,
  studiosOwned: 0,
  brownstonesOwned: 0,
  properties: []
}

var player2 = {
  isTurn: false,
  money: 1500,
  position: 1,
  color: "blue",
  inJail: false,
  number: 2,
  isBankrupt: false,
  trainsOwned: 0,
  utilitiesOwned: 0,
  studiosOwned: 0,
  brownstonesOwned: 0,
  properties: []
}

var player3 = {
  isTurn: false,
  money: 1500,
  position: 1,
  color: "green",
  inJail: false,
  number: 3,
  isBankrupt: false,
  trainsOwned: 0,
  utilitiesOwned: 0,
  studiosOwned: 0,
  brownstonesOwned: 0,
  properties: []
}

var player4 = {
  isTurn: false,
  money: 1500,
  position: 1,
  color: "yellow",
  inJail: false,
  number: 4,
  isBankrupt: false,
  trainsOwned: 0,
  utilitiesOwned: 0,
  studiosOwned: 0,
  brownstonesOwned: 0,
  properties: []
}

var die1 = 0;
var die2 = 0;
var diceTotal = 0;
var doublesRolled = 0;
var whosTurn;
var enabled = true;
var logUpdate;

/**
function that actually moves the player pieces
*/
function updatePosition(player) {
  var old = "#s" + player.position; //position the player used to be on
  player.position += diceTotal;
  if(player.position > 40) {
    player.position = (player.position % 40); //should be 40 / position and give remainder
    player.money += 200;
    alert("Take $200 for passing GO!");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " took $200 for passing GO!.</p>";
  }
  if(player.position == 31) {
    alert("Player " + whosTurn.number + " is going to jail!");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " went to jail.</p>";
    whosTurn.inJail = true;
    var jail = document.getElementById("jail");
    //you must add 1 to compensate for the <p> tag in front of the divs
    jail = jail.querySelector("div:nth-child(" + (whosTurn.number + 1) + ")");
    jail.classList.add("player");
    jail.style.backgroundColor = whosTurn.color;
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " went to jail.</p>";
    player.position = 11;

    var elem = document.querySelector(".grid-container");
    elem = elem.querySelector(old);
    elem = elem.querySelector(".player-holder");
    elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
    elem.classList.remove("player");

    switchTurn();
  } else {
    var newElem = document.querySelector(".grid-container");
    newElem = newElem.querySelector("#s" + player.position);
    newElem = newElem.querySelector(".player-holder");
    newElem = newElem.querySelector("div:nth-child(" + whosTurn.number + ")");
    newElem.classList.add("player");
    newElem.style.backgroundColor = player.color;
  }
  var elem = document.querySelector(".grid-container");
  elem = elem.querySelector(old);
  elem = elem.querySelector(".player-holder");
  elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
  elem.classList.remove("player");

  //alert(squares[whosTurn.position - 1].isOwned);
  if((squares[whosTurn.position - 1].isOwned === true) &&
  (squares[whosTurn.position - 1].ownedBy != whosTurn)) {
    /**
    if the player landed on a train
    */
    if(whosTurn.position == 6 || whosTurn.position == 16 ||
      whosTurn.position == 26 || whosTurn.position == 36) {
        if(squares[whosTurn.position - 1].ownedBy.trainsOwned === 2) {
          whosTurn.money -= squares[whosTurn.position - 1].twoOwned;
          document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
            " paid $" + squares[whosTurn.position - 1].twoOwned + " for rent.</p>";
        } else if (squares[whosTurn.position - 1].ownedBy.trainsOwned === 3) {
          whosTurn.money -= squares[whosTurn.position - 1].threeOwned;
          document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
            " paid $" + squares[whosTurn.position - 1].threeOwned + " for rent.</p>";
        } else if (squares[whosTurn.position - 1].ownedBy.trainsOwned === 4) {
          whosTurn.money -= squares[whosTurn.position - 1].fourOwned;
          document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
            " paid $" + squares[whosTurn.position - 1].fourOwned + " for rent.</p>";
        } else {
          whosTurn.money -= squares[whosTurn.position - 1].rent;
          document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
            " paid $" + squares[whosTurn.position - 1].rent + " for rent.</p>";
        }
      /**
      if the player landed on a utility
      */
    } else if (whosTurn.position == 13 || whosTurn.position == 29) {
      if(squares[whosTurn.position - 1].ownedBy.utilitiesOwned == 1) {
        whosTurn.money -= (4 * diceTotal);
        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
          " paid $" + (4 * diceTotal) + " for rent.</p>";
      } else if (squares[whosTurn.position - 1].ownedBy.trainsOwned == 2) {
        whosTurn.money -= (10 * diceTotal);
        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
          " paid $" + (10 * diceTotal) + " for rent.</p>";
      }
    } else {
      if(squares[whosTurn.position - 1].studiosBought === 1) {
        whosTurn.money -= squares[whosTurn.position - 1].oneStudio;
        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
          " paid $" + squares[whosTurn.position - 1].oneStudio + " for rent.</p>";
      } else if (squares[whosTurn.position - 1].studiosBought === 2) {
        whosTurn.money -= squares[whosTurn.position - 1].twoStudio;
        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
          " paid $" + squares[whosTurn.position - 1].twoStudio + " for rent.</p>";
      } else if (squares[whosTurn.position - 1].studiosBought === 3) {
        whosTurn.money -= squares[whosTurn.position - 1].threeStudio;
        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
          " paid $" + squares[whosTurn.position - 1].threeStudio + " for rent.</p>";
      } else if (squares[whosTurn.position - 1].studiosBought === 4) {
        whosTurn.money -= squares[whosTurn.position - 1].fourStudio;
        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
          " paid $" + squares[whosTurn.position - 1].fourStudio + " for rent.</p>";
      } else if (squares[whosTurn.position - 1].studiosBought === 5) {
        whosTurn.money -= squares[whosTurn.position - 1].brownstone;
        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
          " paid $" + squares[whosTurn.position - 1].brownstone + " for rent.</p>";
      } else {
        whosTurn.money -= squares[whosTurn.position - 1].rent;
        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
          " paid $" + squares[whosTurn.position - 1].rent + " for rent.</p>";
      }
    }
  }

  /**
  if the player landed on a communityChest
  */
  if(whosTurn.position == 3 || whosTurn.position == 18 || whosTurn.position == 34) {
    //get number 0 - 16 (there are 17 cards in the community chest deck)
    var myRandom = Math.floor(Math.random() * 17);
    //alert(myRandom);
    COMMUNITY_CHEST_DECK[myRandom].cardEffect();
  }

  /**
  if the player landed on a chance
  */
  if(whosTurn.position == 9 || whosTurn.position == 23 || whosTurn.position == 37) {
    var myRandom = Math.floor(Math.random() * 17);
    CHANCE_DECK[myRandom].cardEffect();
  }

  /**
  if the player landed on city tax
  */
  if(whosTurn.position == 5) {
    alert("You payed $200 for landing on city tax.");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " paid $200 for landing on city tax.</p>";
    whosTurn.money -= 200;
  }

  /**
  if the player landed on luxury tax
  */
  if(whosTurn.position == 39) {
    alert("You payed 75 for landing on city tax.");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " paid 75 for landing on luxury tax.</p>";
    whosTurn.money -= 75;
  }

  if(whosTurn.money < 0) {
    var property;
    whosTurn.isBankrupt = true;
    alert("Player " + whosTurn.number + " is bankrupt and eliminated.");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " is bankrupt and eliminated.</p>";
    for(var i = 0; i < whosTurn.properties.length; i++) {
      property = document.getElementById(whosTurn.properties[i].idNumber);
      alert(property);
      property = property.querySelector(".dropdown-content");
      property.style.backgroundColor = "#f9f9f9";
      whosTurn.properties[i].ownedBy = null;
      whosTurn.properties[i].isOwned = false;
      whosTurn.properties[i] = null;
    }
  }
}

/**
function that rolls dice and sees if player must go to jail
*/
function rollDice() {
  if(enabled == true) {
    die1 = 0;
    die2 = 0;

    die1 = Math.floor((Math.random() * 6) + 1);
    die2 = Math.floor((Math.random() * 6) + 1);
    //die1=1;
    //die2=1;
    var rolled = die1 + " and " + die2;
    document.getElementById("diceBtn").innerHTML = rolled;
    diceTotal += (die1 + die2);

    if(die1 == die2) {
      doublesRolled++;
      if(doublesRolled == 3) {
        alert("Player " + whosTurn.number +
          " you're going to jail for rolling 3 doubles in a row!");
        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
          " went to jail.</p>";
        diceTotal = 0;
        whosTurn.inJail = true;
        var old = "#s" + whosTurn.position;
        whosTurn.position = 11;
        var jail = document.getElementById("jail");
        //alert(jail.querySelector("div:nth-child(1)"));
        //alert(jail.querySelector("div:nth-child(2)"));
        //alert(jail.querySelector("div:nth-child(3)"));
        //alert(jail.querySelector("div:nth-child(4)"));
        //alert(jail.querySelector("div:nth-child(5)"));
        //alert(jail.querySelector("div:nth-child(" + whosTurn.number + ")"));
        //you must add 1 to compensate for the <p> tag in front of the divs
        jail = jail.querySelector("div:nth-child(" + (whosTurn.number + 1) + ")");
        jail.classList.add("player");
        jail.style.backgroundColor = whosTurn.color;

        var elem = document.querySelector(".grid-container");
        elem = elem.querySelector(old);
        elem = elem.querySelector(".player-holder");
        elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
        elem.classList.remove("player");

        document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
        " went to jail.</p>";
        switchTurn();
      } else {
        alert("Player " + whosTurn.number + " just rolled doubles! Roll again.");
      }
    } else {
      alert("Player " + whosTurn.number + " moved forward " + (diceTotal) + " spaces!");
      document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " moved forward " + diceTotal + " spaces.</p>";
      updatePosition(whosTurn);
      diceTotal = 0;
    }
  }
}

/**
function that's run once the page is done loading
**/
function getStartingPlayer() {
  var one = Math.floor((Math.random() * 1000) + 1);
  var two = Math.floor((Math.random() * 1000) + 1);
  var three = Math.floor((Math.random() * 1000) + 1);
  var four = Math.floor((Math.random() * 1000) + 1);
  if(one > two && one > three && one > four) {
    whosTurn = player1;
  } else if (two > one && two > three && two > four) {
    whosTurn = player2;
  } else if (three > one && three > two && three > four) {
    whosTurn = player3;
  } else if (four > one && four > two && four > three) {
    whosTurn = player4;
  }

  var turn = "It's Player " + whosTurn.number + "'s turn!";
  document.getElementById("log").innerHTML += turn;
  alert("Player " + whosTurn.number + " rolls first!");

  /**
  adds event listeners to buttons in 'get out of jail menu/prompt'
  */
  var jailPrompt = document.getElementById("get-out-of-jail-prompt");
  document.getElementById("roll").addEventListener("click", function() {
    die1 = Math.floor((Math.random() * 6) + 1);
    die2 = Math.floor((Math.random() * 6) + 1);
    //die1=1;
    //die2=1;
    diceTotal = die1 + die2;
    if(die1 === die2) {
      alert("You rolled doubles and got out of jail.")
      document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " rolled doubles to get out of jail.</p>";
      whosTurn.inJail = false;

      //var old = "#s" + whosTurn.position; //position the player used to be on
      whosTurn.position += diceTotal;
      var newElem = document.querySelector(".grid-container");
      newElem = newElem.querySelector("#s" + whosTurn.position);
      newElem = newElem.querySelector(".player-holder");
      newElem = newElem.querySelector("div:nth-child(" + whosTurn.number + ")");
      newElem.classList.add("player");
      newElem.style.backgroundColor = whosTurn.color;
      //var elem = document.querySelector(".grid-container");
      //elem = elem.querySelector(old);
      var elem = document.querySelector("#jail");
      elem = elem.querySelector("div:nth-child(" + (whosTurn.number + 1) + ")");
      elem.classList.remove("player");
    } else {
      alert("You didn't roll doubles.");
    }
    enableButtons();
    jailPrompt.style.top = "0";
    jailPrompt.style.display = "none";
  });
  document.getElementById("pay").addEventListener("click", function() {
    whosTurn.money -= 50;
    die1 = Math.floor((Math.random() * 6) + 1);
    die2 = Math.floor((Math.random() * 6) + 1);
    diceTotal = die1 + die2;
    var rolled = die1 + " and " + die2;
    alert("You rolled a " + rolled + ".");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " moved forward " + diceTotal + " spaces.</p>";
    document.getElementById("diceBtn").innerHTML = rolled;
    whosTurn.inJail = false;
    //var old = "#s" + whosTurn.position; //position the player used to be on
    whosTurn.position += diceTotal;
    var newElem = document.querySelector(".grid-container");
    newElem = newElem.querySelector("#s" + whosTurn.position);
    newElem = newElem.querySelector(".player-holder");
    newElem = newElem.querySelector("div:nth-child(" + whosTurn.number + ")");
    newElem.classList.add("player");
    newElem.style.backgroundColor = whosTurn.color;
    //var elem = document.querySelector(".grid-container");
    //elem = elem.querySelector(old);
    var elem = document.querySelector("#jail");
    elem = elem.querySelector("div:nth-child(" + (whosTurn.number + 1) + ")");
    elem.classList.remove("player");
    enableButtons();
    jailPrompt.style.top = "0";
    jailPrompt.style.display = "none";
  });

  if(whosTurn.money < 0) {
    var property;
    whosTurn.isBankrupt = true;
    alert("Player " + whosTurn.number + " is bankrupt and eliminated.");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " is bankrupt and eliminated.</p>";
    for(var i = 0; i < whosTurn.properties.length; i++) {
      property = document.getElementById(whosTurn.properties[i].idNumber);
      alert(property);
      property = property.querySelector(".dropdown-content");
      property.style.backgroundColor = "#f9f9f9";
      whosTurn.properties[i].ownedBy = null;
      whosTurn.properties[i].isOwned = false;
      whosTurn.properties[i] = null;
    }
  }
}

/**
function that switches turns
*/
function switchTurn() {
  die1 = 0;
  die2 = 0;
  diceTotal = 0;
  doublesRolled = 0;
  if(enabled == true) {
    if(whosTurn == player1) {
      if(player2.isBankrupt === true) {
        if(player3.isBankrupt === true) {
          if(player4.isBankrupt === true) {
            alert("Congratulations Player 1, you win!");
          } else {
            whosTurn = player4;
          }
        } else {
          whosTurn = player3;
        }
      } else {
        whosTurn = player2;
      }
    } else if(whosTurn == player2) {
      if(player3.isBankrupt === true) {
        if(player4.isBankrupt === true) {
          if(player1.isBankrupt === true) {
            alert("Congratulations Player 2, you win!");
          } else {
            whosTurn = player1;
          }
        } else {
          whosTurn = player4;
        }
      } else {
        whosTurn = player3;
      }
    } else if(whosTurn == player3) {
      if(player4.isBankrupt === true) {
        if(player1.isBankrupt === true) {
          if(player2.isBankrupt === true) {
            alert("Congratulations Player 3, you win!");
          } else {
            whosTurn = player2;
          }
        } else {
          whosTurn = player3;
        }
      } else {
        whosTurn = player4;
      }
    } else if(whosTurn == player4) {
      if(player1.isBankrupt === true) {
        if(player2.isBankrupt === true) {
          if(player3.isBankrupt === true) {
            alert("Congratulations Player 4, you win!");
          } else {
            whosTurn = player3;
          }
        } else {
          whosTurn = player2;
        }
      } else {
        whosTurn = player1;
      }
    }

    document.getElementById("log").innerHTML += "<p>It's Player " +
      whosTurn.number + "'s turn.</p>";
    //alert("It's Player " + whosTurn.number + "'s turn.");
    document.getElementById("diceBtn").innerHTML = "Roll dice";
    if(whosTurn.inJail === true) {
      disableButtons();
      var jailPrompt = document.getElementById("get-out-of-jail-prompt");
      jailPrompt.style.top = "210px";
      jailPrompt.style.display = "block";

    }
  }
}

/**
function that shows buy meny
*/
function showBuyMenu() {
  if(enabled == true) {
    var buyMenu = document.getElementById("buy-menu");
    buyMenu.style.height = "200px";
    buyMenu.style.top = "210px";
    buyMenu.style.display = "block";
    buyMenu.style.left = "350px";
    //document.getElementById("diceBtn").onclick = null;
    disableButtons();
    fillStudioSelect();
    var brownstoneSelect = document.getElementById("brownstone-select");
    var brownstoneButton = document.getElementById("brownstone-button");
    var option;
    for(var i = 0; i < whosTurn.properties.length; i++) {
      if(whosTurn.properties[i].studiosBought == 4) {
        option = document.createElement("option");
        option.text = whosTurn.properties[i].name;
        option.dataValue = whosTurn.properties[i];
        brownstoneSelect.appendChild(option);
        brownstoneSelect.disabled = false;
        brownstoneButton.disabled = false;
      }
    }
    if(whosTurn.position == 1 || whosTurn.position == 3 || whosTurn.position == 5 ||
    whosTurn.position == 9 || whosTurn.position == 11 || whosTurn.position == 18 ||
    whosTurn.position == 21 || whosTurn.position == 23 || whosTurn.position == 37 ||
    whosTurn.position == 34 || whosTurn.position == 39) {
      document.getElementById("purchase-message").innerHTML = "You cannot own this land.";
      document.getElementById("my-button").disabled = true;
    } else if (squares[whosTurn.position - 1].isOwned == true) {
      document.getElementById("purchase-message").innerHTML = squares[whosTurn.position - 1].name + " is owned by Player " + squares[whosTurn.position - 1].ownedBy.number + ".";
      document.getElementById("my-button").disabled = true;
    }
    else {
      document.getElementById("my-button").disabled = false;
      document.getElementById("purchase-message").innerHTML = "Are you sure you want to purchase " + squares[whosTurn.position - 1].name + "?";
    }
  }
}

/**
gets selected value in dropdown after player clicks button
**/
function getPropertyDecision() {
  var e = document.getElementById("my-dropdown");
  var choice = e.options[e.selectedIndex].value;
  if(choice == 'yes') {
    squares[whosTurn.position - 1].isOwned = true;
    squares[whosTurn.position - 1].ownedBy = whosTurn;
    //alert(squares[whosTurn.position - 1]);
    //alert(squares[whosTurn.position - 1].name);
    whosTurn.properties.push(squares[whosTurn.position - 1]);
    //alert(whosTurn.properties[0]);
    //alert(whosTurn.properties[0].name);
    //console.log(whosTurn.properties);
    whosTurn.money -= squares[whosTurn.position - 1].price;
    var card = document.getElementById("main");
    card = card.querySelector("#" + squares[whosTurn.position - 1].idNumber);
    card = card.querySelector(".dropdown-content");
    card = card.style.backgroundColor = whosTurn.color;

    document.getElementById("my-button").disabled = true;
    document.getElementById("purchase-message").innerHTML = squares[whosTurn.position - 1].name + " is owned by Player " + squares[whosTurn.position - 1].ownedBy.number + ".";
    //fillStudioSelect();
    document.getElementById("studio-message").innerHTML = "Choose a studio to buy.";

    var property = squares[whosTurn.position - 1];
    if(property == squares[5] || property == squares[12]
    || property == squares[15] || property == squares[25]
    || property == squares[28] || property == squares[35]) {
      //do nothing
    } else {
      //add it to the dropdown
      var option = document.createElement("option");
      var select = document.getElementById("studio-dropdown");
      //alert(whosTurn.properties.length - 1);
      //alert(whosTurn.properties[whosTurn.properties.length - 1].name);
      option.text = whosTurn.properties[whosTurn.properties.length - 1].name;
      option.dataValue = whosTurn.properties[whosTurn.properties.length - 1];
      select.appendChild(option);

      document.getElementById("studio-button").disabled = false;
      //alert(whosTurn.properties[0].name);
    }
  } else {
    closePurchase();
  }

  if(whosTurn.money < 0) {
    var property;
    whosTurn.isBankrupt = true;
    alert("Player " + whosTurn.number + " is bankrupt and eliminated.");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " is bankrupt and eliminated.</p>";
    for(var i = 0; i < whosTurn.properties.length; i++) {
      property = document.getElementById(whosTurn.properties[i].idNumber);
      alert(property);
      property = property.querySelector(".dropdown-content");
      property.style.backgroundColor = "#f9f9f9";
      whosTurn.properties[i].ownedBy = null;
      whosTurn.properties[i].isOwned = false;
      whosTurn.properties[i] = null;
    }
  }
}

/**
function that closes the buy menu
*/
function closePurchase() {
  var buyMenu = document.getElementById("buy-menu");
  buyMenu.style.height = "0";
  buyMenu.style.top = "0";
  buyMenu.style.display = "none";
  //document.getElementById("diceBtn").onclick = rollDice();
  var select = document.getElementById("studio-dropdown");
  var brownstoneSelect = document.getElementById("brownstone-select");
  var brownstoneButton = document.getElementById("brownstone-button");
  brownstoneSelect.disabled = true;
  brownstoneButton.disabled = true;
  //alert('test');
  /*for(var i = 0; i < whosTurn.properties.length; i++) {
    //alert("removed");
    select.remove(i + 1);
    brownstoneSelect.remove(i + 1);
  }*/
  for(var i = whosTurn.properties.length; i > 0; i--){
    //alert(select[i].dataValue.name)
    select.remove(i);
    brownstoneSelect.remove(i);
  }
  enableButtons();
}

/**
puts all of current player's properties into dropdown
**/
function fillStudioSelect() {
  if(whosTurn.properties.length < 1) {
    document.getElementById("studio-message").innerHTML = "You don't own any land.";
    document.getElementById("studio-button").disabled = true;
    document.getElementById("brownstone-button").disabled = true;
  } else {
    document.getElementById("studio-message").innerHTML = "Choose a studio to buy.";
    var option;
    var select = document.getElementById("studio-dropdown");
    for(var i = 0; i < whosTurn.properties.length; i++) {
      //IMPORTANT: make a new option element every time you append something
      //or bad things will happen!!!
      //the computer will overwrite options that were already appended
      //for some reason
      option = document.createElement("option");
      option.text = whosTurn.properties[i].name;
      //option.value = whosTurn.properties[i];
      option.dataValue = whosTurn.properties[i];
      //alert(option.value);
      //alert(option.dataValue);
      //alert(option.dataValue.name);
      /**
      don't show the trains, electric company, water works, or any property with 4 studios
      **/
      if(whosTurn.properties[i] == squares[5] || whosTurn.properties[i] == squares[12]
      || whosTurn.properties[i] == squares[15] || whosTurn.properties[i] == squares[25]
      || whosTurn.properties[i] == squares[28] || whosTurn.properties[i] == squares[35]) {

      } else {
        if(whosTurn.properties[i].studiosBought < 4) {
          select.appendChild(option);
        }
      }
    }
    if(select.length > 1) {
      document.getElementById("studio-button").disabled = false;
    }
  }
}

/**
gets selected value in dropdown after player clicks button
**/
function getStudioChoice() {
  var e = document.getElementById("studio-dropdown");
  //alert(e.options[e.selectedIndex].text);
  //var choice = e.options[e.selectedIndex].value;
  var choice = e.options[e.selectedIndex].dataValue;
  document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
    " bought a studio for " + choice.name + ".</p>";
  //alert(choice);
  //alert(choice.value);
  //alert(whosTurn.properties[0].name);
  //alert(choice.idNumber);
  //alert(choice.name);

  //alert(choice.idNumber);
  //alert(choice.name);
  //alert(choice.studiosBought);
  //alert(document.getElementById(choice.idNumber));
  if(choice != undefined) {
    var myElem = document.getElementById("main");
    myElem = myElem.querySelector("#" + choice.idNumber);
    myElem = myElem.querySelector(".property-container");
    myElem = myElem.querySelector("div:nth-child(" + (choice.studiosBought + 1) + ")");

    myElem.classList.add("house");
    whosTurn.studiosOwned++;
    choice.studiosBought++;
    if(choice.studiosBought == 1) {
      whosTurn.money -= choice.oneStudio;
    } else if(choice.studiosBought == 2) {
      whosTurn.money -= choice.twoStudio;
    } else if(choice.studiosBought == 3) {
      whosTurn.money -= choice.threeStudio;
    } else if(choice.studiosBought == 4) {
      var select = document.getElementById("studio-dropdown");
      whosTurn.money -= choice.fourStudio;
      /**
      this removes all properties from studio dropdown that have 4 houses
      and moves them to the brownstone dropdown
      **/
      var brownstoneOption = document.createElement("option");
      var brownstoneSelect = document.getElementById("brownstone-select");
      var brownstoneButton = document.getElementById("brownstone-button");
      brownstoneButton.disabled = false;
      brownstoneSelect.disabled = false;
      select.remove(e.selectedIndex);
      brownstoneOption.text = choice.name;
      brownstoneOption.dataValue = choice;
      brownstoneSelect.appendChild(brownstoneOption);
      /*for(var i = 0; i < whosTurn.properties.length; i++) {
        //alert("removed");
        if(whosTurn.properties[i].studiosBought = 4) {
          select.remove(i + 1);
          brownstoneOption.text = whosTurn.properties[i].name;
          alert(brownstoneOption.text);
          brownstoneOption.dataValue = whosTurn.properties[i];
          alert(brownstoneOption.dataValue);
          alert(brownstoneOption.dataValue.name);
          brownstoneSelect.appendChild(brownstoneOption);
        }
      }*/
      if(select.length < 2) { //if no properties are in the dropdown...
        document.getElementById("studio-button").disabled = true;
      }
    //alert(whosTurn.money);
    }
  }

  if(whosTurn.money < 0) {
    var property;
    whosTurn.isBankrupt = true;
    alert("Player " + whosTurn.number + " is bankrupt and eliminated.");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " is bankrupt and eliminated.</p>";
    for(var i = 0; i < whosTurn.properties.length; i++) {
      property = document.getElementById(whosTurn.properties[i].idNumber);
      alert(property);
      property = property.querySelector(".dropdown-content");
      property.style.backgroundColor = "#f9f9f9";
      whosTurn.properties[i].ownedBy = null;
      whosTurn.properties[i].isOwned = false;
      whosTurn.properties[i] = null;
    }
  }
}

/**
gets selected value in dropdown after player clicks button
**/
function getBrownstoneChoice() {
  var e = document.getElementById("brownstone-select");
  var choice = e.options[e.selectedIndex].dataValue;
  //alert(choice);
  //alert(choice.name);
  //alert(e.options[e.selectedIndex].dataValue);
  if(choice != undefined) {
    var myElem = document.getElementById("main");
    myElem = myElem.querySelector("#" + choice.idNumber);
    myElem = myElem.querySelector(".property-container");

    myElem.querySelector("div:nth-child(4)").classList.remove("house");
    myElem.querySelector("div:nth-child(3)").classList.remove("house");
    myElem.querySelector("div:nth-child(2)").classList.remove("house");
    myElem.querySelector("div:nth-child(1)").classList.remove("house");
    myElem = myElem.querySelector("div:nth-child(1)").classList.add("brownstone")

    document.getElementById("brownstone-button").disabled = true;
    whosTurn.money -= choice.brownstone;
    whosTurn.brownstonesOwned++;
    choice.studiosBought++;
    e.remove(e.selectedIndex);
    /*logUpdate = document.createElement("p");
    logUpdate.appendChild(document.createTextNode("Player " + whosTurn.number +
      " bought a brownstone."));
    document.getElementById("log").innerHTML += logUpdate;*/
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " bought a brownstone for " + choice.name + ".</p>";
  }

  if(whosTurn.money < 0) {
    var property;
    whosTurn.isBankrupt = true;
    alert("Player " + whosTurn.number + " is bankrupt and eliminated.");
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " is bankrupt and eliminated.</p>";
    for(var i = 0; i < whosTurn.properties.length; i++) {
      property = document.getElementById(whosTurn.properties[i].idNumber);
      alert(property);
      property = property.querySelector(".dropdown-content");
      property.style.backgroundColor = "#f9f9f9";
      whosTurn.properties[i].ownedBy = null;
      whosTurn.properties[i].isOwned = false;
      whosTurn.properties[i] = null;
    }
  }
}

/**
function that opens the trade menu
*/
function openTradeMenu() {
  if(enabled == true) {
    var tradeMenu = document.getElementById("trade-menu");
    tradeMenu.style.height = "200px";
    tradeMenu.style.top = "210px";
    tradeMenu.style.display = "block";
    tradeMenu.style.left = "350px";
    disableButtons();

    if(whosTurn.properties.length < 1) {
      document.getElementById("trade-message").innerHTML = "You don't own any land.";
      document.getElementById("trade-enter").disabled = true;
    } else {
      document.getElementById("trade-enter").disabled = false;
      document.getElementById("trade-message").innerHTML = "Choose a property to trade.";
      var option;
      var select = document.getElementById("trade-select");

      /**
      putting all of current player's properties into dropdown
      **/
      for(var i = 0; i < whosTurn.properties.length; i++) {
        //IMPORTANT: make a new option element every time you append something
        //or something bad will happen!!!
        option = document.createElement("option");
        option.text = whosTurn.properties[i].name;
        option.dataValue = whosTurn.properties[i];
        //alert(option.dataValue);
        //alert(option.text);
        //alert(option.dataValue.name);
        select.appendChild(option);
      }
    }
  }
}

/**
function that closes the trade menu
*/
function closeTradeMenu() {
  var tradeMenu = document.getElementById("trade-menu");
  tradeMenu.style.height = "0";
  tradeMenu.style.top = "0";
  tradeMenu.style.display = "none";
  enableButtons();
  var select = document.getElementById("trade-select");
  for(var i = whosTurn.properties.length; i > 0; i--){
    //alert(select[i].dataValue.name)
    select.remove(i);
  }
}

/**
gets selected value in dropdown after player clicks button
**/
function getTradeOption() {
  var splicedProperty;
  var tradeSelect = document.getElementById("trade-select");
  var choice = tradeSelect.options[tradeSelect.selectedIndex].dataValue;
  //alert(tradeSelect.options[tradeSelect.selectedIndex].dataValue);
  //alert("choice: " + choice);
  //alert("choice name: " + choice.name);
  //alert(whosTurn.properties[tradeSelect.selectedIndex - 1].name);
  var playerSelect = document.getElementById("player-select");
  //alert("playerSelect: " + playerSelect);
  //alert("playerSelect dataValue: " + playerSelect.options[1].dataValue);
  //alert("playerSelect number: " + playerSelect.options[1].dataValue.number);
  //alert(playerSelect.selectedIndex);
  //alert(playerSelect.options[playerSelect.selectedIndex].value);
  //alert(playerSelect.options[playerSelect.selectedIndex].text);

  //alert(playerSelect.options[playerSelect.selectedIndex]);
  var myPlayer = eval(playerSelect.options[playerSelect.selectedIndex].value);
  //alert(myPlayer.number);
  /**
  ^^^ I think the eval() function successfully converts the "player1," "player2,"
  "player3," and "player4" strings stored as 'value' attributes in the
  "player-select" dropdown to their respective objects. I'm not sure though.
  **/
  //alert("myPlayer: " + myPlayer);
  //alert("myPlayer number: " + playerSelect.number);
  if(choice != undefined) {
    //console.log(whosTurn.properties);
    //console.log(whosTurn.properties[0].name);
    //alert(myPlayer);
    //alert(choice);
    //alert("Index of choice: " + whosTurn.properties,indexOf(choice));
    splicedProperty = whosTurn.properties.splice(whosTurn.properties[tradeSelect.selectedIndex - 1], 1);
    //console.log(splicedProperty);
    //console.log(eval(splicedProperty.name));
    //console.log("splicedProperty: " + splicedProperty);
    //console.log(splicedProperty[0].name);
    //console.log(splicedProperty.name);
    myPlayer.properties.push(splicedProperty[0]);
    //console.log(whosTurn.properties);
    //console.log(myPlayer.properties);
    //console.log(myPlayer.properties[0].name);
    choice.ownedBy = myPlayer;
    //alert(choice.ownedBy.number);
    var myElem = document.getElementById("main");
    myElem = myElem.querySelector("#" + choice.idNumber);
    myElem = myElem.querySelector(".dropdown-content");
    myElem.style.backgroundColor = myPlayer.color;

    tradeSelect.remove(tradeSelect.selectedIndex);

    //alert(splicedProperty[0].name)
    document.getElementById("log").innerHTML += "<p>Player " + whosTurn.number +
      " traded " + myPlayer.properties[myPlayer.properties.length - 1].name +
      " to Player " + myPlayer.number + ".</p>";
  }
}

/**
function that makes the trade, roll dice, switch turn, and trade buttons useless
*/
function disableButtons() {
  enabled = false;
  document.getElementById("diceBtn").style.backgroundColor = "#C7C7C7";
  document.getElementById("endBtn").style.backgroundColor = "#8C6060";
  document.getElementById("tradeBtn").style.backgroundColor = "#77608C";
  document.getElementById("buyBtn").style.backgroundColor = "#608C62";
}

/**
makes the trade, roll dice, switch turn, and trade buttons useable again
*/
function enableButtons() {
  enabled = true;
  document.getElementById("diceBtn").style.backgroundColor = "white";
  document.getElementById("endBtn").style.backgroundColor = "red";
  document.getElementById("tradeBtn").style.backgroundColor = "purple";
  document.getElementById("buyBtn").style.backgroundColor = "green";
}

/**
function that shows this turn's player's owned properties in a menu
*/
function displayOwnedProperties(playerElem) {
  //alert(document.getElementById("test"));
  //alert(document.getElementById("test").getAttribute("data-value"));
  //alert(document.getElementById("diceBtn"));
  //alert(document.getElementById("player-one"));
  //var poop = document.getElementById("player-one");
  //alert(poop);
  //console.log(poop);
  //alert(one.id);
  //alert(document.getElementById("player-two"));
  //alert(document.getElementById("player-three"));
  //alert(document.getElementById("player-four"));

  //alert(document.getElementById("player-one").getAttribute("data-value"));
  //alert(document.getElementById("player-two").value);
  //alert(document.getElementById("player-three").value);
  //alert(document.getElementById("player-four").value);


  //alert(playerElem.getAttribute("data-value"));
  var playerName = playerElem.getAttribute("data-value");
  //alert(playerName);
  var playerObject = eval(playerName);
  //alert(playerObject);
  for(var i = 0; i < playerObject.properties.length; i++) {
    console.log(playerObject.properties[i]);
  }
  disableButtons();

  var playerWindow = document.getElementById("player-window");
  playerWindow.style.height = "200px";
  playerWindow.style.top = "210px";
  playerWindow.style.display = "block";
  playerWindow.style.left = "350px";

  var closeButton = document.createElement("p");
  closeButton.appendChild(document.createTextNode("\u2715"));
  /*closeButton.style.top = 0;
  closeButton.style.fontSize = "36px";
  closeButton.style.paddingLeft = "10px";
  closeButton.style.cursor = "pointer";
  closeButton.style.transition = "0.3s";*/
  closeButton.classList.add("closebtn");
  //$(closeButton).on("click", closePlayerWindow());
  closeButton.addEventListener("click", closePlayerWindow);

  playerWindow.appendChild(closeButton);

  var propertyHeader = document.createElement("p");
  propertyHeader.appendChild(document.createTextNode("Player " +
    playerObject.number + "'s properties:"));
  propertyHeader.style.paddingLeft = "10px";
  //propertyHeader.style.position = "absolute";
  //playerWindow.innerHTML = "<p>Player " + playerObject.number + "'s properties:</p>";
  //playerWindow.innerHTML = propertyHeader;
  playerWindow.appendChild(propertyHeader);
  var property;
  for(var i = 0; i < playerObject.properties.length; i++) {
    property = document.createElement("p");
    property.appendChild(document.createTextNode(playerObject.properties[i].name));
    property.style.paddingTop = "2px";
    property.style.paddingBottom = "2px";
    property.style.marginLeft = "25px";
    playerWindow.appendChild(property);
  }
  var moneyHeader = document.createElement("p");
  moneyHeader.appendChild(document.createTextNode("Player " +
    playerObject.number + "'s money: $" + playerObject.money));
  moneyHeader.style.padding = "10px";
  playerWindow.appendChild(moneyHeader);
}

function closePlayerWindow() {
  var playerWindow = document.getElementById("player-window");
  playerWindow.innerHTML = "";
  playerWindow.style.height = "0";
  playerWindow.style.top = "0";
  playerWindow.style.display = "none";
  enableButtons();
}

/**
calls the scrollBarEffect() whenever the screen is scrolled
*/
window.onscroll = function() {scrollBarEffect()};

/**
function that does the scroll bar effect on top of the log
*/
function scrollBarEffect() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  //var divScroll = document.getElementById("log").scrollTop;
  var height = document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  /*var height = document.getElementById("log").scrollHeight -
    document.getElementById("log").clientHeight;*/
  var scrolled = (winScroll / height) * 100;
  //var scrolled = (divScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

//dragElement(document.getElementById("log-container"));

/**
function that lets the user drag certain elements
*/
function dragElement(element) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if(document.getElementById(element.id + "-header")) {
    //if present, the header is where you move the div from
    document.getElementById(element.id + "-header").onmousedown =
      dragMouseDown;
  } else {
    //otherwise, move the div from anywhere inside the div
    element.onmousedown = dragMouseDown;
  }
  function dragMouseDown(elmnt) {
    elmnt = elmnt || window.event;
    elmnt.preventDefault();
    //get the moust cursor position at startup:
    pos3 = elmnt.clientX;
    pos4 = elmnt.clientY;
    document.onmouseup = closeDragElement;
    //call a function whenever the cursor moves
    document.onmousemove = elementDrag;
  }
  function elementDrag(elmnt) {
    elmnt = elmnt || window.event;
    elmnt.preventDefault;
    //calculate the new cursor position
    pos1 = pos3 - elmnt.clientX;
    pos2 = pos4 - elmnt.clientY;
    pos3 = elmnt.clientX;
    pos4 = elmnt.clientY;
    //set the element's new position
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    //stop moving when mouse button is released
    document.onmousup = null;
    document.onmousemove = null;
  }
}

/**
function that shows all the house rules in a window
*/
function showHouseRules() {
  disableButtons();
  var houseRules = document.getElementById("house-rules");
  //houseRules.style.height = "200px";
  houseRules.style.top = "210px";
  houseRules.style.display = "block";
  //houseRules.style.left = "250px";
}

function closeHouseRules() {
  enableButtons();
  var houseRules = document.getElementById("house-rules");
  //houseRules.style.height = "0";
  houseRules.style.top = "0";
  houseRules.style.display = "none";
}
