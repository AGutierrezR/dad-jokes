import React, { useState } from 'react'
import './App.css'
import data from './data'
import JokesList from './components/JokesList'
import Search from './components/Search'

const App = (props) => {
  const [jokes, setJokes] = useState(data)

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Search />
      <JokesList jokes={jokes} />
    </div>
  )
}

export default App
