import {actionTypes} from "./constants";

export function toggleAll() {
  return {
    type: actionTypes.ALL_TOGGLE
  }
}

export function clearCompleted() {
  return {
    type: actionTypes.COMPLETED_CLEAR
  }
}

export function changeHeader(value) {
  return {
    type: actionTypes.HEADER_CHANGE,
    payload: {
      value: value
    }
  }
}

export function addTodo(title) {
  return {
    type: actionTypes.TODO_ADD,
    payload: {
      title: title
    }
  }
}

export function destroyTodo(id) {
  return {
    type: actionTypes.TODO_DESTROY,
    payload: {
      id: id
    }
  }
}

export function toggleTodo(id) {
  return {
    type: actionTypes.TODO_TOGGLE,
    payload: {
      id: id
    }
  }
}
