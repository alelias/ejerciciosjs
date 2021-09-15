//crear un arreglo de igual o menor elementos que el arreglo inicial

const numeros = [1,2,3,4,5,6,7,8,9];

const mascotas = [
    {nombre: 'Pica', edad: 12, raza: 'perro'},
    {nombre: 'Leno', edad: 10, raza: 'gato'},
    {nombre: 'Sira', edad: 8, raza: 'perro'},
    {nombre: 'Rup', edad: 6, raza: 'gato'},
];

//const numerosFiltrados = numeros.filter(x => x < 5);
//console.log(numerosFiltrados, numeros)

const perros = mascotas.filter(x => x.raza == "perro");
const gatos = mascotas.filter(x => x.raza == "gato");
console.log(perros, gatos)
