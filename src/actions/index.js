export const SET_MESSAGES = 'SET_MESSAGES';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export function setMessages(messages) {
  return {
    type: SET_MESSAGES,
    messages,
  };
}

export function updateMessage(message) {
  return {
    type: UPDATE_MESSAGE,
    message,
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message,
  };
}

export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    id,
  };
}
