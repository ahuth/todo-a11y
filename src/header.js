import React from "react"

export default function ({value, onChange}) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" value={value} onChange={onChange}></input>
    </header>
  )
}
