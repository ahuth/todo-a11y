import App from "components/app"
import {connect} from "react-redux"

function mapStateToProps(state) {
  return {
    showBody: state.todos.length > 0,
  }
}

export default connect(mapStateToProps)(App)
