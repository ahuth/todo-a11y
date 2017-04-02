import React, {Component} from "react"
import HeaderContainer from "../containers/header"
import Footer from "../components/footer"
import Todos from "../components/todos"
import store from "../store";
import {toggleAll, clearCompleted, destroyTodo, toggleTodo} from "../actions"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.onChange = this.onChange.bind(this)
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
        <HeaderContainer value={this.state.value} dispatch={store.dispatch} />
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
