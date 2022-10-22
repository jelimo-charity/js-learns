/*
     ARRAY METHODS
     1. forEach
     2. filter
     3. map

*/
//  The forEach() method
//  Arrays in JavaScript come with a handy method that allows you to loop over each of their members.


const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const vegetables = [ 'kales','spinach','cabbages','terere','managu'];
function listGreens(vegetable,index){
    console.log(`${index}. ${vegetable}`)
}
vegetables.forEach(listGreens);

const colors = ['yellow','whitesmoke','orange','brown','purple','blue','white','red','green','pink','black'];
function pasteColors(color,index){
    console.log(`${index}. ${color}`)
}
colors.forEach(pasteColors);