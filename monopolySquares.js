var squares = [
  go = {},

  statenIsland = {
    name: "staten island",
    price: 60,
    rent: 4,
    oneStudio: 20,
    twoStudio: 60,
    threeStudio: 180,
    fourStudio: 320,
    brownstone: 450,
    mortgage: 30,
    studioCost: 50,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0, //5 studios would mean there's a brownstone
    idNumber: "s2",
    color: "indigo"
  },

  communityChest = {

  },

  bronx = {
    name: "bronx",
    price: 60,
    rent: 2,
    oneStudio: 10,
    twoStudio: 30,
    threeStudio: 90,
    fourStudio: 160,
    brownstone: 250,
    mortgage: 30,
    studioCost: 50,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s4",
    color: "indigo"
  },

  cityTax = {

  },

  aTrain = {
    name: '"A" Train',
    price: 200,
    rent: 25,
    twoOwned: 50,
    threeOwned: 100,
    fourOwned: 200,
    mortgage: 100,
    isOwned: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s6",
    isMortgaged: false
  },

  brooklyn = {
    name: "brooklyn",
    price: 100,
    rent: 6,
    oneStudio: 30,
    twoStudio: 90,
    threeStudio: 270,
    fourStudio: 400,
    brownstone: 550,
    mortgage: 50,
    studioCost: 50,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s7",
    color: "#ccffff"
  },

  queens = {
    name: "queens",
    price: 100,
    rent: 6,
    oneStudio: 30,
    twoStudio: 90,
    threeStudio: 270,
    fourStudio: 400,
    brownstone: 550,
    mortgage: 50,
    studioCost: 50,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s8",
    color: "#ccffff"
  },

  chance = {

  },

  manhattan = {
    name: "manhattan",
    price: 120,
    rent: 8,
    oneStudio: 40,
    twoStudio: 100,
    threeStudio: 300,
    fourStudio: 450,
    brownstone: 600,
    mortgage: 60,
    studioCost: 50,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s10",
    color: "#ccffff"
  },

  jail = {

  },

  washingtonSquarePark = {
    name: "washington square park",
    price: 160,
    rent: 12,
    oneStudio: 60,
    twoStudio: 180,
    threeStudio: 500,
    fourStudio: 700,
    brownstone: 900,
    mortgage: 80,
    studioCost: 100,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s12",
    color: "blueviolet"
  },

  electricCompany = {
    name: "electric company",
    price: 150,
    mortgage: 75,
    isOwned: false,
    ownedBy: null,
    idNumber: "s13",
    isMortgaged: false
  },

  batteryPark = {
    name: "battery park",
    price: 140,
    rent: 10,
    oneStudio: 50,
    twoStudio: 150,
    threeStudio: 450,
    fourStudio: 625,
    brownstone: 750,
    mortgage: 70,
    studioCost: 100,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s14",
    color: "blueviolet"
  },

  centralPark = {
    name: "central park",
    price: 140,
    rent: 10,
    oneStudio: 50,
    twoStudio: 150,
    threeStudio: 450,
    fourStudio: 625,
    brownstone: 750,
    mortgage: 70,
    studioCost: 100,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s15",
    color: "blueviolet"
  },

  dTrain = {
    name: '"D" Train',
    price: 200,
    rent: 25,
    twoOwned: 50,
    threeOwned: 100,
    fourOwned: 200,
    mortgage: 100,
    isOwned: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s16",
    isMortgaged: false
  },

  chinatown = {
    name: "chinatown",
    price: 180,
    rent: 14,
    oneStudio: 70,
    twoStudio: 200,
    threeStudio: 550,
    fourStudio: 750,
    brownstone: 950,
    mortgage: 90,
    studioCost: 100,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s17",
    color: "orange"
  },

  communityChest = {

  },

  littleItaly = {
    name: "little italy",
    price: 180,
    rent: 14,
    oneStudio: 70,
    twoStudio: 200,
    threeStudio: 550,
    fourStudio: 750,
    brownstone: 950,
    mortgage: 90,
    studioCost: 100,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s19",
    color: "orange"
  },

  greenwichVillage = {
    name: "greenwich village",
    price: 200,
    rent: 16,
    oneStudio: 80,
    twoStudio: 220,
    threeStudio: 600,
    fourStudio: 800,
    brownstone: 1000,
    mortgage: 100,
    studioCost: 100,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s20",
    color: "orange"
  },

  freeParking = {

  },

  timesSquare = {
    name: "times square",
    price: 220,
    rent: 18,
    oneStudio: 90,
    twoStudio: 250,
    threeStudio: 700,
    fourStudio: 875,
    brownstone: 1050,
    mortgage: 110,
    studioCost: 150,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s22",
    color: "red"
  },

  chance = {

  },

  wallStreet = {
    name: "wall street",
    price: 240,
    rent: 20,
    oneStudio: 100,
    twoStudio: 300,
    threeStudio: 750,
    fourStudio: 925,
    brownstone: 1100,
    mortgage: 120,
    studioCost: 150,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s24",
    color: "red"
  },

  broadway = {
    name: "broadway",
    price: 220,
    rent: 18,
    oneStudio: 90,
    twoStudio: 250,
    threeStudio: 700,
    fourStudio: 875,
    brownstone: 1050,
    mortgage: 110,
    studioCost: 150,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s25",
    color: "red"
  },

  nTrain = {
    name: '"N" Train',
    price: 200,
    rent: 25,
    twoOwned: 50,
    threeOwned: 100,
    fourOwned: 200,
    mortgage: 100,
    isOwned: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s26",
    isMortgaged: false
  },

  newYorkHarbor = {
    name: "new york harbor",
    price: 280,
    rent: 24,
    oneStudio: 120,
    twoStudio: 360,
    threeStudio: 850,
    fourStudio: 1025,
    brownstone: 1200,
    mortgage: 140,
    studioCost: 150,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s27",
    color: "yellow"
  },

  hudsonRiver = {
    name: "hudson river",
    price: 260,
    rent: 22,
    oneStudio: 110,
    twoStudio: 330,
    threeStudio: 800,
    fourStudio: 975,
    brownstone: 1150,
    mortgage: 130,
    studioCost: 150,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s28",
    color: "yellow"
  },

  waterWorks = {
    name: "water works",
    price: 260,
    mortgage: 75,
    isOwned: false,
    ownedBy: null,
    idNumber: "s29",
    isMortgaged: false
  },

  eastRiver = {
    name: "east river",
    price: 260,
    rent: 22,
    oneStudio: 110,
    twoStudio: 330,
    threeStudio: 800,
    fourStudio: 975,
    brownstone: 1150,
    mortgage: 130,
    studioCost: 150,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s30",
    color: "yellow"
  },

  goToJail = {

  },

  empireStateBuilding = {
    name: "empire state building",
    price: 320,
    rent: 28,
    oneStudio: 150,
    twoStudio: 450,
    threeStudio: 1000,
    fourStudio: 1200,
    brownstone: 1400,
    mortgage: 160,
    studioCost: 200,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s32",
    color: "green"
  },

  statueOfLiberty = {
    name: "statue of liberty",
    price: 300,
    rent: 26,
    oneStudio: 130,
    twoStudio: 390,
    threeStudio: 900,
    fourStudio: 1100,
    brownstone: 1275,
    mortgage: 150,
    studioCost: 200,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s33",
    color: "green"
  },

  communityChest = {

  },

  newYorkPublicLibrary = {
    name: "new york public library",
    price: 300,
    rent: 26,
    oneStudio: 130,
    twoStudio: 390,
    threeStudio: 900,
    fourStudio: 1100,
    brownstone: 1275,
    mortgage: 150,
    studioCost: 200,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s35",
    color: "green"
  },

  fourTrain = {
    name: '"4" Train',
    price: 200,
    rent: 25,
    twoOwned: 50,
    threeOwned: 100,
    fourOwned: 200,
    mortgage: 100,
    isOwned: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s36",
    isMortgaged: false
  },

  chance = {

  },

  fifthAvenue = {
    name: "fifth avenue",
    price: 400,
    rent: 50,
    oneStudio: 200,
    twoStudio: 600,
    threeStudio: 1400,
    fourStudio: 1700,
    brownstone: 2000,
    mortgage: 200,
    studioCost: 200,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s38",
    color: "blue"
  },

  luxuryTax = {

  },

  parkAvenue = {
    name: "park avenue",
    price: 350,
    rent: 35,
    oneStudio: 175,
    twoStudio: 500,
    threeStudio: 1100,
    fourStudio: 1300,
    brownstone: 1500,
    mortgage: 175,
    studioCost: 200,
    isOwned: false,
    isMortgaged: false,
    ownedBy: null,
    studiosBought: 0,
    idNumber: "s40",
    color: "blue"
  }
];

