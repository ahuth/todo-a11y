import React from "react"

export default function ({title, completed}) {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{title}</label>
      </div>
    </li>
  )
}
