/**
 * The above code covers various concepts related to arrays, objects, functions, and important
 * JavaScript methods like forEach, map, filter, reduce, Object methods, closures, and higher-order
 * functions.
 * @param name - The name of the potion shop is "Potion Shop".
 * @param price - The `price` parameter is used to specify the price of the potion being brewed. It is
 * a numeric value representing the cost of the potion.
 * @returns The code snippet is returning the following output:
 */







//!-----------------------------------------------------------------------------------------------------------
//!------------------------ARRAY--------------------------------------------------------------
//we have another file for notes array.js checkout for learning array in detailes:-->

const { version, act } = require("react");


// * Types of creating Array:

//ex-1
// const carriage1 = ["shiv", "aysh", "ravi"]
// console.log(carriage1);
//ex-2
// const emptyCariage=[];
//ex-3
//const threeEmptySeats= Array(3); // [empty, empty, empty] 
// (Ye andar diye gaye number ko array ki length maanta hai, aur 3 khali spaces bana deta hai).
//console.log(threeEmptySeats); //[<3 empty items> ]
//console.log(threeEmptySeats.length); // 3

//ex-4
// const passenger = Array("veer", "ayugh", "ravig");
// console.log(passenger);

//ex-5
// const singlePassenger = Array.of(3) // ek naya array banana jiske andar sirf ek element hai: 3
// console.log(singlePassenger);//3

//* Conclusion: Array.of() ki zarurat sirf tab padti hai 
// jab aapko dynamically array banana ho aur 
// chance ho ki usme input sirf ek single Number aa jaye.
// Ye aapke code ko us "empty slots" wale trap se bachata hai

/* my test, my thinking
let arr=Array.of(5);

console.log(arr.length); //1
console.log(arr); //[5]
arr=[2,3,4,5];
console.log(arr); //[2,3,4,5]
console.log(arr.length); //4
let arr2 = Array.of(5,9);
console.log(arr2); // [5,9]
arr2.push(5, 6, 7, 8); 
console.log(arr2); // [5,9,5,6,7,8]
console.log(arr2.length); // 6 

-------------------------------------------------------------------------
//*should know diffrent between array.of(3) & array (3) checka above example
Yaad rakhne ki simple trick:
Array(3) = "Mere liye 3 khali dabbe (boxes) laao."
Array.of(3) = "Mere is number 3 ko ek dabbe mein pack kar do."
----------------------------------------------------------------------------*/

//when we need to create array using no, string or object or set-------Array.from

//ex-1
// const trainCode = Array.from("Dust"); // creating array using string;
// console.log(trainCode);

//ex-2
// const name = "shiv";
// console.log(Array.from(name)); //['s,'h','i','v'] //?------------INTRESTING OUTPUT

//Truncate of array---><--------
// const tempTrain = ["A", "B", "C", "D", "E"];
// tempTrain.length = 3;  //called truncate of array;
// console.log(tempTrain); //[ 'A', 'B', 'C' ]
// tempTrain.length = 5;
// console.log(tempTrain); // [ 'A', 'B', 'C', <2 empty items> ]


//! push,pop, shift and unshift , splice; MUTATE------------------------------------------------------------------
//! concat, slice, flate ; UNMUTATE--------------------------------------------------------------------------------

//-------------------------------------
//Another trick to COPY using slice();
//-------------------------------------
//coying data
// let wholeTrain = ["a","b","c","d","e"];  
// const trainCopy =wholeTrain.slice();
// console.log(trainCopy); //[ 'a', 'b', 'c', 'd', 'e' ]

//! Searching: indexOf, includes-----------------------------------------------------------------------------------

//*--------------ARRAY IS array or not:   ---> 

// let arr=[3, "b", "c"];
// console.log(typeof []); //object 

// console.log(Array.isArray("arr"));//false; wrong pass, you pass here string 
// console.log(Array.isArray(arr)); //true

