import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './App.css'
import Chat from './Chat'
import Video from './Video'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div>
          <Container>
            <Row>
              <Col><Video /></Col>
              <Col xs={4} md={4} lg={4}><Chat /></Col>
            </Row>
          </Container>
            
        </div>
    )
  }
}

export default App