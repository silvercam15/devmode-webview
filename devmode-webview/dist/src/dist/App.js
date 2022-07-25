"use strict";
exports.__esModule = true;
require("./App.css");
var sideBarComponent_1 = require("./sideBarComponent/sideBarComponent");
var React = require("react");
var spanPageContentComponent_1 = require("./spanPageContents/spanPageContentComponent");
function App() {
    return (React.createElement("div", { className: "App" }, React.createElement(sideBarComponent_1["default"], null), React.createElement(spanPageContentComponent_1["default"], null)));
}
exports["default"] = App;
