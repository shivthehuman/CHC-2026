/**
 * The above function provides implementations for custom array methods like forEach, map, and reduce,
 * along with explanations and examples for each.
 * @returns The code provided is implementing custom methods for Array and String prototypes. It
 * includes functions like `last` for arrays, `shiv` for arrays, and `upperCase` for strings.
 * Additionally, it also includes implementations for `forEach`, `map`, and `reduce` methods for
 * arrays.
 */










//* interview make or break topics
//! this
//! prototype
//! call, bind, apply , new

//-----------------------------------------------------------------------------------------------------
//*this
//------------------------------------------------------------------------------------------------------
//!  this output printing,typeof, with/without "use strict", this in nested function ;
//! this with arrow and regular func, detached methods

//remember ranveer singh stroy He is a acotor , play roles in movies. and also he is ranveer the human real one

//*ex-1
// console.log(this); // {}
//  in console --window object

//*ex-2
// function ranveerOnGlobalStage(){
//     return typeof this;
// }
// console.log(ranveerOnGlobalStage()); //object

//*ex-3
function ranveerWithNoScript(){
    "use strict";
    return this;
}
console.log(ranveerWithNoScript());
//its output depends where you run, like in browser / node environment or else;
// O/P - without  "use strict"; Object [global]
//     - with     undefined;

//*ex-4
/**
 *Inside an Object Method--
When a function is called as a method of an object, 
"this" refers to the object that is calling the method.
 */
// const bollywoodFilm = {
//     name: "Bajirao Mastani",
//     lead: "Ranveer",

//     introduce() {
//         return `${this.lead} performs in ${this.name}`;
//     },
// };
// console.log(bollywoodFilm.introduce()); // Ranveer performs in Bajirao Mastani

/**
 

//! Different between regular function and arrow function 
//? 1. The this Keyword (The Big One)
Regular Function: Has its own this context. The value of this depends on how the function is called (the caller).
Arrow Function: Does not have its own this. it inherits this from the parent scope where it was defined (lexical scoping).

Why it matters: In the video you're watching, if you use an arrow function inside an object method to try and access this.username, 
it will likely return undefined because it's looking at the global/outer scope instead of the object.


//? 2. The arguments Object
Regular Function: Has an arguments object that contains all the values passed to the function.
Arrow Function: Does not have an arguments object. If you need access to all parameters, you must use the rest operator (...args).

//? 3. Use as Constructors (new Keyword)
Regular Function: Can be used as a constructor (e.g., const me = new Person()).
Arrow Function: Cannot be used as a constructor. If you try to use new with an arrow function,
JavaScript will throw an error. They also lack a prototype property.
 */


//* ex: 5 int question

// const filmDirector = {
//     name: "Sanjay leela Bhansali", // it is a string
//     cast: ["Ranveer", "Deepika", "Priyanka"], // is is array

//     announceCast() {  // here is a REGULAR FUNCTION
//         / we know arrow function dont have this keyword access/"Lexical Scoping", so we think it is error or undefined
//         this.cast.forEach((actor) => {// but here annouceCast is a property of filmDirector object
//             console.log(`${this.name} introduces ${actor}`) // Detached function;
//         })
//     }
// }


// filmDirector.announceCast();// call karte ho, toh is function ka this ban jata hai filmDirector object.
/** O/P
Sanjay leela Bhansali introduces Ranveer
Sanjay leela Bhansali introduces Deepika
Sanjay leela Bhansali introduces Priyanka
 */

//Agar tum arrow function ki jagah normal function use karte, toh code fail ho jata:
 /* this.cast.forEach(function(actor) {
    Yahan ERROR/undefined aayega!
    console.log(`${this.name} introduces ${actor}`); 
    Kyun? Kyunki forEach normal function ko ek independent function ki tarah call karta hai. 
    Uska connection filmDirector se toot jata hai aur this kho jata hai (undefined ya window ban jata hai). 
    Arrow function ne is connection ko tootne nahi diya
})
 */

//* The Golden Combo:
//  Object methods ke andar agar koi array method (like .map(), .forEach(), .filter()) use kar rahe ho
//  toh callback hamesha Arrow Function hi banao. Isse tumhara this kabhi lost nahi hoga.

