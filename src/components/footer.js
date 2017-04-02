import React from "react"

export default function ({count, total, clearCompleted}) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} item{count !== 1 ? "s" : ""} left</span>
      {count < total &&
        <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      }
    </footer>
  )
}
