import initialState from "./initial-state";
import {actionTypes} from "../constants";

export default function (state = initialState.todos, action) {
  switch (action.type) {
    case actionTypes.ALL_TOGGLE:
      return normalizeToggle(state)
    case actionTypes.COMPLETED_CLEAR:
      return state.filter(todo => !todo.completed)
    case actionTypes.TODO_ADD:
      return addTodo(state, action.payload.title)
    case actionTypes.TODO_DESTROY:
      return state.filter(todo => todo.id !== action.payload.id)
    case actionTypes.TODO_TOGGLE:
      return toggleSingle(state, action.payload.id)
    default:
      return state
  }
}

function addTodo(state, title) {
  return state.concat([{
    title: title,
    completed: false,
    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
  }])
}

function normalizeToggle(state) {
  const allCompleted = state.every(todo => todo.completed)
  return state.map(todo => Object.assign({}, todo, {completed: !allCompleted}))
}

function toggleSingle(state, id) {
  return state.map(todo => {
    if (todo.id !== id) {
      return todo
    }
    return Object.assign({}, todo, {completed: !todo.completed})
  })
}
