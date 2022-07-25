"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var React = require("react");
var spanCardComponent_1 = require("../spanCard/dist/spanCardComponent");
require("./spanPageContents.css");
function SpanPageContentsComponent() {
    var testData = require('./testData.json');
    return (React.createElement("div", { className: "contents" }, React.createElement(material_1.Pagination, { count: 10, size: "large" }), React.createElement("h1", null, "Traces"), testData.map(function (data) { return (React.createElement(spanCardComponent_1["default"], { data: data })); })));
}
exports["default"] = SpanPageContentsComponent;
;
