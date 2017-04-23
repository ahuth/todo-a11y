import Footer from "../components/footer"
import {clearCompleted} from "../actions"
import {connect} from "react-redux"

function mapStateToProps(state) {
  const uncompletedCount = state.todos.filter(todo => !todo.completed).length
  const areCompleted = uncompletedCount < state.todos.length
  return {
    count: uncompletedCount,
    showClear: areCompleted
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClearClick: () => { dispatch(clearCompleted()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
