import React, {Component} from "react"
import Footer from "../components/footer"
import {clearCompleted} from "../actions"

export default class extends Component {
  constructor(props) {
    super(props)
    this.handleClearCompleted = this.handleClearCompleted.bind(this)
  }

  handleClearCompleted() {
    this.props.dispatch(clearCompleted())
  }

  render() {
    return (
      <Footer
        todos={this.props.todos}
        clearCompleted={this.handleClearCompleted}
      />
    )
  }
}