//?-------------Key Points - Must Know: > ----------------------------------------------------------------------
// 1. USE array like this[], NOT like this--> Array(n);
// 2. array are  0 based.
// 3. Mutating methods: push pop, shift, unshift, splice;
// 4. Un Mutating: concate, slice, flat, flatmap[1,2,3,[5,6]];
// 5. Searching: includes, 
// 6.  Array.isArray()- when to know type of array :is array or not like type of array use isArray ok


//example
const orders = [
    { dish: "pasta", price: 12, spicy: false, qty: 2 },
    { dish: 'Dragon', price: 13, spicy: true, qty: 1 },
    { dish: "Caesar salad", price: 14, spicy: false, qty: 3 },
    { dish: 'Inferno wings', price: 15, spicy: true, qty: 2 },
    { dish: 'Truffle Risotto', price: 16, spicy: false, qty: 1 },
];

//!---------------------------------------------------------------------------------------------------------------------
//!--------------------FOR EACH----------------------------------------------------------------------------------------------------------------------------------
// accept--callbackfn

//ex: 1
// orders.forEach((order,index) => {
//     console.log( `#number:-->   ${index +1} : ${order.qty}x ${order.dish}`);
// })

//? Now tell what is the value in myData1:
// const myData1 = orders.forEach((order, index) => {
//     console.log(`#number:-->   ${index + 1} : ${order.qty}x  : ${order.dish}`);
// });

// console.log(myData1);// the value is --undefined;
//answer is -- forEach: No return value. that why we have undefined
// Used for side effects. Often used for mutation.
//Sirf loop chalana (Execution).
//Iske aage .filter() ya .reduce() nahi laga sakte.
//forEach() cannot because it returns undefined

//*-------Important about foreach--

/*
Trap: forEach strictly synchronous (besabra) hota hai. 
Woh await (Promises) ka wait nahi karta aur loop turant aage bhada deta hai.

The Core Concept (The Impatient Manager)
Sochiye forEach ek Manager hai aur array ke items uske Workers hain.
Agar kaam normal hai (Synchronous), t
oh Manager har worker ke paas jaata hai, kaam karwata hai, aur aage badh jaata hai.

Lekin agar kaam lamba hai (Async/Await):
 Manager (forEach) bohot impatient (besabra) hai! Woh pehle worker ko kaam deta hai, 
 aur bina uske khatam hone ka wait kiye, dusre worker ko kaam de deta hai. 
 Woh sabko kaam dekar turant bol deta hai: "Mera kaam khatam!", 
 jabki background mein workers abhi bhi kaam kar rahe hote hain
 
Fix 1 (Line by Line): Agar ek ke baad ek wait karwana hai, toh for...of loop use karo.
Fix 2 (Ek Saath - Parallel): Agar sab ek saath bhejna hai par 
result ka wait karna hai, toh Promise.all(arr.map(...)) use karo.

-> There is no way to stop or break forEach() loop other than by throwing an exception. 
->READ MDN ON THAT FOR EACH

*/


//! ---------------MAP----------------------------------------------------------------------------------------------------
//Data ko transform karke naya array banana.
// Returns a New Array. Follows functional programming (immutability).
//Iske aage doosre methods chain kar sakte hain.
//Chaining: map() can be chained(.map().filter()),

// Original Array: Both methods don't change the original array by default,
// but forEach is typically used when you intend to cause a change (side effect).

//* Example : 1
// const myData2 = orders.map((order, index) => {
//     console.log(` number: --> ${index +1} : ${order.qty}x : ${order.dish}`);
// });
// console.log(myData2); //  [ undefined, undefined, undefined, undefined, undefined ] // because not using return keyword :
//? The JS Function Rule: Any function in JavaScript that does not have an explicit return statement will automatically return undefined

//* Example : 2
// const receiptLines = orders.map((order) => `${order.dish}: ${order.price * order.qty}`);
// console.log(receiptLines);

//* Example : 3
// export function getItemNames(items) {
//     if (!Array.isArray(items) || items.length === 0) return [];

//     const myItems = items.map((item) => {
//         return item.name;
//     })
//     return myItems;
// }

