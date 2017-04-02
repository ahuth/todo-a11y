import React, {Component} from "react"
import Header from "./header"
import Footer from "./footer"
import Todos from "./todos"
import {ENTER} from "./key-codes"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {value: "", todos: []}
    this.handleChange = this.handleChange.bind(this)
    this.handleHeaderKeyPress = this.handleHeaderKeyPress.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.destroyTodo = this.destroyTodo.bind(this)
    this.toggleAll = this.toggleAll.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleHeaderKeyPress(event) {
    if (event.charCode === ENTER) {
      this.setState({
        todos: this.state.todos.concat([{
          title: event.target.value,
          completed: false,
          id: this.state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }]),
        value: ""
      })
    }
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) {
          return todo
        }
        return Object.assign({}, todo, {completed: !todo.completed})
      })
    })
  }

  toggleAll() {
    const allCompleted = this.state.todos.every(todo => todo.completed)
    this.setState({
      todos: this.state.todos.map(todo => Object.assign({}, todo, {completed: !allCompleted}))
    })
  }

  destroyTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })
  }

  clearCompleted() {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div className="todoapp">
        <Header value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleHeaderKeyPress} />
        {this.state.todos.length > 0 &&
          <div>
            <Todos todos={this.state.todos} toggleTodo={this.toggleTodo} destroyTodo={this.destroyTodo} toggleAll={this.toggleAll} />
            <Footer count={this.state.todos.filter(todo => !todo.completed).length} clearCompleted={this.clearCompleted} />
          </div>
        }
      </div>
    )
  }
}
