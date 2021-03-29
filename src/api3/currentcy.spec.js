import { convert } from "./currency"

describe("test current cy axios", () => {
    jest.mock("./currency", () => {
        return {
            convert: jest.fn().mockImplementation(() => 1.42),
        }
    })
    it("converts USD to CAD", async () => {
        const rate = await convert("USD", "HKD")
        expect(rate).toEqual(7.5) //"CAD": 1.2573417077,
        // expect(fetch).toHaveBeenCalledTimes(1)
    })
})
