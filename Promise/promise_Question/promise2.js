/**
 * Q2. Which one of the given option is correct:
       a)start 1 end
       b)start 1 2 end 
       c)start 1 end 2
       d)1 start end 1 2
 * Answer: c) start 1 end 2 
 */
console.log("start");
const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2)
})
promise1.then(result => {
    console.log(result);
})
console.log("end")
