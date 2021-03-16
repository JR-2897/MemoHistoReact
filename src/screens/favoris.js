import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Favoris = props => {
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('favoris')))

  return (
    <DivFavoris>
      <DivListFavoris>
        <UlListfavoris>
          {fav.map(memo => (
            <LiFavoris key={memo.id}>
              <ButtonFavoris
                onClick={() =>
                  props.history.push({
                    pathname: `/memo/${memo.id}`,
                    state: { memo }
                  })
                }
              >
                {memo.title}
              </ButtonFavoris>
            </LiFavoris>
          ))}
        </UlListfavoris>
      </DivListFavoris>
      <DivButtonRetourMemos>
        <ButtonRetourMemos onClick={() => props.history.push('/memos')}>
          Retour vers liste memos
        </ButtonRetourMemos>
      </DivButtonRetourMemos>
    </DivFavoris>
  )
}

const DivFavoris = styled.div``
const DivListFavoris = styled.div``
const UlListfavoris = styled.ul``
const LiFavoris = styled.li`
  margin: 5% 0;
`
const ButtonFavoris = styled.button``
const DivButtonRetourMemos = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`
const ButtonRetourMemos = styled.button``

Favoris.propTypes = {
  history: PropTypes.object
}

export default Favoris
