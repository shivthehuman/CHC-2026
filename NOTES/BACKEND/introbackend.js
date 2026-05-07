

// page 75 detailes we have what we learn in this lecture - Intro to Backend
//go to notes in tablet name is -- BACKEND NOTES 





// lecture start

//----------------------------------------------------------------
//hitesh sir
//!  HTTP METHODS
// we are going to learn,   when we req. by http methods , how req. goes
//we learn http methods get post put patcha delete and status code
//this notes in tablet check notes;
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
//so dont worry to get exerties in day or month in typescript
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

///? followed by the data type right next to the parameters.

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

/*
================================================================================
 TypeScript vs JavaScript (The Compilation Process)
================================================================================
Explanation:
Browsers and Node.js (historically) do not natively understand TypeScript (TS). 
TypeScript is a superset of JavaScript that adds static typing. 

To run TypeScript:
1. You write the Source Code in TS.
2. You use the TypeScript Compiler (`tsc`) to "transpile" or compile it into plain JavaScript (JS).
3. The resulting JS file is what actually runs in the Browser or Node.js environment.

Think of TS as a development tool that catches errors before you even run the code.
================================================================================
*/

// MUST KNOW: You would compile this file in your terminal using:
// npx tsc backendfirst.ts 
// This generates a backendfirst.js file which you then run with `node backendfirst.js`.


/*
================================================================================
 Node.js Built-in Modules (The "Batteries Included" tools)
================================================================================
Explanation:
Node.js comes with built-in modules that allow you to interact with the operating
system, file system, network, and more. Because JavaScript was originally built
for browsers (which are heavily sandboxed for security), it couldn't read your 
local files. Node.js adds these capabilities via modules.
================================================================================
*/

// TRICKY/BEST PRACTICE: The "node:" prefix explicitly tells Node to bypass the 
// `node_modules` folder search and instantly load the built-in core module. 
// It is faster and safer against malicious packages with similar names.
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

console.log("--- System Information ---");

// MUST KNOW: process is a global object in Node.js providing info about the current Node process.
console.log("Node.js Version:", process.versions.node);
console.log("Libuv Version:", process.versions.uv);

// process.platform tells you the OS you are running on (e.g., 'win32' for Windows, 'darwin' for Mac, 'linux').
console.log("Platform:", process.platform);

// os.cpus() returns an array of objects containing info about each logical CPU core.
// TRICKY: Why do we care about the length? Node.js is single-threaded. 
// If we want to scale an app, we use the 'cluster' module to create exactly 
// this many "worker" processes to utilize 100% of the CPU!
console.log("Total Logical CPU Cores:", os.cpus().length);

// Checks if a core module was successfully required
console.log("Is 'path' available?", typeof path !== 'undefined');


/*
================================================================================
 Node.js INTERNALS & ARCHITECTURE (The Heart of Node)
================================================================================
Explanation:
Node.js is fundamentally a C++ program that wraps Google's V8 engine and Libuv.

ARCHITECTURE DIAGRAM:

       +---------------------------------------------------+
       |                  YOUR JAVASCRIPT CODE             |
       +-------------------------+-------------------------+
                                 |
                                 V
       +-------------------------+-------------------------+
       | NODE.js STANDARD LIBRARY (fs, http, crypto, etc.) | <-- Node.js Core
       +-------------------------+-------------------------+
                                 |
                                 V
       +-------------------------+-------------------------+
       |        NODE.js BINDINGS (C++ Bridge / Wrapper)    | <-- Allows JS to talk to C++
       +-------+-----------------------------------+-------+
               |                                   |
               V                                   V
       +-------+-------+                   +-------+-------+
       |   V8 ENGINE   |                   |    LIBUV      |
       |  (Executes JS)|                   | (Async I/O)   |
       +---------------+                   +---------------+

1. V8 Engine (Built by Google in C++):
   - Responsible for taking your JavaScript and converting it into Machine Code.
   - Uses JIT (Just-In-Time) compilation, making JS incredibly fast.
   - Manages the Memory Heap (variable allocation) and the Call Stack (function execution).
   - *Limitation:* V8 is purely a JS engine. It knows NOTHING about file systems, networks, or HTTP.

2. LIBUV (A pure C library):
   - This gives Node.js its superpower: Asynchronous, Non-blocking I/O.
   - It provides the "Event Loop" (handles light async tasks).
   - It provides the "Thread Pool" (4 background worker threads by default to handle heavy tasks like File I/O, Cryptography, DNS lookups).
   - *Concept:* JS is single-threaded, but Node.js uses Libuv to offload heavy work to background OS threads!

3. Node.js Bindings (C++):
   - JS cannot directly speak to C libraries. The bindings act as a bridge translating 
     V8's JavaScript objects into C/C++ structures that Libuv and the OS can understand.
================================================================================
*/

console.log("\n--- Node.js Internals Info ---");
console.log("V8 Engine Version powering this environment:", process.versions.v8);

// To see all underlying C/C++ dependencies Node is using:
// console.table(process.versions); // TRICKY: console.table formats objects nicely into a grid.


/*
================================================================================
TOPIC 4: Interpreted vs Compiled vs JIT (Just-In-Time)
================================================================================
Explanation:
- Interpreted (e.g., old Python/Ruby): Code is read line-by-line and executed. Slow, but starts instantly.
- Compiled (e.g., C++, Rust): Code is translated entirely into machine code before running. High startup time, incredibly fast execution.

Where does JS fit?
Modern JavaScript (via V8) uses JIT (Just-In-Time) Compilation. 
It starts interpreting the code quickly, but running in the background is a compiler 
(like V8's TurboFan) that takes frequently run code ("hot code") and compiles it into 
optimized machine code on the fly. It is the best of both worlds!
================================================================================
*/


/*
================================================================================
 `global` vs `globalThis`
================================================================================
Explanation:
In JavaScript, the global object differs depending on where your code runs:
- In the Browser, the global object is `window`.
- In Node.js, the global object is `global`.

This caused a huge headache for developers writing code that needs to run in BOTH 
environments. To solve this, ECMAScript standardized `globalThis`.

`globalThis` automatically points to the correct global object regardless of the 
environment (it will point to `window` in a browser, and `global` in Node).
================================================================================
*/

console.log("\n--- Globals ---");

// TRICKY: `global` works here because we are in Node.js. 
// If you paste this specific line in a browser console, it will crash.
console.log("Type of global object in Node:", typeof global);

// MUST KNOW: Always prefer `globalThis` in modern JS/TS for cross-platform compatibility.
console.log("Type of globalThis (Cross-platform):", typeof globalThis);

// PROOF: In Node.js, globalThis is literally a reference to the global object.
console.log("Are global and globalThis the same in Node.js?", global === globalThis); // true

//LECTURE COMPLETED HERE


