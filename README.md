# Demo React Redux - Panier d'achat

Fake API : <https://my-json-server.typicode.com/bhubr/products-api/products>


## Structure du panier

Plus simple 
```json
[
  1, 3
]
```

Plus complexe 

```json
[
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 3,
    "quantity": 2
  }
]
```

## Exemple de structure de l'etat

```json
{
  "user": null,
  "products": [],
  "cart": []
}
```

```json
{
  "user": null,
  "products": [],
  "cart": [1]
}
```

```javascript
state.cart.push(1);
```