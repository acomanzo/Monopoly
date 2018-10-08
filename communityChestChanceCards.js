var COMMUNITY_CHEST_DECK = [
  advanceToGo = {
    cardEffect: function() {
      alert("Advance to GO. (Collect $200)");
      document.getElementById("log").innerHTML += "<p>Player " +
        whosTurn.number + " advanced to GO.</p>";

      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      whosTurn.position = 1;
      var go = document.getElementById("s1");
      go = go.querySelector(".player-holder");
      go = go.querySelector("div:nth-child(" + whosTurn.number + ")");
      go.classList.add("player");

      whosTurn.money += 200;
    }
  },

  bankError = {
    cardEffect: function() {
      alert("bank error in your favor. Collect $200.")
      whosTurn.money += 200;
    }
  },

  doctorsFees = {
    cardEffect: function() {
      alert("Doctor's fees. Pay $50.")
      whosTurn.money -= 50;
    }
  },

  saleOfStock = {
    cardEffect: function() {
      alert("From sale of stock you get $50.");
      whosTurn.money += 50;
    }
  },

  getOutOfJailFree = {
    cardEffect: function() {
      alert("You got a 'Get out of jail free' card.");
    }
  },

  goToJail = {
    cardEffect: function() {
      alert("Go directly to jail. Do not pass GO.");
      whosTurn.inJail = true;

      document.getElementById("log").innerHTML += "<p>Player " +
        whosTurn.number + " went to jail.</p>";

      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      whosTurn.position = 11;
      var jail = document.getElementById("jail");
      jail = jail.querySelector("div:nth-child(" + (whosTurn.number + 1) + ")");
      jail.classList.add("player");
      jail.style.backgroundColor = whosTurn.color;
    }
  },

  grandOperaNight = {
    cardEffect: function() {
      alert("Collect $50 from every player for opening night seats.");
      player1.money -= 50;
      player2.money -= 50;
      player3.money -= 50;
      player4.money -= 50;
      whosTurn.money += 200;
    }
  },

  holidayFund = {
    cardEffect: function() {
      alert("Collect $100.");
      whosTurn.money += 100;
    }
  },

  incomeTaxRefund = {
    cardEffect: function() {
      alert("Collect $20.");
      whosTurn.money += 20;
    }
  },

  birthday = {
    cardEffect: function() {
      alert("It's your birthday. Collect $10 from each player.");
      player1.money -= 10;
      player2.money -= 10;
      player3.money -= 10;
      player4.money -= 10;
      whosTurn.money += 40;
    }
  },

  lifeInsurance = {
    cardEffect: function() {
      alert("Collect $100.");
      whosTurn.money += 100;
    }
  },

  hospitalFees = {
    cardEffect: function() {
      alert("Hospital fees. Pay $50.");
      whosTurn.money -= 50;
    }
  },

  schoolFees = {
    cardEffect: function() {
      alert("School fees. Pay $50.");
      whosTurn.money -= 50;
    }
  },

  consultancyFee = {
    cardEffect: function() {
      alert("Receive $25 consultancy fee.");
      whosTurn.money -= 25;
    }
  },

  streetRepairs = {
    cardEffect: function() {
      alert("You are assessed for street repairs. Pay $40 per studio " +
        "and $115 per brownstone you own.");
      whosTurn.money -= ((40 * whosTurn.studiosOwned) + (115 * whosTurn.brownstonesOwned));
    }
  },

  beautyContest = {
    cardEffect: function() {
      alert("You have won second prize in a beauty contest. Collect $10.");
      whosTurn.money += 10;
    }
  },

  inherit = {
    cardEffect: function() {
      alert("You inherit $100.");
      whosTurn.money += 100;
    }
  }
];

