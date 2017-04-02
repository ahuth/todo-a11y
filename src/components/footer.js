import React from "react"
import pluralize from "../utils/pluralize"

export default function ({onClearClick, count, showClear}) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} {pluralize("item", count)} left</span>
      {showClear &&
        <button className="clear-completed" onClick={onClearClick}>Clear completed</button>
      }
    </footer>
  )
}
