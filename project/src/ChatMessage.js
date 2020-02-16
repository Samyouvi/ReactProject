import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ChatMessage extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <input
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <Button variant="primary" type="submit"> Send </Button>
      </form>
    )
  }
}

export default ChatMessage