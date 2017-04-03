import initialState from "./initial-state";
import {actionTypes} from "constants";

export default function (state = initialState.value, action) {
  switch (action.type) {
    case actionTypes.HEADER_CHANGE:
      return action.payload.value
    case actionTypes.TODO_ADD:
      return ""
    default:
      return state
  }
}
