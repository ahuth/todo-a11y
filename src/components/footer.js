import React from "react"

export default function ({todos, clearCompleted}) {
  const uncompletedCount = todos.filter(todo => !todo.completed).length
  return (
    <footer className="footer">
      <span className="todo-count">{uncompletedCount} item{uncompletedCount !== 1 ? "s" : ""} left</span>
      {uncompletedCount < todos.length &&
        <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      }
    </footer>
  )
}
