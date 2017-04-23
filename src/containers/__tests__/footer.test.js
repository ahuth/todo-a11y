import React from "react"
import Footer from "../footer"
import {createMockStore} from "redux-test-utils"
import {shallow} from "enzyme"

const render = (state = {}) => {
  const store = createMockStore(state)
  return shallow(<Footer store={store} />)
}

describe("containers <Footer />", () => {
  const state = {
    todos: [
      {id: 0, completed: false},
      {id: 1, completed: true},
      {id: 2, completed: false},
    ]
  }

  describe("when there are no completed items", () => {
    const state = {
      todos: [
        {id: 0, completed: false},
        {id: 1, completed: false},
        {id: 2, completed: false},
      ]
    }

    beforeEach(function () {
      this.component = render(state)
    })

    it("has the right uncompleted count", function () {
      expect(this.component.prop("count")).toEqual(3)
    })

    it("does not show the clear button", function () {
      expect(this.component.prop("showClear")).toEqual(false)
    })
  })

  describe("when there are completed items", () => {
    const state = {
      todos: [
        {id: 0, completed: false},
        {id: 1, completed: true},
        {id: 2, completed: false},
      ]
    }

    beforeEach(function () {
      this.component = render(state)
    })

    it("has the right uncompleted count", function () {
      expect(this.component.prop("count")).toEqual(2)
    })

    it("shows the clear button", function () {
      expect(this.component.prop("showClear")).toEqual(true)
    })
  })
})
