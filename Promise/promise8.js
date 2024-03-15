/**
 * Q: Output of Question 3
 * Options: a)1 timerStart timerEnd 2 4 success
            b)1 timerStart timerEnd 2 success 4
            c)1 2 4 timerStart timerEnd success
            d)1 timerStart success timerEnd 2 4
 * Answer: c)1 2 4 timerStart timerEnd success
 */
const promise = new Promise((resole, reject)=>{
    console.log(1);
    setTimeout(()=>{
        console.log("timerStart");
        resole("success");
        console.log("timerEnd");
    }, 0);
    console.log(2);
});

promise.then((result)=>{
    console.log(result);
});

console.log(4);