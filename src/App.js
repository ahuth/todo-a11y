import React, {Component} from 'react'
import Header from './header'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ""}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div className="todoapp">
        <Header value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}