//* Ex - 6
/**
 * const filmSet = {
    crew: "Spot boys",
    prepareProps() {
        console.log(`Outer this.crew: ${this.crew}`)// Spot boys
    function arrangeChairs(){
        console.log(`Inner this.crew: ${this.crew}`) // undefined
    };
    arrangeChairs();
    const arrangeLights = () => {
        console.log(`Arrow this.crew: ${this.crew}`); //Spot boys
    };
    arrangeLights();
    },
};
 */
// filmSet.prepareProps();
//* knows
//question on code; read and answer
//Question: Why does the arrow function arrangeLights() successfully log "Spot boys" while the regular function arrangeChairs() fails?
//Question: Why does this.crew log as undefined inside the regular function arrangeChairs()?
//never say arrow function me to this hota hi nhi he, now see code it has but


//!     Detached Methods;
// Jab tum kisi Object ke function (method) ko us object se nikal kar (detach karke) kisi naye variable mein store kar lete ho,
// ya kisi aur function (jaise setTimeout) ko pass kar dete ho, toh use Detached Method kehte hain.

//? Ex-1
/**
 * const filmDirector = {
    name: "Sanjay Leela Bhansali",
    shoutAction() {
        console.log(`${this.name} says ACTION! 🎬`);
    }
}

// 1. Normal Call (Attached) - Perfect kaam karega
filmDirector.shoutAction(); // Output: "Sanjay Leela Bhansali says ACTION! 🎬"

// 2. DETACHING THE METHOD (Alag karna)
const startShooting = filmDirector.shoutAction; 

// Ab hum is naye variable ko call kar rahe hain
startShooting(); 
// Output: "undefined says ACTION! 🎬" (ya Strict Mode mein Error aayega!)

//* Aisa kyun hua? (The Logic)
JavaScript mein kisi normal function ka this is baat par depend karta hai ki function ko call kisne kiya (Who called it?), 
is baat par nahi ki function likha kahan gaya hai.

Jab tumne filmDirector.shoutAction() likha, toh dot (.) ke left mein filmDirector tha. Engine samajh gaya ki this = filmDirector.

Jab tumne use startShooting mein daal kar startShooting() bulaya, toh dot (.) ke left mein kuch nahi hai! Ye ek aam function ban gaya. 
Aise mein engine this ko Global Object (window in browser) maan leta hai, aur window ke paas name nahi hota, isliye undefined aata hai.
 */

//? Ex-2 The Big Confusion: Hum aksar sochte hain ki Object ka method (detached hone ke baad bhi)
// apne Object ke variables ko waise hi yaad rakhega jaise ek "Closure" rakhta hai. Par aisa nahi hota!

//🔴Concept 1: CLOSURE (The Loyal Friend)
//Closure hamesha yaad rakhta hai ki wo kahan paida hua tha(Lexical Scope).
//example - 1
/**function makeFunc() { 
    // Parent Function
    const name = "Mozilla"; // Variable in memory

    function displayName() { 
        // Child Function: Grabs reference to parent's variables (Backpack/Closure)
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc(); // Output: "Mozilla" ✅
// Rule: Variables lexical scope follow karte hain. myFunc ko bahar call kiya, phir bhi usne apna "Backpack" khola aur 'name' nikal liya.
 */

//🔴 Concept 2: DETACHED METHOD (The Disloyal Keyword)
// this koi variable nahi hai.Isey "Backpack" mein pack nahi kiya ja sakta.
//example - 2
/**const actor = {
    name: "Ranveer",
    bow() {
        return `${this.name} takes a bow`;
    }
}

// Method ko object se alag (detach) kar diya
const detachedBow = actor.bow; 

// Ab isey call kar rahe hain
console.log(detachedBow()); // Output: "undefined takes a bow" ❌ */

