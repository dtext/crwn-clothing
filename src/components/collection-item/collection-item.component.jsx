import React from "react"
import {connect} from "react-redux"

import { AddButton } from "./collection-item.styles";
import {addItem} from "../../redux/cart/cart.actions";

import './collection-item.styles.scss'

const CollectionItem = ({item, addItem}) => {
  const { name, price, imageUrl } = item
  return (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}€</span>
    </div>
    <AddButton inverted onClick={() => addItem(item)}> ADD TO CART </AddButton>
  </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
