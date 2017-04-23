import React from "react"
import Todos from "../todos"
import {createMockStore} from "redux-test-utils"
import {shallow} from "enzyme"

const render = (state = {}) => {
  const store = createMockStore(state)
  return shallow(<Todos store={store} />)
}

describe("containers <Todos />", () => {
  const state = {todos: [{id: 0}, {id: 1}, {id: 2}]}

  beforeEach(function () {
    this.component = render(state)
  })

  it("has the right todos", function () {
    expect(this.component.prop("todos")).toEqual(state.todos)
  })
})
