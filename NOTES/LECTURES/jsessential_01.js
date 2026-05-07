




/* The above code is a JavaScript file that contains various code snippets and comments explaining
different concepts in JavaScript. It covers topics such as variables (var, let, const), data types
(primitive and non-primitive), objects, arrays, numbers, strings, and common gotchas in JavaScript. */






/*
nodemon jsessential_01.js

Stop Process: Ctrl + C.
Clear Screen (Bash/Zsh/Mac): clear or Ctrl + L.
Clear Screen (Windows CMD/PS): cls.
Deep Reset: reset (fixes terminal glitches).
Shortcut: Ctrl + L is the universal shortcut for a visual clea
*/

// console.log(console.log);
// //used in production
// console.group("group start");
// console.log("a");
// console.log("b");
// console.log("c");
// console.groupEnd();


//console.time("time starts now");
// let dnMatches = 0;
// for (let i =0; i<3; i++){
//     dnMatches++
// }
// console.timeEnd();



//// ==VARIABLES== ////--------------------------------------------------------------------------------------

// var shipname="The Amber";
// console.log("SHIPNAME:",shipname);

// let crewCount =12;
// console.log("crew count: ", crewCount);
// crewCount=23;

// const captainName="jack Sparrow";
// console.log("captain Name", captainName)
// captainName="Shiv"; // not changeable


//==== var problem=================--------------------

// ex-1===
// if(true){
//     var leakytreasure = "Gold coins";
// }
// console.log(leakytreasure); // var accessed here , because it is not Blocked Scoped.

//ex-2====
// for (var i=0; i<19; i++){
//     //
// }
// console.log(i);

// me jobhi variable andar bnaunga vo bhar bhi jayega ,
//  Imagine the chaos or confusion;

//----------re-referencing--------------------------------------------------------------------------

// const treasureChest ={
//     gold : 100,
//     rubies : 50,
//     maps: 2
// };
// treasureChest.gold=150;// possible to change
// treasureChest={gold: 80};// not possible compelete re-refrencing here;

// const crewRoster = ["Alok","shiv"]
// crewRoster.push('vraj');  //allowed
// crewRoster[0] = "shub"; //allowed
// crewRoster=["Someone not allowed, it is not allowed"]; //Not allowed


//===Data types-------------------------------------------------------------------------------------------
// 7 primitive and non premitves only one is Object

// const weaponName = "Flame Sword";
// console.log("weapon: " , weaponName, "|type:" , typeof weaponName);

// const attackPower =75; //number
// const attackUpgrade =1.5; // number
// const biginit=55n; //bigint
// const isLoggedIn = true; // boolean
// let curseStatus = null; // the value is intentially absent;


// console.log(typeof attackPower);
// console.log(typeof attackPower);
// console.log(typeof biginit);
// console.log(typeof isLoggedIn);

// let bonusEffect; // right now its value is undefined ;


// let weatherApiResponse= null;
// // where null is used;
// //suppose kro weatherapi ko call kra , appke pass response nhi aaya to
// // null likhhna better he ya 0, if 0 than,  temp is 0. not correct , so here we use the value is absent;
// console.log(typeof weatherApiResponse);// o/p -- object;
// // null ka data type object hota he, LEKING ITS "QUIRK- an aspect of somebody’s character or behaviour that is strange" of javascript
// //It is a bug , but backword compatibility ke liye hum ise le kar chall  re he , taki old website not affect or crash;
// but js show it a object, but it is a null, its   "Quirky"

// //what is Rune?--search-
// //symbole - it gave use gurantee to unuqueness of data & data typesl.
// //Unique + Immutable = symbole;

// const uniqueRuneId =Symbol("rune_of_fire"); // special & unique weapon
// console.log("Rune: " , uniqueRuneId); // we get problem when printing,
// // its O/P- Symbol(rune_of_fire)

// //In we stuck in problem , so
// // when you see or use symbol always use .toStrinig() , for safetly --
// console.log("Rune_:", uniqueRuneId.toString(), "| type of: ", typeof uniqueRuneId);

//----------objects---------------------------------------------------------------------------------------------


// const heroStats = {
//     name: "shiv",
//     level: 44,
//     class: "programmer"
// }

// console.log("hero",heroStats, " | type: ", typeof heroStats);

//array
// const inventory = [ "Flame Sword", "Health potion", "shield"];// object
// console.log("INVENTORY :", inventory, " | type: ", typeof inventory);//object- but it is array

// function castSpell() {
//     return "Fireball"
// }
// console.log("spell type", typeof castSpell);
//  //function --although actually it is object; but

//type of data types --------------------------------------------------------------------------------

// console.log(typeof "Chaicode");
// console.log(typeof 4);
// console.log(typeof 4n);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof Symbol());
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function(){});
// ---O/P
/*string
number
bigint
boolean
undefined
object // from 1995
symbol
object
object //arr
function */


//!                    ---------------------COPY--------------------
//*                                    How to Copy                                           --------------------------

//*1. Independent Copy;---------------------------------------------------------
// let originalHP = 100;
// let cloneHP =originalHP;
// cloneHP =80;
// console.log(originalHP); // 100
// console.log(cloneHP); //80

