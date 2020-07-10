import styled, {css} from "styled-components";

const baseButtonStyles = css`
  background-color: black;
  color: white;
  border: none;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  
  &:hover {
    border: none;
    background-color: black;
    color: white;
  }
`

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const getButtonStyles = ({isGoogleSignIn, inverted}) => {
  if (isGoogleSignIn) {
    return googleSignInStyles
  }
  if (inverted) {
    return invertedButtonStyles
  }

  return baseButtonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:disabled {
    background-color: white;
    color: lightgray;
    border: 1px solid lightgray;
    cursor: default;
  }
  
  ${getButtonStyles}
`