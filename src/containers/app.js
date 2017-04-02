import React, {Component} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Todos from "../components/todos"
import store from "../store";
import {ENTER} from "../utils/key-codes"
import {toggleAll, clearCompleted, changeHeader, addTodo, destroyTodo, toggleTodo} from "../actions"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.onChange = this.onChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleHeaderKeyPress = this.handleHeaderKeyPress.bind(this)
    this.handleToggleTodo = this.handleToggleTodo.bind(this)
    this.handleDestroyTodo = this.handleDestroyTodo.bind(this)
    this.handleToggleAll = this.handleToggleAll.bind(this)
    this.handleClearCompleted = this.handleClearCompleted.bind(this)
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onChange() {
    this.setState(store.getState())
  }

  handleChange(event) {
    store.dispatch(changeHeader(event.target.value))
  }

  handleHeaderKeyPress(event) {
    if (event.charCode === ENTER) {
      store.dispatch(addTodo(event.target.value))
    }
  }

  handleToggleTodo(id) {
    store.dispatch(toggleTodo(id))
  }

  handleToggleAll() {
    store.dispatch(toggleAll())
  }

  handleDestroyTodo(id) {
    store.dispatch(destroyTodo(id))
  }

  handleClearCompleted() {
    store.dispatch(clearCompleted())
  }

  render() {
    return (
      <div className="todoapp">
        <Header value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleHeaderKeyPress} />
        {this.state.todos.length > 0 &&
          <div>
            <Todos todos={this.state.todos} toggleTodo={this.handleToggleTodo} destroyTodo={this.handleDestroyTodo} toggleAll={this.handleToggleAll} />
            <Footer todos={this.state.todos} clearCompleted={this.handleClearCompleted} />
          </div>
        }
      </div>
    )
  }
}
