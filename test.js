/**
 * The function `maskAadhaar` takes an Aadhaar number as input, masks the first 8 digits with 'X' and
 * displays the last 4 digits.
 * @param aadhaarNumber - The function `maskAadhaar` takes an `aadhaarNumber` parameter, which should
 * be a string representing a 12-digit Aadhaar number. If the `aadhaarNumber` is not a string, is an
 * empty string, or does not have a length of 12 characters, the
 * @returns The `maskAadhaar` function is returning a masked Aadhaar number where the first 8
 * characters are replaced with "X" and the last 4 characters remain unchanged.
 */









// // // console.log(typeof null ==="object");
// // console.log(typeof Array.isArray()) ;

// // import { getFirstAndLastChar } from "./CHC-2026/ASSIGNMENTS/js-datatypes-foundation-shivthehuman/src/01-chai-order";

// /**5. getFirstAndLastChar(order)
//  *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
//  *      - Pehle .trim() karo
//  *      - Return: { first, last }
//  *      - Agar order string nahi hai ya trim ke baad empty hai, return null
//  *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" } */
//  function getFirstAndLastChar(order){
//     if(typeof order !== 'string' ||order.trim() ==="") return null;
// //    let trimmed=order.trim();
// //    let first=order.trim().charAt(0);
// //    let last=order.trim().at(-1);
//      return { first: order.trim().charAt(0), last: order.trim().at(-1) };
// }
// console.log(getFirstAndLastChar("  masala   chai   "));




// const regularMenu = {
//     'meetha': 90,
//     "kathha": 20,
// }
// const specialsMenu = [{"metha": 39, "em": 33} ]

// const merging = { ...specialsMenu, ...regularMenu };


// console.log(merging);






 function maskAadhaar(aadhaarNumber) {
    if (typeof aadhaarNumber !== "string" || aadhaarNumber === "" || aadhaarNumber.length !== 12) return "INVALID";
    // const slicing = aadhaarNumber.slice(0, 4);
    // const slicingmiddle = aadhaarNumber.slice(4,8);
    // const x = "X";
    // const repeating = x.repeat(4);
    // const slicinglast = aadhaarNumber.slice(8,12);
    // console.log(`${repeating}-${repeating}-${slicinglast} `)


    const repeting = "X".repeat(8);
    const last = aadhaarNumber.slice(-4);
    console.log(repeting+last);






}
maskAadhaar("123456781234")



















