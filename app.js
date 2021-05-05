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

let totalPerHour = [];
let totalOfTotal = [];

let arr1,
  arr2,
  arr3,
  arr4,
  arr5,
  arr6,
  arr7,
  arr8,
  arr9,
  arr10,
  arr11,
  arr12,
  arr13,
  arr14 = [];

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

// my constructor
function PatStors(cityName, minCust, maxCust, avgCookie) {
  this.numOfCust = 0;
  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.sum1 = 0;
  this.sum2 = 0;
  this.sum3 = 0;
  this.sum4 = 0;
  this.sum5 = 0;
  this.sum6 = 0;
  this.sum7 = 0;
  this.sum8 = 0;
  this.sum9 = 0;
  this.sum10 = 0;
  this.sum11 = 0;
  this.sum12 = 0;
  this.sum13 = 0;
  this.sum14 = 0;

  // methods
  this.getRandomCust = function (min, max) {
    this.numOfCust = randomNum(minCust, maxCust);
  };

  this.getRandomCust = function () {
    randomNum(minCust, maxCust);
  };

  this.getTotalOfEachHour = function () {
    for (let i = 0; i < time.length; i++) {}
  };

  // addToTable function
  this.addToTable = function () {
    let total = 0;
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = `${this.cityName}`;

    for (let i = 0; i < time.length; i++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      let temp = Math.floor(randomNum(this.minCust, this.maxCust) * avgCookie);
      td.textContent = `${temp}`;
      totalPerHour.push(temp);
      total += temp;
      totalPerHour.push(total);

      if (i === 0) {
        this.sum1 = temp;
      } else if (i == 1) {
        this.sum2 = temp;
      } else if (i == 2) {
        this.sum3 = temp;
      } else if (i == 3) {
        this.sum4 = temp;
      } else if (i == 4) {
        this.sum5 = temp;
      } else if (i == 5) {
        this.sum6 = temp;
      } else if (i == 6) {
        this.sum7 = temp;
      } else if (i == 7) {
        this.sum8 = temp;
      } else if (i == 8) {
        this.sum9 = temp;
      } else if (i == 9) {
        this.sum10 = temp;
      } else if (i == 10) {
        this.sum11 = temp;
      } else if (i == 11) {
        this.sum12 = temp;
      } else if (i == 12) {
        this.sum13 = temp;
      } else if (i == 13) {
        this.sum14 = temp;
      }
    }

    totalOfTotal.push(total);

    th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = `${total}`;
  };
}

// last Col
let lastCol = function () {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "Totals";

  for (let i = 0; i < time.length; i++) {
    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = `Sum of cols`;
  }

  th = document.createElement("th");
  tr.appendChild(th);
  let x = 0;
  for (let i = 0; i < totalOfTotal.length; i++) {
    x += totalOfTotal[i];
  }
  th.textContent = `${x}`;
};

// my method as a prototybe
PatStors.prototype.pushTotalOfEachHourIntoArray = function () {
  arr1.push(this.sum1);
  arr2.push(this.sum2);
  arr3.push(this.sum3);
  arr4.push(this.sum4);
  arr5.push(this.sum5);
  arr6.push(this.sum6);
  arr7.push(this.sum7);
  arr8.push(this.sum8);
  arr9.push(this.sum9);
  arr10.push(this.sum10);
  arr11.push(this.sum11);
  arr12.push(this.sum12);
  arr13.push(this.sum13);
  arr13.push(this.sum14);
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

// seattle.pushTotalOfEachHourIntoArray();
// tokyo.pushTotalOfEachHourIntoArray();
// paris.pushTotalOfEachHourIntoArray();
// dubai.pushTotalOfEachHourIntoArray();
// lima.pushTotalOfEachHourIntoArray();

lastCol();

// --------------------------------------------------------------
