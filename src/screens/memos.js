import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Memos = props => {
  const [listMemos, setListMemos] = useState([])

  useEffect(() => {
    const memos = localStorage.getItem('ListMemos')
    if (memos) {
      setListMemos(JSON.parse(memos))
    } else {
      setListMemos([])
    }
  }, [])

  const handleFavoris = memo => {
    const currentFavoris = localStorage.getItem('favoris')
      ? JSON.parse(localStorage.getItem('favoris'))
      : []
    const isFavoris = currentFavoris.map(e => e.id).indexOf(memo.id)
    if (isFavoris === -1) {
      currentFavoris.push(memo)
      localStorage.setItem('favoris', JSON.stringify(currentFavoris))
    } else {
      const filteredMemosFavoris = currentFavoris.filter(
        memos => memos.id !== memo.id
      )
      localStorage.setItem('favoris', JSON.stringify(filteredMemosFavoris))
    }
  }

  return (
    <DivListMemos>
      <UlListMemos>
        {listMemos.map(memo => (
          <LiMemos key={memo.id}>
            {memo.title}
            <ButtonToMemo
              onClick={() =>
                props.history.push({
                  pathname: `/memo/${memo.id}`,
                  state: { memo }
                })
              }
            >
              Lien vers la fiche
            </ButtonToMemo>
            <ButtonAddFavoris onClick={() => handleFavoris(memo)}>
              Ajouter au favoris
            </ButtonAddFavoris>
          </LiMemos>
        ))}
      </UlListMemos>
      <DivLinkNewMemo>
        <ButtonAddMemo onClick={() => props.history.push('/new/memo')}>
          Ajouter un memo
        </ButtonAddMemo>
      </DivLinkNewMemo>
      <DivLinkFavoris>
        <ButtonLinkFavoris onClick={() => props.history.push('/favoris')}>
          Vers vos favoris
        </ButtonLinkFavoris>
      </DivLinkFavoris>
    </DivListMemos>
  )
}

const DivListMemos = styled.div``
const UlListMemos = styled.ul``
const LiMemos = styled.li`
  margin-bottom: 5%;
`
const DivLinkNewMemo = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonToMemo = styled.button`
  display: flex;
  justify-content: flex-end;
`
const ButtonAddFavoris = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-top: 2%;
`
const ButtonAddMemo = styled.button``
const DivLinkFavoris = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`
const ButtonLinkFavoris = styled.button``

Memos.propTypes = {
  history: PropTypes.object
}

export default Memos
