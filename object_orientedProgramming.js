/* OBJECT ORIENTENTED PROGRAMMING (OOP)
 we group data and functionality as properties and methods inside objects.


 OOP helps us model real-life objects. It works best when the grouping of 
 properties and data in an object makes logical sense - meaning, the
  properties and methods "belong together".

  To summarize this point, we can say that the Functional Programming 
  paradigm works by keeping the data and functionality separate. 
  It's counterpart, OOP, works by keeping the data and functionality
   grouped in meaningful objects.




*/

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

// EXAMPLE OF A F.P 

var shoes=100;
var statetax=1.2;

function totalPrice(shoes,statetax){
    return shoes*statetax;
}
var topay=totalPrice(shoes,statetax);
console.log(topay);

//OOP EXAMPLE OF IT
 var sells={
    shoes: 100,
    tax: 1.2,
    pay: function(shoes,tax) {
        var totalpay= sells.shoes * sells.tax;
        console.log(totalpay);
    }
 }