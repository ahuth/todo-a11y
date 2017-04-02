import React from "react"
import TodoItem from "./todo-item"

export default function ({todos, onToggleClick, onDestroyClick, onToggleAllClick}) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" checked={todos.every(todo => todo.completed)} />
      <label onClick={onToggleAllClick}></label>
      <ul className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} toggleTodo={onToggleClick} destroyTodo={onDestroyClick} />
        })}
      </ul>
    </section>
  )
}
