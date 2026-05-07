/* The above code is a detailed explanation and guide about arrays in JavaScript. It covers various
aspects of arrays such as basics, methods, creating arrays from different data types like strings,
sets, objects, numbers, and DOM NodeLists. It also explains common array methods like push, pop,
shift, unshift, slice, splice, indexOf, includes, forEach, map, filter, join, reverse, and sort.
Additionally, it provides examples and practical use cases for each method discussed. The code aims
to help developers understand and work effectively with arrays in JavaScript. */









/**
 * 
 * 
 * ARRAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY JS -----------------------------==============================
 * 
 JavaScript mein Array ek special variable hota hai jo ek hi waqt par ek se zyada values ko hold kar sakta hai. Jab aapke paas related data ki ek list ho (jaise students ke naam, ya test scores), toh alag-alag variables banane ke bajaye hum unhe ek hi Array mein store karte hain.
Kyunki aap C++ padh rahe hain, toh ek baat yaad rakhiye: JavaScript ke arrays C++ ke standard arrays jaise nahi hote. C++ arrays ka size fixed hota hai aur unmein ek hi type ka data aata hai. JavaScript ke arrays C++ ke std::vector ki tarah hote hain — yeh dynamically apna size bada/chhota kar sakte hain aur ek hi array mein Number, String, Object sab kuch ek sath rakh sakte hain.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. Array Basics & Core Facts

- Zero-Indexed: Array ki pehli value hamesha index 0 par hoti hai.
- Mutable: Strings ke opposite, arrays mutable hote hain. Aap direct arr[0] = "New" likh kar data change kar sakte ho.
- Dynamic Size:Pura array bhar jaane par yeh error nahi deta, auto-expand ho jata hai.
- Property: Array ka size nikalne ke liye .length property ka use hota hai (method nahi, isliye () nahi lagta).


Kaise banate hain:
// 1. Literal Method (Sabse common)
let fruits = ["Apple", "Banana", "Mango"];

// 2. Mixed Data Type Array
let mixed = [10, "Shivraj", true, null];

// 3. Array ke andar Array (2D Array / Matrix)
let matrix = [[1, 2], [3, 4]];

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Complete Array Methods Guide
JavaScript mein array ke methods ko hum unke kaam ke hisaab se categories mein divide karte hain.

A. Add / Remove Methods (Basic Mutation)
Yeh methods original array ko change (mutate) karte hain.

Method,                                                             Kaam (Purpose),                             Example,                                    Return Kya Karta Hai?
push(val),                                          Array ke end mein data add karta hai.,                      "arr.push(""Kiwi"")",                           Nayi Length
pop(),                                              Array ke end se data remove karta hai.,                     arr.pop(),                                  Jo value hatai gayi
unshift(val),                                       Array ke start mein data add karta hai.,                    "arr.unshift(""Grapes"")",                     Nayi Length
shift(),                                            Array ke start se data remove karta hai.,                    arr.shift(),                               Jo value hatai gayi 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
B. Slicing & Splicing (Kaatna aur Jodna)

Yeh concepts DSA ke liye bahut important hain. In dono ka difference hamesha interview mein pucha jata hai.

slice(start, end) (DOES NOT MUTATE): Array ka ek hissa kaat kar ek naya array deta hai. Original array safe rehta hai. end index include nahi hota.


Example:
let arr = [10, 20, 30, 40, 50];
let piece = arr.slice(1, 4);
// Output: [20, 30, 40]

splice(start, deleteCount, newItems...) 
(MUTATES): Yeh original array ke pet ko phaad kar usme se items nikalta hai, aur naye items daal bhi sakta hai.


Example:
let arr = ["A", "B", "C", "D"];
arr.splice(1, 2, "X", "Y");
// Output: ["A", "X", "Y", "D"]

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

C. Searching Methods
Array mein koi specific data find karne ke liye.

Method,                                                         Kaam (Purpose),                                                             Return Value
indexOf(val),                                       Us value ka index batata hai. Agar na mile toh -1 deta hai.,                              Number
includes(val),                                      Bas check karta hai ki value exist karti hai ya nahi.,                                 Boolean (true/false)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
D. Higher-Order Methods (The Web Dev Essentials)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Aap Node.js aur React mein inhi methods ka sabse zyada use karenge.
Yeh loops ki tarah kaam karte hain aur ek function ko as argument lete hain.


forEach(): Array ke har element par ek function chalata hai. Kuch return nahi karta.
Example:
let arr = [1, 2, 3];
arr.forEach(num => console.log(num * 2));

map()
map(): Array ke har element ko modify karke ek naya array banata hai. (Most used!)
- Har element ko modify karke new array banata hai
Example:
let arr = [1, 2, 3];
let doubled = arr.map(num => num * 2);
// Output: [2, 4, 6]

filter()
filter(): Condition ke base par elements ko chaanta (filter) hai. True hone par naye array mein daalta hai.
- Condition ke base par values select karta hai
Example:
let ages = [12, 18, 25, 8];
let adults = ages.filter(age => age >= 18);
// Output: [18, 25]

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
E. Other Methods
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Method,                                                         Kaam (Purpose),                                                         Note
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
join(separator),                     |                   Pura array ko string bana deta hai.,           |                     "[""a"",""b""].join(""-"") → ""a-b"""
reverse(),                           |                  Elements ka order palat deta hai.,              |           Mutates original array.
sort(),                              |                   Alphabetically sort karta hai.,                |             "Numbers ke liye compare function lagta hai sort((a,b) => a-b)."
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Question:

Agar array hai: [5, 10, 15]
Start mein 1 add karna hai aur end se 15 remove karna hai

Answer:
unshift() and pop()

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Revision Notes

- Arrays dynamic aur mutable hote hain

- .length important property hai
- push, pop, shift, unshift basic methods hain
- slice aur splice interview ke liye important hain
- map aur filter real projects mein sabse zyada use hote hain
- Array check karne ke liye: Array.isArray()
 */