var CHANCE_DECK = [
  advanceToGo = {
    cardEffect: function() {
      alert("Advance to GO. (Collect $200)");
      document.getElementById("log").innerHTML += "<p>Player " +
        whosTurn.number + " advanced to GO.</p>";

      var old = "#s" + player.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      whosTurn.position = 1;
      var go = document.getElementById("s1");
      go = go.querySelector(".player-holder");
      go = go.querySelector("div:nth-child(" + whosTurn.number + ")");
      go.classList.add("player");

      whosTurn.money += 200;
    }
  },

  advanceToTimesSquare = {
    cardEffect: function() {
      alert("Advance to Times Square. If you pass GO, collect $200.");
      document.getElementById("log").innerHTML += "<p>Player " +
        whosTurn.number + " advanced to Times Square.</p>";

      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      if(whosTurn.position > 22) {
        whosTurn.money += 200;
      }

      whosTurn.position = 22;
      var timesSquare = document.getElementById("s22");
      timesSquare = timesSquare.querySelector(".player-holder");
      timesSquare = timesSquare.querySelector("div:nth-child(" + whosTurn.number + ")");
      timesSquare.classList.add("player");

    }
  },

  advanceToWashingtonSquare = {
    cardEffect: function() {
      alert("Advance to Washington Square Park. If you pass GO, collect $200.");
      document.getElementById("log").innerHTML += "<p>Player " +
        whosTurn.number + " advanced to Washington Square Park.</p>";

      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      if(whosTurn.position > 12) {
        whosTurn.money += 200;
      }

      whosTurn.position = 12;
      var timesSquare = document.getElementById("s12");
      timesSquare = timesSquare.querySelector(".player-holder");
      timesSquare = timesSquare.querySelector("div:nth-child(" + whosTurn.number + ")");
      timesSquare.classList.add("player");
    }
  },

  advanceToNearestUtility = {
    cardEffect: function() {
      alert("Advance to the nearest utility.");

      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      var nearestUtility;

      if(whosTurn.position > 13) {
        whosTurn.position = 29;

        nearestUtility = document.getElementById("s29");
        nearestUtility = nearestUtility.querySelector(".player-holder");
        nearestUtility = nearestUtility.querySelector("div:nth-child(" + whosTurn.number + ")");
        nearestUtility.classList.add("player");
      } else if(whosTurn.position < 13 && whosTurn.position > 29) {
        whosTurn.position = 13;

        nearestUtility = document.getElementById("s29");
        nearestUtility = nearestUtility.querySelector(".player-holder");
        nearestUtility = nearestUtility.querySelector("div:nth-child(" + whosTurn.number + ")");
        nearestUtility.classList.add("player");
      }

      if(squares[whosTurn.position - 1].isOwned === true) {
        alert("You must pay rent to the owner.");
        die1 = Math.floor((Math.random() * 6) + 1);
        die2 = Math.floor((Math.random() * 6) + 1);

        var rent = (10 * (die1 + die2))
        whosTurn.money -= rent;

        squares[whosTurn.position - 1].ownedBy.money += rent;
      }
    }
  },

  advanceToSubway = {
    cardEffect: function() {
      alert("Advance to the nearest subway.");
      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      var nearestSubway;

      if(whosTurn.position < 6 || whosTurn.position > 36) {
        whosTurn.position = 6;

        nearestSubway = document.getElementById("s6");
        nearestSubway = nearestSubway.querySelector(".player-holder");
        nearestSubway = nearestSubway.querySelector("div:nth-child(" + whosTurn.number + ")");
        nearestSubway.classList.add("player");
      } else if (whosTurn.position < 16 && whosTurn.position > 6) {
        whosTurn.position = 16;

        nearestSubway = document.getElementById("s16");
        nearestSubway = nearestSubway.querySelector(".player-holder");
        nearestSubway = nearestSubway.querySelector("div:nth-child(" + whosTurn.number + ")");
        nearestSubway.classList.add("player");
      } else if(whosTurn.position > 16 && whosTurn.position < 26) {
        whosTurn.position = 26;

        nearestSubway = document.getElementById("s26");
        nearestSubway = nearestSubway.querySelector(".player-holder");
        nearestSubway = nearestSubway.querySelector("div:nth-child(" + whosTurn.number + ")");
        nearestSubway.classList.add("player");
      } else if(whosTurn.position > 26 && whosTurn.position < 36) {
        whosTurn.position = 36;

        nearestSubway = document.getElementById("s36");
        nearestSubway = nearestSubway.querySelector(".player-holder");
        nearestSubway = nearestSubway.querySelector("div:nth-child(" + whosTurn.number + ")");
        nearestSubway.classList.add("player");
      }

      var rent = squares[whosTurn.position - 1].ownedBy.trainsOwned;
      whosTurn.money -= rent;
      squares[whosTurn.position - 1].ownedBy.money += rent;
    }
  },

  bankPaysYou = {
    cardEffect: function() {
      alert("The bank pays you dividend of $50.");
      whosTurn.money += 50;
    }
  },

  getOutOfJailFree = {
    cardEffect: function() {
      alert("You got a 'Get out of jail free' card.");
    }
  },

  goBackThreeSpaces = {
    cardEffect: function() {
      alert("Go back three (3) spaces.");

      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      whosTurn.position = whosTurn.position - 3;
      var newSpace = document.getElementById("s" + whosTurn.position);
      newSpace = newSpace.querySelector(".player-holder");
      newSpace = newSpace.querySelector("div:nth-child(" + whosTurn.number + ")");
      newSpace.classList.add("player");
    }
  },

  goToJail = {
    cardEffect: function() {
      alert("Go directly to jail. Do not pass GO.");
      whosTurn.inJail = true;

      document.getElementById("log").innerHTML += "<p>Player " +
        whosTurn.number + " went to jail.</p>";

      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      whosTurn.position = 11;
      var jail = document.getElementById("jail");
      jail = jail.querySelector("div:nth-child(" + (whosTurn.number + 1) + ")");
      jail.classList.add("player");
      jail.style.backgroundColor = whosTurn.color;
    }
  },

  generalRepairs = {
    cardEffect: function() {
      alert("Make general repairs on all your property. For each house pay $25." +
        " for each brownstone pay $100.");
      whosTurn.money -= ((25 * whosTurn.studiosOwned) + (100 * whosTurn.brownstonesOwned));
    }
  },

  payPoorTax = {
    cardEffect: function() {
      alert("Pay poor tax of $15.");
      whosTurn.money -= 15;
    }
  },

  goToATrain = {
    cardEffect: function() {
      alert("Tale a trip to the 'A' Train. If you pass GO, collect $200.")
      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      if(whosTurn.position > 6) {
        whosTurn.money += 200;
      }

      whosTurn.position = 6;
      var jail = document.getElementById("s6");
      jail = jail.querySelector("div:nth-child(" + (whosTurn.number) + ")");
      jail.classList.add("player");
      jail.style.backgroundColor = whosTurn.color;

    }
  },

  goToParkAvenue = {
    cardEffect: function() {
      alert("Walk to Park Avenue.");

      var old = "#s" + whosTurn.position;
      var elem = document.querySelector(old);
      elem = elem.querySelector("div:nth-child(" + whosTurn.number + ")");
      elem.classList.remove("player");

      whosTurn.position = 40;
      var jail = document.getElementById("s40");
      jail = jail.querySelector("div:nth-child(" + (whosTurn.number) + ")");
      jail.classList.add("player");
      jail.style.backgroundColor = whosTurn.color;
    }
  },

  chairman = {
    cardEffect: function() {
      alert("You have been elected chairman of the board. Pay " +
        "each player $50.");
      player1.money += 50;
      player2.money += 50;
      player3.money += 50;
      player4.money += 50;
      whosTurn.money -= 150;
    }
  },

  buildingLoanMatures = {
    cardEffect: function() {
      alert("Your building and loan matures. Collect $150.");
      whosTurn.money += 150;
    }
  },

  crosswordWinnder = {
    cardEffect: function() {
      alert("You have won a crossword competition. Collect $100.");
      whosTurn.money += 100;
    }
  }
];
