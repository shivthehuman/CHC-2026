/**
 * The above code covers various JavaScript concepts such as object creation, optional chaining,
 * symbols, object to primitive conversion, JSON serialization, methods on primitives, exponential
 * notation, and handling NaN values.
 * @param name - The code snippets provided cover various topics in JavaScript. Here is a brief summary
 * of each section:
 */









//! 1. Art of problem solving
//Appreciate ; good question (meme: on stage) , that is an excellent question;


//! 2. Read carefully
// like mr.bean

//! 3. Ask AI and Chill

//REGX-------REGULAR EXPRESSION
// /[0-9]/.test("aa22"); true; // its error so use g ok --------------
// /[0-9]g/.test("aa22"); false

//[View my Eraser Diagram](https://app.eraser.io/workspace/ZBvpXHLl4ttDdRczawhL)




//! T-5

//you don't know JS -->

//CHECK ALSO JS ESSENTIAL 02 FILE
//!  1.  OBJECT--------------------------------------------------------------------------
//!  2. COPYING--------------------------------------------------------------------------
//!  3.  GARBAGE COLLECTION--------------------------------------------------------------------------
//!  4.  THIS KEYWORD--------------------------------------------------------------------------


//!  5. CONSTRUCTOR------------------------
//1. Capital letter name [String, Number, Array, Object]
//2. should be Executed by "new " Operator

function User(name, ) {
    this.name = name; 
    this.isPaid = false;
};
User("mehi"); // not works  use new operator
const aj = new User("Ahi");
//console.log(aj);//User { name: 'Ahi', isPaid: false }

//new ka jaadu...
//1. this = {}
//2. operations
//3. return this;


// function User(name) {
//   this = {};
//   this.name = name;
//   this.isPaid = false;
//   return this;
// };


//! 6. Optional chaining  -----------------------------------------

const user2 = {
    name: "John",
    email: "john@gmail.com",
    address: {
        full: "adad adlfjdafj city",
        zip: "432322"
    },
}


// if (user.address) {
//   if (user.address.city) {
//     console.log(user.address.city);
//   } else {
//     console.log(user.address.full);
//   }
// } else {
//   console.log('empty');
// }

// ?.
// console.log(user2.address?.zip);
//console.log(user2?.address?.city);
// logical and it returns first falsy or last truty
// console.log(user.address && user.address.city);
// When to add "?"
// when we are not sure.




//! 7. Symbol --------------------------
// JS Specification say
// Object keys ==> string, symbol....

// A symbol is a “primitive unique value” with an optional description.
// let baby = Symbol("mai ka ladle");

// Symbols are always unique, even the desc is same
// let yntp = Symbol("ak");
// let rehman = Symbol("ak");
// console.log(Symbol("ak") === Symbol("ak")); //false


//* Use Case- of symbol;
// Hidden Properties, skipped by for..in loop

// * Global Symbol (symbol.for)
// they exists in global symbol registry.


// let org = Symbol.for("ChaiCode");
// let company = Symbol.for("ChaiCode");
// console.log(org === company); //true;

// we can access it by "key" (not called description:)
// console.log(Symbol.keyFor(org));

// System Symbols
// Symbol.iterator
// Symbol.toPrimive

// Technically, symbols are not 100% hidden.
// There is a built-in method Object.getOwnPropertySymbols(obj)

//! 8. obj to primitive
// obj Conversion in ==> number, string

// obj[Symbol.toPrimitive](hint)

// hint --> "string", "number", "default"
// binary + --> (addition, concatination)


let galgota = {
    status: "wasted",
    aura: -1000,

    // custom conversion
    [Symbol.toPrimitive](hint) {
        if (hint === "string") return this.status;
        return this.aura;
    },
};

// console.log(galgota);
// console.log(String(galgota));//wasted
// console.log(Number(galgota));//-1000

// hint : "string" --> toString()
// hint : "number" --> valueOf()


function randNo(start, end) {
    // return Math.random() * (end - start);
    // 0- 1 *diff ==> [0 , 5)

    // return start + Math.random() * (end - start);
    // 5 + ==> [5 , 10)
}

let user = {
    name: "Vidya",
    age: 23,
    roles: {
        isInstructor: false,
        isEditor: true,
        isDesigner: true,
    },
};
// console.log(user);
// const serilalize = JSON.stringify(user,null, 4);
// console.log(serilalize); // convert it into string all value and with 4 spaces
// console.log(JSON.parse(serilalize)); //same as user 






//! 9. methos os primitive;

//it all comes at cost...
//objects are heavier than primitives

let str = "shivRRRaj";
let strclean = str.toLowerCase();
// console.log(strclean);
// In the moment of accessing its property, a special object is  created that knows the value of the string,
//and has useful methods, like toLowerCase();
//look like this
//{
// value: "shivRRRaj",
// toLowerCase(),
// }



//! 10.   e and numbers and isNaN

let no = 4e1;
// console.log(no); //40
//4e3---> 4000;

//hexadecimal 0xff ==> 255
//binaray  0b11 ==>3
//octal  0o13 ==> 11


//NaN === Nan // false
//problem
const a =4/"meow" == NaN ? "wrong": "right" //right
// console.log(a); //right

//thatwhy we use 
const b = isNaN(4/"meow" == NaN ? 'wrong': "right");
// console.log(b) //true
