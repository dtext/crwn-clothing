import React from "react"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.styles.scss'

class SignUp extends React.Component {

  initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor(props) {
    super(props);

    this.state = this.initialState
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      this.setState(this.initialState)
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = event => {
    const {value, name} = event.target
    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state
    return (
      <div className='sign-up'>
        <h2>I don't have an account yet</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            label="Display Name"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            label="E-Mail"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type="submit"> Sign up </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
