import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ haveToken, setHaveToken }) => {
  const history = useHistory()

  const Logout = () => {
    localStorage.removeItem('token')
    setHaveToken(null)
    history.push('/')
  }

  return (
    <NavBar>
      <TitleSite>Bienvenue sur MemoHisto</TitleSite>
      {haveToken ? (
        <DivLogOutButton>
          <LogOutButton onClick={Logout}>Déconnexion</LogOutButton>
        </DivLogOutButton>
      ) : null}
    </NavBar>
  )
}

const NavBar = styled.nav`
  background-color: #267068;
`
const TitleSite = styled.h2`
  display: flex;
  justify-content: center;
  color: white;
  padding: 5%;
  margin: 0;
`
const DivLogOutButton = styled.div`
  display: flex;
  justify-content: center;
`
const LogOutButton = styled.button``

Header.propTypes = {
  haveToken: PropTypes.string,
  setHaveToken: PropTypes.func
}

export default Header