//* Example : 4
// export function getItemNames(items) {
//     if (!Array.isArray(items) || items.length === 0) return [];

//     //* Direct return with implicit arrow function
//     return items.map((item) => item.name);
// }
//!-----------------------------filter-------------------------------------------------------------------------------------------------------------------
// filter me hamesha condition do , hamesha method pass mat kro condition do
/*

1.filter Purpose: Creates a New Array - mean does not change your original array.
with all elements that pass the test implemented by the provided function.
2.Return Value Requirement: The callback inside filter must return a boolean (true or false). 
true keeps the item, false drops it.
3.Original Array: Like map, filter does not change the original array.
4.Chaining: filter returns an array, so you can attach .map() or .forEach()
directly after it (e.g., array.filter(..dosomething.).map(..dosomething.)).
This is called Method Chaining.

5.Shortcut: If a property is already a boolean,
 you don't need === true. filter(x => x.isReady) is enough     
 👨🏻‍💻👨🏻‍💻
 Boolean Shortcuts: If a variable already holds a true or false value, 
 checking variable === true is redundant. Just use variable.

///?  remember
Bad/Long: arr.filter(item => item.isActive === true)
Good/Clean: arr.filter(item => item.isActive)*/ //samjh gya na--

//? example : 1
/**const scores = [45, 80, 30, 95, 50];
// The rule: score must be >= 50
const passingScores = scores.filter((score) => score >= 50);
console.log(passingScores); // Output: [80, 95, 50]  */


//? example : 2
/**const validFares = fares.filter(
    (f) => typeof f === "number" && !isNaN(f)
  );
   */

//?example : 3

// const orders1 = [
// { dish: "pasta", price: 12, spicy: false, qty: 2 },
// { dish: 'Dragon', price: 13, spicy: true, qty: 1 },
// { dish: "Caesar salad", price: 14, spicy: false, qty: 3 },
// { dish: 'Inferno wings', price: 15, spicy: true, qty: 2 },
// { dish: 'Truffle Risotto', price: 16, spicy: false, qty: 1 },
// ];
// const spicyOrders = orders1.filter(order => order.spicy);
// console.log(spicyOrders);
/**
 * [
  { dish: 'Dragon', price: 13, spicy: true, qty: 1 },
  { dish: 'Inferno wings', price: 15, spicy: true, qty: 2 }
]
   */

//?example : 4
// const spicyDishNames = orders
//     .filter(order => order.spicy===true) // 1. Pehle spicy wale objects nikaalo
//     .map(order => order.dish);             // 2. Phir un objects mein se sirf 'dish' ka naam nikal kar naya array banao

// console.log(spicyDishNames); // Output: ["Dragon", "Inferno wings"]

//* item , order,score, and f----> Those words are just temporary placeholder names that YOU invent.
//* pointing at one person at a time and checking their ID.

//!-----------------------REDUCE-------------------------------------------------------------------------------------------------------------

/*
reduce Goal: Combines all elements of an array into a Single Value (Number, String, Object, etc.)
Two Main Arguments:

1. The callback function: (accumulator, currentValue) => { ... }
2. The Initial Value: (e.g., 0, "", or {}). This is highly recommended to prevent bugs.
Accumulator (totalBox): It acts like a piggy bank. It remembers the returned value from the previous loop iteration.

Return statement: You MUST return the updated accumulator inside the function,
otherwise the piggy bank loses its money for the next round.
Does not mutate: The original array remains unchanged.

What it NOT did? (Yeh kya NAHI karta?)
1. Yeh original array ko modify (change) NAHI karta. (Aapka orders array safe rahega).
2. Yeh naya array return NAHI karta (by default). 
eh sirf ek single value return karta hai (jab tak ki aap starting value ek khali array [] na de dein).
3. Yeh bina return ke kaam NAHI karta. Agar aap iske andar {} use karte hain, 
toh aapko return likhna hi padega, warna yeh bhool jayega ki 
pichla total kya tha aur result NaN (Not a Number) ya undefined aayega.
*/

