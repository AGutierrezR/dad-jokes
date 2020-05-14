import React, { Component } from 'react'
import './App.css'
import JokesList from './components/JokesList'
import Search from './components/Search'
import { ReactComponent as SpinningIcon } from './icons/spinning.svg'

class App extends Component {
  state = {
    jokes: [],
    isLoading: false,
    label: '',
  }

  randomJokes = () => {
    this.setState({
      isLoading: true,
      label: '',
    })
    fetch(`https://icanhazdadjoke.com/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((joke) => {
        this.setState({
          jokes: [joke],
          isLoading: false,
        })
      })
  }

  searchJokes = (searchQuery) => {
    this.setState({
      isLoading: true,
      label: searchQuery,
    })
    fetch(`https://icanhazdadjoke.com/search?term=${searchQuery}&limit=${20}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const jokes = [...json.results]
        this.setState({
          jokes,
          isLoading: false,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Search onRandom={this.randomJokes} onSearch={this.searchJokes} />
        {this.state.isLoading ? (
          <SpinningIcon style={{ display: 'block', margin: '0 auto' }} />
        ) : (
          <JokesList jokes={this.state.jokes} label={this.state.label} />
        )}
      </div>
    )
  }
}

export default App
