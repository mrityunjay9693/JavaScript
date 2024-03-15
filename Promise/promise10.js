/**
 * Q:Output of Question 5
 * Options: a)start promise1 end timer1 promise2 timer2
            b)start promise1 timer2 timer1 end promise2
            c)start promise1 timer2 timer1 promise2 end
            dstart end promise1 timer1 promise2 timer2
 * Answer: d)start end promise1 timer1 promise2 timer2
 */
console.log('start');

const promise1 = Promise.resolve().then(() => {

    console.log('promise1');

    const timer2 = setTimeout(() => {

        console.log('timer2')

    }, 0)

});

const timer1 = setTimeout(() => {

    console.log('timer1')

    const promise2 = Promise.resolve().then(() => {

        console.log('promise2')

    })

}, 0)



console.log('end');