//*Example : 1
// const totalRevenue= orders.reduce((sum,order) => {
//     return sum + (order.qty * order.price)
// },0)
// console.log(totalRevenue);

//*Example : 2
// const grouped = orders.reduce(
//     (acc,order) => {

//     const category = order.spicy ? "spicy" : "mild"; // [Condition / Sawal] ? [Agar HAAN (True)] : [Agar NAA (False)]
//     acc[category].push(order.dish);
//     return acc;

// }, { spicy: [], mild: [] });
// console.log(grouped);

// {
//spicy: ['Dragon', 'Inferno wings'],
//   mild: ['pasta', 'Caesar salad', 'Truffle Risotto']
//}

//*Example : 3

// calculateTotal(items)
//    -.reduce() se (price * qty) ka sum nikalo
//    - Agar items array nahi hai ya empty hai, return 0
//    - Example: calculateTotal([{name:"Atta",price:40,qty:2},{name:"Daal",price:80,qty:1}])
//    => 160 

// export function calculateTotal(items) {
//   if (!Array.isArray(items) || items.length===0) return 0;
//   const totalcal = items.reduce((sum,item) => {
//     return sum + ( item.qty * item.price )
//   },0);

//   return totalcal;
// }

//!----------------------------------------------------------------------
//!------------------Gotchas------------------------------------------------

/*
/* //*-----------Array .sort() -------------------------------------------------------------------------------------------------------------------
Default Sort: .sort() numbers ko numbers nahi,
 string (A-Z) manta hai. Wo dictionary ki tarah sirf pehla digit check karta hai.
Result: [100, 343, 4, 5, 53] (Mathematically Galat).

Number Sort (Sahi Tareeka): Calculator wala logic lagane ke liye 
ek comparison function dena zaroori hai.

Ascending (Chote se Bada): .sort((a, b) => a - b)
Descending (Bade se Chota): .sort((a, b) => b - a)
 */

//*Example : 1
// const ticketNumbers = [100, 343, 4,53,5]
// const sortedW = [...ticketNumbers].sort();
// console.log(sortedW); // [ 100, 343, 4, 5, 53 ]

//*Example : 2 
//const sortedWith = [...ticketNumbers].sort((a,b) => a-b);
// console.log(sortedWith); //[ 4, 5, 53, 100, 343 ]

 //*Example : 3
// sortByPrice(items, ascending)
//      -[...items].sort() se NEW sorted array return karo(original mat badlo!)
//      - ascending = true => low to high, false => high to low
//      - Agar items array nahi hai, return []
//      - Example: sortByPrice([{ name: "Ghee", price: 500 }, { name: "Atta", price: 40 }], true)
//      => [{ name: "Atta", price: 40 }, { name: "Ghee", price: 500 }]

//*code here
// export function sortByPrice(items, ascending) {
//     if (!Array.isArray(items) || items.length === 0) return [];
//     const finalResult = [...items].sort((a, b) => {
//         if (ascending) {
//             return a.price - b.price;
//         } else {
//             return b.price - a.price;
//         }
//     })
//     return finalResult



//*Method Chaining;

// const kitchenOrdrs = [
//     { dish: "Past Carbonara", price: 14, spicy: false,  qty: 2},
//     { dish: "Dragon Ramen",   price: 12, spicy: true, qty: 1},
//     { dish: "Caesar Salad",   price: 9, spicy: false, qty: 3 },
//     { dish: "Inferno Wings",  price: 17, spicy: true, qty: 3},
//     { dish: "Truffle Risotto",price: 10, spicy: false, qty: 1 },
//     { dish: "Ghost Pepper",   price: 15, spicy: true, qty: 1 },

// ];

// const mildReport = kitchenOrdrs
// .filter(order => !order.spicy)
// .map(order => ({
//     dish: order.dish,
//     total: order.price * order.qty
// }))
// console.log(mildReport);
/*
[
  { dish: 'Past Carbonara', total: 28 },
  { dish: 'Caesar Salad', total: 27 },
  { dish: 'Truffle Risotto', total: 10 }
]
*/
//!--------------------------------------------------------------------------------------------------------------------
//!------------------------ OBJECTS; ------------------------------------------------------------------

