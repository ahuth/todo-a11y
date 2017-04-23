import Header from "../components/header"
import {ENTER} from "../utils/key-codes"
import {changeHeader, addTodo} from "../actions"
import {connect} from "react-redux"

function mapStateToProps(state) {
  return {
    value: state.value,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (event) => { dispatch(changeHeader(event.target.value)) },
    onKeyPress: (event) => {
      if (event.charCode === ENTER) {
        dispatch(addTodo(event.target.value))
      }
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
