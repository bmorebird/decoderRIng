const {expect} = require("chai")
const {caesar} = require("../src/caesar")

describe ("caesar()", () => {
  
  it("If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {
    const expected = false 
    const actual = caesar("Paul",55,true)
    expect(actual).to.equal(expected)
  })
  
  it("should decode a shifted message", () => {
    const expected = "tii"
    const actual =  caesar("zoo", 20, true)
    expect(actual).to.equal(expected)
  })

  it("should ignore capitol letters", () => {
    const expected = 'this is a secret message!'
    const actual = caesar('bpqa qa i amkzmb umaaiom!', 8, false)
    expect(actual).to.equal(expected)
  })
  
  it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    const expected = 'this is a secret message!'
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
    expect(actual).to.equal(expected)
  })
  
  
  
})