/**🧠 The "Why?": Aisa kyun hua? (The Gotcha!)
 * 
name vs this.name: Closure wale example mein name ek normal Variable tha. Lekin actor wale example mein hum .name ko this keyword ke through access kar rahe hain.
The Rule of this: this is baat ko follow nahi karta ki function kahan likha gaya hai. Wo sirf is baat ko dekhta hai ki function ko bula (call) kaun raha hai.
The Final Execution:
Jab tumne detachedBow() likha, toh iske pehle koi dot (.) nahi tha (jaise actor.bow() mein hota hai). Engine ne dekha ki isey akele bulaya gaya hai,
 toh usne this ko Global Object (Window) maan liya. Aur Window ke paas name nahi hai, isliye answer undefined aaya.
💡 Pro-Tip: Agar detached method mein bhi object ka data bacha kar rakhna hai, toh this ko permanently chipkana padta hai:
const fixedBow = actor.bow.bind(actor); */

/**agar tum naya variable (const) nahi banate aur seedha actor.bow() likhte ho, toh 
 * wo bilkul perfect kaam karega. Output aayega: "Ranveer takes a bow".

Isey JavaScript ki duniya mein "The Dot Rule" (ya Method Invocation) kehte hain. Chalo dekhte hain yeh kaise kaam karta hai:

🟢 The Dot Rule (The Attached Method)
Jab bhi tum kisi function ko call karte ho (yaani () lagate ho), engine turant uske left side mein dekhta hai:

JavaScript
const actor = {
    name: "Ranveer",
    bow() {
        return `${this.name} takes a bow`;
    }
}

// THE DOT RULE IN ACTION:
console.log(actor.bow()); 
// Output: "Ranveer takes a bow" ✅
 * 
 * 
 
 * 
 * Engine kya sochta hai:

Engine aaya bow() ke paas.

Usne left mein dekha: "Kya yahan koi dot (.) hai?" -> Haan hai.

Usne pucha: "Dot ke theek left mein kaunsa object hai?" -> actor hai.

Engine turant samajh gaya: "Achha, toh is bow function ka this asal mein actor hai!"

Toh this.name ban gaya actor.name, aur answer mil gaya "Ranveer" */

/** summary of calling ;
 * const detachedBow=actor.bow();, and direct calling like actor.bow();
 * Jab tum variable banate ho (const detachedBow = actor.bow), toh tum asal mein function ko object se ukhaad kar (detach karke) ek naye dabbe mein daal dete ho.
Lekin jab tum direct actor.bow() likhte ho, toh function apne object ke andar hi rehta hai (Attached rehta hai), isliye uska this ekdum safe aur loyal rehta hai.
 */




// read code actor object
// and tell does bow function return this.name has acces/print the name . of actor object
// referance clossure we can print or access
// see code like
/**
 * function makeFunc() { //parent fun
    const name = "Mozilla";

    function displayName() { // child fun grab , referance eveything of the parent variable;
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc(); // Mozilla;
 */

// const actor = {
//     name:  "Ranveer",
//     bow() {
//         return `${this.name} : takes a bow`
//     }
// }
// const detachedBow =actorr.bow;// usually we put this line in try catch blocks
// console.log("detachedBow: is-",detachedBow()); // undefined :  takes a bow
//everone think we have acces of actor object variable name in bow function like clossure



//* should know & remember behaviour of js
//1. In nested function , how this works  for regular and arrow functino; check ex-5
//2. also detached method
//3.This-ka global state kya hota hai
//4. This- apne sath me kya lekar jata hai

//----------------------------------------------------------------------------------------------------------------------
//! Call/ bind/ apply
//--------------------------------------------------------------------------------------------------------------------------------

//call and apply = > basic chef(kitchen)
//bind = > return a new function
//--"Function Borrowing" (Udhaar lena).

// return Result

