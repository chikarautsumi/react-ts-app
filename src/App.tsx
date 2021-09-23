import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AddIcon from '@material-ui/icons/Add'
import { Button } from '@material-ui/core'

const App: React.FC = () => {
  const [number, setNumber] = useState(0)
  const addNumber = () => setNumber((i) => i + 1)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={addNumber}
        >
          ボタンを押した回数は{number}回です
        </Button>
      </header>
    </div>
  )
}

export default App
