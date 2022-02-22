// This is the ages array
const ages = [3,9,23,64,2,8,28,93];

// To get the last element of the array, a function was created
function returnLast(x) {
    return x.at(-1);
}

// Subtracting the first element from the last
function sub() {
    let firstElement = ages[0];
    let lastElement = returnLast(ages);

    console.log(lastElement - firstElement);
}

sub();

//Adding a new age to array to test that the program is dynamic
ages.push(32);
sub();

// using a loop to calculate the average age by creating a function
function average() {
let total = 0;
let count = ages.length;
for (i = 0; i < count; i++) {
    total += ages[i];
    }
    console.log(total/count);
}

average();

// This is the names array
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//using a loop to calculate the average letters per name
//first I create a function to convert the elements numbers
let lengths = names.map(function(a) {
    return a.length;
});

//then I created a function to add up the elements and find the average 
function avg() {
    let sum = lengths.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue
    });
    
    let totalAmount = lengths.length;
    for (i = 0; i < totalAmount; i++) {
        sum += lengths[i];
    }
    console.log(sum/totalAmount);
}

avg();

// Using a loop to concatenate all the names together separated by spaces
var namesConcat = '';

for (i = 0; i < names.length; i++) {
    namesConcat += names[i] + ' ';
}
console.log(namesConcat);



//This is the nameLengths array
var nameLengths = lengths;

console.log(nameLengths);

//Summing up the nameLengths array
let add = 0
for (i = 0; i < nameLengths.length; i++){
    add += nameLengths[i];
}
console.log(add);

//function that takes two parameters word and n
function thrice(word, n) {
    
    console.log(word.repeat(n));
}

thrice('Hello', 4);

//function for full name
function fullName(firstName, lastName) {

    console.log(firstName + ' ' + lastName);
    
}

fullName('John', 'Smith');

//Function to add up an array and returns true if greater than 100
function checker(array){
        let isAboveZero = ages.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
        });

        if (isAboveZero > 100){
            console.log(true);
        }else{
            console.log(false);
        }
    }

    checker();

//Average of all elements in an array
function averageTwo(){
    let sumUp = ages.reduce(function(accumulator, currentValue){
        return accumulator + currentValue/ages.length;
    });

console.log((sumUp).toFixed(2)); // fixed result to 2 decimal places
}

averageTwo();


//function comparing two array averages
function isGreater(){
    array1 = averageTwo;
    array2 = avg;

    if(array1 > array2){
    console.log("True");
    }else{
        console.log("False");
    }
}

isGreater();

// The 'willBuyDrink' function
function willBuyDrink(){
    let temp = 100 > 80;
    let money = 20 > 10.50;
    let isHotOutside = temp;
    let moneyInPocket = money;

    if(isHotOutside && moneyInPocket == true){
        console.log('True');
    }else{
        console.log('False');
    } 
}

 willBuyDrink();

// This function will calculate the average of any array entered calling the function

function calculator(arr){
    let tot = arr.reduce(function(acc,cur){
        return acc + cur;                   //this is used to sum up the array
    });
    let avg2 = tot/arr.length;              //this is used to dynamically solve for average of any array called with this function
    return avg2;
}

console.log(calculator([99, 45, 26, 7, 11, 122, 22]).toFixed(2));       //this prints out the result in 2 decimal places
