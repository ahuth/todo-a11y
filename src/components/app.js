import React from "react"
import HeaderContainer from "../containers/header"
import FooterContainer from "../containers/footer"
import TodosContainer from "../containers/todos"

export default function App({showBody}) {
  return (
    <div className="todoapp">
      <HeaderContainer />
      {showBody &&
        <div>
          <TodosContainer />
          <FooterContainer />
        </div>
      }
    </div>
  )
}

App.propTypes = {
  showBody: React.PropTypes.bool,
}
