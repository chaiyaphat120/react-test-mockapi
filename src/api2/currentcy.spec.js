import { convert } from "./currency"
it("converts USD to CAD", async () => {
    const rate  = await convert("USD" , "CAD")
    expect(rate).toEqual(1.2573417077)   //"CAD": 1.2573417077,
})