/**//* 1. call() Method
call() method kisi bhi function ko turant chalata (execute karta) hai, lekin tum usko bata sakte ho ki "Bhai, tera this ab se main hu!"
Scenario: Kapoor family ke paas mehmano ko invite karne ka ek function hai, par Khan family ke paas nahi hai. Khan family wo function udhaar (borrow) legi.

//* ex -1
const kapoorFamily = {
    surname: "Kapoor",
    invite(guest1, guest2) {
        console.log(`Welcome ${guest1} & ${guest2} to the ${this.surname} house!`);
    }
}
const khanFamily = {
    surname: "Khan"
}

// 🟢 Normal Call (Kapoor khud use kar raha hai)

kapoorFamily.invite("Ranbir", "Alia"); 
// Output: Welcome Ranbir & Alia to the Kapoor house!

// 🔥 USING CALL() (Khan family udhaar le rahi hai)

kapoorFamily.invite.call(khanFamily, "Salman", "Katrina");
// Output: Welcome Salman & Katrina to the Khan house!

//? Notice kya kiya?
call() ke andar pehla parameter hamesha wo Object hota hai jisko tum this banana chahte ho (yahan khanFamily). 
Uske baad wale parameters (guest1, guest2) normally comma (,) laga kar pass kiye jaate hain.

//* Ex - 2

function cookDish(ingredient,style){
    return `${this.name}- prepares ${ingredient} in ${style} style !`;
}
const sharmaKitchen = {name: "Sharma jis Kitchen"};
const guptaKitchen = {name: "Gupta jis Kitchen" };

console.log(cookDish.call(sharmaKitchen,"paneer and spices", "Muglai"));



const guptaOrder = [ "chole kulche", "punjabi sabjis"]
console.log(cookDish.apply(guptaKitchen,guptaOrder));

//* 2. apply() Method
apply() bilkul 100% wahi kaam karta hai jo call() karta hai. Koi difference nahi hai! Sirf ek chhota sa farq hai: 
Parameters pass karne ka tareeka. Agar function mein 50 parameters hain, toh comma lagakar likhna lamba ho jata hai. 
Isliye apply() kehta hai ki "Mujhe parameters ek Array ke andar daal kar de do."

// 🔥 USING APPLY() (Kaam wahi, bas syntax alag)
kapoorFamily.invite.apply(khanFamily, ["Salman", "Katrina"]);
// Output: Welcome Salman & Katrina to the Khan house
Notice kya kiya? Pehla parameter abhi bhi Object (khanFamily) hi hai, lekin baaki arguments ek [] (Array) ke andar gaye hain.
 */

// const bills = [100, 30, 45, 50]

// Math.max.apply(null, bills)/// what is null here ,why it is here
// Math.max(...bills);

//* Bind () method
//The Concept: The Permanent Job (Full-Time Contract

//Lekin yahan ek twist hai: Tata Ji contract sign karte waqt Chef se khana nahi banwate.
//  Wo bas usey apna Uniform (Context) pehna dete hain. Khana wo baad mein banayega jab order aayega.

//*ex - 1
/**
 * function cookDish(ingredient, style) {
    return `${this.name} - prepares ${ingredient} in ${style} style !`;
}
const tataKitchen = {name: "Tata jis Kitchen"};

// 1. THE CONTRACT (Binding the Chef)
// bind() turant khana nahi banata, wo ek NAYA function (Chef) return karta hai
const tataChef = cookDish.bind(tataKitchen); 

// ... bohot der baad ...

// 2. THE ORDER (Execution)
console.log(tataChef("Dal Makhani", "Tandoori"));
// Output: "Tata jis Kitchen - prepares Dal Makhani in Tandoori style !"
 */

/**
 * 
 * 🏆 bind() ki sabse zyada zaroorat kahan padti hai? (The Real-World Use)
 * 
Tum sochoge, "Jab call aur apply the, toh bind kyun banaya?"
Kyunki kabhi-kabhi humein function kisi aur ko dena hota hai chalane ke liye (jaise setTimeout ya Button ke onClick par).

Agar hum apna normal Chef denge, toh rastre mein uska this kho jayega (Detached Method wala trap).
 Lekin agar hum Bind kiya hua Chef denge, toh wo chahe jahan jaye, kabhi apna naam nahi bhoolega! */


 //* ex
