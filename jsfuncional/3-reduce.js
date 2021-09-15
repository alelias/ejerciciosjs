/*
permite ejecutar funciones reduce, recibe 2 argumentos
el primer es el valor que esta siendo acumulado
elemento que se esta iterando del arreglo
*/

//funcion reducer

//const reducer = (acumulador, valorActual) => nuevoAcumulador;

//ejemplo arreglo vacio
//const reducido = [1,2,3].reduce((acc,el) => acc + el, 0)
//console.log(reducido)
const numeros = [1,2,3,4,5];

const resultado = numeros.reduce((acc, el) => acc + el, 0)
console.log(resultado)

const mascotas = [
    {nombre: 'Pica', edad: 12, tipo: 'perro'},
    {nombre: 'Leno', edad: 10, tipo: 'gato'},
    {nombre: 'Sira', edad: 8, tipo: 'perro'},
    {nombre: 'Rup', edad: 6, tipo: 'gato'},
];
//indexar por el nombre
const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el
}) ,{})

console.log(indexed['Pica'])

const anidados = [1, [2,3], 4, [5]];
//dejarlo como [1,2,3,4,5]

const plano = anidados.reduce((acc,el) => acc.concat(el),[])
console.log(plano)
