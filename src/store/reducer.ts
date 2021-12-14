// le role du reducer est de creer un nouvel etat
// a partir de l'ancien etat (state)
// et d'une action (action)
const initialState = {
  cart: []
}

export const CART_ADD = 'CART_ADD'
// action : { type: 'CART_ADD', productId: 1 }
export const CART_EMPTY = 'CART_EMPTY'
// action : { type: 'CART_EMPTY' }

export default function reducer(state = initialState, action) {
  if (action.type === CART_ADD) {
    // Muter le state directement est interdit
    // state.cart.push(action.productId)
    // Renvoyer un nouvel etat
    if (!state.cart.includes(action.productId)) {
      return {
        cart: [...state.cart, action.productId]
      }
    }
    return state
  }
  if (action.type === CART_EMPTY) {
    return {
      cart: []
    }
  }
  return state
}