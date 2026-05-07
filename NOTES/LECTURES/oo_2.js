/**
 * The above code demonstrates the concept of Promise chaining in JavaScript to handle asynchronous
 * operations like preparing, picking up, and delivering an order, ensuring the sequence of actions and
 * error handling.
 * @param dishName - The `dishName` parameter represents the name of the dish being prepared in the
 * order process. It is used as input to the functions involved in preparing, picking up, and
 * delivering the order.
 * @returns In the Promise chaining example provided, each function (`prepareOrder`, `pickupOrder`,
 * `deliverOrder`) returns a Promise object. Within each `then` block, the next function in the chain
 * is called and it returns a Promise as well. This allows for the chaining of asynchronous operations
 * in a sequential manner.
 */











//!  Class
// function ke upar : syntactical sugar


// class Cricketer {
//     constructor (name, role) {
//         this.name = name
//         this.role = role
//         this.matchesPlayed = 0
//         this.stamina = 100
//     }
//     introduce() {
//         return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesPlayed} | stamina: ${this.stamina} `
//     }
// }

/**Jab tum introduce() ko constructor ke bahar likhte ho, toh JS isko ek common memory space (jise Prototype kehte hain) mein rakh deti hai.
Chahe tum new Cricketer karke 10,000 players (Virat, Bumrah, etc.) bana lo, introduce wala function memory mein sirf ek baar banega. Sab players us ek common rulebook ko padhenge. Yeh perfectly optimized ha */

// const player1 = new Cricketer("virat", "batsman")
// const player2 = new Cricketer("Bumrah", "Bowler");

// console.log(player1.introduce === player2.introduce); //TRUE- MEANS THEY BOTH USE SAME COPY OR MEMROY ADDRESS
// console.log(player1);

// console.log(player1.hasOwnProperty("name")); //true



//* Gotchas
// console.log(typeof Cricketer);
/**JS Prototypal Inheritance use karti hai.

2015 (ES6) mein developers ke comfort ke liye class keyword add kiya gaya tha.
 Par engine ke andar (hood ke niche), JS is class ko abhi bhi ek Constructor Function mein hi convert karta hai. 
 JS ne bas purane function pe ek naya aur saaf "syntax ka makeup" laga diya hai, 
 jise hum Syntactic Sugar kehte hain. Isliye jab tum typeof Cricketer check karte ho,
  toh engine sach bol deta hai: "Main class nahi, function hi hoon!" */

class Debutant {
    constructor(name) {
        this.name = name
        this.walkOut = () => `${this.name} walks out to bat for the first time`
    }
}
/**Yahan sir dikha rahe hain ki kya NAHI karna hai. Tumne walkOut function ko constructor ke andar ek arrow function bana diya.
Kyunki yeh andar hai, jab bhi tum naya player banaoge (Debutant1, debutant2), JS engine walkOut function ki ek brand new copy banayega memory mein. */


const Debutant1 = new Debutant("shubham");
const Debutant2 = new Debutant("whirajji");

const somethingFromLastClass = Debutant1.walkOut; // Detached: 
/**Normal functions ko agar object se alag nikal lo, toh wo bhool jaate hain ki wo kis object ke hain (unka this undefined ho jata hai). 
 * Par arrow functions bohot ziddi hote hain. Wo apne this ko jor se pakad ke rakhte hain (lexical scope). 
 * Isliye detach hone ke baad bhi somethingFromLastClass ko yaad tha ki uska naam "shubham" hai.
 * Focus on the this Context: Interviewers zaroor poochenge ki function detach karne pe undefined error kyun aata hai.
 *  Tumhe pata hona chahiye ki arrow function memory zyada leta hai par this ka context nahi khota, 
 * jabki normal method memory bachata hai par detach hone pe this kho deta hai.
 */

// console.log(Debutant1.walkOut === Debutant2.walkOut) //false
// console.log(somethingFromLastClass()) // shubham walks out to bat for the first time



