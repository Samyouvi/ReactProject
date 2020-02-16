import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Chapters from './Chapters';
import Waypoints from './Waypoints';
import Keywords from './Keywords';
import { Container, Col, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Video extends Component {

  constructor(props){
    super(props)
    this.state = {
      url: null,
      playing: false,
      controls: true,
      volume: 0.8,
      data_loaded: false,
      items: [],
      seconds: 0.0,
      played: 0,
    }
  }
  

  componentDidMount(){
    fetch("https://imr3-react.herokuapp.com/backend")
    .then(res => res.json())
    .then(result => {
      this.setState({
        data_loaded: true,
        items: result
      })
    })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleSeek = seconds => {
    if(this.player){
      this.player.seekTo(parseFloat(seconds))
    }
  }

  ref = player => {
    this.player = player
  }

  render () {
    const { data_loaded, playing, controls, volume, items } = this.state

    if(data_loaded){
      return (
        <Container>
            <div className='player-wrapper'>
              <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='100%'
                height='50%'
                url={items.Film.file_url}
                playing={playing}
                controls={controls}
                volume={volume}
              />
            </div>
            <h3> {items.Film.title} </h3>
            <Col sm={12} md={12} lg={12}>
              <Tabs defaultActiveKey="controls">
                <Tab eventKey="controls" title="Controls">
                  <p>Volume</p>
                  <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                </Tab>
                <Tab eventKey="chapters" title="Chapters">
                  <Chapters items={items.Chapters} handleClick={this.handleSeek} />
                </Tab>
                <Tab eventKey="map" title="Map">
                  <Waypoints items={items.Waypoints} />
                </Tab>
                <Tab eventKey="keywords" title="KeyWords">
                  <Keywords items={items.Keywords} handleClick={this.handleSeek} />
                </Tab>
              </Tabs>
            </Col>
        </Container>
      )
    }else{
      return(
      <Container>
        <p> Data Loading... </p>
      </Container>
      )
    }
  }
}

export default Video;


 
