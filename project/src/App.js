import React, { Component } from 'react'
import './App.css'
import Chapters from './Chapters'
import Chat from './Chat'
import Video from './Video'

class App extends Component {
  render() {
    return (
        <div>
            <Video />
            <Chapters />
            <Chat />
        </div>
    )
  }
}

export default App