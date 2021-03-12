import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import uuid from 'uuid'
import PropTypes from 'prop-types'

const NewMemoForm = ({ submit }) => {
  const [formState, setFormState] = useState({
    id: uuid(),
    title: '',
    description: ''
  })
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <div>
      <DivTitlePage>
        <TitlePage>Formulaire pour ajouter un memo</TitlePage>
      </DivTitlePage>
      <FormNewMemo
        onSubmit={e => submit(e, formState, setErrorMessage, history)}
      >
        <NewMemoInput
          placeholder='Titre (ex: La Renaissance)'
          type='text'
          onChange={e => setFormState({ ...formState, title: e.target.value })}
        ></NewMemoInput>
        <NewMemoInput
          placeholder='Description'
          type='text'
          onChange={e =>
            setFormState({ ...formState, description: e.target.value })
          }
        ></NewMemoInput>
        <SubmitButton type='submit' value='Ajouter'></SubmitButton>
        <AlertMessage>{errorMessage}</AlertMessage>
      </FormNewMemo>
      <DivButtonRetourListMemos>
        <ButtonRetourListMemos>
          <Link to='/memos'>Retour vers liste des memos</Link>
        </ButtonRetourListMemos>
      </DivButtonRetourListMemos>
    </div>
  )
}

const DivTitlePage = styled.div`
  display: flex;
  justify-content: center;
`
const TitlePage = styled.h3``
const FormNewMemo = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const NewMemoInput = styled.input`
  margin: 3% 0;
  padding: 2% 0;
  border-radius: 5px;
`
const SubmitButton = styled.input`
  margin: 5% 0;
`
const AlertMessage = styled.span`
  color: red;
  text-decoration: underline;
  font-weight: bold;
  text-transform: uppercase;
`
const DivButtonRetourListMemos = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonRetourListMemos = styled.button``

NewMemoForm.propTypes = {
  submit: PropTypes.func
}

export default NewMemoForm
