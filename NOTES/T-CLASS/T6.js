

/* The above code is a JavaScript code snippet that covers various topics related to strings, arrays,
iterables, maps, sets, weakmaps, weaksets, and date and time manipulation in JavaScript. It includes
examples and explanations for each topic such as string manipulation, array methods, iterating over
arrays, creating maps and sets, working with weakmaps and weaksets, and handling date and time
objects in JavaScript. The code demonstrates how to work with different data structures and perform
operations like mapping, reducing, iterating, and manipulating data in JavaScript. */


//error lens extension; search on vscode and google to use or not

//! toString:

//1l.toString not work use (11) or store in variable, -->  const number=11; number.toString();
// console.log((11).toString());
// to convert it 
// in binary --> .toString(2)
//in hexadecimal --> .toString(16);

let single = 'single-quoted';
let double = "double-quoted";
//also we can do single[2] //n
let backticks = `backticks(sting-interpolation)`; // $(variable);




//!--> Formating
// \n, \t, \\, \', \"

let EXAMPLE = "this is \"me\"";
// console.log(EXAMPLE); // we get -->  this is"me" in quotes
// console.log("5\\2"); //5\2





let windowsDownfall = `Downfall started from:
*wB
*w10
*w11 AI
*Copilot
*noted bug
*Blue Screen of Death          
`
// console.log(windowsDownfall); // output same as *wB, to blue screen
//length
// console.log(windowsDownfall.length); //92
// console.log(windowsDownfall.at(-1));


//! String are Iterable
//for...of loop sport
for (const char of "meow") {
    // console.log(char);
}

//! string are immutable 

//ex.
let str = "Kama";
// str[1] = "R"; // not works
str ="R" + str.substring(1);
// console.log(str); //Rama

//! --> Array


//creating array
let arr1 = new Array();
let arr2 = [];

const appleTVshows = [
    "See",
    "Hijack",
    "Perbulous",
    "Silo",
    "Serverance",
];

//Access array
// console.log(appleTVshows.at(-1)); //Serverance;

//Array in JS is ---. Deque.. [stack + queue]
//queue[First in first out] --Push, Shift,
//stack[last in first out] -- Push , Pop

//Internals of array
//its a Obj but Special
//Index, value
//The JS engine tries to store its elements in the contiguous memory area, one after another.


//Loops on array;
for(let i=0; i< appleTVshows.length; i++){
    // console.log(appleTVshows[i]);
}
for (const tvShow of  appleTVshows) {
    // console.log(tvShow);
}

//length is ---> property in array
// example
let food = [];
// console.log(food.length); //0
food[8] = "idali";
// console.log(food.length); //9


//arrays, creat a fix 100 and filled with : 0
//console.log(new Array(100).fill(0));

// console.log([] === []); //false
//this condition will always return 'false' since JS
//compares objects by reference not by value;

//methods
//splice(), concat()
//forEach() --> update existing array

//searching-->
//indexOf(), lastIndexOf(), includes(), find(), findIndex(), findLastIndex()
//filter() if we want to find multiple elements

//transform

//reverse() --> update existing array
//split(delim), join(glue)
//sort()

// const names = [
//     "Atchuytd", "madhav", "Krsna", 
// ]

// console.log(names.sort());
// const numbers = [44,54,2, 52, 25,37,43];
// console.log(numbers.sort()); //  sorting is lexicographically
/**[
  -4,  1,  2, 25, 3,
  37, 43, 52, 55
] */

  //fix by making fun
// function compareNumeric(a,b){
//     if(a>b) return 1;
//     if(a<b) return -1;
//     if(a === b) return 0;
// }
// console.log(numbers.sort(compareNumeric));
/**[
   2, 25, 37, 43,
  44, 52, 54
]*/

//best way to do that
// console.log(numbers.sort((a,b) => a-b));
// decreasing order b-a;



/*

  - The `arr.map()` method is one of the most useful and often used.
  - `map()` is similar to `forEach()` means it loops throughout the array.
  - The only difference is :
    `forEach()` doesn't allocate memory to store values so it doesn't return value, while `map()` allocates memory to store and return values.
    `forEach()` allows for a callback function that will allow us to change the original array, while `map()` returns a new array while leaving the original one as it is.
*/

// const shoppingCart = [
//     { name: `Macbook Pro 16`, price: 3499 },
//     { name: `iPhone 17 Pro`, price: 1099 },
//     { name: `iPad Pro`, price: 1299 },
//     { name: `Apple Watch`, price: 249 },
// ];

//map
// const prices = shoppingCart.map(item => item.price);
// console.log(prices);//[ 3499, 1099, 1299, 249 ]

//reduce
//                            acc, cuurentprice         
// const total = prices.reduce((total, price) => total + price, 0);
// console.log(total); //6146

//example 
// const n = [-20, -9, 0, 10, 45];
// const max = n.reduce((max, curr) =>
// (max < curr ? curr : max), - Infinity);

//or you can also do this
//     {
//     if (max < curr) max = curr;
//     return max;
// }, -Infinity);


// const min = n.reduce((min, curr) => {
//     if (min > curr) min = curr;

//     return min;
// }, Infinity);

// console.log(min);

// console.log(typeof prices);
// console.log(Array.isArray(prices));//true



//! Iterables ---

// That’s a concept that allows us to make any object useable in a for..of loop.
// String, Array.. are iterable

// [Symbol.iterator] helps to decided where it's iterable

// Syntax [Symbol.iterator]
// this is a method
// it returns an object
// that object has next() method
// next () return {done: Boolean, value: any}

