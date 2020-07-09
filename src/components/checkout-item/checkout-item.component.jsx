import React from "react";

import "./checkout-item.styles.scss"

import {connect} from "react-redux"

import {clearItemFromCart} from "../../redux/cart/cart.actions";

const CheckoutItem = ({item, dispatch}) => {
  const {imageUrl, name, price, quantity} = item
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl}/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}€</span>
      <div className='remove-button' onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</div>
    </div>
  )
}

export default connect(null)(CheckoutItem)
