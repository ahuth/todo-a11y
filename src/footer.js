import React from "react"

export default function ({count}) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} item{count !== 1 ? "s" : ""} left</span>
    </footer>
  )
}
