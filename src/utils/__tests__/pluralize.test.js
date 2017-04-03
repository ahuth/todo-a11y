import pluralize from "utils/pluralize"

describe("pluralize", () => {
  it("pluralizes 0", () => {
    expect(pluralize("foobar", 0)).toEqual("foobars")
  })

  it("does not pluralize 1", () => {
    expect(pluralize("foobar", 1)).toEqual("foobar")
  })

  it("pluralizes anything over 2", () => {
    expect(pluralize("foobar", 2)).toEqual("foobars")
  })
})