/**
 * 
 *
//  function reportDelivery (location, status){
//     return `${this.name} at ${location} : ${status}`
//  }

//  const deliveryBoy = {name: "Ranveer"};
//  console.log("call: ", reportDelivery.call(deliveryBoy,"Lyari", "ordered"));
// console.log("Apply : ", reportDelivery.apply(deliveryBoy, ["Lyari", "ordered"]));
// console.log("Bind : ", reportDelivery.bind(deliveryBoy, "haridwar", "WHAT"));

// const bindReport = reportDelivery.bind(deliveryBoy,"LAHORE ", "KYA BAK RE HO Mad#ch3d");
// console.log(bindReport());

// console.log(bindReport("what"));
// console.log(bindReport("uri", "aajao fir"));

 */




//-----------------------------------------------------------------------------------------------------------------------
//! New
//------------------------------------------------------------------------------------------------------------------------------------------
//The Factory" (Karkhana).



/**
 * 
 * 🏭 JavaScript new Keyword & Prototypes: The Factory Guide
 * 
📖 The Story: The Blueprint & The Machine
Maan lo tumhe 100 naye Chefs (objects) chahiye, jinke naam aur skills alag-alag hon. Agar ek-ek karke object {} likhoge, toh pura din nikal jayega!
Is problem ko solve karne ke liye hum ek Blueprint (Saancha) banate hain. Aur jab bhi naya object chahiye hota hai, hum new keyword naam ki Factory Machine ka button daba dete hain.

📝 Definition
Constructor Function (Blueprint): Yeh ek normal function hai jo saanche ka kaam karta hai. Rule: Iska pehla letter hamesha Capital rakhte hain (jaise Chef, TataCar) taaki sabko pata chal jaye ki yeh factory hai.

new Keyword (Machine): Yeh ek operator hai jo constructor function ka use karke naye objects paida karta hai.

💻 Code Example: The Chef Factory
JavaScript


// 1. The Blueprint (Saancha)
function Chef(name, dish) {
    this.name = name;
    this.specialty = dish;
    this.intro = function() {
        return `Hi, I am ${this.name} & I make ${this.specialty}`;
    };
}

// 2. The Factory Machine ('new' keyword)
const chef1 = new Chef("Sanjeev Kapoor", "Paneer Tikka");
const chef2 = new Chef("Gordon Ramsay", "Beef Wellington");
console.log(chef1.intro()); // "Hi, I am Sanjeev Kapoor & I make Paneer Tikka"


🕵️‍♂️ Behind the Scenes: The 4 Secret Steps (Interview Question)
Jab engine line padhta hai new Chef("Sanjeev", "Paneer"), toh wo exactly 4 khufiya kaam karta hai:

Creates a Blank Object: Sabse pehle chupchap ek khali dabba banata hai: {}
Binds this: Function ke andar ke this keyword ko us khali dabbe se jod deta hai. (this = {})
Executes Code: Function ka code chalata hai (this.name = name). Khali dabba bhar jata hai: {name: "Sanjeev", specialty: "Paneer"}
Auto-Return: Us bhare hue dabbe ko automatically return karke variable mein save kar deta hai. (No need to write return this;)


🛠️ Advanced Topic: The Prototype (Shared Garage)
Jab hum factory mein kaafi saari cars banate hain, toh methods (functions) ko car ke andar likhna memory waste karna hai. Isliye hum Prototype ka use karte hain.

JavaScript
function TataCar(chassisNumber, modelName) {
    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}

// PROTOTYPE HACK: Har car ke andar copy banane ki jagah, 
// Function ko ek 'Shared Garage' (prototype) mein daal do!

TataCar.prototype.status = function() {
    return `Tata ${this.modelName} : ${this.chassisNumber} Fuel: ${this.fuelLevel}`;
}
const car1 = new TataCar("mHo393", "nexon");
console.log(car1.status()); // Tata nexon : mHo393 Fuel: 100
console.log(car1.modelName); // mHo393
Q: Kya yeh class se bana hai? 👉 Nahi. Yeh pure functions aur new keyword ka kamaal hai. ES6 (Modern JS) aane se pehle duniya aise hi chalti thi.



🚀 Bonus: ES6 Classes (The Modern Makeup)▶️▶️
Modern JS mein hum class keyword use karte hain. Lekin dhyan rakhna, pichhe (under the hood) yeh aaj bhi Constructor aur Prototype hi use kar raha hai. Yeh bas likhne mein aasan hai (Syntactic Sugar).

JavaScript
class TataCar {
    constructor(chassisNumber, modelName) {
        this.chassisNumber = chassisNumber;
        this.modelName = modelName;
        this.fuelLevel = 100;
    }

    // Yeh function automatically TataCar.prototype.status ban jayega!
    status() {
        return `Tata ${this.modelName} : ${this.chassisNumber} Fuel: ${this.fuelLevel}`;
    }
}



⚠️ The Ultimate Gotcha (Trap)
Kya hoga agar new lagana bhool gaye?

JavaScript
const chef3 = Chef("Vikas Khanna", "Dal Makhani"); // OOPS! 'new' missing
console.log(chef3); // undefined
Disaster Strike! 💥
Khali object {} nahi bana.
new nahi hone ki wajah se "Dot Rule" fail ho gaya, aur this seedha Global Window Object ban gaya.
Engine ne Window object ko ganda kar diya (window.name = "Vikas Khanna").
Auto-return cancel ho gaya, isliye chef3 ko undefined mila.
Rule of Thumb: Agar function ka naam Capital se shuru ho raha hai, toh new lagana mat bhoolna!
 * 
 */


