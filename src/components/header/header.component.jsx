import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {
  HeaderContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer
} from "../../components/header/header.styles";

import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, cartHidden}) => (
  <HeaderContainer>
    <LogoContainer to='/' className='logo-container'>
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop' className='option'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop' className='option'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
          <OptionDiv onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
          :
          <OptionLink to='/signin' className='option'>
            SIGN IN
          </OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {cartHidden ? null : <CartDropdown/>}
  </HeaderContainer>
)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header)
