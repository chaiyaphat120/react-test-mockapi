import { convert } from "./currency"

jest.mock("./currency", () => {
    return {
      convert: jest.fn().mockImplementation(() => 1.42),
    };
  });

it("converts USD to CAD", async () => {
    const rate = await convert("USD", "CAD")
    expect(rate).toEqual(undefined) //"CAD": 1.2573417077,
    // expect(fetch).toHaveBeenCalledTimes(1)
})
