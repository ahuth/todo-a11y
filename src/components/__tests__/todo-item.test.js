import React from "react"
import TodoItem from "components/todo-item"
import {shallow} from "enzyme"

const render = (options = {}) => {
  const todo = {id: 666, title: "Get coffee", completed: true}
  const defaults = {todo: todo, toggleTodo: () => {}, destroyTodo: () => {}}
  const props = Object.assign(defaults, options)
  return shallow(
    <TodoItem {...props} />
  )
}

describe("components <TodoItem />", () => {
  beforeEach(function () {
    this.component = render()
  })

  it("renders correctly", function () {
    expect(this.component.matchesElement(
      <li>
        <div>
          <input type="checkbox" checked={true} />
          <label>Get coffee</label>
          <button></button>
        </div>
      </li>
    )).toBe(true)
  })
})
