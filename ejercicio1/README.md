# Manejo de data con Javascript

Los siguientes ejercicios buscan medir tu conocimiento en el manejo de datos con javascript. Para esto, se entrega una pequeña base de datos en formato JSON (`products.json`) con el siguiente esquema en su interior:

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

Con estos datos, se solicita realizar las siguientes funciones de procesamiento de datos:

1. Obtener el precio (`price`) promedio de todos los productos
2. Obtener el producto más puntuado (Mayor de `rating.count`)
3. Obtener todos los productos de una categoría
4. Obtener un producto específico por el `id`
5. Buscar todos los productos que contengan una palabra específica en `title`, `category` or `description`
6. Buscar todos los productos con `rating.rate` menor a 3
7. Obtener el `rating.rate` promedio de cada categoría de productos