import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Chapters extends Component {

state = {
  played: 0,
  data_loaded: false,
  selected : -1,
  items: [],
  fields: ["surname", "name"]
}

componentDidMount(){
  fetch("https://imr3-react-backend.herokuapp.com/")
  .then(res => res.json())
  .then(result => {
    this.setState({
      data_loaded: true,
      items: result
    })
  })
}

handleSeekMouseDown = e => {
  this.setState({ seeking: true })
}

handleSeekChange = e => {
  this.setState({ played: parseFloat(e.target.value) })
}

handleSeekMouseUp = e => {
  this.setState({ seeking: false })
  this.player.seekTo(parseFloat(e.target.value))
}

handleProgress = state => {
  console.log('onProgress', state)
  // We only want to update time slider if we are not currently seeking
  if (!this.state.seeking) {
    this.setState(state)
  }
}

ref = player => {
  this.player = player
}

render () {
  const { played } = this.state

  return (
    <div className='app'>
      <section className='section'>
        <h1>ReactPlayer Demo</h1>
        <div className='player-wrapper'>
          <ReactPlayer
            ref={this.ref}
          />
        </div>

        <table>
          <tbody>
            <tr>
              <th>Seek</th>
              <td>
                <input
                  type='range' min={0} max={1} step='any'
                  value={played}
                  onMouseDown={this.handleSeekMouseDown}
                  onChange={this.handleSeekChange}
                  onMouseUp={this.handleSeekMouseUp}
                />
              </td>
            </tr>
            <tr>
              <th>Played</th>
              <td><progress max={1} value={played} /></td>
            </tr>
            <tr>
              <th>played</th>
              <td>{played.toFixed(3)}</td>
            </tr>
            </tbody>
        </table>
      </section>
    </div>
  )
}
}

export default Chapters;