//creating object
const hero = {
    name: "Luna the Brave",
    class: "Mage",
    level: 12,
    health: 85,
    mana: 120,
    isAlive: true,
    let: "const",
    "created date ": 4/5/2026,// multiword prop must be quotes
     1 : ". cannot access me"
};

//* output / use of data of object
// console.log(hero.name); // Luna the Brave
//console.log(hero["name"]); //Luna the Brave

// 1. Adding properties
// hero.isDeath = false;

// 2. deleting
//delete hero.level;

// 3. updating
// hero.let = "let";

// 4. accesing multiword pro
// console.log(hero["created date"]);  //use quotes for accessing;
//hero[1];


// 4. expression value as prop. names
// const fullname = "name";
// console.log(hero[fullname])// same as hero.name

// console.log(hero); // GET UPDATED HERO OBJECT;

//! Examples;

//Property Shorthand: -->
function getLaptop(name, price){
    // console.log("yo hu");
    return {
        brand: "apple",
        name: name, //name,
        price: price,//price short hand you can write
    };
}
let myMac = getLaptop("M4 Air", 90_900);
// console.log(myMac);


//
//Checks if a property exists in an object OR
//anywhere in its Prototype Chain (Parent objects).
//Returns true or false.
//! in Operator:


//* example : 1
//Prototype Chain
// const ranger = {
//     name: "Lakshya the swift",
//     agility: 80,
//     stealth: undefined
// }
// console.log("name" in ranger); //true
// console.log("stealth" in ranger); //true

// ? console.log("toString" in ranger); //true -- why it is true not exist in object
//? Why "toString" is true:

// toString is a built-in method sitting on the master Object.prototype. The in operator finds it there,
// even if you didn't explicitly write it in your object.

// //! in vs hasOwnProperty():
// Use "key" in obj if you want to check the object AND its parents.

// //* if you strictly want to check ONLY the object itself.
// Use ---> objectnamehere.hasOwnProperty("keynamehere");


// console.log("hasOwnProperty" in ranger); //true
// console.log(ranger.hasOwnProperty("toString")); //False
// console.log(ranger.hasOwnProperty("name")); //true





//! Example:
// integer properties are sorted, others appear in creation order.

let codes = {
    //Asia
     7: "Russia",
     32: "Belgium",
     91: "India",

     //Nort America
     1: "Canada",
     52: "mexico",
}
//  console.log(codes); // o/p in auto in ascending order
 // {
//"1": "Canada",
//"7": "Russia",
//"32": "Belgium",
//"52": "mexico",
 // "91": "India"
 //}

// fixing
//do this 
// "+91": "India",



//! Ref and copying
//* Primitive are always copied  "as a value"

// let like = "Radhika Das";
// let love = like;
// console.log(love); //Radhika Das
// like = "Taylor Swift";
// console.log(love); //Radhika Das

//* Objects are stored and copied "by reference";

let artist = { 
    name: "Radhika Das",
    country: "UK",
}

let kirtaniya = artist;
artist.country = 'England';
// console.log(kirtaniya); //{ name: 'Radhika Das', country: 'England' }
// console.log(kirtaniya === artist); // true

// console.log({} === {}); //false because two empty variable alway different, like two unskilled engineer never be same;



//* Const can't be modified, Then how we modify object;

//because object are stored as referance
const ev = {
    name : "Mahindra be6",
}
ev.name = "Byd seal";
// console.log(ev); 
//cannot  able to to do because of const 
// ev = {
//name: "thar".
//    }

//* Cloning objects:

const original = {
    k1: 'v1',
    k2: 'v3'
}

//ex: 1
let clone = {}
for (let key in original) {
    clone[key] = original[key];
}
//console.log(clone);

//Ex: 2
//object.assign(dest, ...sources
let cloningbyassign = Object.assign({}, original)
// console.log(cloningbyassign);


