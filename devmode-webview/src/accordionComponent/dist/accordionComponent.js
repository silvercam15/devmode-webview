"use strict";
exports.__esModule = true;
var React = require("react");
var Accordion_1 = require("@mui/material/Accordion");
var AccordionSummary_1 = require("@mui/material/AccordionSummary");
var AccordionDetails_1 = require("@mui/material/AccordionDetails");
var Typography_1 = require("@mui/material/Typography");
var ExpandMore_1 = require("@mui/icons-material/ExpandMore");
function AccordionComponent() {
    return (React.createElement("div", null,
        React.createElement(Accordion_1["default"], null,
            React.createElement(AccordionSummary_1["default"], { expandIcon: React.createElement(ExpandMore_1["default"], null), "aria-controls": "panel1a-content", id: "panel1a-header" },
                React.createElement(Typography_1["default"], null, "Accordion 1")),
            React.createElement(AccordionDetails_1["default"], null,
                React.createElement(Typography_1["default"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),
        React.createElement(Accordion_1["default"], null,
            React.createElement(AccordionSummary_1["default"], { expandIcon: React.createElement(ExpandMore_1["default"], null), "aria-controls": "panel2a-content", id: "panel2a-header" },
                React.createElement(Typography_1["default"], null, "Accordion 2")),
            React.createElement(AccordionDetails_1["default"], null,
                React.createElement(Typography_1["default"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")))));
}
exports["default"] = AccordionComponent;
