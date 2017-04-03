import React from "react"
import Todos from "components/todos"
import {shallow} from "enzyme"

const render = (options = {}) => {
  const func = () => {}
  const defaults = {todos: [], onDestroyClick: func, onToggleClick: func, onToggleAllClick: func}
  const props = Object.assign(defaults, options)
  return shallow(
    <Todos {...props} />
  )
}

describe("components <Todos />", () => {
  describe("the toggle-all checkbox", () => {
    const checkbox = component => component.find(".toggle-all")

    describe("when some todos are not completed", () => {
      beforeEach(function () {
        this.component = render({
          todos: [{id: 1, title: "one", completed: false}]
        })
      })

      it("is unchecked", function () {
        expect(checkbox(this.component).prop("checked")).toBe(false)
      })
    })

    describe("when all todos are completed", () => {
      beforeEach(function () {
        this.component = render({
          todos: [{id: 1, title: "one", completed: true}]
        })
      })

      it("is checked", function () {
        expect(checkbox(this.component).prop("checked")).toBe(true)
      })
    })
  })

  describe("the todos list", () => {
    const list = component => component.find(".todo-list")

    beforeEach(function () {
      this.component = render({
        todos: [
          {id: 1, title: "one", completed: false},
          {id: 2, title: "two", completed: false},
        ]
      })
    })

    it("contains all of the todos", function () {
      const items = list(this.component).find("TodoItem")
      const titles = items.map(item => item.prop("todo").title)
      expect(titles).toEqual(["one", "two"])
    })
  })
})
