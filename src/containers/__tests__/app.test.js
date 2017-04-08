import React from "react"
import App from "containers/app"
import AppComponent from "components/app"
import {createMockStore} from "redux-test-utils"
import {shallow} from "enzyme"

const render = (state = {}) => {
  const store = createMockStore(state)
  return shallow(<App store={store} />)
}

describe("containers <App />", () => {
  describe("when there are no todos", () => {
    const state = {todos: []}

    beforeEach(function () {
      this.component = render(state)
    })

    it("does not show the body", function () {
      expect(this.component.matchesElement(
        <AppComponent showBody={false} />
      )).toBe(true)
    })
  })

  describe("when there are todos", () => {
    const state = {todos: [{id: 0}, {id: 1}]}

    beforeEach(function () {
      this.component = render(state)
    })

    it("shows the body", function () {
      expect(this.component.matchesElement(
        <AppComponent showBody={true} />
      )).toBe(true)
    })
  })
})
