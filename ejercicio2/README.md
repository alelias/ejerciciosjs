# Manipulación del DOM

Este ejercicio busca evidenciar el manejo de llamadas asincronas y generación de un DOM dinámico utilizando Javascript. En este ejercicio se utiliza la librería `tailwindcss`.

Para esto, se solicita lo siguiente:

1. Hacer un llamado asíncrono a los productos de **fakestoreapi** (`https://fakestoreapi.com/products`), el cual retornará un JSON que contiene un array con el siguiente esquema:

```typescript
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
```

2. Una vez que la data haya sido entregada, debes generar un listado de productos dentro del DOM con la siguiente estructura HTML:

```html
<li class="bg-gray-200 rounded p-2 mb-2">
  <p class="text-xs text-gray-500">ID 1</p>
  <h3 class="font-bold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
  <p class="text-sm text-gray-600 mb-2">
    Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
  </p>
</li>
```

3. El componente debe tener colores distintos dependiendo si su ID es par o impar. `bg-green-200` si es **impar** y `bg-yellow-200` si es **par**.