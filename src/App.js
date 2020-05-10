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

  const searchJokes = (searchQuery) => {
    fetch(`https://icanhazdadjoke.com/search?term=${searchQuery}&limit=${20}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const jokes = json.results
        setJokes(jokes)
      })
  }

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Search onRandom={randomJokes} onSearch={searchJokes} />
      <JokesList jokes={jokes} />
    </div>
  )
}

export default App
