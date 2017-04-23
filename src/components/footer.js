import React from "react"
import pluralize from "../utils/pluralize"

export default function Footer({onClearClick, count, showClear}) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} {pluralize("item", count)} left</span>
      {showClear &&
        <button className="clear-completed hand" onClick={onClearClick}>Clear completed</button>
      }
    </footer>
  )
}

Footer.propTypes = {
  onClearClick: React.PropTypes.func.isRequired,
  count: React.PropTypes.number.isRequired,
  showClear: React.PropTypes.bool,
}
