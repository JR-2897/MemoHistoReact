import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

const Signin = ({ submit, setHaveToken }) => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {})
  const history = useHistory()
  return (
    <DivSignin>
      <DivTitleSignin>
        <TitleSignin>Pour se connecter :</TitleSignin>
      </DivTitleSignin>
      <DivFormSignin>
        <FormSignin
          onSubmit={e =>
            submit(e, formState, setErrorMessage, history, setHaveToken)
          }
        >
          <SigninInput
            placeholder='Username'
            type='text'
            onChange={e =>
              setFormState({ ...formState, username: e.target.value })
            }
          ></SigninInput>
          <SigninInput
            placeholder='password'
            type='password'
            onChange={e =>
              setFormState({ ...formState, password: e.target.value })
            }
          ></SigninInput>
          <SigninSubmit type='submit' value='Se connecter'></SigninSubmit>
          <AlertMessage>{errorMessage}</AlertMessage>
        </FormSignin>
      </DivFormSignin>
    </DivSignin>
  )
}

const DivSignin = styled.div``
const DivTitleSignin = styled.div`
  display: flex;
  justify-content: center;
`
const TitleSignin = styled.h3`
  text-decoration: underline;
  color: #267068;
`
const DivFormSignin = styled.div``
const FormSignin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SigninInput = styled.input`
  margin: 3% 0;
  padding: 2% 0;
  border-radius: 5px;
`
const SigninSubmit = styled.input`
  margin: 5% 0;
`
const AlertMessage = styled.span`
  color: red;
  text-decoration: underline;
  font-weight: bold;
  text-transform: uppercase;
`

Signin.propTypes = {
  submit: PropTypes.func,
  setHaveToken: PropTypes.element
}

export default Signin
