import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMessage, addMessage } from '../actions';
import Add from './Add';

class AddContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      name: '',
      date: '',
      id: '-1',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (Number.isNaN(Number(id))) {
      return;
    }
    const { txt, name, date } = this.props.messages.find(message => (message.id === id));
    this.setState({
      txt,
      name,
      id,
      date,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id, txt, name } = this.state;
    const msg = {
      id,
      txt,
      name,
      date: this.state.date || (new Date()).toISOString(),
    };
    if (msg.id === '-1') {
      this.props.addMessage(msg);
    } else {
      this.props.updateMessage(msg);
    }
    this.props.history.goBack();
  }

  goBack(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    return (
      <Add
        txt={this.state.txt}
        name={this.state.name}
        date={this.state.date}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        goBack={this.goBack}
      />
    );
  }
}

const mapStateToProps = state => ({ messages: state.messages });
export default connect(mapStateToProps, { updateMessage, addMessage })(AddContainer);