window.onload = function createCards(){
  for (var i = 1; i <= squares.length; i++) {
    if(i == 26 || i == 16 || i == 36 || i == 6) {
      var name = document.createElement("p");
      name.style.fontWeight = "bold";
      name.appendChild(document.createTextNode((squares[i-1].name).toUpperCase()));

      var price = document.createElement("p");
      price.style.fontWeight = "bold";
      price.appendChild(document.createTextNode("Price $" + squares[i-1].price));

      var rent = document.createElement("p");
      rent.appendChild(document.createTextNode("RENT $" + squares[i-1].rent));

      var twoOwned = document.createElement("p");
      twoOwned.appendChild(document.createTextNode("If 2 Trains are owned " + squares[i-1].twoOwned + "."));

      var threeOwned = document.createElement("p");
      threeOwned.appendChild(document.createTextNode("If 3 " + squares[i-1].threeOwned + "."));

      var fourOwned = document.createElement("p");
      fourOwned.appendChild(document.createTextNode("If 4 " + squares[i-1].fourOwned + "."));

      var mortgage = document.createElement("p");
      mortgage.appendChild(document.createTextNode("Mortgage Value $" + squares[i-1].mortgage + "."));

      var property = document.getElementById('s' + i);
      var dropdownContainer = property.querySelector(".dropdown-content");

      dropdownContainer.appendChild(name);
      dropdownContainer.appendChild(price);
      dropdownContainer.appendChild(rent);
      dropdownContainer.appendChild(twoOwned);
      dropdownContainer.appendChild(threeOwned);
      dropdownContainer.appendChild(fourOwned);
      dropdownContainer.appendChild(mortgage);
    }
    if(i == 2 || i == 4 || i == 7 || i == 8 || i == 10 || i == 12 || i == 14
       || i == 15 || i == 17 || i == 19 || i == 20 || i == 22 || i == 24
       || i == 25 || i == 27 || i == 28 || i == 30 || i == 32 || i == 33
       || i == 35 || i == 38 || i == 40) {
        var flair = document.createElement("div");
        flair.style.backgroundColor = squares[i-1].color;

        var titleDeed = document.createElement("p");
        titleDeed.style.fontWeight = "bold";
        titleDeed.appendChild(document.createTextNode("TITLE DEED"));

        var name = document.createElement("p");
        name.style.fontWeight = "bold";
        name.appendChild(document.createTextNode((squares[i-1].name).toUpperCase()));

        flair.appendChild(titleDeed);
        flair.appendChild(name);

        var price = document.createElement("p");
        price.style.fontWeight = "bold";
        price.appendChild(document.createTextNode("Price $" + squares[i-1].price));

        var rent = document.createElement("p");
        rent.appendChild(document.createTextNode("RENT $" + squares[i-1].rent));

        var oneStudio = document.createElement("p");
        oneStudio.appendChild(document.createTextNode("With 1 studio $" +squares[i-1].oneStudio + "."));

        var twoStudio = document.createElement("p");
        twoStudio.appendChild(document.createTextNode("With 2 studios " +squares[i-1].twoStudio + "."));

        var threeStudio = document.createElement("p");
        threeStudio.appendChild(document.createTextNode("With 3 studios " +squares[i-1].threeStudio + "."));

        var fourStudio = document.createElement("p");
        fourStudio.appendChild(document.createTextNode("With 4 studios " +squares[i-1].fourStudio + "."));

        var brownstone = document.createElement("p");
        brownstone.appendChild(document.createTextNode("With BROWNSTONE $" + squares[i-1].brownstone + "."));

        var mortgage = document.createElement("p");
        mortgage.appendChild(document.createTextNode("Mortgage value $" + squares[i-1].mortgage + "."));

        var studioCost = document.createElement("p");
        studioCost.appendChild(document.createTextNode("Studio cost $" + squares[i-1].studioCost + ". each"));

        var brownstones = document.createElement("p");
        brownstones.appendChild(document.createTextNode("Brownstones, $" + squares[i-1].studioCost + ". plus 4 studios"));
              //alert(i.toString());

              /*for (var i = 0; i < squares.length; i++) {
                console.log(squares[i]);
              }
              /*****
              for some reason i dont get any errors if i have that for loop there
              *****/
              //alert(i);
              //alert(squares.length);

              /*var test = document.getElementById((i).toString()).querySelector(".dropdown-content");
              var test2 = flair;*/
              //document.body.appendChild(flair);

              /*************************** dad's help:
              var poop = 22;
              console.log(i + " qs " + document.querySelector("[id='"+22+"'] div.dropdown-content"));

              dropdownContainer = document.querySelector("[id='"+i+"'] div.dropdown-content");


              flair.id = "a";
              if(document.getElementById("a") != null){
                alert("found me");
              }
              //alert("property " + property);
              //alert("test " + test);
              //alert("test2 " + test2);
              //alert("dc " + dropdownContainer);
              //alert("flairt " + flair);
              ***************************/

        var property = document.getElementById("s" + i); //.toString());
        var dropdownContainer = property.querySelector(".dropdown-content");

        //alert(i);
        //alert(flair);
        //alert(property);
        //alert(dropdownContainer);

        dropdownContainer.appendChild(flair);
        dropdownContainer.appendChild(price);
        dropdownContainer.appendChild(rent);
        dropdownContainer.appendChild(oneStudio);
        dropdownContainer.appendChild(twoStudio);
        dropdownContainer.appendChild(threeStudio);
        dropdownContainer.appendChild(fourStudio);
        dropdownContainer.appendChild(brownstone);
        dropdownContainer.appendChild(mortgage);
        dropdownContainer.appendChild(studioCost);
        dropdownContainer.appendChild(brownstones);

        var elem = property.querySelector(".property-container");
        elem.style.backgroundColor = squares[i - 1].color;
    }
    if (i == 13 || i == 29) {
      var name = document.createElement("p");
      name.style.fontWeight = "bold";
      name.appendChild(document.createTextNode((squares[i-1].name).toUpperCase()));

      var price = document.createElement("p");
      price.style.fontWeight = "bold";
      price.appendChild(document.createTextNode("Price $" + (squares[i-1].price) + "."));

      var info = document.createElement("p");
      info.appendChild(document.createTextNode("If one \"Utility\"" +
      "is owned rent is 4 times amount shown on dice. " +
			"If both \"Utilities\" are owned rent is 10 times amount shown on dice. " +
			"Mortgage Value $75."));

      var property = document.getElementById("s" + i);
      var dropdownContainer = property.querySelector(".dropdown-content");

      dropdownContainer.appendChild(name);
      dropdownContainer.appendChild(price);
      dropdownContainer.appendChild(info);
    }
  }
  getStartingPlayer();
}

function showCard(elem){
  document.getElementById(elem.getAttribute('id')).querySelector(".dropdown-content").style.display = "block";
}

function hideCard(elem){
  document.getElementById(elem.getAttribute('id')).querySelector(".dropdown-content").style.display = "none";
}

/**
$(document).ready(function(){
  $(".dropdown").hover(function(){
    var id = $(this).attr("id"); //gets id of this element
    $(this).children(".dropdown-content").html("hi");
    $(this).children(".dropdown-content").css("display", "block");
  }, function(){
    $(".dropdown-content").css("display", "none");

    //^this technically sets the display of all elements with this class to none
    //to be more specfic you would do the same as the function above it

  });
});
**/
