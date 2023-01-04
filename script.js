//JavaScript Functions
function logger(){
    console.log('My name is Erick')
}
//logger = function name

//calling / running / invoking the function
logger()
//Each time the function name is been called, the code in the function is executed

//A data can passed into a function and return a data as well
//to pass data in to functions, we need to specify parametres
// Parametres are like variables that are specific onto to a function
function fruitProcessor(apples, oranges){
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}
//values insdie the parenthesis after the function name are the parametres
//in this case (oranges and apples) are the parametres
//the return keyword returns any values from the function
 
//the values in the parenthesis (arguments) will be assigned to the function's paramentres respectifully
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)
console.log(fruitProcessor(4, 0))
//to use the values which was returned, the function name needs to stored in a variable

//Function declaration and expressions
//Declaration
function calcAge1(birthYear){
    return 2037 - birthYear
}

const age1 = calcAge1(1992)
console.log(age1)

//Expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear
}
//With function expression, the function statement is declared to a variable
//the function name then become the name of the variable (a function without a name)
const age2 = calcAge2(1991)
console.log(age2)
//parameters are like a placeholder in the function and the arguments are the values to fill into the placeholder

//DIFFERENCES
//function declaration can be called before the function block of code
//Function expressions cant be called before the function block of code

//ARROW FUNCTIONS
//Arrow functions was released in ES6

//SYNTAX
//function = (parametres) => return
//Example
const calcAge3 = birthYear => 2030 - birthYear
console.log(calcAge3(1991))

//EXAMPLE 2
//With 2 parametres
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement}`
}
console.log(yearUntilRetirement(1991, 'Eric'))

//FUNCTIONS CALLING OTHER FUNCTIONS
//NESTED FUNCTIONS (FUNCTIONS INSIDE FUNCTIONS)
function addSquare(a, b){
    function square(x){
        return x * x //x*x = x square. there x square will be the argument in the sqaure;s paramentre
    }

    return square(a) + square(b) 
}

console.log(addSquare(2, 3)) // a = 2 (2 squared = 4) b = 3(3 squared = 9)
//Therefore 4 + 9 = 13


//FUNCTIONS CALLING OTHER EXTERNAL FUNCTIONS
//first function
function cutFruitPieces(fruit){
    return fruit * 4
}

//secong function
function fruitProcessor1(guava, pear){
    const guavaPieces = cutFruitPieces(guava);
    const pearPieces = cutFruitPieces(pear)

    const drink = `Drink with ${guavaPieces} pieces Guava and ${pearPieces} pieces of Pear`
    return drink
}

console.log(fruitProcessor1(2, 3))