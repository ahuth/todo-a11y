import React, {Component} from "react"
import Header from "./header"
import {ENTER} from "./key-codes"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleHeaderKeypress = this.handleHeaderKeyPress.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleHeaderKeyPress(event) {
    if (event.charCode === ENTER) {
      console.log(event.target.value)
    }
  }

  render() {
    return (
      <div className="todoapp">
        <Header value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleHeaderKeyPress} />
      </div>
    )
  }
}
