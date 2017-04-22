import React from "react"
import TodoItem from "./todo-item"

export default function Todos({todos, onToggleClick, onDestroyClick, onToggleAllClick}) {
  return (
    <section className="main">
      <input className="toggle-all hand" type="checkbox" checked={todos.every(todo => todo.completed)} onClick={onToggleAllClick} aria-labelledby="toggle-all-label" />
      <ul className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} toggleTodo={onToggleClick} destroyTodo={onDestroyClick} />
        })}
      </ul>
      <span hidden id="toggle-all-label">Toggle All</span>
      <span hidden id="toggle-item-label">Toggle</span>
      <span hidden id="destroy-item-label">Destroy</span>
    </section>
  )
}

Todos.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onToggleClick: React.PropTypes.func.isRequired,
  onDestroyClick: React.PropTypes.func.isRequired,
  onToggleAllClick: React.PropTypes.func.isRequired,
}
