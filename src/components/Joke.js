import React from 'react'
import styled from 'styled-components'

const Card = styled.li`
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  background-color: #ededed;
  font-size: 1.25rem;
  margin: 1em 0;
  padding: 2em;
  border-radius: 4px;
  display: block;
  margin-bottom: 8px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;
  color: 333333;
`

const Joke = ({joke}) => {
  return <Card>{joke}</Card>
}

export default Joke
