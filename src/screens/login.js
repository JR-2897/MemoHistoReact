import React, { useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import Signin from '../components/signin'

const submit = (e, formState, setErrorMessage, history, setHaveToken) => {
  e.preventDefault()

  if (!formState.username) {
    setErrorMessage('Username oublié')
    return
  }
  if (!formState.password) {
    setErrorMessage('Password oublié')
    return
  }

  axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  })
    .then(res => {
      localStorage.setItem('token', res.headers['x-access-token'])
      setHaveToken(res.headers['x-access-token'])
      history.push('/memos')
    })
    .catch(err => {
      setErrorMessage('Une erreur est survenue')
      console.log(err)
    })
}

const Login = ({ history, setHaveToken }) => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    setHaveToken(token)
    if (token) {
      history.push('/memos')
    }
  }, [])
  return (
    <div>
      <Signin submit={submit} setHaveToken={setHaveToken}></Signin>
    </div>
  )
}

Login.propTypes = {
  history: PropTypes.object,
  setHaveToken: PropTypes.element
}

export default Login
