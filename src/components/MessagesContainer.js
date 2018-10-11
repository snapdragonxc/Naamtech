import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import { setMessages, deleteMessage } from '../actions';
import data from '../../data';

class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    if (!this.props.loaded) {
      this.props.setMessages(data);
    }
  }

  onDelete(event, id) {
    event.preventDefault();
    this.props.deleteMessage(id);
  }

  render() {
    const { messages } = this.props;
    return (
      <Messages messages={messages || []} onDelete={this.onDelete} />
    );
  }
}

const mapStateToProps = state => ({ loaded: state.loaded, messages: state.messages });
export default connect(mapStateToProps, { setMessages, deleteMessage })(MessagesContainer);
