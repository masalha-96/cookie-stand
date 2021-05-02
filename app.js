'use strict';

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



/* 1 */ let theParent = document.getElementById('Sales');

let Seattle = {
    //keys
    name: 'Seattle',
    time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    minCust: 23 ,
    maxCust: 65 ,
    numOfCust: 0,
    avgCookie: 6.3 ,


    //methods
    getRandomCust: function (min,max)
    {
        this.numOfCust = randomAge(minCust, maxCust);
    },

    printAndTotal: function ()
    {
        let total =0;
        
        for ( let i = 0 ; i< this.time.length ; i++ )
        {
            //document.write(`${this.time[i]}: ${randomNum(23, 65)} cookies`);  
            let listItems = document.createElement('li');
            theParent.appendChild(listItems);
            let temp = randomNum(this.minCust, this.maxCust);
            listItems.textContent = `${this.time[i]}: ${temp} cookies`;
            total += temp;
        }

        let listItems = document.createElement('li');
        theParent.appendChild(listItems);
        listItems.textContent =  `Total: ${total} cookies`;
    
    },


};




/* 2 */
let header2 = document.createElement('h2');
theParent.appendChild(header2);
header2.textContent = Seattle.name;


/*  3  */
let unOrederedList = document.createElement('ul');
theParent.appendChild(unOrederedList);
unOrederedList.textContent = Seattle.printAndTotal();


// -----------------------------------------------



let Tokyo = {
    //keys
    name: 'Tokyo',
    time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    minCust: 3 ,
    maxCust: 24 ,
    numOfCust: 0,
    avgCookie: 6.3 ,


    //methods
    getRandomCust: function (min,max)
    {
        this.numOfCust = randomAge(minCust, maxCust);
    },

    printAndTotal: function ()
    {
        let total =0;
        
        for ( let i = 0 ; i< this.time.length ; i++ )
        {
            //document.write(`${this.time[i]}: ${randomNum(23, 65)} cookies`);  
            let listItems = document.createElement('li');
            theParent.appendChild(listItems);
            let temp = randomNum(this.minCust, this.maxCust);
            listItems.textContent = `${this.time[i]}: ${temp} cookies`;
            total += temp;
        }

        let listItems = document.createElement('li');
        theParent.appendChild(listItems);
        listItems.textContent =  `Total: ${total} cookies`;
    
    },


};




/* 2 */
header2 = document.createElement('h2');
theParent.appendChild(header2);
header2.textContent = Tokyo.name;


/*  3  */
unOrederedList = document.createElement('ul');
theParent.appendChild(unOrederedList);
unOrederedList.textContent = Tokyo.printAndTotal();


// -----------------------------------------------


let Dubai	 = {
    //keys
    name: 'Dubai	',
    time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    minCust: 11 ,
    maxCust: 38 ,
    numOfCust: 0,
    avgCookie: 3.7 ,


    //methods
    getRandomCust: function (min,max)
    {
        this.numOfCust = randomAge(minCust, maxCust);
    },

    printAndTotal: function ()
    {
        let total =0;
        
        for ( let i = 0 ; i< this.time.length ; i++ )
        {
            //document.write(`${this.time[i]}: ${randomNum(23, 65)} cookies`);  
            let listItems = document.createElement('li');
            theParent.appendChild(listItems);
            let temp = randomNum(this.minCust, this.maxCust);
            listItems.textContent = `${this.time[i]}: ${temp} cookies`;
            total += temp;
        }

        let listItems = document.createElement('li');
        theParent.appendChild(listItems);
        listItems.textContent =  `Total: ${total} cookies`;
    
    },


};




/* 2 */
header2 = document.createElement('h2');
theParent.appendChild(header2);
header2.textContent = Dubai.name;


/*  3  */
unOrederedList = document.createElement('ul');
theParent.appendChild(unOrederedList);
unOrederedList.textContent = Dubai.printAndTotal();


// -----------------------------------------------

let Paris	 = {
    //keys
    name: 'Paris	',
    time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    minCust: 20 ,
    maxCust: 38 ,
    numOfCust: 0,
    avgCookie: 2.3 ,


    //methods
    getRandomCust: function (min,max)
    {
        this.numOfCust = randomAge(minCust, maxCust);
    },

    printAndTotal: function ()
    {
        let total =0;
        
        for ( let i = 0 ; i< this.time.length ; i++ )
        {
            //document.write(`${this.time[i]}: ${randomNum(23, 65)} cookies`);  
            let listItems = document.createElement('li');
            theParent.appendChild(listItems);
            let temp = randomNum(this.minCust, this.maxCust);
            listItems.textContent = `${this.time[i]}: ${temp} cookies`;
            total += temp;
        }

        let listItems = document.createElement('li');
        theParent.appendChild(listItems);
        listItems.textContent =  `Total: ${total} cookies`;
    
    },


};




/* 2 */
header2 = document.createElement('h2');
theParent.appendChild(header2);
header2.textContent = Paris.name;


/*  3  */
unOrederedList = document.createElement('ul');
theParent.appendChild(unOrederedList);
unOrederedList.textContent = Paris.printAndTotal();


// -----------------------------------------------


let Lima	 = {
    //keys
    name: 'Lima	',
    time: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    minCust: 20 ,
    maxCust: 38 ,
    numOfCust: 0,
    avgCookie: 2.3 ,


    //methods
    getRandomCust: function (min,max)
    {
        this.numOfCust = randomAge(minCust, maxCust);
    },

    printAndTotal: function ()
    {
        let total =0;
        
        for ( let i = 0 ; i< this.time.length ; i++ )
        {
            //document.write(`${this.time[i]}: ${randomNum(23, 65)} cookies`);  
            let listItems = document.createElement('li');
            theParent.appendChild(listItems);
            let temp = randomNum(this.minCust, this.maxCust);
            listItems.textContent = `${this.time[i]}: ${temp} cookies`;
            total += temp;
        }

        let listItems = document.createElement('li');
        theParent.appendChild(listItems);
        listItems.textContent =  `Total: ${total} cookies`;
    
    },


};




/* 2 */
header2 = document.createElement('h2');
theParent.appendChild(header2);
header2.textContent = Lima.name;


/*  3  */
unOrederedList = document.createElement('ul');
theParent.appendChild(unOrederedList);
unOrederedList.textContent = Lima.printAndTotal();


// -----------------------------------------------