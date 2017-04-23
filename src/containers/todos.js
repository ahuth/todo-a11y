import Todos from "../components/todos"
import {toggleAll, destroyTodo, toggleTodo} from "../actions"
import {connect} from "react-redux"

function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDestroyClick: (id) => { dispatch(destroyTodo(id)) },
    onToggleAllClick: () => { dispatch(toggleAll()) },
    onToggleClick: (id) => { dispatch(toggleTodo(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
