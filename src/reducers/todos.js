import initialState from "./initial-state";
import {actionTypes} from "../constants";

export default function (state = initialState.todos, action) {
  switch (action.type) {
    case actionTypes.ALL_TOGGLE:
      const allCompleted = state.every(todo => todo.completed)
      return state.map(todo => Object.assign({}, todo, {completed: !allCompleted}))
    case actionTypes.COMPLETED_CLEAR:
      return state.filter(todo => !todo.completed)
    case actionTypes.TODO_ADD:
      return state.concat([{
        title: action.payload.title,
        completed: false,
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      }])
    case actionTypes.TODO_DESTROY:
      return state.filter(todo => todo.id !== action.payload.id)
    case actionTypes.TODO_TOGGLE:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo
        }
        return Object.assign({}, todo, {completed: !todo.completed})
      })
    default:
      return state
  }
}
