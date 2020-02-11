import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {

  state = {
    url: 'https://ia801406.us.archive.org/32/items/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream_512kb.mp4',
    playing: false,
    controls: true,
    volume: 0.8,
    played: 0,
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
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
    const { url, playing, controls, volume } = this.state

    return (
      <div className='app'>
        <section className='section'>
          <div className='player-wrapper'>
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='50%'
              height='50%'
              url={url}
              playing={playing}
              controls={controls}
              volume={volume}
            />
          </div>
          <table>
            <tbody>
              <tr>
                <th>Volume</th>
                <td>
                  <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default Video;


 
