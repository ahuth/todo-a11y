import React from "react"

export default function Header({value, onChange, onKeyPress}) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </header>
  )
}

Header.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onKeyPress: React.PropTypes.func.isRequired,
}
