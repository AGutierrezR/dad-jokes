import React from 'react'
import Joke from './Joke'

const JokesList = ({ jokes, label }) => {
  const labelText = `Searching for ${label} jokes`
  return (
    <>
      {label ? <h2>{labelText}</h2> : null}
      <ul>
        {jokes.map(({ joke, id }) => (
          <Joke joke={joke} key={id} />
        ))}
      </ul>
    </>
  )
}

export default JokesList
