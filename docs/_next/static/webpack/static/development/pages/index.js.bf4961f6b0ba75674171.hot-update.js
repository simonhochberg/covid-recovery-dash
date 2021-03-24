webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/RouteGrid/RouteGrid.tsx":
/*!************************************************!*\
  !*** ./src/components/RouteGrid/RouteGrid.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./src/components/index.ts\");\n/* harmony import */ var _useInfiniteScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useInfiniteScroll */ \"./src/components/RouteGrid/useInfiniteScroll.ts\");\n/* harmony import */ var _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteGrid.module.scss */ \"./src/components/RouteGrid/RouteGrid.module.scss\");\n/* harmony import */ var _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/RouteGrid/RouteGrid.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar pagination = 12;\n\nvar defaultFilter = function defaultFilter(x) {\n  return !!x;\n};\n\nvar defaultSortKey = function defaultSortKey(r) {\n  return r.id;\n};\n\nvar getDocumentElement = function getDocumentElement() {\n  if (typeof document !== \"undefined\") {\n    return document.documentElement;\n  }\n\n  return null;\n};\n\nvar RouteGrid = function RouteGrid(props) {\n  _s();\n\n  var data = props.data,\n      sortKey = props.sortKey,\n      _props$filter = props.filter,\n      filter = _props$filter === void 0 ? defaultFilter : _props$filter;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(pagination),\n      limit = _useState[0],\n      setLimit = _useState[1];\n\n  var availableItems = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return Object.values(data).filter(filter).sort(function (a, b) {\n      return sortKey(a) - sortKey(b);\n    });\n  }, [data, filter]);\n  var shownItems = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return availableItems.slice(0, limit);\n  }, [availableItems, limit]);\n  Object(_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_2__[\"useInfiniteScroll\"])({\n    element: getDocumentElement(),\n    enabled: limit < availableItems.length,\n    scrollTolerance: 1000,\n    onRequestMoreItems: function onRequestMoreItems() {\n      return setLimit(function (l) {\n        return l + pagination;\n      });\n    }\n  });\n  return __jsx(\"div\", {\n    className: _RouteGrid_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.routeGrid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, shownItems.map(function (item) {\n    return __jsx(components__WEBPACK_IMPORTED_MODULE_1__[\"RouteCard\"], {\n      routeData: item,\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }\n    });\n  }));\n};\n\n_s(RouteGrid, \"rGhpGVoFkOvZtpFIweXrwLnTtoc=\", false, function () {\n  return [_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_2__[\"useInfiniteScroll\"]];\n});\n\n_c = RouteGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RouteGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"RouteGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZUdyaWQvUm91dGVHcmlkLnRzeD9iZDVkIl0sIm5hbWVzIjpbInBhZ2luYXRpb24iLCJkZWZhdWx0RmlsdGVyIiwieCIsImRlZmF1bHRTb3J0S2V5IiwiciIsImlkIiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJSb3V0ZUdyaWQiLCJwcm9wcyIsImRhdGEiLCJzb3J0S2V5IiwiZmlsdGVyIiwidXNlU3RhdGUiLCJsaW1pdCIsInNldExpbWl0IiwiYXZhaWxhYmxlSXRlbXMiLCJ1c2VNZW1vIiwiT2JqZWN0IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwic2hvd25JdGVtcyIsInNsaWNlIiwidXNlSW5maW5pdGVTY3JvbGwiLCJlbGVtZW50IiwiZW5hYmxlZCIsImxlbmd0aCIsInNjcm9sbFRvbGVyYW5jZSIsIm9uUmVxdWVzdE1vcmVJdGVtcyIsImwiLCJzdHlsZXMiLCJyb3V0ZUdyaWQiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQVFBLElBQU1BLFVBQVUsR0FBRyxFQUFuQjs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQ7QUFBQSxTQUFPLENBQUMsQ0FBQ0EsQ0FBVDtBQUFBLENBQXRCOztBQUNBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRDtBQUFBLFNBQWtCQSxDQUFDLENBQUNDLEVBQXBCO0FBQUEsQ0FBdkI7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLE1BQUksT0FBT0MsUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNqQyxXQUFPQSxRQUFRLENBQUNDLGVBQWhCO0FBQ0g7O0FBQ0QsU0FBTyxJQUFQO0FBQ0gsQ0FMRDs7QUFPQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQWtCO0FBQUE7O0FBQUEsTUFDeEJDLElBRHdCLEdBQ2tCRCxLQURsQixDQUN4QkMsSUFEd0I7QUFBQSxNQUNsQkMsT0FEa0IsR0FDa0JGLEtBRGxCLENBQ2xCRSxPQURrQjtBQUFBLHNCQUNrQkYsS0FEbEIsQ0FDVEcsTUFEUztBQUFBLE1BQ1RBLE1BRFMsOEJBQ0FaLGFBREE7O0FBQUEsa0JBRU5hLHNEQUFRLENBQUNkLFVBQUQsQ0FGRjtBQUFBLE1BRXpCZSxLQUZ5QjtBQUFBLE1BRWxCQyxRQUZrQjs7QUFJaEMsTUFBTUMsY0FBYyxHQUFHQyxxREFBTyxDQUMxQjtBQUFBLFdBQ0lDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVCxJQUFkLEVBQ0tFLE1BREwsQ0FDWUEsTUFEWixFQUVLUSxJQUZMLENBRVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBVVgsT0FBTyxDQUFDVSxDQUFELENBQVAsR0FBYVYsT0FBTyxDQUFDVyxDQUFELENBQTlCO0FBQUEsS0FGVixDQURKO0FBQUEsR0FEMEIsRUFLMUIsQ0FBQ1osSUFBRCxFQUFPRSxNQUFQLENBTDBCLENBQTlCO0FBT0EsTUFBTVcsVUFBVSxHQUFHTixxREFBTyxDQUFDO0FBQUEsV0FBTUQsY0FBYyxDQUFDUSxLQUFmLENBQXFCLENBQXJCLEVBQXdCVixLQUF4QixDQUFOO0FBQUEsR0FBRCxFQUF1QyxDQUFDRSxjQUFELEVBQWlCRixLQUFqQixDQUF2QyxDQUExQjtBQUVBVyw4RUFBaUIsQ0FBQztBQUNkQyxXQUFPLEVBQUVyQixrQkFBa0IsRUFEYjtBQUVkc0IsV0FBTyxFQUFFYixLQUFLLEdBQUdFLGNBQWMsQ0FBQ1ksTUFGbEI7QUFHZEMsbUJBQWUsRUFBRSxJQUhIO0FBSWRDLHNCQUFrQixFQUFFO0FBQUEsYUFBTWYsUUFBUSxDQUFDLFVBQUNnQixDQUFEO0FBQUEsZUFBT0EsQ0FBQyxHQUFHaEMsVUFBWDtBQUFBLE9BQUQsQ0FBZDtBQUFBO0FBSk4sR0FBRCxDQUFqQjtBQU9BLFNBQ0k7QUFBSyxhQUFTLEVBQUVpQyw2REFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tWLFVBQVUsQ0FBQ1csR0FBWCxDQUFlLFVBQUNDLElBQUQ7QUFBQSxXQUNaLE1BQUMsb0RBQUQ7QUFBVyxlQUFTLEVBQUVBLElBQXRCO0FBQTRCLFNBQUcsRUFBRUEsSUFBSSxDQUFDL0IsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURZO0FBQUEsR0FBZixDQURMLENBREo7QUFPSCxDQTNCRDs7R0FBTUksUztVQWFGaUIsb0U7OztLQWJFakIsUztBQTZCU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Sb3V0ZUdyaWQvUm91dGVHcmlkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBSb3V0ZUNhcmQgfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUm91dGVEYXRhIH0gZnJvbSBcInR5cGVzXCI7XG5cbmltcG9ydCB7IHVzZUluZmluaXRlU2Nyb2xsIH0gZnJvbSBcIi4vdXNlSW5maW5pdGVTY3JvbGxcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUm91dGVHcmlkLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgZGF0YTogUmVjb3JkPHN0cmluZywgUm91dGVEYXRhPjtcbiAgICBmaWx0ZXI/OiAocjogUm91dGVEYXRhKSA9PiBib29sZWFuO1xuICAgIHNvcnRLZXk/OiAocjogUm91dGVEYXRhKSA9PiBzdHJpbmcgfCBudW1iZXI7XG59O1xuXG5jb25zdCBwYWdpbmF0aW9uID0gMTI7XG5jb25zdCBkZWZhdWx0RmlsdGVyID0gKHgpID0+ICEheDtcbmNvbnN0IGRlZmF1bHRTb3J0S2V5ID0gKHI6IFJvdXRlRGF0YSkgPT4gci5pZDtcblxuY29uc3QgZ2V0RG9jdW1lbnRFbGVtZW50ID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBSb3V0ZUdyaWQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBzb3J0S2V5LCBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyIH0gPSBwcm9wcztcbiAgICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKHBhZ2luYXRpb24pO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlSXRlbXMgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZmlsdGVyKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBzb3J0S2V5KGEpIC0gc29ydEtleShiKSksXG4gICAgICAgIFtkYXRhLCBmaWx0ZXJdXG4gICAgKTtcbiAgICBjb25zdCBzaG93bkl0ZW1zID0gdXNlTWVtbygoKSA9PiBhdmFpbGFibGVJdGVtcy5zbGljZSgwLCBsaW1pdCksIFthdmFpbGFibGVJdGVtcywgbGltaXRdKTtcblxuICAgIHVzZUluZmluaXRlU2Nyb2xsKHtcbiAgICAgICAgZWxlbWVudDogZ2V0RG9jdW1lbnRFbGVtZW50KCksXG4gICAgICAgIGVuYWJsZWQ6IGxpbWl0IDwgYXZhaWxhYmxlSXRlbXMubGVuZ3RoLFxuICAgICAgICBzY3JvbGxUb2xlcmFuY2U6IDEwMDAsXG4gICAgICAgIG9uUmVxdWVzdE1vcmVJdGVtczogKCkgPT4gc2V0TGltaXQoKGwpID0+IGwgKyBwYWdpbmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm91dGVHcmlkfT5cbiAgICAgICAgICAgIHtzaG93bkl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSb3V0ZUNhcmQgcm91dGVEYXRhPXtpdGVtfSBrZXk9e2l0ZW0uaWR9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlR3JpZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/RouteGrid/RouteGrid.tsx\n");

/***/ })

})