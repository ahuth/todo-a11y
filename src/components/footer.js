import React from "react"
import pluralize from "../utils/pluralize"

export default function ({todos, clearCompleted}) {
  const uncompletedCount = todos.filter(todo => !todo.completed).length
  const areCompleted = uncompletedCount < todos.length
  return (
    <footer className="footer">
      <span className="todo-count">{uncompletedCount} {pluralize("item", uncompletedCount)} left</span>
      {areCompleted &&
        <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      }
    </footer>
  )
}
