import React from 'react'
import Joke from './Joke'

const JokesList = ({ jokes }) => {
  return (
    <ul>
      {jokes.map(({ joke, id }) => (
        <Joke joke={joke} key={id} />
      ))}
    </ul>
  )
}

export default JokesList
