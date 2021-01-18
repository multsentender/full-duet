export const ADDPIZZACART = 'ADD_PIZZA_CART'
export const CLEARCART = 'CLEAR_CART'
export const REMOVECARTITEM = 'REMOVE_CART_ITEM'
export const PLUSCARTITEM = 'PLUS_CART_ITEM'
export const MINUSCARTITEM = 'MINUS_CART_ITEM'


export const addToCart = (pizzaObj) => ({
  type: ADDPIZZACART,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: CLEARCART,
});

export const removeCartItem = (id) => ({
  type: REMOVECARTITEM,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: PLUSCARTITEM,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: MINUSCARTITEM,
  payload: id,
});