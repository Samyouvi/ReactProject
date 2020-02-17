import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Keywords extends Component {

render () {
  return (
    <div className='app'>
      <ul>
        {this.props.items.map((keywords, index) =>
          <li key={index}>
          <Button variant="light" onClick={() => this.props.handleClick(keywords.pos)}> At {keywords.pos} seconds : </Button>
          {keywords.data.map((data, index) => 
          <div key={index}>
            <a href={data.url} target="_blank" rel="noopener noreferrer" key={index}>{data.title}</a> <br/>
          </div>
          )}
          </li>
        )}
      </ul>
    </div>  
  )
}
}

export default Keywords;