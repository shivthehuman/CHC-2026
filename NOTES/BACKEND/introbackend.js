// page 75 detailes we have what we learn in this lecture - Intro to Backend
//go to notes in tab on Backedn  

// lecture start

//----------------------------------------------------------------
//hitesh sir
//!  HTTP METHODS
// we are going to learn,   when we req. by http methods , how req. goes
//we learn http methods get post put patcha delete and status code
//

//!  NPM 
//with the help of npm -- we use already build package in our code - search npm website : 
//staring professionally coding : do npm init ask question fill it than you can go

//how to use -- npm init -- it intialize and install in your folder where you run it-- you can also install it for global;

//Semantic versioning ex 1.0.0 we it when run npm init ; like  version 1.0.0;
// we know everything we can change through package.json file so --- //* use == npm init -y;
// we have npm we can install anything ;
// Example of intstalling  -> Now we can install anything like npm install react, npm i express.



// ------------------------------------------------------
//Piyush sir- starting typescript; he say we learn on the go , and by building ;
//so dont worry to get exerties in day or month 
//! TypeScript;

//? why we need typeScript

/*  //*1. The Problem with JavaScript

JavaScript is a Dynamically Typed language. This means JavaScript does not care what type of data a variable holds 
until the exact moment the code is running (at runtime).

As you saw earlier, this creates two major problems:

Silent Bugs: If you accidentally pass a string and a boolean into a math function, JavaScript tries to "help" by coercing the types 
(e.g., "shiv" + true = "shivtrue"). It doesn't tell you there is a mistake; it just gives you weird, unexpected results.

Bloated Code: To fix this in JavaScript, you had to write extra, repetitive code. You had to manually use typeof a !== "number" 
just to protect your function from bad inputs. Imagine writing that safety check for every single function in a massive application!

//* 2. The Solution: Why We Need TypeScript

TypeScript is a Statically Typed superset of JavaScript. 
Think of TypeScript as JavaScript with a strict security guard (a compiler) checking your code before it ever runs.

When you write TypeScript, you explicitly define what data types your variables and functions are allowed to use.
 If you break the rules, your code editor (like VS Code) will immediately throw a red squiggly line error while you are typing. 
 It catches the bug before the code is even executed.

//* 3. Example Comparison: JS vs. TS

Let's look at the exact add function we worked on to see the difference.

///1. The JavaScript Way (Safe, but bloated)
In regular JS, to make sure the function only takes numbers,

///? you have to write manual checks:

JavaScript
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both inputs must be numbers!");
    }
    return a + b;
}

console.log(add(1, 3)); // 4
console.log(add("shiv", true)); // Throws an error at runtime (when you run it)
if we remove checker from here the code is run, because js add strings,  concatinate kar diya and more you can search

///2. The TypeScript Way (Clean and strict)
In TypeScript, you simply add a colon : 

///?followed by the data type right next to the parameters.

TypeScript
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 3)); // Runs perfectly: 4

/ The moment you type this next line in your editor, 
/ TypeScript underlines it in red and yells at you!
 console.log(add("shiv", true)); 
/Editor Error: Argument of type 'string' is not assignable to parameter of type 'number'.


//* Why TypeScript is better here:

Look how clean the TypeScript code is! No typeof if statements are needed.

The : number after add(a: number, b: number) tells TypeScript that the function itself must return a number.
You don't have to wait to run the file to see the error; TypeScript warns you instantly in the editor.
TypeScript code ultimately gets translated (compiled) into regular JavaScript so the browser can read it,
but it strips out all the type-checking stuff once it confirms your code is safe.
 */


// browser dont know TS:
//source code =TS
//compile TS to JS and run JS file;

//now we going to create a typeScript file ---> backendfirst.ts
//inside this file what piyush sir teach we have 

//-------------------------------------------------------------------------------------------------
//And now Node.js by hitesh sir

//node have modules;



const fs = require("fs");
// const fs = require("node:fs");//another way to write 
const path = require("path");
const os = require("os");

console.log("NodeJs:", process.versions.node);
console.log("NodeJs:", process.versions.node);
console.log("libuv:", process.versions.uv);

// console.log("=========================");
console.log("libuv:", process.platform);
console.log("Plateform:", process.platform);// win32
console.log("CPU:", os.cpus); // [Function: cpus]
console.log("CPU:", os.cpus().length); // 16
// console.log(process.versions);

console.log("V8 Engine:", process.versions.v8);
console.log("Is 'path' available?", typeof require('path') !== 'undefined');

// To see all versioned dependencies:
// console.table(process.versions);

//which language is fast interpreted / compiled ?


//Node.js
//majorlly components of node.js
//1 v8 engine ( Google)
// Js-> machine Code  (JIT compilation);
// manage heap and call stack
//knows nothing anout files, network or timeers

//2 LIBUV ( a c library);
//event loops, thread pool
//OS level async I/O
//Dns lookups
//js is single thread but backgroud thread run by libuv

//3 Node js binding (c++)
//bridge


//Know about Global and globalthis:? assignment: 
console.log(typeof global);
console.log(typeof globalThis);



