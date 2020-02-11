import React, { Component } from 'react'
import ChatMessage from './ChatMessage'
import Chatroom from './Chatroom';

const URL = "wss://imr3-react.herokuapp.com"

class Chat extends Component {
  state = {
    name: '',
    messages: [],
  }

  ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
        console.log("connected");
        this.setState({
            connected: true
        });
    }

    this.ws.onmessage = evt => {
        const messages = JSON.parse(evt.data);
        messages.map(message => this.addMessage(message));
    }

    this.ws.onclose = () => {
        console.log("disconnected, reconnect.");
        this.setState({
            connected: false,
            ws: new WebSocket(URL)
        });
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
  }

  render() {
    return (
      <div>
        <label htmlFor="name">
          Name:&nbsp;
          <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <ChatMessage
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        {this.state.messages.map((message, index) =>
          <Chatroom
            key={index}
            message={message.message}
            name={message.name}
          />,
        )}
      </div>
    )
  }
}

export default Chat