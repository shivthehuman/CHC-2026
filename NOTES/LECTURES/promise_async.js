/**
 * The above code snippets demonstrate the usage of Promises in JavaScript for handling asynchronous
 * operations and error handling.
 * @returns The code snippet provided is demonstrating the concept of Promises in JavaScript. It
 * includes examples of creating promises, resolving promises with values, handling asynchronous
 * operations using promises, error handling with promises, and using async/await with promises.
 */



//promise

//eraxer ex of - CHEF
// js is single threaded


// call EVENT LOOP ||  CALLSTACK     ||  QUEUE

//even loop ka ek hi kam he call stak me kya jayega
// call stack jo bhi isme bna do, exicute/ run
// queue execute kar ke return karta hai

// PROMISE THREE STATE:
//PENDING , done(fulfil,resolve),  nope (not, reject, nako)

//* ex: 1
// const promise = new Promise();
// console.log(promise); // TypeError: Promise resolver undefined is not a function

//* ex: 2
//promise kar diya pr res me kya dena he vo set nhi or state isliye pending hi ki kya karu ab btao
// const promisewithresolver = new Promise((res, rej) => {});
// console.log(promisewithresolver); //Promise { <pending> }

//* ex: 3
//jab promise pura ho jaye tab res me chaicode bhejna
// const promise = new Promise ((res, rej) => {
//     res ("chaicode");
// });
// console.log(promise);//Promise { 'chaicode' }


//* ex: 4
// /we know promise take time to send response so we add setTimeout
// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("2 sec bad, yha likho kya karwana he");
//     },2000);
// });
// console.log(promise);//Promise { <pending> } because console.log line run then 2 sec bad setimeout run when it  run the promise is pending no
// / setTimeout 2 sec bad run hoga, isliye hamne ise call kar kar diya ek or setimeout 3 sec bad

// setTimeout(() => {
//     console.log(promise);  //Promise { '2 sec bad, yha likho kya karwana he' }
// },3000);

// now we have question,
//now suppose: we do web req, so
//how we know database se value kitni der me aayegi.

//* ex; 5
// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("2 sec bad, yha likho kya karwana he");
//     },2000);
// });
// console.log(promise); //Promise { <pending> }

// /.then for resolve
// promise.then((value) => { // we have callback/ func in .then so
//                           / jo bhi value res.  like-"2 sec..." deta he vo hum us call back me insert kar dete hai
//
//           console.log(value);//2 sec bad, yha likho kya karwana he
// });

// promise.then((data) => {
//here we write call back
//     console.log(data);
// });


//* interview question
// promise.then(console.log); // it works --> 2 sec bad, yha likho kya karwana he
// promise.then((data) => console.log(data));// same line above console.log wali

//now reject- for error throwing , not for value pass just like res,
//* ex : 6
// const promise = new Promise ((res, rej) => {
//     setTimeout(() => {
//         res("chaicode");
//         rej(new Error("chaicode")); // commet res("chiacode"), and below all code to see erro; chaicode;
//     }, 2000);

// })
// console.log(promise); //Promise { <pending> }

// so how to handle error

// promise.then((data) => console.log(data),
//             (error) => console.log(error),    //yha se hadle kar sakte ho -- , lga ke
//  );

// promise.then((data) => console.log(data))
//        .catch((error) => console.log(error)); // comment res("chaicode"),    to see error 'chaicode'

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("this is resolve");
//         rej(new Error("this is Error"))
//     }, 2000);
// })

// promise.then((data) => console.log(data)) // .then able to pass value
// .catch((error) => console.log(error));   // .catch pass erro wali value;

//another form of .then
// promise
// .then((data) => console.log(data))// value aage .then me pass kari gayi
// .then(console.log) //
// .catch((error) => console.log(error));// undefined because error aaya hi nhi or hum print kar wa re he

//another form of .then
// promise
//     .then((data) => {
//         newData = data.toUpperCase()
//         return newData
//     })
//     .then((data) => {
//         return data + " __convert in uppercase";
//     })
//     .then(console.log)
//     .catch((error) => console.log(error));



//     ----------------------//! FETCH - fetch() ------------------------
//     |              //return a referance , samjh lo(promise)            |
//   1 |                            3 |                               2   |
//     |                              |                                   |
//     |                              |                                   |
//     |                              |                                   |
// referance he                       |                                   |
//  const data = fetch();             |                            // object = {
//                                    |                            // state = pending | res | rej
//                                    |                            // thenArray [func,func,fucn]
//                                    |                            //catchArray[func]
//                                    |                            //}
//                                    |                                  |
//                            OS -> network call                         |
//                                    |                                  |
//                                    |                                  |
 //                           os gya kiske pass            data yha update hoga
 //                              chaicode.com----------------------------|


//* ex

// const turant = Promise.resolve("turant");
// console.log(turant);

//* ex
// const allPromise = Promise.any([ //try yourself .allsetlted and .all but comment .reject to see output
//     Promise.resolve("chai"),
//     Promise.resolve("Code"),
//     Promise.reject("Error"),
// ]);
// allPromise.then(console.log) //O/P - chai , because we say .any promise is fullfilled print

//*example
// const hPromise = new Promise ((res, rej) => {
//     setTimeout(() => {
//         res("masterji")
//     }, 3000);
// });

// function nice() {
//     const result = hPromise;
//     console.log(result); //Promise {<pending>}
// }
// nice();

//but hame shi me result me value bhejni hot to hum kya kare

//*example
// const hPromise = new Promise ((res, rej) => {
//     setTimeout(() => {
//         res("masterji")
//     }, 3000);
// });

// async function nice() {
//     const result = await hPromise; // use await keyword for ruko jra, jab value aaye tum print karna, but function should be asynchrounous, async use
//     console.log(result); //Promise {<pending>}
// }
// nice();

//*example 
// const hPromise = new Promise ((res, rej) => {
//     setTimeout(() => {
//         / res("masterji");
//         rej(new Error("MASTERJI"));
//     }, 3000);
// })
//  /form above example await not handle error so we do this see try and catch
// async function nice() {
//     try {
//         const result = await hPromise;
//         console.log(result);
//     }catch (error) {
//         console.log("ERROR aa gya ji", error.message);//it print because we comment res("masterji");
//     }   
// }
// nice();

//* Example

// function boiWater(time) {
//     return new Promise((res, rej) => {
//         console.log("karte he ji boil")
//         if(typeof time !== "number" || time<0){
//             rej (new Error ("time must be in number and greater than zero"))
//         }
//         setTimeout(() => {
//             res("Ubal gay he ji water")
//         },time);
//     })
// }

// boiWater(200)
// .then((msg) => console.log("Resolved :", msg))
// .catch((err) => console.log("Rejected:", err.message));
 

//* Example 

function grindLeaves () {
    return Promise.resolve("Leaves grounded")
}

function steepTea(time) {
    return new Promise((res) => {
        setTimeout(() => res("Steeped Tea"),time);
        });
}
function addSugar(spoons){
    return `Added ${sugar}`;
}




