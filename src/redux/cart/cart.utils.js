export const addItemToCart = (cartItems, item) => {
  const existing = cartItems
    .find(cartItem => cartItem.id === item.id)

  if (existing) {
    return cartItems
      .map(cartItem => (
        cartItem.id === item.id
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
      ))
  }

  return [...cartItems, {...item, quantity: 1}]
}

export const removeItemFromCart = (cartItems, item) => {
  const existing = cartItems
    .find(cartItem => cartItem.id === item.id)


  if (existing && existing.quantity === 1) {
    // item found and only one of that type in cart:
    // remove from cart
    return cartItems.filter(cartItem => cartItem.id !== item.id)
  } else if (existing) {
    // item found and more of that type in cart:
    // decrease quantity
    return cartItems
      .map(cartItem => (
        cartItem.id === item.id
          ? {...cartItem, quantity: cartItem.quantity - 1}
          : cartItem
      ))
  } else {
    // item not found: do nothing
    return cartItems
  }
}
