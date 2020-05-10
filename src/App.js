import React, { useState } from 'react'
import './App.css'
import data from './data'
import JokesList from './components/JokesList'
import Search from './components/Search'

const App = (props) => {
  const [jokes, setJokes] = useState(data)

  const randomJokes = () => {
    fetch(`https://icanhazdadjoke.com/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const joke = json
        setJokes([joke])
      })
  }

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Search onRandom={randomJokes} />
      <JokesList jokes={jokes} />
    </div>
  )
}

export default App
