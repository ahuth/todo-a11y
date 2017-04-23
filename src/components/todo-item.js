import React from "react"

export default function TodoItem({todo, toggleTodo, destroyTodo}) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle hand"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.title}</label>
        <button
          className="destroy hand"
          onClick={() => destroyTodo(todo.id)}
        >
        </button>
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