// nested Object--- clone
const nestedObj = {
    mode: "gpt",
    version: "5.2",
    MediaCapabilities: {
        reasioning: true,
        codeGeneration: true,
        imageunderstanding: true,
        toolUse: true,
        functionCalling: true,
        streaming: true,
    },
};


//Deep cloning;

const nestedclone =structuredClone(nestedObj);
// console.log(nestedclone);

//! GARBAGE COLLECTION

//Reachability -->
//Objects are retained in memory while they are reachable;

//Ex: 1

let temp = {
    email : "shiv@gmail.com",
    valid: "for5min" //minutes
}

// console.log(temp); //temp object o/p
//after 5 min
temp = null;
// console.log(temp);  //nothing
//there's no way to access it, not references toit,
//Garbage Collector wil junk the data and free the memory

// //Ex: 2 -- NOT UNDERSTAND
// const movie = {
//     title: "Ghosted",
//     release: 2023,
//     production: "Apple TV",
// }
// function coStar ( actor, actress) { 
//     actor.coStar = actress;
//     actress.coStar = actor;

//     return {
//         leading: actor,
//         supporting: actress,
//     };
// }
// movie.cast = ( 
//     {name: "chris Evans", salary: 10000},
//     {name: "ana de arrmas", salary: 20000}
// )

//THIS KEYWORD






console.log(movie);
// movie.cast = null;   


//-----------------------------------------------------------------------------------------------------------------------------
//! OBJECT METHODS
//-----------------------------------------------------------------------------------------------------------------------------

//example : 1
//print key , value and all enteries   for object

const artifact = {
    name: "Obsidian Crown",
    era: "Ancient",
    value: 50000,
    material: "vocanic glass",
};

// const keys = Object.keys(artifact);  
// const values = Object.values(artifact);
const entries = Object.entries(artifact);

// console.log(keys) // array-- [ 'name', 'era', 'value', 'material' ]
// console.log(values); //  [ 'Obsidian Crown', 'Ancient', 50000, 'vocanic glass' ]
// console.log(entries); //Array of array ⬇️
/**
 * [
  [ 'name', 'Obsidian Crown' ],
  [ 'era', 'Ancient' ],
  [ 'value', 50000 ],
  [ 'material', 'vocanic glass' ]
]
   */


//! loop on entries
// for( const [key_of_artifact ,value_of_artifact] of Object.entries(artifact)){
//     console.log(` ${key_of_artifact}: ${value_of_artifact}`);
// }
// for that we build object se array of array bnaya ex [ ['name', 'obsedian crown], ['era', 'Anciend']....];


//* using  object.fromentries on object




//* example of creating object from array
//use object.fromEntries on array;

const priceLIst = [
    ["obsidian crown", 5000],
    ["ruby pendant", 6000],
    ["iron shield", 8000],
];
// O/P <----
// const priceObject = Object.fromEntries(priceLIst);
// console.log(priceObject);
// { 'obsidian crown': 5000, 'ruby pendant': 6000, 'iron shield': 8000 }


//! must know diff b/w freeze and seal --interview question;

//* Example of  Object.freeze
const displayCase = {
    artifact: "Obsedian",
    location: "Hall A, Case 3",
    locked: true
}

// Object.freeze(displayCase); // No one can touch it 

// 1. deleting
// delete displayCase.locked; 
// console.log(displayCase);   //nothing is deleted; 

// 2. updating
// displayCase.locked="FALSE";
// console.log(displayCase.locked);  //not updated still we have true;

// 3. try to adding
// displayCase.whatadding = "RAJAJI HMM ADDING"; 
// console.log(displayCase);   //nothing is added

//The "Gotcha" (Dhokha) - Future Proofing Tip------------------------------------------------------------------------------------------------------
// also remember : in FREEZE  we can change nested objects inside values; 

//* example 1 :

const company = {
    name: "Tech Corp",
    address: { city: "Delhi" } // Yeh nested object hai
};
// Object.freeze(company);
// company.name = "New Corp"; // ❌ Fail ho jayega (Freeze hai)
// company.address.city = "Mumbai"; // ✅ PASS ho jayega! (Kyunki andar wala object freeze nahi hua)


