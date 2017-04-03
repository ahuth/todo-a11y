import todos from "../todos"
import {addTodo, clearCompleted, destroyTodo, toggleAll, toggleTodo} from "../../actions"

describe("reducers todos", () => {
  describe("for unknown actions", () => {
    const state = []

    it("returns the existing state", () => {
      expect(todos(state, {type: "WAT"})).toEqual(state)
    })
  })

  describe("for addTodo", () => {
    const state = [
      {id: 0, title: "zero", completed: false},
      {id: 1, title: "one", completed: false},
    ]

    it("adds the todo with an incremented id", () => {
      expect(todos(state, addTodo("two"))).toEqual([
        {id: 0, title: "zero", completed: false},
        {id: 1, title: "one", completed: false},
        {id: 2, title: "two", completed: false},
      ])
    })
  })

  describe("for clearCompleted", () => {
    const state = [
      {id: 0, title: "zero", completed: false},
      {id: 1, title: "one", completed: true},
      {id: 2, title: "two", completed: false},
    ]

    it("removes completed items", () => {
      expect(todos(state, clearCompleted())).toEqual([
        {id: 0, title: "zero", completed: false},
        {id: 2, title: "two", completed: false},
      ])
    })
  })

  describe("for destroyTodo", () => {
    const state = [
      {id: 0, title: "zero", completed: false},
      {id: 1, title: "one", completed: false},
      {id: 2, title: "two", completed: false},
    ]

    it("removes the item with the id", () => {
      expect(todos(state, destroyTodo(0))).toEqual([
        {id: 1, title: "one", completed: false},
        {id: 2, title: "two", completed: false},
      ])
    })
  })

  describe("for toggleAll", () => {
    describe("when all items are uncompleted", () => {
      const state = [
        {id: 0, title: "zero", completed: false},
        {id: 1, title: "one", completed: false},
        {id: 2, title: "two", completed: false},
      ]

      it("completes all items", () => {
        expect(todos(state, toggleAll())).toEqual([
          {id: 0, title: "zero", completed: true},
          {id: 1, title: "one", completed: true},
          {id: 2, title: "two", completed: true},
        ])
      })
    })

    describe("when some items are completed", () => {
      const state = [
        {id: 0, title: "zero", completed: false},
        {id: 1, title: "one", completed: true},
        {id: 2, title: "two", completed: true},
      ]

      it("completes all items", () => {
        expect(todos(state, toggleAll())).toEqual([
          {id: 0, title: "zero", completed: true},
          {id: 1, title: "one", completed: true},
          {id: 2, title: "two", completed: true},
        ])
      })
    })

    describe("when all items are completed", () => {
      const state = [
        {id: 0, title: "zero", completed: true},
        {id: 1, title: "one", completed: true},
        {id: 2, title: "two", completed: true},
      ]

      it("uncompletes all items", () => {
        expect(todos(state, toggleAll())).toEqual([
          {id: 0, title: "zero", completed: false},
          {id: 1, title: "one", completed: false},
          {id: 2, title: "two", completed: false},
        ])
      })
    })
  })

  describe("for toggleTodo", () => {
    const state = [
      {id: 0, title: "zero", completed: false},
      {id: 1, title: "one", completed: false},
      {id: 2, title: "two", completed: false},
    ]

    it("toggles 'completed' for the item with the id", () => {
      expect(todos(state, toggleTodo(1))).toEqual([
        {id: 0, title: "zero", completed: false},
        {id: 1, title: "one", completed: true},
        {id: 2, title: "two", completed: false},
      ])
    })
  })
})
