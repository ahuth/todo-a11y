import React, {Component} from "react"
import Header from "../components/header"
import {ENTER} from "../utils/key-codes"
import {changeHeader, addTodo} from "../actions"

export default class HeaderContainer extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleHeaderKeyPress = this.handleHeaderKeyPress.bind(this)
  }

  handleChange(event) {
    this.props.dispatch(changeHeader(event.target.value))
  }

  handleHeaderKeyPress(event) {
    if (event.charCode === ENTER) {
      this.props.dispatch(addTodo(event.target.value))
    }
  }

  render() {
    return (
      <Header
        value={this.props.value}
        onChange={this.handleChange}
        onKeyPress={this.handleHeaderKeyPress}
      />
    )
  }
}

HeaderContainer.propTypes = {
  value: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
}
