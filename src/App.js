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

  componentDidMount = () => {
    this.randomJokes()
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
        <div className="content">
          {this.state.isLoading ? (
            <SpinningIcon style={{ display: 'block', margin: '0 auto' }} />
          ) : (
            <JokesList jokes={this.state.jokes} label={this.state.label} />
          )}
        </div>
        <footer style={{ textAlign: 'center', marginTop: '1.25rem'}}>
          <p>Build with <a href="https://reactjs.org/">React</a>. This code is Open Source and available at <a href="https://github.com/AGutierrezR/dad-jokes">Github</a> </p>
        </footer>
      </div>
    )
  }
}

export default App
