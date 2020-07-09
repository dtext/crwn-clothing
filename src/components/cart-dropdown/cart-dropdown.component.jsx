import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../card-item/card-item.component";
import { selectCartItems } from "../../redux/cart/card.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss'

const CartDropdown = ({items, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        items.length < 1
          ? <span className='empty-message'>no items in cart</span>
          : items.map(item => <CartItem id={item.id} item={item}/>)
      }
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
      disabled={items.length < 1}
      title={items.length < 1 ? "add some items to your cart first": null}
    >
      Go to checkout
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
