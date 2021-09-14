const products = require('./products.json')

/*
Obtener el precio (price) promedio de todos los productos
Obtener el producto más puntuado (Mayor de rating.count)

Obtener todos los productos de una categoría
Obtener un producto específico por el id

Buscar todos los productos que contengan una palabra específica en title, category or description

Buscar todos los productos con rating.rate menor a 3
Obtener el rating.rate promedio de cada categoría de productos
*/

//Obtiene promedio de precios
function promedio(){
    let suma = 0;
    products.map(valor =>{
        suma +=valor.price;
    })
    prom = suma/products.length;
    return prom.toFixed(3);
}

console.log('Ejercicio 1.- El valor promedio es: ' + promedio());

//obtiene el producto mas puntuado
function masPuntuado(){

    const res = Math.max(...products.map(function(e){return e.rating.count}))

     products.map(valor =>{
         if(valor.rating.count === res){
             console.log("Ejercicio 2.- El Producto mas Puntuado es: " +valor.title)
         }
     })
     
     
}

masPuntuado()
//console.log('Ejercicio 2.- El mas puntuado del Ranking es: ' + masPuntuado())

//todos los productos de una categoria
function proCategoria(categoria){
     let arreglo = [];
    products.map(valor => {
        if(valor.category = categoria){
            arreglo.push(valor.title);
        }
    })
    console.log(`Ejercicio 3.- Los productos de la categoria ${categoria} son: ` + arreglo);
}
proCategoria('electronics')

//function porCategoria(){
    //let arreglo = [];
   // products.map(valor => {
       // if(valor.category = categoria){
      //      arreglo.push(valor.title);
     //   }
    //})
    //return arreglo;
  //  console.log('hola');
//}

//console.log('3.- Los producto de la categoria electronics son: \n')
//porCategoria('jewelery')
//porCategoria()

//Obtener un producto específico por el id

 function porId(id){
    products.map(valor =>{
        if(valor.id === id)
        console.log(`Ejercicio 4.- El Producto con id ${id} es : ` + valor.title)
    })
 }
    
    
porId(2)

//Buscar todos los productos que contengan una palabra específica en title, category or description

function porPalabra(palabra){
 
    let arreglo =[];
    products.map(valor =>{
            if(valor.title.includes(palabra)==true || valor.category.includes(palabra)==true || valor.description.includes(palabra)==true ){
               arreglo.push(valor.title);
            }
    })
    console.log(`Ejercicio 5.- los productos con la palabra ${palabra} son: ` +arreglo)
}

porPalabra('electronics')
//Buscar todos los productos con rating.rate menor a 3
function porRate(){
    
    let arreglo = [];
    products.map(valor => {
        if(valor.rating.rate < 3){
            arreglo.push(valor.title)
        }
    })
    console.log(`Ejercicio 6.- los productos con rate menor a 3 son: `+arreglo)
}

porRate()

//Obtener el rating.rate promedio de cada categoría de productos

function porCategoria(categoria){

    let suma = 0;
    let prom = 0;
    let largo =0;
    let arreglo = [];
        products.map(valor=>{

            //console.log(valor.category + ' ' + valor.rating.rate)


            if(valor.category == categoria){
                suma += valor.rating.rate;
                arreglo.push(valor.rating.rate);
                largo = arreglo.length;
                prom = suma/largo;
            }
        })
        //console.log(suma)
        //console.log(largo)
        console.log(`Ejercicio 7.- El promedio de la categoria ${categoria} es: ` +prom.toFixed(3))
        
}


porCategoria("women's clothing")