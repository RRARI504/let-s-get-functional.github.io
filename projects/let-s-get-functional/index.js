// #!/usr/bin/env node

'use strict';

const { filter } = require('lodash');
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
        return males.length

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

    let totBalance = array.reduce(function(acc, current){
        
    let tot = current.balance
    let balance = tot.replace(/[$,]/g, "");
    acc += Number(balance)
    return acc;

    }, 0);

    return totBalance / array.length ;
    

};







var firstLetterCount = function(array, letter){
    let count = 0; //initiating count at zero 
    letter = letter.toUpperCase();

    for(let i = 0; i < array.length; i++){//iterating throgh the array 
        if(array[i].name.charAt(0) === letter) {
            // if the current item in the array that is being iterated through at the first character of the name 
            //is equal to the letter
            count++
            //increment the count  
        }

    }
    return count;
    //return the count to get a number 
    
}






//so here we are trying to see how many friends of a given customers name has names that start with a given letter 
var friendFirstLetterCount = function(array, customer, letter){
    let count = 0 //initiate count at 0
    letter = letter.toUpperCase(); //handles case sensitivity 

    for(let i =  0; i < array.length; i++){ //iterates through the array 
        if(array[i].name === customer){//if the current item being iterated through name = customer 
            
        
    for(let j = 0; j < array[i].friends.length; j++){
        if(array[i].friends[j].name[0] === letter){
            count++
        }
    }

        }


    }

    return count;




};








var friendsCount = function(array, name){
    
    const filtered = array.filter(function(c){ 
        return c.friends.filter(function(friend){
            return friend.name === name;
        }).length

    });

    return filtered.map(function(customer){
        return customer.name
    });



}




var topThreeTags = function(array){

    let tagCount = array.reduce(function(acc, current){ //set variable equal reduce to accumulate the amount of tags in the array

        current.tags.forEach(function(tag){ //loop through each current customer tag in the array using forEach to process each one indiisually 
            if(acc.hasOwnProperty(tag)){// if the accumulator has the tag property increment the count by 1
                acc[tag] += 1

            }else{
                acc[tag] = 1 //if the tag doesnt exist keep its count current 
            }
        });

        return acc;//return the accumulator 
    }, {}) //the accumulator should be an object 


    let frequency = Object.entries(tagCount).sort(function(a, b){ //set variable equal to Object.entries which will convert the tag count to an array accessing both key and value in the object 
        //use .sort to sort the count of the key value pairs from Object.entries by desending order
        return b[1] - a[1];


    }).slice(0, 3)//get the top three items using .slice starting at the zero index and takes 3 elements which are the most frequent tags 

    return frequency.map(function(item){//use .map to extract the first element from frequency 
        return item[0];
    })

};



var genderCount = function(array){

    let genders = array.reduce(function(acc, current){
        //acc = {} //current = {Adele Mullin} =>

        //every iteration we are accessing the current customer and determing if current customers gender already exist as a key in acc
        if(acc.hasOwnProperty(current.gender)){
            acc[current.gender] += 1

        } else{ //it doesnt exist and we need to ceate it and give it a value of 1
            acc[current.gender] = 1

        }
        return acc;


    }, {})//pass in empty object because they want 

        return genders;

}

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
