"use strict";

var _currency = require("./currency");

jest.mock("./currency", function () {
  return {
    convert: jest.fn().mockImplementation(function () {
      return 1.42;
    })
  };
});
it("converts USD to CAD", function _callee() {
  var rate;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _currency.convert)("USD", "CAD"));

        case 2:
          rate = _context.sent;
          expect(rate).toEqual(undefined); //"CAD": 1.2573417077,
          // expect(fetch).toHaveBeenCalledTimes(1)

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});