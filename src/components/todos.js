import React from "react"
import TodoItem from "./todo-item"

export default function Todos({todos, onToggleClick, onDestroyClick, onToggleAllClick}) {
  return (
    <section className="main">
      <input tabIndex="-1" className="toggle-all" type="checkbox" checked={todos.every(todo => todo.completed)} />
      <button className="hand" onClick={onToggleAllClick}>❯</button>
      <ul className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} toggleTodo={onToggleClick} destroyTodo={onDestroyClick} />
        })}
      </ul>
    </section>
  )
}

Todos.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onToggleClick: React.PropTypes.func.isRequired,
  onDestroyClick: React.PropTypes.func.isRequired,
  onToggleAllClick: React.PropTypes.func.isRequired,
}