//Is tareeke ko JavaScript ki duniya mein "Factory Function Pattern" kehte hain.

//this code also works so why we need "new";
//Agar Factory Function itna aasan hai, toh duniya new aur class ke peeche kyun bhagti hai?
// Iska sirf ek sabse bada reason hai: Memory Management (RAM bachaana).

// function createAutoRickshaw(id,route){
//     return {
//         id,
//         route,
//         run() {
//             return `Auto ${this.id} running on  ${this.route}`
//         }
//     }
// }
// const auto1 = createAutoRickshaw("UP - 1", "Lucknow-Kanpur");
// const auto2 = createAutoRickshaw("UP - 2", "Indore-Bhopal");

// console.log(auto1.run());
// console.log(auto2.run());

/**
 * Factory Function (Tumhara code): Use karo jab tumhe sirf kuch thode se (10-50) objects banane hon,
 *  ya jab tumhe code bohot simple rakhna ho aur memory ki chinta na ho.

new Keyword / Classes: Use karo jab tumhe ek hi cheez ke hazaaron objects banane hon (jaise game mein enemies,
 E-commerce app mein hazaron products, ya Uber app mein hazaron autos). Yahan Prototype ki madad se app fast aur memory-efficient rehti hai.
 */



//! Prototype



/**🧬 The Master Guide to JavaScript Prototypes
📖 The Concept: The Hidden DNA (Virasat)
JavaScript mein har Object akela paida nahi hota. Engine har naye object ke andar ek "Hidden Link" (Chhupa hua connection) daal deta hai. Yeh link uske purvajo (ancestors/parents) tak jata hai.

Is hidden link ko hi Prototype kehte hain. Tum isey ek "Shared Garage" ya "Family DNA" maan sakte ho. Jo cheez tumhare paas nahi hai, wo tum apne baap-dada (Prototype) se maang sakte ho.

🥊 The Biggest Interview Trap: __proto__ vs .prototype
Puri JS community in do shabdo mein confuse rehti hai. Interviewer 100% yeh puchega. Isey dhyan se samjho:

1. __proto__ (The Key / Link)

Kiske paas hota hai? Duniya ke har ek Object ke paas (tumhara banaya hua dabba, arrays, functions, sabke paas).

Kaam kya hai? Yeh wo rassi (link) hai jo object ko uske "Shared Garage" (Ancestor) se jodti hai. Agar tum car1.__proto__ likhoge, toh tum direct us garage ke andar jhaank loge.

2. .prototype (The Garage Building itself)

Kiske paas hota hai? Sirf aur sirf Constructor Functions ke paas (jaise TataCar, Array, Object).

Kaam kya hai? Yeh wo asli "Shared Garage" hai. Jab Factory (new keyword) naya object banati hai, toh wo isi garage ka link (__proto__) naye object ke andar daal deti hai.

(Note: Modern JS mein __proto__ ko seedha use karna mana hai, uski jagah Object.getPrototypeOf(obj) use karte hain, par samajhne ke liye __proto__ best hai).

🔗 The Magic Trick: "The Prototype Chain"
Maan lo tumne arrays banaye aur us par .sort() ya .map() lagaya:

JavaScript
const myGrades = [90, 80, 95];
myGrades.sort(); // Yeh sort kahan se aaya??
Tumne toh myGrades ke andar .sort() nahi likha tha! Phir engine ko yeh kahan mila? Yahan shuru hota hai Prototype Chain (Engine ki khoj):

Engine: "Kya myGrades ke andar khud ka sort function hai?" -> Nahi hai.

Engine: "Ruko, main iske __proto__ (Family Garage) mein check karta hu." -> Engine link pakad kar Array.prototype mein jata hai.

Engine: "Mil gaya! Array.prototype ke andar sort, map, filter sab padhe hain. Main isey chala deta hu!"

💻 Code Example: Custom Prototype Chain (Tumhara TataCar)
Chalo tumhare pichle code ko thoda aur deeply dekhte hain:

JavaScript
// 1. Blueprint (The Factory)
function TataCar(model) {
    this.model = model;
}

// 2. The Shared Garage
TataCar.prototype.startEngine = function() {
    return `${this.model} is starting... Vroom!`;
}

// 3. The Object
const myCar = new TataCar("Nexon");

// Engine pehle myCar me startEngine dhundhega, nahi milega.
// Phir wo __proto__ link se TataCar.prototype me jayega, aur wahan se chala dega!
console.log(myCar.startEngine()); // Nexon is starting... Vroom!
Kya hoga agar Prototype ke garage mein bhi cheez na mile?
Agar TataCar.prototype mein bhi nahi mili, toh engine aur upar jayega Object.prototype mein (Grandfather). Agar wahan bhi nahi mili, toh finally usko null milega aur wo bolega undefined. Isey Prototype Chaining kehte hain.
 */


