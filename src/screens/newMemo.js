import React from 'react'
import styled from 'styled-components'

import NewMemoForm from '../components/newMemoForm'

const submit = (e, formState, setErrorMessage, history) => {
  e.preventDefault()
  const listMemos = localStorage.getItem('ListMemos')
    ? JSON.parse(localStorage.getItem('ListMemos'))
    : []
  const isPresent = listMemos.map(e => e.id).indexOf(formState.id)

  if (!formState.title) {
    setErrorMessage('Titre oublié')
    return
  }
  if (!formState.description) {
    setErrorMessage('Description oubliée')
    return
  }

  if (isPresent === -1) {
    listMemos.push(formState)
    localStorage.setItem('ListMemos', JSON.stringify(listMemos))
    history.push('/memos')
  } else {
    setErrorMessage('Erreur id déjà présent')
    return
  }
}

const NewMemo = () => {
  return (
    <DivNewMemo>
      <NewMemoForm submit={submit}></NewMemoForm>
    </DivNewMemo>
  )
}

const DivNewMemo = styled.div``

export default NewMemo
