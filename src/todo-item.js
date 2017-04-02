import React from "react"

export default function ({todo, toggleTodo}) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <label>{todo.title}</label>
      </div>
    </li>
  )
}
