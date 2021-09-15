//son un objeto que representan un valor que se va a resolver
require('isomorphic-fetch')

/*
const p1 = Promise.resolve(1)
console.log(p1)

p1
.then(x => x+5)
.then(x=> Promise.resolve(x+5))
.then(x=> Promise.reject('Error!'))
.then(x=> console.log("Esto no s eva a llamar"))
.catch(e=> console.log(e))
*/
/*
const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 900))
delayed(7)
.then(x => {
    console.log(x)
    return delayed(x + 7)
})
.then(x => console.log(x))
.then(x => Promise.reject('Error :('))
.catch(e => console.log(e))
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then(x => x.json())
.then(x => console.log(x))