//*  Example of Object.seal
const catalogEntry = {
    id: "ART-001",
    description: "Ancient Crows",
    verified: true
}
// Object.seal(catalogEntry); 
//seal is used when you want to allow to edit to  existing properties

// 1. updatiing
// catalogEntry.verified = "SHIV";// phle true tha
// console.log(catalogEntry.verified);// CHANGE HO GYA -o/p SHIV




//?  INT QUESTION - DIFFRENT B/W FREEZE AND SEAL
/**
 * ANSWER 
 * Object.seal(): Locks the object's structure. You cannot add or delete properties, but you can modify existing values.
Analogy: Putting tape on a box. You can't put new things in or take things out, but you can rearrange what's inside.

Object.freeze(): Locks the object completely. It makes the object 100% read-only. You cannot add, delete, or modify anything.
Analogy: Putting a box in the freezer. It becomes a solid block of ice; you can't change anything at all.
 */
//@ not every object is loopable ok;;

//intresting things in object: 
const secureArtificats = { name: "Ruby pendant" }

// how to add properties in scureArtificats object by Object.defineProperty

// catelogId: "SEC-999" we do this things below with extra advantage and access;
// we can access many things using defineProperty in object--- se in code and read writable, enumurable and configurable;

Object.defineProperty(secureArtificats, "catelogId",{
    value: "SEC=999",
    writable: false, // mean the catelogId not changed , use true for changeable
    enumerable: false, // when running loop dont include it, use true for default use in loop catelogId "key"
    configurable: false  // delete or redifined , use true for do that
})

// console.log(secureArtificats.catelogId); // SEC=999
// secureArtificats.catelogId="HACKED";
// console.log(secureArtificats.catelogId); // SEC=999 (value same because we set writable is false);
// run loop you see not include catelogId in secureArtificats object because of enumrable : false;
//write code to delete and redined to check cinfigurable : false;

//! to check what inside the "catelogId" like its description
// Also to check why when not change values of key and why not include that key data in loop , (we can do this Object.getOwnPropertyDescriptor)
// const desc = Object.getOwnPropertyDescriptor(secureArtificats,"catelogId");
// console.log(desc);
// {
//     value: 'SEC=999',
//         writable: false,
//             enumerable: false,
//                 configurable: false
// }

// now for name we set key "name" to check it s description
// const desc_of_name = Object.getOwnPropertyDescriptor(secureArtificats,"name");
// console.log(desc_of_name);

//* guess the output ? ok // ruby pendant



/*

 createPaanOrder(basePaan, customizations)
      - Object.assign({}, basePaan, customizations) se NEW order object banao
      - Original basePaan ko mutate MAT karo!
      - Agar basePaan object nahi hai ya null hai, return {}
      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
       => {type:"meetha", price:50, extra:"gulkand"}
 
 
Creates a new Paan order object.
 Uses Object.assign to merge without mutating the original basePaan.

export function createPaanOrder(basePaan, customizations) {
    / 1. Check if basePaan is a valid object and not null
    if (typeof basePaan !== "object" || basePaan === null) {
        return {};
    }

    / 2. Check if customizations is a valid object
    if (typeof customizations !== "object" || customizations === null) {
        / Return only a copy of basePaan if customizations are missing
        return Object.assign({}, basePaan);
    }

    / 3. Create NEW order by merging into an empty object {}
    / This satisfies the "Do NOT mutate original" and "Object.assign" requirements
    return Object.assign({}, basePaan, customizations);
} */



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! Loop key points;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. for () --- classic loop
// 2. while ----------- when dont know
// 3. do while ---------
// 4. for...in  ........ use for object avoid for array
// 5. for...of .............
// 6. map, forEach, filter, reduce ;





