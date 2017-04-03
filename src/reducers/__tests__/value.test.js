import value from "../value"
import {addTodo, changeHeader} from "../../actions"

describe("reducers value", () => {
  const state = "foobar"

  describe("for unknown actions", () => {
    it("returns the existing state", () => {
      expect(value(state, {type: "WAT"})).toEqual(state)
    })
  })

  describe("for addTodo", () => {
    it("returns an empty string", () => {
      expect(value(state, addTodo("baz"))).toEqual("")
    })
  })

  describe("for changeHeader", () => {
    it("returns the new value", () => {
      expect(value(state, changeHeader("baz"))).toEqual("baz")
    })
  })
})