/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊
😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊
😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



Namaste! Ye ek bahut hi practical aur important sawal hai. 

Real-world JavaScript development mein humein lagatar alag-alag data types ko Array mein convert karna padta hai

taaki hum un par map(), filter(), ya forEach() jaise powerful array methods laga sakein.

Chaliye har data type se Array banane ke sabse best tarike (methods) aur unke examples dekhte hain:

1. String se Array Banana
Kab zaroorat padti hai? Jab aapko kisi sentence ko words mein todna ho, ya kisi word ke har letter ko alag-alag karna ho.

Tarika A: split() (Sabse common)
Ye kisi specific character (jaise space ya comma) ke base par string ko todta hai.

const name = "Rahul";
console.log(name.split("")); // Output: ['R', 'a', 'h', 'u', 'l']
const sentence = "I love JavaScript";
console.log(sentence.split(" ")); // Output: ['I', 'love', 'JavaScript']

Tarika B: Spread Operator ... (Modern & Safe)
Ye har character ko alag array element bana deta hai. (Ye Emojis ke sath bhi perfectly kaam karta hai!)

const word = "Hi 😀";
console.log([...word]); // Output: ['H', 'i', ' ', '😀']
const name = "Shiv$2";
console.log(Array.from(name)); // in the array form

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2. Set se Array Banana
Kab zaroorat padti hai? Set ka use hum duplicate values hatane ke liye karte hain. 
Jab duplicates hat jayein, toh hum usko wapas Array mein convert kar lete hain.

Tarika: Spread ... ya Array.from()

JavaScript
const numbersWithDuplicates = [1, 2, 2, 3, 3, 4];

// Step 1: Array ko Set mein daalo (duplicates automatically hat jayenge)
const uniqueSet = new Set(numbersWithDuplicates); // Set { 1, 2, 3, 4 }

// Step 2: Set ko wapas Array bana lo
const uniqueArray1 = [...uniqueSet]; 
console.log(uniqueArray1); // Output: [1, 2, 3, 4]

// Ya phir Array.from() use karein
const uniqueArray2 = Array.from(uniqueSet);
console.log(uniqueArray2); // Output: [1, 2, 3, 4]


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3. Object se Array Banana
Kab zaroorat padti hai? Objects direct Array mein convert nahi ho sakte kyunki unme data "Key-Value" pair mein hota hai. Humein batana padta hai ki humein keys chahiye, values chahiye, ya dono.

Tarika: Object.keys(), Object.values(), ya Object.entries()

JavaScript
const user = { name: "Rahul", age: 25, role: "Developer" };

// Sirf Keys (labels) ka array chahiye:
console.log(Object.keys(user));  // Output: ['name', 'age', 'role']

// Sirf Values (data) ka array chahiye:
console.log(Object.values(user)); // Output: ['Rahul', 25, 'Developer']

// Dono ka array chahiye (Array inside Array):
console.log(Object.entries(user)); // Output: [ ['name', 'Rahul'], ['age', 25], ['role', 'Developer'] ]


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4. Numbers se Array Banana
Kab zaroorat padti hai? Jab aapko numbers ki ek list banani ho.

Tarika: Array Literal [] ya Array.of()

JavaScript
// Sabse simple aur best tarika (Array Literal)
const scores = [10, 20, 30]; 

// Ya phir Array.of() (Agar dynamically single number pass karna ho bina empty slots banaye)
const singleNumberArray = Array.of(5); 
console.log(singleNumberArray); // Output: [5]


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
5. "Other" Type: DOM NodeList se Array Banana
Kab zaroorat padti hai? Jab aap HTML elements ko select karte hain (jaise document.querySelectorAll()), toh browser ek NodeList return karta hai. Wo array jaisa dikhta hai par asli array nahi hota. Usme map() ya filter() kaam nahi karte.

Tarika: Array.from()

JavaScript
// Maan lijiye page par bahut saare <div> hain
const divsNodeList = document.querySelectorAll('div'); 

// Isko asli array banayein taaki array methods use kar sakein
const divsArray = Array.from(divsNodeList);
// Ab aap array methods laga sakte hain
// divsArray.map(div => ...)


-----------------------------------------------------------------
Array.from(target, mapFunction)
-----------------------------------------------------------------
What it does: Converts an iterable/array-like object into an Array AND maps (modifies) 
each element in a single pass.

Arguments: 
1. target: The source data (e.g., a Set, String, or NodeList).
2. mapFunction: A callback function applied to each element before it is added to the new array.

Performance Benefit: * [...set].map(fn) creates two arrays in memory (one intermediate, one final).

Array.from(set, fn) creates only one array. 
It maps the values during the conversion process, saving memory and CPU cycles.
Syntax Example: Array.from(new Set([1, 2]), x => x * 10) results in [10, 20]
 */
