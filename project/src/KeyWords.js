import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class KeyWords extends Component {

render () {
  return (
    <div className='app'>
      <ul>
        {this.props.items.map((keywords, index) =>
          <li key={index}>
          At {keywords.pos} seconds :
          {keywords.data.map((data, index) => 
          <div>
            <a href={data.url} target="_blank" key={index}>{data.title}</a> <br/>
          </div>
          )}
          </li>
        )}
      </ul>
    </div>  
  )
}
}

export default KeyWords;