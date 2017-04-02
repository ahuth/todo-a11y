import React from "react"

export default function ({todo, toggleTodo, destroyTodo}) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <label>{todo.title}</label>
        <button className="destroy" onClick={() => destroyTodo(todo.id)}></button>
      </div>
    </li>
  )
}
