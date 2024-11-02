/**
 * Q5. Which one of the given option is correct:
       a)start 1 middle end success
       b)start 1 middle success end 
       c)start middle end 1 success 
       d)start middle 1 end success 
 * Answer: d)start middle 1 end success
 */
console.log("start");
const fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
}))

console.log("middle");

fn().then(result => {
    console.log(result);
})

console.log("end");
