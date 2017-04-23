import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/app"
import store from "./store"
import {Provider} from "react-redux"
import "todomvc-app-css/index.css"
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

if (module.hot) {
  module.hot.accept("./containers/app", () => {
    const NextApp = require("./containers/app").default
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      document.getElementById("root")
    )
  })
}
