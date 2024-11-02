/**
 * Q3. Which one of the given option is correct:
       a)start 1 2 3 end
       b)start 1 3 2 end 
       c)start 1 3 end 2
       d)start end 1 3 2
 * Answer: c) start 1 3 end 2 
 */
console.log("start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
})

promise1.then(result => {
    console.log(result);
})

console.log("end");