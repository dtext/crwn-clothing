import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../card-item/card-item.component";

import './cart-dropdown.styles.scss'
import {connect} from "react-redux";

const CartDropdown = ({items}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        items.map(item => <CartItem id={item.id} item={item}/>)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  items: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
