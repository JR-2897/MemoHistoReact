import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import historyManual from '../../assets/history-manual.png'

const HomePage = props => {
  return (
    <DivHome>
      <DivImage>
        <ImageHome src={historyManual}></ImageHome>
      </DivImage>
      <DivDescriptionApp>
        <DescriptionApp>
          Bienvenue sur votre application de memo pour tout ce qui concerne vos
          cours d&apos;Histoire
        </DescriptionApp>
      </DivDescriptionApp>
      <TitleLoginBox>Lien pour vous connecter :</TitleLoginBox>
      <DivLinkLogin>
        <ButtonLinkLogin onClick={() => props.props.history.push('login')}>
          Login
        </ButtonLinkLogin>
      </DivLinkLogin>
    </DivHome>
  )
}

const DivHome = styled.div``

const DivImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0;
  padding: 5% 0;
`
const ImageHome = styled.img`
  width: 50%;
`
const DivDescriptionApp = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 5% 3% 5%;
`
const DescriptionApp = styled.p`
  text-align: center;
`
const TitleLoginBox = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  margin: 10% 0;
`
const DivLinkLogin = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0;
  padding: 5% 0;
`
const ButtonLinkLogin = styled.button``

HomePage.propTypes = {
  props: PropTypes.object
}

export default HomePage
