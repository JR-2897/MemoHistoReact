import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return <TheFooter>@MemoHisto</TheFooter>
}

const TheFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #267068;
  color: white;
  margin-top: 5%;
  padding: 5% 0;
`

export default Footer
