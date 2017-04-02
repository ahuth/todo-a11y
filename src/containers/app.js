import React, {Component} from "react"
import HeaderContainer from "../containers/header"
import Footer from "../components/footer"
import TodosContainer from "../containers/todos"
import store from "../store";
import {clearCompleted} from "../actions"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.onChange = this.onChange.bind(this)
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

  handleClearCompleted() {
    store.dispatch(clearCompleted())
  }

  render() {
    return (
      <div className="todoapp">
        <HeaderContainer value={this.state.value} dispatch={store.dispatch} />
        {this.state.todos.length > 0 &&
          <div>
            <TodosContainer todos={this.state.todos} dispatch={store.dispatch} />
            <Footer todos={this.state.todos} clearCompleted={this.handleClearCompleted} />
          </div>
        }
      </div>
    )
  }
}
