//imperativa: indicamos lo que tiene que hacer, indicamos el control de flujo
//declarativa: indica la logica, pero no indica el control de flujo

//imperativa
const arr = [2, 4, 6]
let acc = 0
for (let i = 0; i < arr.length; i++){
  acc += arr[i]
}
console.log(`El sumatorio resulta en ${acc}`)  
// El sumatorio resulta en 12

//declarativa

const arra = [2, 4, 6]
const arraySuma = arra.reduce((acc,el) => acc + el, 0)
console.log(`El sumatorio resulta en ${arraySuma}`)  
// El sumatorio resulta en 12