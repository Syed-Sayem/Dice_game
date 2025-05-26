import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Button'

const Container=styled.div`
display: flex;
max-width:1180px;
margin: 0 auto;
height: 100vh;
align-items: center;
.content h1 {
  font-size: 96px;
  white-space: nowrap;
}

`

const StartGame = ({toggle}) => {
  return (
    <Container>
     <div> <img src="./images/dices.png"/></div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame
