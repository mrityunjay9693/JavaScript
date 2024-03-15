/**
 * Q.1 Output of Question 1
 * Options: a)start 1 2 end
            b)start end
            c)start 2 1 end
            d)start end 1 2
 * Answer: d)start end 1 2 
 */
console.log("start");

Promise.resolve(1).then((res)=>{
    console.log(res);
})

Promise.resolve(2).then((res)=>{
    console.log(res);
})

console.log("end");	