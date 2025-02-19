// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//I: The function takes in an array 
//O:
//C:
//E:

var maleCount = function(array) {
    var males = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].gender === 'male' ){
            males.push(array[i]);

        }
    }
        return males.length; 

};



//I: The input is a array. 
//O: The ouptut is a number.
var femaleCount = function(array){
    return array.reduce(function(count,type){ //the reduce method iterates through an array and returns a single value
        //takes 1st argument a call back function which is executed on each element in the array
        //the call back takes count which is the accumulator that keeps track of the running total
        //type is the current element of the array during iteration. 
        if(type.gender === "female"){ //checks if the gender property of the current element is eqaul to female

            return count + 1 //if it is the accumulator takes the current count and goes up by 1 each time

        }
        return count;// returns the count

    
    }, 0)//starting point for reduce and second argument


}


//so I need to iterate through the array of people and check the age of each person and increment the age everytime someone
//that is older is passed over. should return the name of the person who is the oldest. 

var oldestCustomer = function(customers){

var oldestPers = customers[0]; //initializing the oldest person count at the first index of the array 

for(var i = 1; i < customers.length; i++){//looping over the array 
    if(customers[i].age > oldestPers.age){//comparing the age of the oldest to the current iteration

        oldestPers = customers[i];//updating the oldest if the current one is older
    }
}
return oldestPers.name;//return the oldest persons name

};


var youngestCustomer = function(array){
    let youngestPers = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i].age < youngestPers.age){

            youngestPers = array[i]

        }

    }
    return youngestPers.name


};

//here i need to iterate over the keys in the object
//for each key access the 'balance' of each customer 
//compute the average of every customers balance 
//the output should be a number 

var averageBalance = function(array){

    let totBalance = 0; //initialize the total balance at 0

    for(let i = 0; i < array.length; i++){ //loop over the array
        totBalance += array[i].balance; //add the current balance of the customer to the total balance 
    }
    let average = totBalance / array.length; //variable that takes the total balance collected and divides it by every customer in the array
    return average;

};




var firstLetterCount = function(array, letter){
    let firstLetter = [];

    for(var i = 0; i < array.length; i++){
            return array[i].customers

    }

}

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
