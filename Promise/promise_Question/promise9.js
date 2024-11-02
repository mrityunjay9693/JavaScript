/**
 * Q: Output of Question 4
 * Options: a)timer1 promise1 timer2
            b)timer1 timer2 promise1
            c)promise1 timer1 timer2
            d)promise1 timer2 timer1
 * Answer: a)timer1 promise1 timer2
 */
const timer1 = setTimeout(() => {
    console.log("timer1");

    const promise1 = Promise.resolve().then(() => {
        console.log("promise1");
    })
}, 0);

const timer2 = setTimeout(() => {
    console.log("timer2");
},0);
