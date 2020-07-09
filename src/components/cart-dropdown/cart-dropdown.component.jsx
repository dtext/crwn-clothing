import React from "react";
import {connect} from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../card-item/card-item.component";
import { selectCartItems} from "../../redux/cart/card.selectors";

import './cart-dropdown.styles.scss'

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
  items: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown)
