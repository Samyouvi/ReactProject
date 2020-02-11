import React, { Component } from 'react'
import './App.css'
import Chat from './Chat'
import Video from './Video'

class App extends Component {
  render() {
    return (
        <div>
            <Video />
            <Chat />
        </div>
    )
  }
}

export default App