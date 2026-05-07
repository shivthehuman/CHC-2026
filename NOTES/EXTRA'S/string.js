/* The text you provided is a detailed explanation of strings in JavaScript, including their core
concepts, creation methods, modern string methods guide, and a detailed example showcasing various
string manipulation techniques. */




/**
 
1. What is a String in JavaScript? (Core Concept)
JavaScript mein String ek primitive data type hai jo text (characters ki sequence) ko store aur manipulate karne ke kaam aata hai.
Key Technical Facts (Jo yaad rakhne hain):
Zero-Indexed: Array ki tarah, strings ka pehla character 0 index par hota hai.
Immutable: JS mein strings change nahi ho sakti (read-only hoti hain). Agar aap string modify karte ho, toh JS memory mein ek nayi string create karta hai. Yeh C++ std::string se alag hai jo mutable hoti hai.
UTF-16: Har character 16-bit sequence mein store hota hai.

Creation (Strings kaise banate hain)
Aap strings ko 3 tareeqon se likh sakte ho:
example :
let single = 'Shivraj';      // Single quotes
let double = "Rajput";       // Double quotes
let template = `Hi ${single}`; // Backticks (Template Literals - best for variables)


2. Complete Modern String Methods Guide
Kyunki strings immutable hain, saare methods ek nayi string ya nayi value return karte hain. Original string waise ki waise hi rehti hai.

A. Finding & Searching (Dhoondhne wale methods)
Yeh methods check karte hain ki koi specific word ya character string mein hai ya nahi.

Method,                           Kaam (Purpose),                                                  Example,                                       Return Type

indexOf(),                Pehli baar wo character kahan aaya uska index deta hai.,         """hello"".indexOf(""l"") → 2",                          Number
lastIndexOf(),            Aakhri baar wo character kahan aaya uska index deta hai.,        """hello"".lastIndexOf(""l"") → 3",                      Number
includes(),               Check karta hai word hai ya nahi (True/False).,                  """shiv"".includes(""h"") → true",                       Boolean
startsWith(),             Kya string is word se shuru hoti hai?,                           """hello"".startsWith(""he"") →true",                    Boolean
endsWith(),               Kya string is word par khatam hoti hai?,                         """hello"".endsWith(""lo"") → true",                     Boolean

B. Extracting Substrings (Hissa nikalne wale methods)
String ke ek part ko kaat kar nikalna.

Method,                                 Kaam (Purpose),                                                             Example,                                                  Notes

"slice(start, end)",            start se lekar end-1 tak kaat'ta hai. Negative index support karta hai.,        """shivraj"".slice(0, 4) → ""shiv""",                             Piche se kaatne ke liye -1 use karein.
"substring(start, end)",            "slice jaisa hi hai, but negative values ko 0 maan leta hai.",              """shivraj"".substring(0, 4) → ""shiv""",                        Mostly slice hi use hota hai real dev mein.
split(separator),                   String ko tod kar Array bana deta hai.,                                     """a,b,c"".split("","") → [""a"", ""b"", ""c""]",               Bohat important DSA aur Web Dev ke liye!


C. Modifying & Formatting (Change/Format karne wale methods)
Original string change nahi hoti, nayi formatted string milti hai.

    Method,                                         Kaam (Purpose,                                                                                Example
toUpperCase(),                          Sab capital letters kar deta hai.,                                  """hi"".toUpperCase() → ""HI"""
toLowerCase(),                          Sab small letters kar deta hai.,                                    """HI"".toLowerCase() → ""hi"""
trim(),                                     Aage aur piche ke extra spaces hata deta hai.,                          """  hi  "".trim() → ""hi"""
"replace(old, new)",                        Pehle match ko naye word se badal deta hai.,                        """hi bro"".replace(""bro"", ""sir"") → ""hi sir"""
"replaceAll(old, new)",                    Saare matches ko badal deta hai.,                                        """a-b-a"".replaceAll(""a"", ""z"") → ""z-b-z"""
repeat(count),                          String ko repeat karke naya string banata hai.,                                 """ha"".repeat(3) → ""hahaha"""

D. Character Access (Ek single character nikalna)

Method,                                     Kaam (Purpose),                                                                                        Example
charAt(index),                                      Us index par kaunsa letter hai?,                                                """shiv"".charAt(1) → ""h"""
charCodeAt(index),                                      Us letter ka ASCII/UTF-16 code (number) deta hai.,                                   """A"".charCodeAt(0) → 65"
at(index),                                          Naya method hai. Negative index support karta hai.,                                 """shiv"".at(-1) → ""v"" (Last char)"

3. Detailed Example (Putting it together)
Maan lo aap form validation kar rahe ho (Delta course ya apne Node.js project mein) aur user ne apna naam ajeeb format mein daala hai:

let rawInput = "   sHiVrAj rAjPuT   ";

// 1. Aage piche ke spaces hatao
let trimmed = rawInput.trim(); 
// Output: "sHiVrAj rAjPuT"

// 2. Sabko chhota (lowercase) kar do
let lower = trimmed.toLowerCase(); 
// Output: "shivraj rajput"

// 3. String ko space se tod kar array banao
let words = lower.split(" "); 
// Output: ["shivraj", "rajput"]

console.log(words);  

 */

// let str = "payal";
// / const result = str.split("");
// console.log(str.split(""));
