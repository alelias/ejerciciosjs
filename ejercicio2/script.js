const PRODUCTS_NODE = document.getElementById('products')

async function listarProductos(){

    const response = await fetch("https://fakestoreapi.com/products");
    const productos = await response.json();


    PRODUCTS_NODE.innerHTML += productos.map(valor => 
        `
        <li class="${(valor.id%2 !== 0) ? "bg-green-200":"bg-yellow-200"} rounded p-2 mb-2">
            <p class="text-xs text-gray-500">${valor.id}</p>
            <h3 class="font-bold">${valor.title}</h3>
            <p class="text-sm text-gray-600 mb-2">
              ${valor.description}
            </p>
          </li>
            `
);
}

listarProductos();