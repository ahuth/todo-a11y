import React from "react"
import Header from "components/header"
import {shallow} from "enzyme"

const render = (options = {}) => {
  const func = () => {}
  const defaults = {value: "foobaz", onChange: func, onKeyPress: func}
  const props = Object.assign(defaults, options)
  return shallow(
    <Header {...props} />
  )
}

describe("components <Header />", () => {
  beforeEach(function () {
    this.component = render()
  })

  it("renders correctly", function () {
    expect(this.component.matchesElement(
      <header>
        <h1>todos</h1>
        <input value="foobaz" />
      </header>
    )).toBe(true)
  })
})
