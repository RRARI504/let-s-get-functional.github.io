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


//so I need to iterate through the array of people and check the age of each person and increment the age evertime some
//that is older is passed over 

var oldestCustomer = function(array){

return array.reduce(function(oldest, current){

    if(current.age > oldest.age){
        return current;

    }

    return oldest;



},)



}





var youngestCustomer;

var averageBalance;

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
