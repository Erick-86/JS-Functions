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
