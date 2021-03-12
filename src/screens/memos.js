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
          </LiMemos>
        ))}
      </UlListMemos>
      <DivLinkNewMemo>
        <ButtonAddMemo onClick={() => props.history.push('/new/memo')}>
          Ajouter un memo
        </ButtonAddMemo>
      </DivLinkNewMemo>
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
const ButtonAddMemo = styled.button``

Memos.propTypes = {
  history: PropTypes.func
}

export default Memos
