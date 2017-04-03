import React from "react"
import Footer from "components/footer"
import {shallow} from "enzyme"

const render = (options = {}) => {
  const defaults = {count: 0, onClearClick: () => {}}
  const props = Object.assign(defaults, options)
  return shallow(
    <Footer {...props} />
  )
}

describe("components footer", () => {
  describe("when showClear is false", () => {
    beforeEach(function () {
      this.component = render({showClear: false})
    })

    it("does not have a clear button", function () {
      expect(this.component.matchesElement(
        <footer>
          <span>0 items left</span>
        </footer>
      )).toBe(true)
    })
  })

  describe("when showClear is true", () => {
    beforeEach(function () {
      this.component = render({showClear: true})
    })

    it("does not have a clear button", function () {
      expect(this.component.matchesElement(
        <footer>
          <span>0 items left</span>
          <button>Clear completed</button>
        </footer>
      )).toBe(true)
    })
  })
})
