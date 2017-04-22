import React from "react"

export default function TodoItem({todo, toggleTodo, destroyTodo}) {
  const titleLabelId = `log-${todo.id}`
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle hand" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} aria-labelledby={`toggle-item-label ${titleLabelId}`} />
        <label id={titleLabelId}>{todo.title}</label>
        <button className="destroy hand" onClick={() => destroyTodo(todo.id)} aria-labelledby={`destroy-item-label ${titleLabelId}`}></button>
      </div>
    </li>
  )
}

TodoItem.propTypes = {
  todo: React.PropTypes.shape({
    completed: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
  }).isRequired,
  toggleTodo: React.PropTypes.func.isRequired,
  destroyTodo: React.PropTypes.func.isRequired,
}
