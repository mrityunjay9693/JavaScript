/**
 * Q4. Which one of the given option is correct:
       a)start 1 end
       b)start 1 end 2 
       c)start 1 2 end       
       d)start end 1 2
 * Answer: a) start 1 end 
 */
console.log("start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
})

promise1.then(result=>{
    console.log(2);
})

console.log("end");