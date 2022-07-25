"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var React = require("react");
require("./sideBarComponent.css");
var CheckBoxOutlineBlank_1 = require("@mui/icons-material/CheckBoxOutlineBlank");
var CheckBox_1 = require("@mui/icons-material/CheckBox");
function SideBarComponent() {
    var testData = require('./testData.json');
    var icon = React.createElement(CheckBoxOutlineBlank_1["default"], { fontSize: "small" });
    var checkedIcon = React.createElement(CheckBox_1["default"], { fontSize: "small" });
    var traceIds = [];
    testData.map(function (data) { return (traceIds.push(data.trace_id)); });
    return (React.createElement("div", { className: "sidebar" }, React.createElement("div", { className: 'filters' }, React.createElement("h3", { className: "w3-bar-item" }, "DevMode"), React.createElement(material_1.Button, { variant: "contained" }, "Refresh"), React.createElement("h3", null, "Filters"), React.createElement(material_1.TextField, { label: "Trace id", variant: "filled", color: "success", focused: true, className: "filter" }), React.createElement(material_1.TextField, { label: "Parent id", variant: "filled", color: "success", focused: true, className: "filter" }))));
}
exports["default"] = SideBarComponent;