// Let's make obj iterable

let playlist = {
    songs: ["My Sweet Lord", "Pyaro Vrindavan", "Surrender", "Like a River"],
    from: 0,
};

playlist[Symbol.iterator] = function () {
    let curr = this.from;
    const songs = this.songs;

    return {
        next() {
            if (curr < songs.length) {
                return { done: false, value: songs[curr++] };
                //  songs[curr++];  songs[curr] --> curr++
            }
            return { done: true };
        },
    };
};

for (const song of playlist) {
    // console.log("Now Playing:", song);
}

// Iterable --> Array
const array = Array.from(playlist);
// console.log(array);




//! Arraylikes
// obj who has Index, Length

// for e.g. String

const starterPack = {
    0: "Macbook",
    1: "Chai",
    length: 2,
};

// Both iterables and array-likes are usually not arrays, they don’t have push, pop etc.


// ArrayLike --> Array
const array1 = Array.from(starterPack);
// console.log(array1);






//! map

// Map --> Obj (keys can be anything)
// In Obj keys can be either "string" or "symbol" 

/*
  Methods and properties are:
    - `new Map()` – creates the map.
    - `map.set(key, value)` – stores the value by the key.
    - `map.get(key)` – returns the value by the key, `undefined` if `key` doesn’t exist in map.
    - `map.has(key)` – returns `true` if the `key` exists, `false` otherwise.
    - `map.delete(key)` – removes the element (the key/value pair) by the key.
    - `map.clear()` – removes everything from the map.
    - `map.size` – returns the current element count.

*/

const m = new Map();
m.set(1, 'one');
// console.log(m.get(1));


// Count word frequency
const text = "the cat sat on the mat the cat";
const freq = new Map();

for (const word of text.split(" ")) {
    const wordFreq = freq.get(word) || 0;

    freq.set(word, wordFreq + 1);  // the -> 1 , cat ->1 ,sat -> 1, on --> 1, the -> 1+1 =2
}

// console.log(freq);

// console.log(freq.keys());
// console.log(freq.values());
// console.log(freq.entries());

const affiliates = new Map();

const first = { name: "vidya4sure" };
const second = { name: "devwithjay" };

affiliates.set(first, 50_000)
affiliates.set(second, 20_000)

// console.log(affiliates);

let obj = {
    name: "Ashu",
    age: 22,
};


// Obj to Map
let map = new Map(Object.entries(obj));

// console.log(map);

// Map to Obj
let obj1 = Object.fromEntries(map);
// console.log(obj1);


//! set
// similar array -> contains only unique value

/*
  - Methods
    - `new Set([iterable])` – creates the set, and if an `iterable` object is provided (usually an array), copies values from it into the set.
    - `set.add(value)` – adds a value, returns the set itself.
    - `set.delete(value)` – removes the value, returns `true` if `value` existed at the moment of the call, otherwise `false`.
    - `set.has(value)` – returns `true` if the value exists in the set, otherwise `false`.
    - `set.clear()` – removes everything from the set.
    - `set.size` – is the elements count.
*/

let mm =
    "Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare";

let uniqueChars = new Set(mm);
let uniqueWords = new Set(mm.split(" "))

// console.log(uniqueWords);









//! Weakmap weakset
// key -> Obj

// JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used.

// using Map I can set key as obj
// using set i can store obj as value

// jb obj gayab mai bhi delete karuga key ko
const bounties = new WeakMap();

let first1 = { name: "Windows" };
let second1 = { name: "Aryan - Mac" };

bounties.set(first1, "5000");
bounties.set(second1, "3000");

first1 = null;
// console.log(bounties.has(first));

/*
  - `WeakMap` has only the following methods:
    - `weakMap.set(key, value)`
    - `weakMap.get(key)`
    - `weakMap.delete(key)`
    - `weakMap.has(key)`
*/

// weakset --> value obj hogi toh after garbage collection gayab hogi
const gc = [
    { text: "Hello Team, Let's plan Vacation", from: "Hitesh" },
    { text: "Yoo I'm in! When?", from: "AK" },
    { text: "This Holi", from: "Ani" },
    { text: "Can I bring my girlfriend?", from: "Piyush" },
];


const unreadForVidya = new WeakSet(gc);
// console.log(unreadForVidya);

// Piyush Panics and Deletes his msg
gc.pop();
// console.log(gc);

// console.log(unreadForVidya.has(gc[3]));



//! date and time

// In js Date always has two things --> "date" and "time" 

// Create 
const now = new Date();
console.log(now);

// const piyushBDay = new Date(2000, 0, 1, 8, 32);
const piyushBDay = new Date("2000-01-01");
piyushBDay.setHours(8, 32)
// console.log(piyushBDay);


// getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getMilliseconds(), getDay()

/* Setting Date Components
    - `setFullYear(year, [month], [date])`
    - `setMonth(month, [date])`
    - `setDate(date)`
    - `setHours(hour, [min], [sec], [ms])`
    - `setMinutes(min, [sec], [ms])`
    - `setSeconds(sec, [ms])`
    - `setMilliseconds(ms)`
    - `setTime(milliseconds)` 
*/

// auto-corrections 
let d = new Date(2026, 1, 28, 5, 30);

// console.log(d.setDate(d.getDate() + 2));

// Fact --> Date starts from. 1 Jan 1970...
// milliseconds from epoch
// console.log(Date.now());

// console.log(Date.parse("2014-4-22"));

// Intl API
// it's good replacements movement.js, date-fns


