import React, { useState } from 'react'
import './App.css'
import data from './data'
import Joke from './components/Joke'

const App = (props) => {
  const [jokes, setJokes] = useState(data)

  return (
    <div className="App">
      <h1>{props.title}</h1>
      {jokes.map(({ joke, id }) => (
        <Joke joke={joke} key={id} />
      ))}
    </div>
  )
}

export default App
