import React from "react"
import HeaderContainer from "../containers/header"
import FooterContainer from "../containers/footer"
import TodosContainer from "../containers/todos"
import {connect} from "react-redux"

function App({showBody}) {
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

function mapStateToProps(state) {
  return {
    showBody: state.todos.length > 0,
  }
}

export default connect(mapStateToProps)(App)
