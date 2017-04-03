import React from "react"
import App from "components/app"
import Header from "containers/header"
import Footer from "containers/footer"
import Todos from "containers/todos"
import {shallow} from "enzyme"

const render = (options = {}) => {
  return shallow(
    <App showBody={options.showBody} />
  )
}

describe("components <App />", () => {
  describe("when showBody is false", () => {
    beforeEach(function () {
      this.component = render({showBody: false})
    })

    it("displays only a header", function () {
      expect(this.component.matchesElement(
        <div>
          <Header />
        </div>
      )).toBe(true)
    })
  })

  describe("when showBody is true", () => {
    beforeEach(function () {
      this.component = render({showBody: true})
    })

    it("displays everything", function () {
      expect(this.component.matchesElement(
        <div>
          <Header />
          <div>
            <Todos />
            <Footer />
          </div>
        </div>
      )).toBe(true)
    })
  })
})
