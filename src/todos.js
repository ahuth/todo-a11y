import React from "react"
import TodoItem from "./todo-item"

export default function ({todos, toggleTodo, destroyTodo}) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} destroyTodo={destroyTodo} />
        })}
      </ul>
    </section>
  )
}
