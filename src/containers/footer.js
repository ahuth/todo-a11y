import React, {Component} from "react"
import Footer from "../components/footer"
import {clearCompleted} from "../actions"

export default class FooterContainer extends Component {
  constructor(props) {
    super(props)
    this.handleClearCompleted = this.handleClearCompleted.bind(this)
  }

  handleClearCompleted() {
    this.props.dispatch(clearCompleted())
  }

  render() {
    const uncompletedCount = this.props.todos.filter(todo => !todo.completed).length
    const areCompleted = uncompletedCount < this.props.todos.length
    return (
      <Footer
        onClearClick={this.handleClearCompleted}
        count={uncompletedCount}
        showClear={areCompleted}
      />
    )
  }
}

FooterContainer.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  dispatch: React.PropTypes.func.isRequired,
}
