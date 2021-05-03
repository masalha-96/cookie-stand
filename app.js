"use strict";
let time = [
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

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function fisrtCol ()
{
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "City Name / Hour";

  for (let i = 0; i < time.length; i++) 
  {
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

function PatStors(cityName, minCust, maxCust, avgCookie) {


  this.numOfCust = 0;

  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;

  // methods
  this.getRandomCust = function (min, max) {
    this.numOfCust = randomNum(minCust, maxCust);
  };

  this.getRandomCust = function () {
    randomNum(minCust, maxCust);
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
      total += temp;
    }

    th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = `${total}`;
  };

}



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
// --------------------------------------------------------------
