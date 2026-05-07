



/* The code you provided is a JavaScript code snippet that explains the concept of closures in
JavaScript. It includes examples and explanations to help understand how closures work in
JavaScript. */




//! CLOSURES : 

/**Defination:
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
 * In other words, a closure gives a function access to its outer scope. 
 * In JavaScript, closures, are created every time a function is created, at function creation time.
 */

//* Ex 1
// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         /displayNmae() is the innner function, that forms a closure.
//         console.log(name); //use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// console.log(name); // ReferenceError: name is not defined

// function makefunc() {
//     const name = "Moxilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makefunc(); //taking referance 
// myFunc();
// we have output- Mozilla
//myfunc hold only the referance of displayName func. 
// so question is how we can access the makeFunc name variable, 
// when calling myFunc we have output ,  how 

//displayname have access of name,      
//  jab displayname func jayega to vo outer func ke sabhi chize or variable of tiffing me pack kar ke le jayega, but is  should be accees use my displayName func than it pack in its tiffin, like referance use kiya hoga to

//makeFunc dont have access of name 

// this concept called -- Closure :
// in lecture we understand it by diagram


//* ex: 
// function startCompany () {
//     function ca(name) {
//         return `name of your company is ${name}`
//     }
//     return ca;
// }

// const getMeAcompany = startCompany();
// const myCompanyName = getMeAcompany("Zomato");
// console.log(myCompanyName);// name of your company is Zomato

//* ex :

// function eternal(guest) {
//     const guestName = guest
//     let count = 0;
//     function Zomato() {
//         console.log(` Hi ${guestName}, from Zomato`);
//     }
//     function blinkit() {
//         if(count == 1) return;
//         console.log(`Hi ${guestName}, from blinkig`);
//         count++;
//     }
//     /we dont do this--/
//     / Zomato();
//     / blinkit();
//     /we do
//     return {
//         Zomato,
//         blinkit,
//     }
// }
// const shiv = eternal("shiv");
// shiv.blinkit(); //Hi shiv, from blinkig

// shiv.blinkit(); 
// shiv.blinkit(); 
//here we call three times but, 
//agar fun change hi nhi ho rah he to use dobara run mat kro;
// we just build here react ka useMemo() book
//story: when user req. data from database , then again he need same data, again and again then we do this, like cache memory, redis

//* ex: 
const cups = ['green', "blue", 'red']

cups.map

//settimout padna he to phle - Queue padna samjhna jaruri hai
//closure padna he to phle - memory behaviour padna jaruri hai






















//---------------------------------
//! -- DOM ---
//---------------------------------


//SEE NOTES IN DOM FOLDER 
// index_dom.html first file , and todo.html second file 
// we have also DOM notes in tablet notes by pens ok===========






























