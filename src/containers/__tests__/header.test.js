import React from "react"
import Header from "containers/header"
import {createMockStore} from "redux-test-utils"
import {shallow} from "enzyme"

const render = (state = {}) => {
  const store = createMockStore(state)
  return shallow(<Header store={store} />)
}

describe("containers <Header />", () => {
  const state = {value: "foobar"}

  beforeEach(function () {
    this.component = render(state)
  })

  it("has the right value", function () {
    expect(this.component.prop("value")).toEqual("foobar")
  })
})
