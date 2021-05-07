"use strict";
const time = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

let stores = [];

let totalOfTotal = [];

let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];
let arr9 = [];
let arr10 = [];
let arr11 = [];
let arr12 = [];
let arr13 = [];
let arr14 = [];
let sumOfRow = [];

let MyDiv = document.getElementById("Sales");

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function fisrtCol() {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "City Name / Hour";

  for (let i = 0; i < time.length; i++) {
    let th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = `${time[i]}`;
  }

  th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "Daily Location Total";
}

/*
<table> <tr> </tr> </table>
*/
let myDiv = document.getElementById("Sales");
let table = document.createElement("table");
myDiv.appendChild(table);

// ============================================================= My constructor=====================================================================
function PatStors(cityName, minCust, maxCust, avgCookie) {
  this.numOfCust = 0;
  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;

  stores.push(this);

  // methods
  this.getRandomCust = function (min, max) {
    this.numOfCust = randomNum(minCust, maxCust);
  };

  this.getRandomCust = function () {
    randomNum(minCust, maxCust);
  };
}

// =============================================================ADD TO TABLE PROTOTYPE=====================================================================

PatStors.prototype.addToTable = function () {
  let total = 0;
  let tr = document.createElement("tr");
  table.appendChild(tr);

  let th = document.createElement("td");
  tr.appendChild(th);
  th.textContent = `${this.cityName}`;

  for (let i = 0; i < time.length; i++) {
    let td = document.createElement("td");
    tr.appendChild(td);
    let temp = Math.floor(
      randomNum(this.minCust, this.maxCust) * this.avgCookie
    );
    let temp2 = temp;
    td.textContent = `${temp}`;
    total += temp;
    if (i === 0) {
      arr1.push(temp2);
    } else if (i === 1) {
      arr2.push(temp2);
    } else if (i === 2) {
      arr3.push(temp2);
    } else if (i === 3) {
      arr4.push(temp2);
    } else if (i === 4) {
      arr5.push(temp2);
    } else if (i === 5) {
      arr6.push(temp2);
    } else if (i === 6) {
      arr7.push(temp2);
    } else if (i === 7) {
      arr8.push(temp2);
    } else if (i === 8) {
      arr9.push(temp2);
    } else if (i === 9) {
      arr10.push(temp2);
    } else if (i === 10) {
      arr11.push(temp2);
    } else if (i === 11) {
      arr12.push(temp2);
    } else if (i === 12) {
      arr13.push(temp2);
    } else if (i === 13) {
      arr14.push(temp2);
    }
  }

  totalOfTotal.push(total);

  th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = `${total}`;
};

// ============================================================= LastCol Function to make footer =====================================================================
let lastCol = function () {
  let temp = 0;
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "Totals";

  for (let i = 0; i < sumOfRow.length; i++) {
    let th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = `${sumOfRow[i]}`;
  }

  th = document.createElement("th");
  tr.appendChild(th);
  let x = 0;

  for (let i = 0; i < totalOfTotal.length; i++) {
    x += totalOfTotal[i];
  }
  th.textContent = `${x}`;
};

let sumofrows = function () {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  sumOfRow[0] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr2[i];
  }
  sumOfRow[1] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr3[i];
  }
  sumOfRow[2] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr4[i];
  }
  sumOfRow[3] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr5[i];
  }
  sumOfRow[4] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr6[i];
  }
  sumOfRow[5] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr7[i];
  }
  sumOfRow[6] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr8[i];
  }
  sumOfRow[7] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr9[i];
  }
  sumOfRow[8] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr10[i];
  }
  sumOfRow[9] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr11[i];
  }
  sumOfRow[10] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr12[i];
  }
  sumOfRow[11] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr13[i];
  }
  sumOfRow[12] = sum;
  //
  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr14[i];
  }
  sumOfRow[13] = sum;
};

// -----------------------------------------------
let seattle = new PatStors("Seattle", 23, 65, 6.3); // creat objects from constructor
let tokyo = new PatStors("Tokyo", 3, 24, 1.2);
let paris = new PatStors("Paris", 20, 38, 2.3);
let lima = new PatStors("Lima", 2, 16, 4.6);
let dubai = new PatStors("Dubai", 11, 38, 3.7);
// -----------------------------------------------

// call the print method to show my elemnts in the html page----
//seattle.colOne();
fisrtCol();
seattle.addToTable();
tokyo.addToTable();
paris.addToTable();
dubai.addToTable();
lima.addToTable();
sumofrows();
lastCol();

// to check if my array working good
//console.log(stores);

// --------------------------------------------------------------

// ============================================================= Event & Form =====================================================================

let newStorform = document.getElementById("newStore"); // target the form from html by id

newStorform.addEventListener("submit", submitter); // add event to it with function to do if event exist, remember:  dont use () with function here

function submitter(event) {
  // // i need to add parameter to my fun to check my fun works  ::  like (event)
  event.preventDefault();
  //console.log('Event working good' , event );

  let storeLocation = event.target.storeLocation.value;
  //console.log(storeLocation);

  let maxSale = event.target.maxSale.value;
  //console.log(maxSale);

  let minSale = event.target.minSale.value;
  //console.log(minSale);

  let avgSale = event.target.avgSale.value;
  //console.log(avgSale);


    
      table.deleteRow(table.rows.length - 1); // to remove footer row when i'm adding new store
      let myNewStor = new PatStors(storeLocation, minSale, maxSale, avgSale);
      myNewStor.addToTable();
      sumofrows();
      lastCol();

  

   

}

