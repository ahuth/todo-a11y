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
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleHeaderKeyPress(event) {
    if (event.charCode === ENTER) {
      this.setState({
        todos: this.state.todos.concat([{title: event.target.value, completed: false}]),
        value: ""
      })
    }
  }

  render() {
    return (
      <div className="todoapp">
        <Header value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleHeaderKeyPress} />
        {this.state.todos.length > 0 &&
          <div>
            <Todos todos={this.state.todos} />
            <Footer count={this.state.todos.filter(todo => !todo.completed).length} />
          </div>
        }
      </div>
    )
  }
}
