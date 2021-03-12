import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Memo = props => {
  return (
    <DivMemo>
      <DivTitleMemo>
        <TitleMemo>{props.location.state.memo.title}</TitleMemo>
      </DivTitleMemo>
      <DivDescriptionMemo>
        <DescriptionMemo>
          {props.location.state.memo.description}
        </DescriptionMemo>
      </DivDescriptionMemo>
      <DivButtonRetourListMemos>
        <ButtonRetourListMemos>
          <Link to='/memos'>Retour vers liste des memos</Link>
        </ButtonRetourListMemos>
      </DivButtonRetourListMemos>
    </DivMemo>
  )
}

const DivMemo = styled.div``
const DivTitleMemo = styled.div`
  display: flex;
  justify-content: center;
`
const TitleMemo = styled.h3`
  color: #267068;
  font-weight: bold;
  text-decoration: underline;
`
const DivDescriptionMemo = styled.div`
  display: flex;
  justify-content: center;
`
const DescriptionMemo = styled.p`
  text-align: center;
`
const DivButtonRetourListMemos = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonRetourListMemos = styled.button``

Memo.propTypes = {
  location: PropTypes.element
}

export default Memo