//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//!  Function
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// console.log(brewPotion("healing herbs", 3)); // hoisting 
function brewPotion(ingredient, dose) {
    return `Brewing potion with  ${ingredient} (x${dose})... postion ready`;
}
// console.log(brewPotion("healing herbs", 3)); // output after declaration best way 



//function expression -- intresting facts about function

//normal function 
const mixElixir = function (ingredient) {
    return `Mixing elexir with $(ingredient)`;
}

// no own "this",-- no `arguments` object

//arrow funcition
const distilEssence = (ingredient) => {
    return `Mixing  elexir with ${ingredient}`;
}




//*------------------arguments vs ...args:---------------------------------------------------------------------------------------------------

// normal fucntion: -->
//EXAMPLE -1
// function oldBrewingLogs(){
//     console.log("type", typeof arguments); // OBJECT
//     console.log(arguments); // [Arguments] { '0': 'Sage', '1': 'Rosemarry' }
//     console.log("is Array; ", Array.isArray(arguments)); // false , we check because above o/p is in [arguments] look like array

//     O/P in object so,  converting in array form-->
//     const argsArray = Array.from(arguments);
//     console.log(argsArray); // [ 'Sage', 'Rosemarry' ]
// }
//  oldBrewingLogs("Sage", "Rosemarry");
//Arguments: Iske paas apna hidden arguments object hota hai.

//Arrow function --> 
//EXAMPLE -2
// const arrowBrew = () => {
//     try {
//         console.log(arguments);
//     } catch (error){
//          console.log(error);
//         console.log(error.message); // O/P have manythings to read because arrow function dont know argument keyword it know ...args
//     }
// };
// arrowBrew();
// console.log("continue")

//Arguments: Iske paas arguments object nahi hota. Iske liye (...args) (Rest parameters) use karein.
/**
 * Summary: Arrow functions mein purana arguments keyword kaam nahi karta, 
 * wahan hamesha ...args (Rest operator) ka use karna chahiye.
 *  Aur jab bhi catch mein error log karein, toh sirf error.message print karein,
 *  pura error object nahi, taki output saaf rahe aur confusion na ho!
 */


//---------------------------------------------------------------------------
//higer order function ------Ek aisa function jo ya toh:
//Kisi dusre function ko as an argument(input) leta ho.
//Ya phir, ek function ko as a result return (output) karta ho.

// HOF jo ek naya function banakar dega
// function createDiscount(discountPercentage) {
//     Ye function return ho raha hai!
//     return function (price) {
//         let saved = (price * discountPercentage) / 100;
//         return price - saved;
//     }
// }

//  1. Diwali ke liye 20% discount ka function banaya
// const diwaliDiscount = createDiscount(20);

//  2. Normal din ke liye 5% ka function banaya
// const normalDiscount = createDiscount(5);

// console.log(diwaliDiscount(1000)); // Output: 800
// console.log(normalDiscount(1000)); // Output: 950



// IIFE-- Immediately Invoked Function Expression.-----------------------------
// ()() ex-1
// (function () {})()  ex-2
//const postionshop = (function () {})()   ex-3 all are same



// const potionShop = (function () {
//     let inventory = 0;

//     return {
//         brew() {
//             inventory++;
//             return `Brew potion #${inventory}`;
//         },
//         getStock() {
//             return inventory;  
//         },
//     };
// })();
// console.log(potionShop); //  { brew: [Function: brew], getStock: [Function: getStock] } ,we hald two function defination

// console.log(potionShop.brew); //[Function: brew]
// console.log(potionShop.brew()); //Brew potion #1 ▶️
// console.log(potionShop.inventory); //undefined -- closure;

//! Clossures

function makeFunc() { //parent fun
    const name = "Mozilla";

    function displayName() { // child fun grab , referance eveything of the parent variable;
        // console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc(); // Mozilla;





// ! IMPORTANT: Red text        (Great for warnings or crucial Express middleware rules)
// ? QUESTION: Blue text            When you're confused about how a JS callback works)
// * HIGHLIGHT: Light            Green text (For key definitions)
// TODO: Orange text              (Reminders for yourself to study something later)
// Normal comments are just standard default color.


























