import React from "react"
import TodoItem from "./todo-item"

export default function ({todos, toggleTodo, destroyTodo, toggleAll}) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" checked={todos.every(todo => todo.completed)} />
      <label onClick={toggleAll}></label>
      <ul className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} destroyTodo={destroyTodo} />
        })}
      </ul>
    </section>
  )
}
