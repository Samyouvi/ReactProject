import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Chapters extends Component {

render () {
  return (
    <div className='app'>
      <ul>
        {this.props.items.map((chapters, index) =>
          <li key={index}>
            <Button variant="light" onClick={() => this.props.handleClick(chapters.pos)}> {chapters.title} </Button> at {chapters.pos} seconds
          </li>
        )}
      </ul>
    </div>  
  )
}
}

export default Chapters;