//----------------------------
// ! Symbol
// ---------------------------
/**
 * 
// just like adhar card


const aadhaar_of_shiv = Symbol("aadhaar");
const aadhaar_of_paji = Symbol("aadhaar");

console.log(typeof  aadhaar_of_paji); //symbol
console.log(aadhaar_of_paji === aadhaar_of_shiv); // false
console.log(aadhaar_of_paji.description); //  aadhaar
console.log(aadhaar_of_paji.toString); //  [Function: toString]
 
//question what is in console o/p and why?
const nonIndian = Symbol();
console.log(nonIndian.description); // undefined,
//description property wahi string return karti hai jo aapne Symbol("yahan") create karte waqt likhi thi.


const biometricHash = Symbol("biometrichash");
const bloodGroup = Symbol("bloodGroup");
const citizenRecord = {
    name: "ved pandey",
    age: 21,
    [biometricHash]: "asdlsldfj",
    [bloodGroup]: "O+"
}
console.log(Object.keys(citizenRecord));
console.log(Object.getOwnPropertySymbols(citizenRecord));



// const rtiQueryBook = {
//     queries : [ "infra budget", "ration card", "Education Budget", "Startup laws"],
// }
// for (const query of rtiQueryBook) {
//     console.log(`Filing RTI: $[query]`); //TypeError: rtiQueryBook is not iterable
// }

// how it become iterable 

const rtiQueryBookIterator = {
    queries: ["infra budget", "ration card", "Education Budget", "Startup laws"],
    
    [Symbol.iterator]() {
        let index = 0;
        // 'this' yahan rtiQueryBookIterator ko point kar raha hai
        const queries = this.queries; 

        return {
            // Arrow function use karne se 'this' ka lafda khatam ho jata hai, 
            // par yahan hum closure use kar rahe hain jo ki perfectly fine hai.
            next() {
                if (index < queries.length) {
                    return { value: queries[index++], done: false };
                }
                return { value: undefined, done: true };
            },
        };
    },
};

for (const query of rtiQueryBookIterator) {
    console.log(`Filing RTI: ${query}`);
}


 */


// suppose: jab koi ki gurantee nhi he chlne ki use kese chla sakte ho
//-----------------------------------------------------------------------------------------------------------------
//!  error handling'
//------------------------------------------------------------------------------------------------------------------

// function bootNavigation ( mapLoaded) {
//     try {
//    console.log(`is Navigation loaded: {mapLoaded}`)

//    if(!mapLoaded) {
//     throw new Error("Map was not passed in this function")
//     }
//     return "NAV_Ok"
//  } catch (error){
//     console.log(error)
//     console.log(`Navigation Failed: {error.message}`)

//    } finally {
//     console.log("Navigation sequence completed")
//    }
// }
// const status1 = bootNavigation(true); //is Navigation loaded: {mapLoaded}
//                                       / Navigation sequence completed
// console.log(`Result: ${status1}`);   // Result: NAV_Ok

//---------------------------------------------------------------------------------------------------------------------------------
//! PROMISE
//-----------------------------------------------------------------------------------------------------------------------------------------------
/**. Definition
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Iske hamesha 3 states hote hain:

Pending: Initial state, na success hua na fail.

Fulfilled: Operation successfully complete ho gaya.

Rejected: Operation fail ho gaya (e.g., server down, network error). */

//History;--->

// function prepareOrderCB(dish, cb) {
//     setTimeout(() => cb(null, { dish, status: "prepared" }), 100);
// }
// function pickeupOrderCB(order, cb) {
//     setTimeout(() => cb(null, { ...order, status: "prepared-up" }), 100);
// }
// function deliverrderCB(order, cb) {
//     setTimeout(() => cb(null, { ...order, status: "delivered" }), 100);
// }

// prepareOrderCB("Biryani", (err, order) => {
//     if (err) return console.log(err)
//     pickeupOrderCB(order, (err, order) => {
//         if (err) return console.log(err)
//         deliverrderCB(order, (err, order) => {
//             if (err) return console.log(err);
//             console.log(`${order.dish}: ${order.status}`);
//         });
//     });
// });


//!  now promise
// states: ->pending, fulfilled, rejected :

// function prepareOrder(dish) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!dish) {
//                 reject(new Error("No dish is there"))
//                 return
//             }
//             console.log(`${dish} is ready`)
//             resolve({ dish, status: "prepared" })
//         }, 100);
//     })
// }

//! EX 
// Step 1: Order Prepare ho raha hai
function prepareOrder(dishName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`👨‍🍳 Preparing ${dishName}...`);
            // Yahan hum pehla object bana rahe hain
            resolve({ dish: dishName, status: "prepared" });
        }, 1000); // Thoda time badha diya samajhne ke liye
    });
}

// Step 2: Delivery boy order pick kar raha hai
function pickupOrder(orderObject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`🛵 Picking up ${orderObject.dish}...`);
            // Purane object ka data rakha (...orderObject) aur status update kiya
            resolve({ ...orderObject, status: "picked-up" });
        }, 1000);
    });
}

// Step 3: Order deliver ho raha hai
function deliverOrder(orderObject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`✅ Delivering ${orderObject.dish}...`);
            resolve({ ...orderObject, status: "delivered" });
        }, 1000);
    });
}

// The Magic: Promise Chaining
prepareOrder("Paneer Tikka")
    .then((order) => {
        console.log("Current Status:", order); // { dish: 'Paneer Tikka', status: 'prepared' }
        return pickupOrder(order); // Yeh return karna bohot zaroori hai!
    })
    .then((order) => {
        console.log("Current Status:", order); // { ..., status: 'picked-up' }
        return deliverOrder(order);
    })
    .then((finalOrder) => {
        console.log("🎉 Final Status:", finalOrder); // { ..., status: 'delivered' }
    })
    .catch((error) => {
        console.log("❌ Gadbad ho gayi:", error);
    });