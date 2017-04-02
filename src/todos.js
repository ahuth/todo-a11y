import React from "react"
import TodoItem from "./todo-item"

export default function ({todos}) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {todos.map(({id, title, completed}) => <TodoItem key={id} title={title} completed={completed} />)}
      </ul>
    </section>
  )
}
