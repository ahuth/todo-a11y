import React from "react"
import pluralize from "../utils/pluralize"

export default function ({todos, clearCompleted}) {
  const uncompletedCount = todos.filter(todo => !todo.completed).length
  return (
    <footer className="footer">
      <span className="todo-count">{uncompletedCount} {pluralize("item", uncompletedCount)} left</span>
      {uncompletedCount < todos.length &&
        <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      }
    </footer>
  )
}
