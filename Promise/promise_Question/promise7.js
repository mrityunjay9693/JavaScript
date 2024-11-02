/**
 * Q: Output of Question 2
 * Options: a)start setTimeout end resolve
            b)start setTimeout resolve end
            c)start end setTimeout resolve
            d)start end resolve setTimeout
 * Answer: d)start end resolve setTimeout
 */
console.log("start");

setTimeout(()=>{
    console.log("setTimeout");
})

Promise.resolve().then(()=>{
    console.log("resolve");
})

console.log("end");