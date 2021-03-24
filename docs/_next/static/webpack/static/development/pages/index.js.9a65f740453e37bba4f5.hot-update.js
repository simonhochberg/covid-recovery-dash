webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/RouteCard/TphChart.tsx":
/*!***********************************************!*\
  !*** ./src/components/RouteCard/TphChart.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-color */ \"./node_modules/chartjs-color/index.js\");\n/* harmony import */ var chartjs_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_color__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! time */ \"./src/time.ts\");\n/* harmony import */ var _RouteCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RouteCard.module.scss */ \"./src/components/RouteCard/RouteCard.module.scss\");\n/* harmony import */ var _RouteCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_RouteCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ian/transitmatters/mbta-covid-dash/src/components/RouteCard/TphChart.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar lineTickValues = Object(time__WEBPACK_IMPORTED_MODULE_3__[\"getHourlyTickValues\"])(1);\n\nvar TphChart = function TphChart(props) {\n  _s();\n\n  var color = props.color,\n      baselineTph = props.baselineTph,\n      currentTph = props.currentTph,\n      highestTph = props.highestTph;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var ctx = canvasRef.current.getContext(\"2d\");\n    var currentColor = chartjs_color__WEBPACK_IMPORTED_MODULE_2___default()(color).alpha(0.4).rgbString();\n    var datasets = [{\n      label: \"Pre-COVID trips per hour\",\n      data: baselineTph,\n      steppedLine: true,\n      borderColor: color,\n      borderWidth: 2,\n      backgroundColor: \"rgba(0,0,0,0)\"\n    }, {\n      label: \"Current trips per hour\",\n      data: currentTph,\n      steppedLine: true,\n      borderWidth: 2,\n      borderColor: \"rgba(0,0,0,0)\",\n      backgroundColor: currentColor\n    }];\n    var chart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, {\n      type: \"line\",\n      data: {\n        labels: lineTickValues,\n        datasets: datasets\n      },\n      options: {\n        maintainAspectRatio: false,\n        animation: {\n          duration: 0\n        },\n        legend: {\n          position: \"top\",\n          align: \"end\",\n          labels: {\n            boxWidth: 15\n          }\n        },\n        scales: {\n          xAxes: [{\n            gridLines: {\n              display: false\n            },\n            ticks: {\n              maxTicksLimit: 12,\n              maxRotation: 0\n            }\n          }],\n          yAxes: [{\n            gridLines: {\n              display: false\n            },\n            ticks: {\n              maxTicksLimit: 4,\n              suggestedMax: highestTph\n            }\n          }]\n        },\n        tooltips: {\n          mode: \"index\",\n          intersect: false,\n          callbacks: {\n            label: function label(_ref) {\n              var datasetIndex = _ref.datasetIndex,\n                  index = _ref.index;\n              var _datasets$datasetInde = datasets[datasetIndex],\n                  label = _datasets$datasetInde.label,\n                  data = _datasets$datasetInde.data;\n              return \"\".concat(label, \": \").concat(data[index], \" (each direction)\");\n            }\n          }\n        },\n        elements: {\n          line: {\n            tension: 0\n          },\n          point: {\n            radius: 0\n          }\n        }\n      }\n    });\n    return function () {\n      return chart.destroy();\n    };\n  }, [baselineTph, currentTph]);\n  return __jsx(\"div\", {\n    className: _RouteCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tphChartContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }, __jsx(\"canvas\", {\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(TphChart, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = TphChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TphChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"TphChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZUNhcmQvVHBoQ2hhcnQudHN4P2Q3ZDUiXSwibmFtZXMiOlsibGluZVRpY2tWYWx1ZXMiLCJnZXRIb3VybHlUaWNrVmFsdWVzIiwiVHBoQ2hhcnQiLCJwcm9wcyIsImNvbG9yIiwiYmFzZWxpbmVUcGgiLCJjdXJyZW50VHBoIiwiaGlnaGVzdFRwaCIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN0eCIsImN1cnJlbnQiLCJnZXRDb250ZXh0IiwiY3VycmVudENvbG9yIiwiQ29sb3IiLCJhbHBoYSIsInJnYlN0cmluZyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwic3RlcHBlZExpbmUiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhcnQiLCJDaGFydCIsInR5cGUiLCJsYWJlbHMiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwibGVnZW5kIiwicG9zaXRpb24iLCJhbGlnbiIsImJveFdpZHRoIiwic2NhbGVzIiwieEF4ZXMiLCJncmlkTGluZXMiLCJkaXNwbGF5IiwidGlja3MiLCJtYXhUaWNrc0xpbWl0IiwibWF4Um90YXRpb24iLCJ5QXhlcyIsInN1Z2dlc3RlZE1heCIsInRvb2x0aXBzIiwibW9kZSIsImludGVyc2VjdCIsImNhbGxiYWNrcyIsImRhdGFzZXRJbmRleCIsImluZGV4IiwiZWxlbWVudHMiLCJsaW5lIiwidGVuc2lvbiIsInBvaW50IiwicmFkaXVzIiwiZGVzdHJveSIsInN0eWxlcyIsInRwaENoYXJ0Q29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxnRUFBbUIsQ0FBQyxDQUFELENBQTFDOztBQVNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUND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RUFBRTtBQUFWO0FBRkQ7QUF0Q0w7QUFOZ0IsS0FBZixDQUFkO0FBa0RBLFdBQU87QUFBQSxhQUFNL0IsS0FBSyxDQUFDZ0MsT0FBTixFQUFOO0FBQUEsS0FBUDtBQUNILEdBMUVRLEVBMEVOLENBQUNwRCxXQUFELEVBQWNDLFVBQWQsQ0ExRU0sQ0FBVDtBQTRFQSxTQUNJO0FBQUssYUFBUyxFQUFFb0QsNkRBQU0sQ0FBQ0MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLE9BQUcsRUFBRW5ELFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUFLSCxDQXJGRDs7R0FBTU4sUTs7S0FBQUEsUTtBQXVGU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Sb3V0ZUNhcmQvVHBoQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcImNoYXJ0anMtY29sb3JcIjtcblxuaW1wb3J0IHsgVHJpcHNQZXJIb3VyIH0gZnJvbSBcInR5cGVzXCI7XG5pbXBvcnQgeyBnZXRIb3VybHlUaWNrVmFsdWVzIH0gZnJvbSBcInRpbWVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Sb3V0ZUNhcmQubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgbGluZVRpY2tWYWx1ZXMgPSBnZXRIb3VybHlUaWNrVmFsdWVzKDEpO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGJhc2VsaW5lVHBoOiBUcmlwc1BlckhvdXI7XG4gICAgY3VycmVudFRwaDogVHJpcHNQZXJIb3VyO1xuICAgIGhpZ2hlc3RUcGg6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xufTtcblxuY29uc3QgVHBoQ2hhcnQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjb2xvciwgYmFzZWxpbmVUcGgsIGN1cnJlbnRUcGgsIGhpZ2hlc3RUcGggfSA9IHByb3BzO1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzUmVmLmN1cnJlbnQhLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudENvbG9yID0gQ29sb3IoY29sb3IpLmFscGhhKDAuNCkucmdiU3RyaW5nKCk7XG5cbiAgICAgICAgY29uc3QgZGF0YXNldHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUHJlLUNPVklEIHRyaXBzIHBlciBob3VyXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogYmFzZWxpbmVUcGggYXMgYW55LFxuICAgICAgICAgICAgICAgIHN0ZXBwZWRMaW5lOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJDdXJyZW50IHRyaXBzIHBlciBob3VyXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogY3VycmVudFRwaCBhcyBhbnksXG4gICAgICAgICAgICAgICAgc3RlcHBlZExpbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY3VycmVudENvbG9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBjaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVsczogbGluZVRpY2tWYWx1ZXMsXG4gICAgICAgICAgICAgICAgZGF0YXNldHMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMCB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogeyBib3hXaWR0aDogMTUgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogeyBkaXNwbGF5OiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3RhdGlvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHsgZGlzcGxheTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0ZWRNYXg6IGhpZ2hlc3RUcGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICh7IGRhdGFzZXRJbmRleCwgaW5kZXggfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbGFiZWwsIGRhdGEgfSA9IGRhdGFzZXRzW2RhdGFzZXRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2xhYmVsfTogJHtkYXRhW2luZGV4XX0gKGVhY2ggZGlyZWN0aW9uKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZTogeyB0ZW5zaW9uOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB7IHJhZGl1czogMCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNoYXJ0LmRlc3Ryb3koKTtcbiAgICB9LCBbYmFzZWxpbmVUcGgsIGN1cnJlbnRUcGhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHBoQ2hhcnRDb250YWluZXJ9PlxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRwaENoYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RouteCard/TphChart.tsx\n");

/***/ })

})