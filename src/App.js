import React, { useState } from 'react'
import './App.css'
import JokesList from './components/JokesList'
import Search from './components/Search'
import { ReactComponent as SpinningIcon } from './icons/spinning.svg'

const App = (props) => {
  const [jokes, setJokes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [label, setLabel] = useState('')

  const randomJokes = () => {
    setIsLoading(true)
    setLabel('')
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
        setIsLoading(false)
      })
  }

  const searchJokes = (searchQuery) => {
    setIsLoading(true)
    setLabel(searchQuery)
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
        setIsLoading(false)
      })
  }

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Search onRandom={randomJokes} onSearch={searchJokes} />
      {isLoading ? (
        <SpinningIcon style={{ display: 'block', margin: '0 auto' }} />
      ) : (
        <JokesList jokes={jokes} label={label}/>
      )}
    </div>
  )
}

export default App
