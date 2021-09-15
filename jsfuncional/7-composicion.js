//construir funciones mas grandes en base a funciones mas pequeñas
//refactoring
const _ = require('lodash')
//resive funciones y la ancadena
const compose = (...fns) => x => fns.reduceRight((y,f) => f(y),x)


const users = [
    {
        id:1,
        nombre: 'alex',
        apellido: 'elias'
    }
]

const head = x => x[0]
const capitalizaNombreYApellido = x => ({
    nombre: _.upperFirst(x.nombre),
    apellido: _.upperFirst(x.apellido)
})
const generaNombre = x => `${x.nombre} ${x.apellido}`
const getNombreCompleto = 
compose(generaNombre, capitalizaNombreYApellido, head)

const x = getNombreCompleto(users)
console.log(x)