//*2. copy , when need to -- original changes
// const originalSword = {
//     name: "Flame Sword",
//     damage: 75,
//     typeof: "Fire"
// }
// const cloneSword = originalSword;
// cloneSword.damage = 100;
// console.log(cloneSword.damage); // 100
// console.log(originalSword.damage); // 100 -- easlly copy , but original also change not good way

//          <---------------
//    NOW how to copy , that original not affect, nested objects offect see below

//*3. copying using {...spreadOperator}, but when change nested object orignal also changes

//example
// const armorOriginal = {
//     name: "iron plate",
//     defence: 80,
//     buff: {                // object ke andar ek or object buff
//         fire: 34,
//     },
// };
// const armorCopy ={...armorOriginal};  //spread operator
// console.log(armorCopy); // we get full copy but
// armorCopy.defence=44;
// console.log(armorCopy.defence); //44
// console.log(armorOriginal.defence);//80 -------differnt values

//nested changing
// when changing nested object,  we get also changed original
// armorCopy.buff.fire = 50;
// console.log(armorOriginal.buff.fire);//50
// console.log(armorCopy.buff.fire); // 50 same values not good way


//*4. using structuredClone;
//-- use this, when you have a nested object , where you want a copy

//example
// const potionOriginal = {
//     name: "Health",
//     effects: {
//         heal: 40,
//         mana: 50
//     },
// };
// const potionCopy = structuredClone(potionOriginal);

//*5. using slice() --- not that important iust know
// let wholeTrain = ["a","b","c","d","e"];
// const trainCopy =wholeTrain.slice();
// console.log(trainCopy); //[ 'a', 'b', 'c', 'd', 'e' ]

//?------------------------------------------------------------------------------------------------------------------------
//? --------------------------------- GOTCHA -----------------------------------------------------------------------
//?--------------------------------------------------------------------------------------------------------------------------


// typeof null === 'object';
// array ko jab app check karte ho na to vo hamesh object hi aane wala he, ...to use check ese kre
// Array.isArray()  // it is a method that gives as true or false value
//example ---

// let fruits = ["Apple", "Mango"];
// let student = { name: "Shivraj", year: 2 };

//      now Using Array.isArray()
// console.log(Array.isArray(fruits));  // Output: true
// console.log(Array.isArray(student)); // Output: false

//!-----------------------------------------------------------------------------------------------------------------------------
//!  ---------------------------NUMBERS---------------------------------------------------------------------------------------------------

// const crewMembers= 40;
// const fuelTons = 143.34;
// const lightSpeed = 299_889_8888; // use _ for readability
// const infiniteRange = Infinity;
// const negativeinfinity= -Infinity;
// / console.log(1 / 0);  o/p infinity;

// const notANumber = NaN; // two NaN is not same-- like the two infinity;

// / Number is data type in js, we get many thing in it ,

// console.log(Number.MAX_SAFE_INTEGER)//9007199254740991 // when reaquired maxi vlaue
// console.log(Number.MIN_SAFE_INTEGER)// - 9007199254740991
//console.log(Number.EPSILON);
// console.log(Number.isInteger); // and many more we can check

// const fuelReading =" 23.43 tons";
// const sectorCode =" 0xA3";
// const countDown ="0007";
// console.log(parseInt(fuelReading)); //23
// console.log(parseInt(sectorCode));// 163 because of hexcode

// console.log(parseFloat(countDown)); // 7 -----carefull ,
// console.log(parseInt("001", 2)); // 1

// const therustForce =4.923446;
// console.log(Math.round(therustForce)); // 5 round of kar diya he
// console.log(Math.floor(therustForce))// 4 answer
// console.log(Math.trunc(therustForce)); // 4
// console.log(Math.ceil(therustForce)); //5

// const temps = [-24, 434, 55, 234];
// console.log(Math.min(...temps)); // Without ...: Math.min([-24, 434, 55, 234]) → Result: NaN
// console.log(Math.max(...temps)); // With ...: Math.min(-24, 434, 55, 234) → Result: -24

//?---------------------------------------------------------------------------------------------------------------
//?----------------------------------------GOTCHA'S---------------------------------------------------------

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3); // Answer is - false, but we know it is true
//so the problem with math not with js or programming lang.
//if you need to test with your see below

//example to get - true answer ;
// function almostEqual (a, b) {
//     return Math.abs(a - b) < Number.EPSILON;
// }
// console.log(almostEqual(0.1 + 0.2, 0.3)); // true

//!---------------------------------------------------------------------------------------------------------------------------------------
//!---------------------------------------------------STRING-----------------------------------------------------------

//biggest topic of every language

/*
Definition: Text data stored as a 16-bit sequence. Created via ' ', " ", or ` ` (Template literals).

//*string in immutable
Immutability:       Strings in JS CANNOT be changed in-place. Methods always return a new string.
Length property:    str.length calculates total characters (not a method, it's a property so no ()).
Slicing:            str.slice(start, end) includes start, excludes end. Accepts negative indices.
Search:             includes(), startsWith(), endsWith() return Booleans. indexOf() returns -1 if not found.
Array Conversion:   str.split(delimiter) converts a String into an Array based on the delimiter.

C++ vs JS Fact: In C++, str[0] = 'a' modifies the string. In JS, str[0] = 'a' is silently ignored because of immutability. */


