"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = convertAxios;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// async function convertFetch(base, destination) {
//     const result = await fetch(
//         `https://api.exchangeratesapi.io/latest?base=${base}`
//     )
//     if (!result.ok) {
//         throw new Error(`Request failed with status code ${result.status}`)
//     }
//     const data = await result.json()
//     return data.rates[destination]
// }
function convertAxios(base, destination) {
  var result;
  return regeneratorRuntime.async(function convertAxios$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.exchangeratesapi.io/latest?base=".concat(base)));

        case 2:
          result = _context.sent;
          return _context.abrupt("return", result.data.rates[destination]);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}