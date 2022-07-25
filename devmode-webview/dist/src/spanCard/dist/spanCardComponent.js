"use strict";
exports.__esModule = true;
var React = require("react");
var Card_1 = require("@mui/material/Card");
var Typography_1 = require("@mui/material/Typography");
var Accordion_1 = require("@mui/material/Accordion");
var AccordionSummary_1 = require("@mui/material/AccordionSummary");
var AccordionDetails_1 = require("@mui/material/AccordionDetails");
var ExpandMore_1 = require("@mui/icons-material/ExpandMore");
require("./styles.css");
function SpanCardComponent(data) {
    var start = new Date(data.data.start_time * 1000);
    var end = new Date(data.data.end_time * 1000);
    var duration = new Date(data.data.end_time - data.data.start_time * 1000);
    return (React.createElement(Card_1["default"], { sx: { minWidth: 275 } }, React.createElement("div", { className: 'card' }, React.createElement("div", null, React.createElement(Typography_1["default"], { className: 'name' }, data.data.name), React.createElement("div", { className: 'cardTimes' }, React.createElement(Typography_1["default"], { sx: { fontSize: 14 }, color: "text.secondary", gutterBottom: true }, "Start: ", start.toTimeString()), React.createElement(Typography_1["default"], { sx: { fontSize: 14 }, color: "text.secondary", gutterBottom: true }, "End: ", end.toTimeString()), React.createElement(Typography_1["default"], { sx: { fontSize: 14 }, color: "text.secondary", gutterBottom: true }, "Duration: ", duration.toTimeString())), React.createElement(Typography_1["default"], { sx: { mb: 1.5 }, color: "text.secondary" }, "trace id: ", data.data.trace_id), React.createElement(Typography_1["default"], { sx: { mb: 1.5 }, color: "text.secondary" }, "span id: ", data.data.span_id), React.createElement(Typography_1["default"], { sx: { mb: 1.5 }, color: "text.secondary" }, "parent: ", data.data.parent_id)), React.createElement("div", { className: 'accordion' }, data.data.attributes && React.createElement(Accordion_1["default"], null, React.createElement(AccordionSummary_1["default"], { expandIcon: React.createElement(ExpandMore_1["default"], null), "aria-controls": "panel1a-content", id: "panel1a-header" }, React.createElement(Typography_1["default"], null, "Attributes")), React.createElement(AccordionDetails_1["default"], null, React.createElement(Typography_1["default"], null, data.data.attributes))), data.data.resource_attributes && React.createElement(Accordion_1["default"], null, React.createElement(AccordionSummary_1["default"], { expandIcon: React.createElement(ExpandMore_1["default"], null), "aria-controls": "panel2a-content", id: "panel2a-header" }, React.createElement(Typography_1["default"], null, "Resources")), React.createElement(AccordionDetails_1["default"], null, React.createElement(Typography_1["default"], null, data.data.resource_attributes)))))));
}
exports["default"] = SpanCardComponent;