/**🌳 THE KAPOOR FAMILY TREE: Prototypal Inheritance
  Object.create(parentObj) ek naya khali dabba {} banata hai, 
  aur uske __proto__ link ko chupchap 'parentObj' se jod deta hai.
 

// 👴 LEVEL 1: The Grandfather (Base Object)
const prithviraj = {
    name: "Prithviraj",
    generation: "grandfather",
    cookTraditionalDish() {
        return `${this.name} cooks an ancient family recipe 🥘`;
    },
};

// 👨 LEVEL 2: The Father (Inherits from Grandfather)
// Engine karta hai: raj = {}; raj.__proto__ = prithviraj;
const raj = Object.create(prithviraj);
console.log(raj);//{}
console.log(raj.name);//prithviraj;


// Ab hum raj ka apna data bhar rahe hain (Property Shadowing)
raj.name = "Raj";
raj.generation = "father";
raj.runBusiness = function () {
    return `${this.name} runs the family business 🏢`;
}

// 👦 LEVEL 3: The Son (Inherits from Father)
// Engine karta hai: ranbir = {}; ranbir.__proto__ = raj;
const ranbir = Object.create(raj);

// Ranbir ka apna data
ranbir.name = "Ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
    return `${this.name} directs blockbuster movies 🎬`;
}
// ==========================================
// 🕵️‍♂️ THE TESTING PHASE (Engine at work!)
// ==========================================

console.log(ranbir.makeFilm());
// Output: "Ranbir directs blockbuster movies"
// Engine: "makeFilm() Ranbir ke paas hi mil gaya. Uska apna naam 'Ranbir' use kiya."

console.log(ranbir.runBusiness());
// Output: "Ranbir runs the family business"
// Engine: "ranbir ke andar runBusiness nahi hai! __proto__ se uske baap (raj) ke paas gaya.
// Function mil gaya! Par call ranbir ne kiya hai, isliye 'this.name' = Ranbir."

console.log(ranbir.cookTraditionalDish());
// Output: "Ranbir cooks an ancient family recipe"
// Engine: "ranbir ke paas nahi hai -> raj ke paas bhi nahi hai -> prithviraj ke paas mila!
// Firse, call ranbir ne kiya hai, isliye 'this.name' = Ranbir." */



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! polyfill
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//we can build our own map
Array.prototype.last = function () {
    return this[this.length - 1];
};
// console.log([1,2,3].last()); //3
// console.log(["Ani", "hitesh", "akash"].last());//akash;

