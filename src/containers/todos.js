import React, {Component} from "react"
import Todos from "../components/todos"
import {toggleAll, destroyTodo, toggleTodo} from "../actions"

export default class extends Component {
  constructor(props) {
    super(props)
    this.handleToggleTodo = this.handleToggleTodo.bind(this)
    this.handleDestroyTodo = this.handleDestroyTodo.bind(this)
    this.handleToggleAll = this.handleToggleAll.bind(this)
  }

  handleToggleTodo(id) {
    this.props.dispatch(toggleTodo(id))
  }

  handleToggleAll() {
    this.props.dispatch(toggleAll())
  }

  handleDestroyTodo(id) {
    this.props.dispatch(destroyTodo(id))
  }

  render() {
    return (
      <Todos
        todos={this.props.todos}
        toggleTodo={this.handleToggleTodo}
        destroyTodo={this.handleDestroyTodo}
        toggleAll={this.handleToggleAll}
      />
    )
  }
}
