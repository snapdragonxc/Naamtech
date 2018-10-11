import {
  SET_MESSAGES,
  UPDATE_MESSAGE,
  ADD_MESSAGE,
  DELETE_MESSAGE,
} from '../actions';

const initialState = {
  messages: [],
  loaded: false,
};

function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return { messages: action.messages, loaded: true };
    case UPDATE_MESSAGE:
    {
      const messages = state.messages.map((message) => {
        if (message.id !== action.message.id) {
          return message;
        }
        return action.message;
      });
      return { ...state, messages };
    }
    case ADD_MESSAGE:
    {
      const messages = state.messages.concat();
      const { message } = action;
      const { length } = messages;
      // get a unique id
      let max = length - 1;
      for (let i = 0; i < length; i++) {
        const id = Number(messages[i].id);
        if (id >= max) {
          max = id;
        }
      }
      messages.push({ ...message, id: (max + 1).toString() });
      return { ...state, messages };
    }
    case DELETE_MESSAGE:
    {
      const messages = state.messages.filter(message => (message.id !== action.id));
      return { ...state, messages };
    }
    default:
      return state;
  }
}

export default messagesReducer;
