import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  display: block;
  color: #0b7c9b;
  color: #333333;
  font-size: 1.15rem;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 3px solid #333333;
  width: 100%;
`

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  background: none;
  color: #333333;
  font-size: 1.15rem;
  font-weight: 600;
  margin: 1.5em 1em 0 0;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 3px solid #333333;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: #333333;
    color: #fff;
  }

  &:last-child {
    margin: 0;
  }
`

const Search = (props) => {
  const [search, setSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ textAlign: 'center', marginBottom: '4rem' }}
    >
      <Input
        type="text"
        placeholder="Search Jokes"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button>Search</Button>
      <Button>Random</Button>
    </form>
  )
}

export default Search
