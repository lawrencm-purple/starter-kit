"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_svg_1 = require("./assets/react.svg");
var vite_svg_1 = require("/vite.svg");
require("./App.css");
function App() {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("a", { href: "https://vite.dev", target: "_blank" },
                React.createElement("img", { src: vite_svg_1.default, className: "logo", alt: "Vite logo" })),
            React.createElement("a", { href: "https://react.dev", target: "_blank" },
                React.createElement("img", { src: react_svg_1.default, className: "logo react", alt: "React logo" }))),
        React.createElement("h1", null, "Vite + React"),
        React.createElement("div", { className: "card" },
            React.createElement("button", { onClick: function () { return setCount(function (count) { return count + 1; }); } },
                "count is ",
                count),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to test HMR")),
        React.createElement("p", { className: "read-the-docs" }, "Click on the Vite and React logos to learn more")));
}
exports.default = App;
