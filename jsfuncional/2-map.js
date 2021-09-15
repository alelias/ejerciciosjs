//permite transformar los elementos de arreglo, devuelve otro arreglo con la misma longitud, pero cambiados segun funcion

const suma = (ns) => {
    let acumulado = 0;
    for(i=0;i< ns.length;i++){
        acumulado += ns[i];
    }
    return acumulado
}
const numeros = [1,2,3,4,5,6,7,8,9];

const mascotas = [
    {nombre: 'Pica', edad: 12, tipo: 'perro'},
    {nombre: 'Leno', edad: 10, tipo: 'gato'},
    {nombre: 'Sira', edad: 8, tipo: 'perro'},
    {nombre: 'Rup', edad: 6, tipo: 'gato'},
];

//const multiplicados = numeros.map(x => x*2 )
//console.log(multiplicados);
//const parejas = numeros.map(x => [x,x])
//console.log(parejas)

const edades = mascotas.map(x => x.edad);
const resultado = suma(edades);
console.log(resultado/edades.length);