Array.prototype.shiv = function () {
    this([1,2,3].shiv);
}

String.prototype.upperCase = function () {
}

//interview question  :
//implement your own map, reduce and foreach;

/**Here is the complete, corrected code with explanations and standard interview implementations for map, reduce, and forEach.

1. Fixing and Completing Your Snippets
JavaScript
// 1. Array.prototype.last (Your provided working example)
Array.prototype.last = function () {
    return this[this.length - 1];
};
console.log([1, 2, 3].last()); // Output: 3
console.log(["Ani", "hitesh", "akash"].last()); // Output: "akash"


// 2. Array.prototype.shiv (Fixing the broken code)
// Your original code `this([1,2,3].shiv)` would throw an error because `this` is an array, not a function.
// Let's make this do something custom, like returning a specific string attached to the array elements.
Array.prototype.shiv = function () {
    return this.join(" ⚡️ ") + " - coded by Shiv";
};
console.log([1, 2, 3].shiv()); // Output: "1 ⚡️ 2 ⚡️ 3 - coded by Shiv"


// 3. String.prototype.upperCase
// We can build this from scratch using ASCII character codes. 
// Lowercase 'a' to 'z' are 97 to 122. Subtracting 32 gives the uppercase equivalent.
String.prototype.myUpperCase = function () {
    let result = "";
    for (let i = 0; i < this.length; i++) {
        let charCode = this.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += this[i]; // Keep spaces, numbers, and already uppercase letters as is
        }
    }
    return result;
};
console.log("hello world 123!".myUpperCase()); // Output: "HELLO WORLD 123!"
2. Interview Questions: Implement Map, Reduce, and ForEach
When interviewers ask for these, they are looking for three specific things:

Do you use the this keyword correctly?

Do you pass the correct arguments to the callback function (element, index, array)?

For map and forEach, do you handle the optional thisArg?

For reduce, do you properly handle the initialValue?

Implement myForEach
forEach iterates over the array and executes the callback for each element. It does not return anything (undefined).

JavaScript
Array.prototype.myForEach = function (callback, thisArg) {
    // 'this' refers to the array calling the method
    for (let i = 0; i < this.length; i++) {
        // 'i in this' checks if the index actually exists (handles sparse arrays like [1, , 3])
        if (i in this) {
            // callback receives: currentElement, currentIndex, originalArray
            callback.call(thisArg, this[i], i, this);
        }
    }
};

// Example Test:
const arr = ["a", "b", "c"];
arr.myForEach((el, i) => console.log(`Index ${i}: ${el}`));
Implement myMap
map iterates over the array, applies the callback to each element, and returns a brand new array of the exact same length.

JavaScript
Array.prototype.myMap = function (callback, thisArg) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            // Push the returned value of the callback into the new array
            result.push(callback.call(thisArg, this[i], i, this));
        } else {
            // Preserve sparse arrays
            result.length++; 
        }
    }
    return result;
};

// Example Test:
const numbers = [1, 2, 3];
const doubled = numbers.myMap(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
Implement myReduce
reduce is the trickiest. It takes a callback and an optional initialValue. It accumulates a single result by iterating through the array. If no initialValue is provided, the first element of the array becomes the initial accumulator, and the loop starts at index 1.

JavaScript
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    // If no initialValue is provided, use the first array element
    if (accumulator === undefined) {
        // Standard JS behavior: throwing an error on an empty array with no initial value
        if (this.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            // callback receives: accumulator, currentElement, currentIndex, originalArray
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    
    return accumulator;
};

// Example Test 1: Summing an array (with initial value)
const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10

// Example Test 2: Finding a max value (without initial value)
const max = nums.myReduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max); // Output: 4 */

























































































