//example 1
// silent failes in js
// const codeName = "shadow Fox";// simple declare string
// const backupName = String("Night Own"); //
// const templateName = `Agent ${codeName}`; // string interpolation,

//example 2
// let intercepted = "HELLO"; // string bhi ek array, so accessing through index[0]
// intercepted[0] = "J";
// console.log(intercepted); // called silent fail--: we get nothing, no error, no change console & terminal is clean
//O/P   HELLO;

//example 3
// const secretCode ="OMEGA-7";
// console.log(secretCode.length); // 7
// console.log(secretCode.charAt); //[Function: charAt] to find character by index valude
// console.log(secretCode.charAt(3)); //we get "G"
// console.log(secretCode.charAt(7)); // we get empty sting, bcz (0-6) size of string
// console.log(secretCode.at(-1)); // 7-- Negative index starts from the end
// console.log(secretCode.at(1)); //  like array index value (0)=O, (1)=M & (-1)=7, (-2)=-, (-3)=A,(-4)=G
// console.log(secretCode[7]); //undefined ; for -> [6] we get 7 in string;

//example 4
// const rasTransmission="The EaGle has LanDEd";
// console.log(rasTransmission.toLowerCase()); // converts in lowercase all the string value

//example 5 .split
// console.log("SOS".split("")); //[ 'S', 'O', 'S' ]- Take this string, break it apart at every single character, and put those individual characters into a new list called
// let str = "SOS123";
// console.log(str.split("").reverse().join()); // 3,2,1,S,O,S // You can't reverse a string directly, but you can reverse an array.// is the standard way to reverse a string in JS.
// console.log(str.split("").sort().join("")); // 123OSS
// let shiv="shiv12345"
// let split=shiv.split("");
// let sort =split.sort();
// let join=sort.join("");
// console.log(join);

//example 6
// const orders= "move-north|hold-position|extract-vip";
// const orderList = orders.split("|"); // split check for | and remove it and make a array like this --['move-north', 'hold-position', 'extract-vip']
//  /  const orderList = orders.split(",");// check for , not found than o/p same as ['move-north|hold-position|extract-vip']
// console.log(typeof orderList); //object;
// console.log(orderList);

// console.log("SOS".split("")); //[ 'S', 'O', 'S' ]

/* Why is the output an Array?
As a CSE student, think about the Data Structure requirements.
If you take one string and break it into three pieces, you can no longer store them in a single string variable without joining them back together. You need a container that can:
1 Hold multiple separate items (the pieces of the string).
2 Keep them in order (so "move" stays before "position").
3 Allow access by index (so you can grab list[0]).
The Array is the only standard structure in JavaScript designed to do all three things perfectly. */



//padStart & padEnd -- also we have npm package for this things- famous one
// const missionNUmber ='4';
// console.log(missionNUmber.padStart(6, "s")); // add s in the start of string (missionNumber.length - 6);
// console.log(missionNUmber.padEnd(11, "p")); // add  p in the end (missionNumber.length - 11);


/*
Core Fact: // string (READ) ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
JavaScript strings are Immutable (read-only).
let myname="shivraj";
Index Assignment: str[0] = 'X' will fail silently; it does not change the string.
console.log(myname); //o/p shivraj. no change 
The Fact: The code myName[0] = "X" does not throw an error (unless you are in "Strict Mode"), but it fails silently. JavaScript simply ignores the command because the original string "shivraj" is locked in memory and cannot be altered.
String Methods: Methods like .replace() or .toUpperCase() never modify the original string; they return a new string object.
Reassignment: str = "new" destroys the old memory pointer and creates a new one; it is not mutation.
Contrast: Unlike C++ where std::string can be changed in-place, JS forces you to create new strings or convert them to Arrays to manipulate individual character */

//GOTCHA---------------------------------------------------------------------------------------------------------------------
// console.log(void 0); //undefined
// console.log(void "shiv");// undefined

//Demolishing -----------------------------------------------------------------------------------------------------------------------------
/*
In JavaScript, "demolishing" (destroying or removing) 
works differently depending on what data structure or element you are targeting.

DOM Elements: Use element.remove() to destroy HTML nodes from the screen.
Objects: Use the delete keyword (e.g., delete obj.key) to destroy a property.
Arrays: Set array.length = 0 to wipe all elements instantly while keeping the same memory reference.
Memory/Variables: You cannot explicitly delete variables. Set them to null to trigger automatic Garbage Collection.
Constraint: The delete operator does NOT work on standalone variables (let x = 5; delete x; is false/fails). */

// //Examples  1; 
// let generalStore={ 
//     name: "Kirana",
//     goods: 2,
//  };
//  console.log(generalStore); //{name: "Kirana", goods: 2}
//  generalStore = undefined;
//  console.log(generalStore); // unefined;
// generalStore = null; //use aslway null for variable 
// console.log(generalStore); 

 















































